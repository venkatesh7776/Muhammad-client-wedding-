/**
 * Section 8 — If in Need of Assistance.
 *
 * `tel` is what the button dials; leave it null and the number is shown as
 * written but not offered as a link (it cannot be dialled as it stands).
 */
export type Phone = {
  /** As written on the card. */
  display: string;
  /** As dialled — digits and a leading +, nothing else. */
  tel: string | null;
};

export type Contact = {
  name: string;
  /** Small gold label above the name, e.g. "Groom’s Father". Omitted when not given. */
  role?: string;
  /** Address lines, shown under the name when there are any. */
  address?: string[];
  phones: Phone[];
};

export const CONTACTS: Contact[] = [
  {
    name: "Sajid Motlani",
    phones: [{ display: "+91 93727 20961", tel: "+919372720961" }],
  },
  {
    name: "Asif Motlani",
    phones: [{ display: "+91 93727 20962", tel: "+919372720962" }],
  },
];

export const ASSIST_COPY = {
  title: "If in Need of Assistance",
  subtitle:
    "If you have any questions or require assistance, please feel free to reach out to:",
  call: "Call",
  pending: "Number to be added",
} as const;
