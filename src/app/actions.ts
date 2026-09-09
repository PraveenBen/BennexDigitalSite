"use server";

import { MAX_CONTACT_MESSAGE_LENGTH } from "@/lib/constants";
import type { FormActionState } from "@/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email);
}

export async function submitContactForm(
  _previousState: FormActionState,
  formData: FormData,
): Promise<FormActionState> {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const userEmail = String(formData.get("userEmail") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (fullName.length === 0) {
    return { isSuccessful: false, errorMessage: "Enter your name." };
  }

  if (!isValidEmail(userEmail)) {
    return { isSuccessful: false, errorMessage: "Enter a valid email address." };
  }

  if (message.length === 0 || message.length > MAX_CONTACT_MESSAGE_LENGTH) {
    return {
      isSuccessful: false,
      errorMessage: `Message must be between 1 and ${MAX_CONTACT_MESSAGE_LENGTH} characters.`,
    };
  }

  // TODO: connect to the real inbox/CRM destination once it is defined.
  return { isSuccessful: true, errorMessage: null };
}
