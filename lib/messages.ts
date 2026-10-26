/**
 * Section 7 — Leave a Message. Copy is as supplied; do not reword.
 */
export const MESSAGE_COPY = {
  title: "Leave a Message for the Couple",
  intro:
    "If you are unable to join us in person, we would still love to hear from you. Please leave a warm note or a personal message for us below.",
  cta: "Send Your Blessings",
} as const;

/**
 * Where the button sends guests — a form, if there is one.
 *
 * With none set it opens the guest's own mail app with the subject already
 * written, so the button is never a dead control. Set either of these and it
 * is used instead; a URL wins over an address.
 */
export const MESSAGE_URL: string | null = null;
export const MESSAGE_TO: string | null = null;

/**
 * No form or address has been supplied for this wedding, and a button that
 * opens a blank email goes nowhere — so the section stays off the page until
 * one of the two above is set.
 */
export const SHOW_MESSAGE = Boolean(MESSAGE_URL || MESSAGE_TO);

export const MESSAGE_MAILTO =
  `mailto:${MESSAGE_TO ?? ""}?subject=` +
  encodeURIComponent("A message for Muhammad Athar & Ayesha") +
  "&body=" +
  encodeURIComponent("Your message:\n\n— ");
