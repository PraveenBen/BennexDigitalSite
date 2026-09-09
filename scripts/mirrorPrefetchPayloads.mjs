/**
 * Workaround for a Next.js 16 static-export mismatch: the exporter writes App Router prefetch
 * payloads into nested directories (e.g. `work/__next.work/__PAGE__.txt`) while the client
 * router requests them as flat, dot-joined filenames (`work/__next.work.__PAGE__.txt`).
 * Without this, every <Link> prefetch 404s and navigation falls back to a full page load.
 *
 * This only ADDS copies under the requested names; nothing is moved or deleted. Delete this
 * script (and its postbuild hook) once the exporter and router agree on one layout.
 */
import { cp, readdir, stat } from "node:fs/promises";
import path from "node:path";

const OUTPUT_DIRECTORY = path.resolve("out");

async function collectFilePaths(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const filePaths = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      filePaths.push(...(await collectFilePaths(entryPath)));
    } else {
      filePaths.push(entryPath);
    }
  }

  return filePaths;
}

async function mirrorPrefetchPayloads() {
  const filePaths = await collectFilePaths(OUTPUT_DIRECTORY);
  let mirroredCount = 0;

  for (const filePath of filePaths) {
    const relativePath = path.relative(OUTPUT_DIRECTORY, filePath).split(path.sep);
    const prefetchSegmentIndex = relativePath.findIndex((segment) =>
      segment.startsWith("__next."),
    );

    // Only payloads nested *below* a `__next.*` directory need a flat alias.
    if (prefetchSegmentIndex === -1 || prefetchSegmentIndex === relativePath.length - 1) {
      continue;
    }

    const routeSegments = relativePath.slice(0, prefetchSegmentIndex);
    const flattenedName = relativePath.slice(prefetchSegmentIndex).join(".");
    const aliasPath = path.join(OUTPUT_DIRECTORY, ...routeSegments, flattenedName);

    const alreadyExists = await stat(aliasPath).then(
      () => true,
      () => false,
    );
    if (alreadyExists) continue;

    await cp(filePath, aliasPath);
    mirroredCount += 1;
  }

  console.log(`Mirrored ${mirroredCount} prefetch payload(s) to flat filenames.`);
}

await mirrorPrefetchPayloads();
