// ---------------------------------------------------------------------------
// Site content. Edit this file to make the site yours.
// Everything below is placeholder copy — replace it with your real details.
// ---------------------------------------------------------------------------

export const site = {
  // Your name as shown in the nav and hero.
  name: "Mara Vance",
  // Short role / discipline, shown under your name.
  role: "Photographer",
  // Where you're based (optional, shown in the footer).
  location: "Lisbon, Portugal",
  // Contact email — appears in the nav and the contact section.
  // This is the single source of truth for the "email me" links.
  email: "hello@maravance.com",
  // One-line tagline used in the browser tab / social shares.
  tagline: "Quiet, considered photography — portraits, landscapes and the spaces in between.",
};

export const intro = {
  eyebrow: "Photographer & visual storyteller",
  heading: "I make photographs that slow people down.",
  body: [
    "I'm Mara, a photographer working between studio portraiture and landscape. My work leans toward natural light, honest moments, and a sense of calm.",
    "For the past eight years I've photographed people, places, and the small details that hold a memory together — for families, brands, and editorial clients.",
  ],
  disciplines: [
    "Portrait & editorial",
    "Landscape & travel",
    "Documentary",
    "Fine-art prints",
  ],
};

export const work = {
  eyebrow: "Selected work",
  heading: "A selection from recent years",
  // Each entry maps to a placeholder image. Replace `src` with your own photo
  // (see REPLACEMENTS.md). `span` controls how tall the tile is in the grid.
  items: [
    { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80", title: "Still water", meta: "Landscape · Norway", span: "tall" },
    { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=80", title: "Quiet portrait", meta: "Portrait · Studio", span: "short" },
    { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80", title: "First light", meta: "Landscape · Highlands", span: "short" },
    { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80", title: "In between", meta: "Portrait · Editorial", span: "tall" },
    { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80", title: "Fog study", meta: "Landscape · Forest", span: "short" },
    { src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=80", title: "Falling water", meta: "Landscape · Iceland", span: "short" },
    { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80", title: "Through trees", meta: "Landscape · Autumn", span: "tall" },
    { src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1000&q=80", title: "Golden hour", meta: "Landscape · Hills", span: "short" },
    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80", title: "Looking back", meta: "Portrait · Street", span: "short" },
  ],
};

export const pricing = {
  eyebrow: "Working together",
  heading: "Pricing",
  note: "Every project is a little different. The ranges below are a starting point — tell me what you have in mind and I'll send a tailored quote.",
  tiers: [
    {
      name: "Portrait session",
      price: "from €290",
      description: "A relaxed session at your home, my studio, or on location.",
      features: [
        "1–2 hour session",
        "Online gallery of edited images",
        "10 retouched digital files",
        "Print release",
      ],
      featured: false,
    },
    {
      name: "Editorial & brand",
      price: "from €1,200",
      description: "Half or full day coverage for brands, products, and stories.",
      features: [
        "Half or full day on site",
        "Pre-shoot planning call",
        "Full edited delivery",
        "Usage licence ( negotiable )",
      ],
      featured: true,
    },
    {
      name: "Fine-art prints",
      price: "from €180",
      description: "Archival prints from the landscape series, made to order.",
      features: [
        "Hahnemühle cotton rag",
        "Sizes A4–A1",
        "Signed & numbered",
        "Worldwide shipping",
      ],
      featured: false,
    },
  ],
};

export const contact = {
  eyebrow: "Get in touch",
  heading: "Let's make something together.",
  body: "The fastest way to reach me is email — I reply to every message within a couple of days. Tell me a little about your project, where you are, and when you'd like to shoot.",
};
