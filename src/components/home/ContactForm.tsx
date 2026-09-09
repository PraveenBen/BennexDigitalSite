"use client";

import { useActionState } from "react";

import { submitContactForm } from "@/app/actions";
import { SuccessCheckmark } from "@/components/shared/SuccessCheckmark";
import { MAX_CONTACT_MESSAGE_LENGTH } from "@/lib/constants";
import type { FormActionState } from "@/types";

const INITIAL_FORM_ACTION_STATE: FormActionState = {
  isSuccessful: false,
  errorMessage: null,
};

export function ContactForm() {
  const [formActionState, formAction, isPending] = useActionState(
    submitContactForm,
    INITIAL_FORM_ACTION_STATE,
  );

  if (formActionState.isSuccessful) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-clear-sky/30 bg-white/60 p-10 text-center">
        <SuccessCheckmark />
        <p className="text-lg font-medium text-roasted-earth">
          Message received. We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5 rounded-2xl border border-roasted-earth/10 bg-white/60 p-8">
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
        disabled={isPending}
        className="min-h-11 self-start rounded-full bg-solar-flare px-8 py-2.5 font-medium text-morning-sand transition-colors duration-300 hover:bg-clear-sky disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>

      {formActionState.errorMessage ? (
        <p role="alert" className="text-sm text-solar-flare">
          {formActionState.errorMessage}
        </p>
      ) : null}
    </form>
  );
}
