export const site = {
  // Brand
  name: "Chupetitos Stommeln",
  tagline: "Deutsch–spanische Kindertagespflege",
  claim: "Liebevolle Betreuung mit Herz und Freude",

  // Person / role
  person: "Carlos Cortés",
  role: "Kindertagespflegeperson (Tagespapa)",

  // Contact (PHONE ONLY)
  phoneRaw: "015731877629",
  phoneDisplay: "01573 1877629",
  email: "",

  // Address
  address1: "Am Holländer 22",
  address2: "50259 Pulheim (Stommeln)",

  // Hours
  hours: "Montag–Freitag · 07:45–15:45 Uhr",

  // Optional helpers (Kontakt/Datenschutz)
  legal: {
    privacyLastUpdated: "",  // ej: "30.12.2025"
    supervisoryAuthority: "", // si aplica (Jugendamt etc.)
    hostingProvider: "",      // ej: "Cloudflare Pages"
  },
} as const;

export type SiteConfig = typeof site;
