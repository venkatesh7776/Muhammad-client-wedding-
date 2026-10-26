/**
 * Section 6 — the invitation and RSVP. Copy is as supplied; do not reword.
 */
export const RSVP_COPY = {
  title: "RSVP",
  body: ["Please confirm your presence to help us prepare for your arrival."],
  /** Who the invitation is from, set under the request. */
  hostsLabel: "Cordially invited by",
  hosts: "Late Mrs Hajiyani Zainab & Late Mr Haji Abdul Majeed Motlani",
  cta: "Submit RSVP",
} as const;

/**
 * The RSVP form guests are sent to. Paste the Google Form link here; until
 * then the button falls back to the contact section so it never goes nowhere.
 */
export const RSVP_URL: string | null = null;

/** Where the button goes while there is no form — Section 8's heading. */
export const RSVP_FALLBACK = "#assist-title";
