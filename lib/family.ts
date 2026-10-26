/**
 * Section 2 — Meet Our Groom & Bride. Copy is as supplied; do not reword.
 *
 * Portraits: drop the real photographs into /public/assets/images and set
 * `portrait` to their path (e.g. "/assets/images/bride.jpg"). Until then the
 * arch shows a styled placeholder. Portrait-orientation photos crop best.
 */
export type Sibling = { name: string; spouse?: string };

export type Person = {
  role: string;
  name: string;
  /** A qualification after the name, e.g. "C.A" — set smaller than the name. */
  credential?: string;
  relation: string;
  parents: [string, string];
  /**
   * How this person stands to their siblings — "Sister of", "Brother of". It
   * belongs to the person, not the section: the bride and the groom cannot
   * share one word for it.
   */
  siblingsRelation: string;
  /** Shown under the parents, quieter than everything above it. Empty hides the block. */
  siblings: Sibling[];
  portrait: string | null;
};

export const GROOM: Person = {
  role: "The Groom",
  name: "Mohammad Adnan",
  credential: "C.A",
  relation: "Son of",
  parents: ["Hajiyani Shabina", "Haji Asif Abdul Majid Motlani"],
  siblingsRelation: "Brother of",
  siblings: [],
  portrait: null,
};

export const BRIDE: Person = {
  role: "The Bride",
  name: "Ayesha",
  relation: "Daughter of",
  parents: ["Hajiyani Rubina", "Haji Mohammad Aqeel Ghaniwala, Dariyapur"],
  siblingsRelation: "Sister of",
  siblings: [],
  portrait: null,
};

export const SECTION = {
  title: "Meet Our Groom & Bride",
  lede: "Two families, one beautiful beginning.",
  spouseOf: "Spouse of",
} as const;
