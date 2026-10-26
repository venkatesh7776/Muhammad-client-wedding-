import { VENUES } from "./venues";

/**
 * Section 3 — The Wedding Celebrations. Copy is as supplied; do not reword.
 */
export type Celebration = {
  /** Displayed before the title, e.g. "01". */
  index: string;
  title: string;
  date: string;
  time: string;
  /** An extra line above the venue, when there is one. */
  note?: string;
  venue: string;
  /** Which icon heads the card. */
  icon: string;
  /**
   * The illustration's real pixel size. Given to the <img> so the browser can
   * hold its place before it arrives: without it the card grows when the
   * picture lands, and it grows after the rail has already been measured and
   * pinned — which left the last card sitting on top of the closing words.
   */
  iconSize: { width: number; height: number };
};

/** Venue names are kept in one place — Section 4 owns them. */
const venueName = (label: string) =>
  VENUES.find((v) => v.label === label)?.short ?? "Venue to be announced";

export const CELEBRATIONS: Celebration[] = [
  {
    index: "01",
    title: "Nikah Ceremony",
    date: "Friday, 18 December 2026",
    time: "After Namaz Asr",
    venue: venueName("Nikah Venue"),
    icon: "/assets/images/celebration-nikkah.png",
    iconSize: { width: 360, height: 305 },
  },
  {
    index: "02",
    title: "Reception",
    date: "Sunday, 20 December 2026",
    time: "8:00 PM onwards",
    venue: venueName("Walima & Reception Venue"),
    icon: "/assets/images/celebration-reception.png",
    iconSize: { width: 360, height: 318 },
  },
  {
    index: "03",
    title: "Dawat-e-Walima",
    date: "Monday, 21 December 2026",
    time: "8:00 PM onwards",
    venue: venueName("Walima & Reception Venue"),
    icon: "/assets/images/celebration-reception.png",
    iconSize: { width: 360, height: 318 },
  },
];

export const CELEBRATION_COPY = {
  title: "The Wedding Celebrations",
  lede: "Three beautiful moments, one beautiful beginning.",
  closingTitle: "Three celebrations, one beautiful beginning.",
  closingLine: "We look forward to celebrating these precious moments with you.",
} as const;
