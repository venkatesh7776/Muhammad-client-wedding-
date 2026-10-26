/**
 * Section 4 — Venues & Directions.
 *
 * Everything a guest needs to find the day. Edit the venues here and nowhere
 * else: the section renders whatever this file says, including the "to be
 * announced" state.
 */
export type Venue = {
  /** Small gold label above the name, e.g. "Nikah Venue". */
  label: string;
  /**
   * The card artwork: frame, illustration and a blank panel across the lower
   * half, where the text is laid out. 1644x1812.
   */
  art: string;
  /** The venue's name, or null while it is still to be confirmed. */
  name: string | null;
  /** How the celebration cards refer to it — name and town. */
  short?: string;
  /** Address lines, or an empty array while unknown. */
  address: string[];
  /** Google Maps link. Null disables the button and shows the pending state. */
  mapUrl: string | null;
  /** Date and time of the occasion, shown under the venue name. */
  when: string | null;
  /** The main ceremony is given more visual weight. */
  primary?: boolean;
};

export const VENUES: Venue[] = [
  {
    label: "Nikah Venue",
    art: "/assets/images/1Nikkah.png",
    name: "The Grand Jalsa",
    short: "The Grand Jalsa, Akola",
    address: ["Akola"],
    mapUrl: "https://maps.app.goo.gl/R8gG2oNuGvpHUfqV6?g_st=iw",
    when: "Friday, 18 December 2026 · After Namaz Asar",
    primary: true,
  },
  {
    label: "Walima & Reception Venue",
    art: "/assets/images/2reception.png",
    name: "Motlani Compound",
    short: "Motlani Compound, Malegaon",
    address: ["Near RR Box Cricket,", "Old Agra Road, Malegaon"],
    mapUrl: "https://maps.app.goo.gl/ycqCK85KZQ9r8iBK8?g_st=iw",
    when: "Sunday, 20 & Monday, 21 December 2026 · 8:00 PM Onwards",
  },
];

/* The Nikah's date and the countdown copy now live in `lib/countdown.ts`,
   with the section that shows them. */

export const VENUE_COPY = {
  title: "Venues & Directions",
  lede: "Find Your Way to Us",
  addressLabel: "Address",
  cta: "Get Directions",
  pendingName: "To be announced",
  pendingAddress: "The venue will be shared here soon",
  pendingCta: "Location coming soon",
} as const;
