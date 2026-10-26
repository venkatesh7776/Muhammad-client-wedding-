/**
 * Section 5 — Counting Down to the Sacred Union. Copy is as supplied; do not
 * reword.
 */

/**
 * The day of the Nikah — Friday, 18 December 2026, in Akola.
 *
 * The invitation gives the time only as "after Namaz Asr", so the clock counts
 * to the start of that day rather than to a guessed hour. Once the family
 * confirms a time, set it here (e.g. "2026-12-18T16:30:00+05:30"). The offset
 * is India Standard Time, so the countdown is right for a guest anywhere.
 */
export const NIKKAH_AT = "2026-12-18T00:00:00+05:30";

export const COUNTDOWN_COPY = {
  title: "Counting Down to the Sacred Union",
  lede:
    "Every tick of the clock brings us closer to a lifetime of love, laughter, " +
    "and endless blessings, in sha Allah.",
  units: ["Days", "Hours", "Minutes", "Seconds"] as const,
  passed: "The day of the Nikah has arrived",
} as const;
