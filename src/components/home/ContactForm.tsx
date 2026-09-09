"use client";

import { useState, type FormEvent } from "react";

import { SuccessCheckmark } from "@/components/shared/SuccessCheckmark";
import { BUSINESS_CONTACT_EMAIL, MAX_CONTACT_MESSAGE_LENGTH } from "@/lib/constants";
import { isValidEmail } from "@/lib/validation";

export function ContactForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccessful, setIsSuccessful] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("fullName") ?? "").trim();
    const userEmail = String(formData.get("userEmail") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (fullName.length === 0) {
      setErrorMessage("Enter your name.");
      return;
    }

    if (!isValidEmail(userEmail)) {
      setErrorMessage("Enter a valid email address.");
      return;
    }

    if (message.length === 0 || message.length > MAX_CONTACT_MESSAGE_LENGTH) {
      setErrorMessage(`Message must be between 1 and ${MAX_CONTACT_MESSAGE_LENGTH} characters.`);
      return;
    }

    setErrorMessage(null);

    // This site is a static export with no backend, so submitting opens the visitor's own
    // email client with the message pre-filled rather than transmitting it directly.
    const mailtoSubject = encodeURIComponent(`New project inquiry from ${fullName}`);
    const mailtoBody = encodeURIComponent(`${message}\n\nReply to: ${userEmail}`);
    window.location.href = `mailto:${BUSINESS_CONTACT_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setIsSuccessful(true);
  }

  if (isSuccessful) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-clear-sky/30 bg-white/60 p-10 text-center">
        <SuccessCheckmark />
        <p className="text-lg font-medium text-roasted-earth">
          Your email app should now be open with your message ready to send.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-roasted-earth/10 bg-white/60 p-8"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-full-name" className="font-medium text-roasted-earth">
          Name
        </label>
        <input
          id="contact-full-name"
          name="fullName"
          type="text"
          required
          autoComplete="name"
          className="min-h-11 rounded-xl border border-roasted-earth/20 bg-morning-sand px-4 py-2.5 text-roasted-earth outline-none placeholder:text-roasted-earth/40"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="font-medium text-roasted-earth">
          Email
        </label>
        <input
          id="contact-email"
          name="userEmail"
          type="email"
          required
          autoComplete="email"
          className="min-h-11 rounded-xl border border-roasted-earth/20 bg-morning-sand px-4 py-2.5 text-roasted-earth outline-none placeholder:text-roasted-earth/40"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="font-medium text-roasted-earth">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          maxLength={MAX_CONTACT_MESSAGE_LENGTH}
          className="rounded-xl border border-roasted-earth/20 bg-morning-sand px-4 py-2.5 text-roasted-earth outline-none placeholder:text-roasted-earth/40"
        />
      </div>

      <button
        type="submit"
        className="min-h-11 self-start rounded-full bg-solar-flare px-8 py-2.5 font-medium text-morning-sand transition-colors duration-300 hover:bg-clear-sky"
      >
        Send Message
      </button>

      {errorMessage ? (
        <p role="alert" className="text-sm text-solar-flare">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
