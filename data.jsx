/* ============================================================
   ROOH BEAUTY — FULL PRODUCT CATALOG
   Foundation: 32 shades · 4 undertone families
   Concealer:  18 shades (cover / hi-lite / contour) + 4 correctors
   Lip:        24 shades · 4 colour families
   ============================================================ */

/* -------------------- FOUNDATION -------------------- */
const FOUNDATION_GROUPS = [
  {
    label: "Cool undertones",
    code: "C",
    note: "Pink / blue-leaning",
    shades: [
      { name: "Iced Oat Milk", code: "C-01", depth: "fair", color: "#C08E81" },
      { name: "Frozen Latte", code: "C-02", depth: "light", color: "#A57A6E" },
      { name: "Cold Brew Swirl", code: "C-03", depth: "light-med", color: "#906A60" },
      { name: "Chilly Caramel", code: "C-04", depth: "medium", color: "#7D5D54" },
      { name: "Arctic Truffle", code: "C-05", depth: "med-deep", color: "#6B4F48" },
      { name: "Frosted Mahogany", code: "C-06", depth: "deep", color: "#59423B" },
      { name: "Midnight Espresso", code: "C-07", depth: "rich", color: "#46342F" },
      { name: "Unbothered & Dark", code: "C-08", depth: "ultra deep", color: "#342623" },
    ],
  },
  {
    label: "Warm undertones",
    code: "W",
    note: "Golden / yellow-leaning",
    shades: [
      { name: "Oat Latte Rush", code: "W-01", depth: "fair", color: "#D6A36B" },
      { name: "Golden Hour Glow", code: "W-02", depth: "light", color: "#B88C5C" },
      { name: "Brunch Drip", code: "W-03", depth: "light-med", color: "#A07950" },
      { name: "Main Character Bronze", code: "W-04", depth: "medium", color: "#8B6A46" },
      { name: "Netflix & Glow", code: "W-05", depth: "med-deep", color: "#775A3C" },
      { name: "Espresso Slay", code: "W-06", depth: "deep", color: "#634B31" },
      { name: "Rich & Petty", code: "W-07", depth: "rich", color: "#4E3B27" },
      { name: "Warm Chaos Energy", code: "W-08", depth: "ultra deep", color: "#3A2C1D" },
    ],
  },
  {
    label: "Neutral undertones",
    code: "N",
    note: "Balanced",
    shades: [
      { name: "Monday, Ugh", code: "N-01", depth: "fair", color: "#CB9976" },
      { name: "Soft Launch Skin", code: "N-02", depth: "light", color: "#AE8365" },
      { name: "Situationship Beige", code: "N-03", depth: "light-med", color: "#987258" },
      { name: "Hired (Finally)", code: "N-04", depth: "medium", color: "#84644D" },
      { name: "Plot Twist Tan", code: "N-05", depth: "med-deep", color: "#715542" },
      { name: "No Filter Needed", code: "N-06", depth: "deep", color: "#5E4636" },
      { name: "Literally Flawless", code: "N-07", depth: "rich", color: "#4A382B" },
      { name: "Chronically Radiant", code: "N-08", depth: "ultra deep", color: "#372920" },
    ],
  },
  {
    label: "Olive undertones",
    code: "O",
    note: "Green / neutral-leaning",
    shades: [
      { name: "Matcha Soft Hour", code: "O-01", depth: "fair", color: "#D3A76E" },
      { name: "Green Flag Glow", code: "O-02", depth: "light", color: "#B58F5E" },
      { name: "Guac Is Extra", code: "O-03", depth: "light-med", color: "#9E7D52" },
      { name: "Olive You So Much", code: "O-04", depth: "medium", color: "#8A6D48" },
      { name: "Plot Armor Bronze", code: "O-05", depth: "med-deep", color: "#755D3D" },
      { name: "Earthy & That Girl", code: "O-06", depth: "deep", color: "#614D33" },
      { name: "Rooted & Radiant", code: "O-07", depth: "rich", color: "#4D3D28" },
      { name: "Deep Olive Energy", code: "O-08", depth: "ultra deep", color: "#392D1E" },
    ],
  },
];

/* -------------------- CONCEALER -------------------- */
const CONCEALER_GROUPS = [
  {
    label: "Cover shades",
    code: "CC",
    note: "Brightening · medium-full",
    shades: [
      { name: "None of Your Business", code: "CC-01", color: "#F3DDC2" },
      { name: "Unbothered in Ivory", code: "CC-02", color: "#ECD2B4" },
      { name: "Erase That Energy", code: "CC-03", color: "#DCBD96" },
      { name: "Delete the Evidence", code: "CC-04", color: "#C9A578" },
      { name: "Not Today Acne", code: "CC-05", color: "#A87A48" },
      { name: "Blur It Out Babe", code: "CC-06", color: "#7E4F2C" },
      { name: "Smooth Criminal", code: "CC-07", color: "#502F19" },
      { name: "Witness Protection", code: "CC-08", color: "#3A2412" },
      { name: "Alibi in a Tube", code: "CC-09", color: "#2C1B0E" },
      { name: "Dark & Uncatchable", code: "CC-10", color: "#1E120A" },
    ],
  },
  {
    label: "Highlight",
    code: "CC-H",
    note: "Under-eye brightening",
    shades: [
      { name: "Highlight Era Begins", code: "CC-H1", depth: "hi-lite", color: "#F0DCC0" },
      { name: "Lit From Within", code: "CC-H2", depth: "hi-lite", color: "#F6E7CF" },
    ],
  },
  {
    label: "Contour",
    code: "CC-C",
    note: "Cool-toned sculpting",
    shades: [
      { name: "Contour Behavior", code: "CC-C1", depth: "contour", color: "#3E2A18" },
      { name: "Sculpted & Petty", code: "CC-C2", depth: "contour", color: "#2C1D10" },
      { name: "Snatched Honestly", code: "CC-C3", depth: "contour", color: "#2A1C0E" },
      { name: "Done Without Trying", code: "CC-C4", depth: "contour", color: "#241809" },
      { name: "Professional Slay", code: "CC-C5", depth: "contour", color: "#1A1008" },
      { name: "Bottomless Contour", code: "CC-C6", depth: "contour", color: "#140C05" },
    ],
  },
];

const COLOR_CORRECTORS = [
  { name: "Peach, Please", tone: "Peach", fixes: "for dark circles", code: "CR-01", color: "#EBB4A0" },
  { name: "Green Flags Only", tone: "Green", fixes: "for redness", code: "CR-02", color: "#A0D9BC" },
  { name: "Purple Reign", tone: "Lavender", fixes: "for sallowness", code: "CR-03", color: "#C9BEE8" },
  { name: "Orange Theory", tone: "Orange", fixes: "for deep circles", code: "CR-04", color: "#F4C173" },
];

/* -------------------- LIP -------------------- */
const LIP_GROUPS = [
  {
    label: "Nudes & neutrals",
    code: "L",
    note: "Your-lips-but-better",
    shades: [
      { name: "Pillow Talk IYKYK", code: "L-01", color: "#E9C2AA" },
      { name: "Soft Launch Nude", code: "L-02", color: "#D7A78A" },
      { name: "Chronically Beige", code: "L-03", color: "#C68F73" },
      { name: "My Actual Lip Color", code: "L-04", color: "#B4795A" },
      { name: "Terracotta Timeout", code: "L-05", color: "#A85B3D" },
      { name: "Feral Girl Fall", code: "L-06", color: "#7C3A1F" },
    ],
  },
  {
    label: "Pinks & roses",
    code: "L",
    note: "Flushed & flirty",
    shades: [
      { name: "That Girl Energy", code: "L-07", color: "#EEB3C7" },
      { name: "Swipe Right Pink", code: "L-08", color: "#E689AB" },
      { name: "Hot Girl Rosé", code: "L-09", color: "#D85786" },
      { name: "Chaotic Good Coral", code: "L-10", color: "#C03A6D" },
      { name: "Main Character Rose", code: "L-11", color: "#9C3055" },
      { name: "Honestly Obsessed", code: "L-12", color: "#6E1F3C" },
    ],
  },
  {
    label: "Reds & berries",
    code: "L",
    note: "Statement makers",
    shades: [
      { name: "Running Late Red", code: "L-13", color: "#E63E48" },
      { name: "Deadline Energy", code: "L-14", color: "#C81F30" },
      { name: "In My Feelings", code: "L-15", color: "#8E0E1E" },
      { name: "Do Not Disturb", code: "L-16", color: "#4A1438" },
      { name: "Plot Twist Plum", code: "L-17", color: "#3A0E2A" },
      { name: "Group Chat Chaos", code: "L-18", color: "#2A0820" },
    ],
  },
  {
    label: "Browns & mauves",
    code: "L",
    note: "90s revival",
    shades: [
      { name: "Brunch Before Plans", code: "L-19", color: "#B07858" },
      { name: "Situationship Mauve", code: "L-20", color: "#9C6850" },
      { name: "Earthy Era Activated", code: "L-21", color: "#6E4028" },
      { name: "Cocoa & Unbothered", code: "L-22", color: "#3E2415" },
      { name: "Glazed & Confused", code: "L-23", depth: "gloss", color: "#E3C49B" },
      { name: "Clear Conscience", code: "L-24", depth: "clear gloss", color: "#F5E6DC" },
    ],
  },
];

/* helper — flatten groups into one array */
function flatten(groups) {
  return groups.reduce((all, g) => all.concat(g.shades), []);
}

/* curated hero rows for the Shop card dots (one per family-ish) */
const FOUNDATION_HERO = [
  FOUNDATION_GROUPS[1].shades[0], // Oat Latte Rush
  FOUNDATION_GROUPS[2].shades[0], // Monday Ugh
  FOUNDATION_GROUPS[1].shades[2], // Brunch Drip
  FOUNDATION_GROUPS[2].shades[3], // Hired
  FOUNDATION_GROUPS[1].shades[5], // Espresso Slay
  FOUNDATION_GROUPS[0].shades[7], // Unbothered & Dark
];
const CONCEALER_HERO = [
  CONCEALER_GROUPS[0].shades[0],
  CONCEALER_GROUPS[0].shades[3],
  CONCEALER_GROUPS[0].shades[6],
  COLOR_CORRECTORS[0],
  COLOR_CORRECTORS[1],
  COLOR_CORRECTORS[2],
];
const LIP_HERO = [
  LIP_GROUPS[0].shades[0],
  LIP_GROUPS[1].shades[1],
  LIP_GROUPS[2].shades[0],
  LIP_GROUPS[2].shades[3],
  LIP_GROUPS[0].shades[5],
  LIP_GROUPS[3].shades[5],
];

/* back-compat aliases used by home teasers */
const FOUNDATION_SHADES = FOUNDATION_HERO;
const CONCEALER_SHADES = CONCEALER_HERO;
const LIP_SHADES = LIP_HERO;

/* -------------------- PRODUCTS -------------------- */
const PRODUCTS = [
  {
    id: "foundation",
    category: "Foundation",
    name: "Skin-Forward Foundation",
    tagline: "Skincare you wear as coverage",
    desc: "Buildable 24-hour wear infused with niacinamide 5% & ceramide NP.",
    longDesc:
      "A weightless serum-foundation that behaves like the second half of your skincare routine. Medium, buildable coverage that never cakes, never oxidizes, and wears for a true 24 hours — while niacinamide 5% works against post-acne marks and ceramide NP keeps your barrier happy under it all.",
    price: 26,
    finish: "Natural-radiant",
    coverage: "Medium · buildable",
    size: "30 ml / 1.0 fl oz",
    actives: ["Niacinamide 5%", "Ceramide NP", "Centella"],
    shadeCount: "32 shades · 4 undertones",
    shadeNoun: "shade",
    shadeGroups: FOUNDATION_GROUPS,
    shades: FOUNDATION_HERO,
    mock: "foundation",
    accent: "rose",
    benefits: [
      { title: "Fades post-acne marks", body: "Niacinamide 5% visibly evens tone and fades dark marks over 8–12 weeks of wear." },
      { title: "True 24-hour wear", body: "Transfer-resistant and humidity-proof — tested through long shifts, workouts, and ugly-crying." },
      { title: "Barrier-first formula", body: "Ceramide NP + centella keep skin calm and hydrated instead of stripped and tight." },
      { title: "32 honest shades", body: "Cool, warm, neutral, and olive undertones from fair to ultra-rich — matched on real skin." },
    ],
    actives_detail: [
      { name: "Niacinamide", pct: "5%", body: "Visibly fades hyperpigmentation, regulates oil, refines pores." },
      { name: "Ceramide NP", pct: "—", body: "Reinforces the moisture barrier so coverage never feels drying." },
      { name: "Centella Asiatica", pct: "2%", body: "Calms reactive, redness-prone skin through the wear." },
      { name: "Sodium Hyaluronate", pct: "1%", body: "Holds water at the surface for plump, hydrated finish." },
    ],
    inci: "Aqua, Cyclopentasiloxane, Niacinamide, Glycerin, Dimethicone, PEG-10 Dimethicone, Cetyl PEG/PPG-10/1 Dimethicone, Ceramide NP, Centella Asiatica Extract, Sodium Hyaluronate, Bisabolol, Tocopherol, Iron Oxides (CI 77491, 77492, 77499), Titanium Dioxide (CI 77891), Phenoxyethanol, Ethylhexylglycerin.",
    howTo: "Shake well. Dot 2–3 drops across the face and press in with damp sponge or brush. Build where you want more. Set with Blur & Balance under the eyes.",
  },
  {
    id: "concealer",
    category: "Concealer",
    name: "Blur & Balance Concealer",
    tagline: "Correct, cover, and treat in one",
    desc: "Crease-proof coverage with stable vitamin C, zinc PCA & peptides.",
    longDesc:
      "A full-coverage concealer that doubles as a brightening treatment. Lays down opaque, crease-proof color over dark circles, blemishes, and post-acne marks — then keeps working with stable vitamin C and zinc PCA. Pair the 18 cover shades with 4 colour correctors to neutralize anything skin throws at you.",
    price: 20,
    finish: "Soft-matte",
    coverage: "Full · crease-proof",
    size: "8 ml / 0.27 fl oz",
    actives: ["Vit C (SAP)", "Zinc PCA", "Peptides"],
    shadeCount: "18 shades + 4 correctors",
    shadeNoun: "shade",
    shadeGroups: CONCEALER_GROUPS,
    correctors: COLOR_CORRECTORS,
    shades: CONCEALER_HERO,
    mock: "concealer",
    accent: "green",
    benefits: [
      { title: "Crease-proof coverage", body: "Stays put on under-eyes and blemishes through a full day — no settling into fine lines." },
      { title: "Treats while it covers", body: "Stable vitamin C brightens and zinc PCA calms breakouts under the color." },
      { title: "Correct anything", body: "Peach, green, lavender, and orange correctors neutralize circles, redness, and sallowness." },
      { title: "Sculpt + highlight", body: "Hi-lite and cool-toned contour shades to brighten and carve in one tube." },
    ],
    actives_detail: [
      { name: "Sodium Ascorbyl Phosphate", pct: "3%", body: "A stable vitamin C that brightens and evens without irritation." },
      { name: "Zinc PCA", pct: "1%", body: "Regulates sebum and visibly calms breakout-prone areas." },
      { name: "Palmitoyl Tripeptide-1", pct: "—", body: "Supports collagen and the look of firmness under the eye." },
      { name: "Allantoin", pct: "0.5%", body: "Soothes and softens texture for a smooth lay-down." },
    ],
    inci: "Aqua, Isododecane, Titanium Dioxide (CI 77891), Glycerin, Sodium Ascorbyl Phosphate, Zinc PCA, Palmitoyl Tripeptide-1, Allantoin, Synthetic Fluorphlogopite, Silica, Tocopherol, Iron Oxides (CI 77491, 77492, 77499), Phenoxyethanol, Ethylhexylglycerin.",
    howTo: "For correctors, apply a thin layer to the concern first. Follow with your cover shade tapped on with fingertip or sponge. Set lightly.",
  },
  {
    id: "lip",
    category: "Lip",
    name: "Glow & Go Lip Treatment Gloss",
    tagline: "A peptide lip treatment that happens to be gorgeous",
    desc: "High-shine balm-gloss with tripeptides, shea butter & hyaluronic acid.",
    longDesc:
      "Non-sticky, mirror-shine gloss that treats your lips while it colors them. Tripeptides support the lip border (great for two-toned lips), shea and hyaluronic acid cushion and hydrate, and 24 buildable shades go from your-lips-but-better to full statement red. The peach-warm base quietly evens lip tone as you wear it.",
    price: 18,
    finish: "High-shine · non-sticky",
    coverage: "Sheer to medium · buildable",
    size: "6 ml / 0.20 fl oz",
    actives: ["Tripeptides", "Shea Butter", "Hyaluronic Acid"],
    shadeCount: "24 shades · 4 families",
    shadeNoun: "shade",
    shadeGroups: LIP_GROUPS,
    shades: LIP_HERO,
    mock: "lip",
    accent: "rose",
    benefits: [
      { title: "Treats two-toned lips", body: "Warm peach-based pigments visually even the lip border while peptides support definition." },
      { title: "Mirror shine, zero stick", body: "A cushioned gloss that feels like balm and shines like glass — no tacky pull." },
      { title: "All-day hydration", body: "Shea butter and hyaluronic acid keep lips soft and plump for hours." },
      { title: "24 buildable shades", body: "From sheer nudes to opaque reds, plus clear and glazed toppers." },
    ],
    actives_detail: [
      { name: "Palmitoyl Tripeptide-1", pct: "—", body: "Supports collagen and the appearance of lip definition." },
      { name: "Tetrapeptide-7", pct: "—", body: "Works with tripeptide-1 to even and define the lip border." },
      { name: "Shea Butter", pct: "4%", body: "Conditions and cushions without a comedogenic feel." },
      { name: "Sodium Hyaluronate", pct: "1%", body: "Pulls water to the lip for plump, hydrated wear." },
    ],
    inci: "Polybutene, Hydrogenated Polyisobutene, Butyrospermum Parkii (Shea) Butter, Polyglyceryl-2 Triisostearate, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Sodium Hyaluronate, Tocopherol, Silica, Mica, Iron Oxides (CI 77491, 77492), Red 7 Lake (CI 15850), Phenoxyethanol.",
    howTo: "Swipe across bare or lined lips. Layer for more depth, or top your favorite lipstick for shine. Reapply whenever — it's good for them.",
  },
];

/* shared certifications */
const CERTIFICATIONS = [
  { label: "Vegan", note: "No animal-derived ingredients" },
  { label: "Cruelty-Free", note: "Leaping Bunny pending" },
  { label: "Fragrance-Free", note: "No added fragrance or essential oils" },
  { label: "Non-Comedogenic", note: "Won't clog pores" },
  { label: "Dermatologist Tested", note: "On sensitive skin panels" },
  { label: "Clean at Sephora*", note: "*Standard, submission pending" },
  { label: "FDA Compliant", note: "US cosmetic regulations" },
  { label: "Made in USA", note: "Jersey City, NJ" },
];

Object.assign(window, {
  FOUNDATION_GROUPS, CONCEALER_GROUPS, LIP_GROUPS, COLOR_CORRECTORS,
  FOUNDATION_SHADES, CONCEALER_SHADES, LIP_SHADES,
  FOUNDATION_HERO, CONCEALER_HERO, LIP_HERO,
  PRODUCTS, CERTIFICATIONS, flatten,
});
