/* ============== SKIN SCHOOL PAGE ============== */
const QUIZ_OPTIONS = [
  {
    id: "sensitive",
    label: "Sensitive skin",
    product: "Skin-Forward Foundation in Bisabolol-rich shades",
    headline: "Centella + Bisabolol does the heavy lifting.",
    body: "Skin-Forward Foundation pairs centella asiatica with bisabolol to calm reactive skin while ceramide NP repairs the barrier. Pair with Blur & Balance in Green Flags Only for any visible redness.",
    pills: ["Centella Asiatica", "Bisabolol", "Ceramide NP", "Fragrance-Free"],
  },
  {
    id: "acne",
    label: "Acne-prone",
    product: "Skin-Forward Foundation + Smooth Criminal concealer",
    headline: "Niacinamide 5% wears all day so your skincare doesn't have to.",
    body: "Niacinamide regulates sebum and visibly fades post-acne marks over 8–12 weeks of consistent wear. Every formula is non-comedogenic and rated for closed comedone-prone skin.",
    pills: ["Niacinamide 5%", "Non-Comedogenic", "Zinc PCA", "Salicylic-Compatible"],
  },
  {
    id: "hyperpig",
    label: "Hyperpigmentation",
    product: "Foundation + Peach Please corrector",
    headline: "Layer correction, then coverage, then patience.",
    body: "Start with Peach Please under your standard shade to neutralize warm pigmented zones. Niacinamide 5% in the base helps fade overall pigment with consistent wear — typically 8–12 weeks for visible improvement.",
    pills: ["Niacinamide 5%", "Vit C (SAP)", "Peach Corrector", "SPF Pairing"],
  },
  {
    id: "twotone",
    label: "Two-toned lips",
    product: "Glow & Go in Pillow Talk IYKYK with peptide treatment",
    headline: "Peach undertones + peptides for the lip border.",
    body: "Our gloss base contains palmitoyl tripeptide-1 and tetrapeptide-7 to support collagen and visible lip definition. Warm peach pigments cosmetically even tone across the upper lip border.",
    pills: ["Tripeptides", "Shea Butter", "Peach Pigments", "HA"],
  },
  {
    id: "dry",
    label: "Dry & dehydrated",
    product: "Skin-Forward Foundation + Glow & Go Clear",
    headline: "HA + Ceramide NP keeps wear soft, not crepey.",
    body: "Sodium hyaluronate pulls water to the surface; ceramide NP locks it in. Apply over a damp moisturizer base and finish with Glow & Go in Clear Conscience for low-effort radiance.",
    pills: ["Hyaluronic Acid", "Ceramide NP", "Panthenol B5", "Damp Application"],
  },
];

function SkinSchoolPage({ setPage, cart }) {
  const [quiz, setQuiz] = useState(null);
  useScrollReveal();
  return (
    <main data-screen-label="Skin School">
      {/* HERO */}
      <section className="school-hero">
        <div className="container">
          <div className="eyebrow" data-reveal>Skin School</div>
          <h1 data-reveal style={{ marginTop: 16, '--reveal-delay': '80ms' }}>Skin School.</h1>
          <p data-reveal style={{ '--reveal-delay': '180ms' }}>
            The science behind the shades. Active ingredients, hyperpigmentation
            education, two-toned lip care, and compliant claims — straight from
            our chemist's notebook.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <div className="container">
        <section className="school-intro">
          <div>
            <div className="eyebrow">Lesson 01</div>
            <h2 style={{ marginTop: 16 }}>
              Why skincare in makeup <span className="accent">matters.</span>
            </h2>
          </div>
          <div>
            <p>
              The average wearer keeps foundation on her face for 10–14 hours a day.
              That's 70+ hours per week of direct, sustained contact with the same square
              meter of skin. For most of the modern category, those hours have been
              dead time — surface coverage with no functional benefit and, often, a
              barrier-disrupting drift.
            </p>
            <p>
              Treat those hours as a delivery system instead, and the math changes.
              Niacinamide at 5% wears against post-inflammatory pigment all day. Ceramide
              NP repairs the lipid matrix every time you press the bottle. Centella calms
              what your environment irritates. The makeup itself does part of the routine,
              instead of working against it.
            </p>
            <p>
              That's the entire pitch of Rooh Beauty in one paragraph: don't give up the
              hours. Use them.
            </p>
          </div>
        </section>
      </div>

      {/* INGREDIENT CARDS */}
      <div className="container">
        <div className="school-card-grid">
          <SchoolCard
            tone="rose"
            label="Lesson 02 · Foundation"
            title="Foundation actives"
            rows={[
              {
                name: "Niacinamide 5%",
                body: "Form B3. Visibly fades post-inflammatory pigment, regulates sebum, and improves the appearance of pores at 5% — the percentage with the strongest published evidence for sensitive skin.",
              },
              {
                name: "Centella Asiatica Extract",
                body: "A botanical with madecassoside and asiaticoside that visibly calms reactive skin. Pairs well with retinoid-recovery routines and gives a soft barrier-buffering effect under wear.",
              },
              {
                name: "Ceramide NP",
                body: "The most studied ceramide for barrier repair. Slots into the skin's natural lipid matrix to reduce trans-epidermal water loss and prevent the dry, crepey look long-wear foundations cause.",
              },
              {
                name: "Sodium Hyaluronate",
                body: "Low-molecular-weight HA holds water at the surface and at depth. Keeps the formula flexible on the face and pulls hydration upward through the day.",
              },
              {
                name: "Bisabolol",
                body: "An α-bisabolol distilled from chamomile. Profoundly soothing for reactive skin and an ideal companion to niacinamide on days when the barrier is compromised.",
              },
            ]}
          />
          <SchoolCard
            tone="green"
            label="Lesson 03 · Concealer & Lip"
            title="Concealer & lip actives"
            rows={[
              {
                name: "Sodium Ascorbyl Phosphate",
                body: "A stable, pH-tolerant vitamin C derivative. Brightens and visibly evens tone under the eye and on hyperpigmented zones without the oxidization issues of L-ascorbic acid.",
              },
              {
                name: "Zinc PCA",
                body: "A zinc salt that helps regulate sebum and visibly reduce the appearance of breakouts. Particularly useful under-eye where heavy concealer historically settles into texture.",
              },
              {
                name: "Palmitoyl Tripeptide-1 & Tetrapeptide-7",
                body: "Signaling peptides that support collagen and improve the visible appearance of lip definition. Built into the Glow & Go base for daily peptide delivery to the lip border.",
              },
              {
                name: "Shea Butter",
                body: "Cold-pressed and refined for sensitive skin. Conditions the lip without comedogenic feel and improves the visible cushion of the formula on application.",
              },
              {
                name: "Allantoin",
                body: "A gentle keratolytic that softens flaky lip texture and visibly improves the surface for color application. Especially supportive on a chapped lip border.",
              },
            ]}
          />
          <SchoolCard
            tone="amber"
            label="Lesson 04 · Conditions"
            title="Understanding hyperpigmentation"
            rows={[
              {
                name: "What hyperpigmentation actually is",
                body: "Localized over-production of melanin by melanocytes, usually triggered by inflammation, UV, hormones, or trauma. Most common forms in our community: post-inflammatory hyperpigmentation (PIH) and melasma.",
              },
              {
                name: "How niacinamide helps",
                body: "Niacinamide inhibits the transfer of melanosomes from melanocytes to surrounding keratinocytes. Translation: less pigment reaches the surface, so existing marks fade visibly over time.",
              },
              {
                name: "Cosmetic claims vs drug claims",
                body: "In the US, only OTC drug actives (like hydroquinone) can claim to 'treat' pigmentation. Cosmetics can speak to the visible appearance — fading the look of marks, evening visible tone — and nothing further.",
              },
              {
                name: "Coverage & correction layering",
                body: "Color-correct first, then coverage. Peach for blue-purple shadows, green for redness, lavender for sallowness. Less product, in the right order, beats more product applied uniformly.",
              },
            ]}
          />
          <SchoolCard
            tone="violet"
            label="Lesson 05 · Lip Tone"
            title="Two-toned lips explained"
            rows={[
              {
                name: "What causes lip tone variation",
                body: "Lip border hyperpigmentation is typically genetic, hormonal, or sun-driven, and shows up as a darker ring around lighter inner lip skin. It is common across South Asian, Mediterranean, and East African skin tones — and historically under-served.",
              },
              {
                name: "The color-balancing approach",
                body: "Warm peach and rose-toned pigments worn over the entire lip visually unify the two zones. We tuned the Glow & Go base specifically for this — every shade pulls slightly peach-warm rather than blue.",
              },
              {
                name: "Peptides for lip definition",
                body: "Palmitoyl tripeptide-1 and tetrapeptide-7 support collagen and visible lip border definition over consistent wear. Apply nightly with a thicker layer to maximize peptide contact time.",
              },
              {
                name: "Cosmetic claim framework",
                body: "We can say 'visibly evens lip tone' and 'supports the appearance of lip definition.' We can't say 'lightens' or 'treats.' These distinctions matter, and we hold ourselves to them.",
              },
            ]}
          />
        </div>
      </div>

      {/* CLAIMS BOX */}
      <div className="container" style={{ paddingTop: 80 }}>
        <div className="claims-box">
          <div className="eyebrow">Lesson 06 · Honesty</div>
          <h2 style={{ marginTop: 16 }}>
            What we say. <span className="accent">What we don't.</span>
          </h2>
          <p>
            Cosmetics aren't drugs, and we won't pretend otherwise. Here's how we
            talk about our products — and how we never will.
          </p>
          <div className="claims-grid">
            <div className="claim-col good">
              <h4>What we say</h4>
              <div className="claim-item"><span className="arrow">→</span>Visibly evens skin tone over time.</div>
              <div className="claim-item"><span className="arrow">→</span>Helps reduce the appearance of post-acne marks.</div>
              <div className="claim-item"><span className="arrow">→</span>Supports a healthy-looking skin barrier.</div>
              <div className="claim-item"><span className="arrow">→</span>Visibly improves the appearance of lip definition.</div>
              <div className="claim-item"><span className="arrow">→</span>Hydrates and softens through long wear.</div>
            </div>
            <div className="claim-col bad">
              <h4>What we never say</h4>
              <div className="claim-item"><span className="arrow">→</span>Treats or cures hyperpigmentation.</div>
              <div className="claim-item"><span className="arrow">→</span>Lightens skin tone or bleaches melanin.</div>
              <div className="claim-item"><span className="arrow">→</span>Clears or prevents acne.</div>
              <div className="claim-item"><span className="arrow">→</span>Reverses signs of aging or rebuilds collagen.</div>
              <div className="claim-item"><span className="arrow">→</span>Heals or treats any medical condition.</div>
            </div>
          </div>
        </div>
      </div>

      {/* QUIZ */}
      <div className="container">
        <div className="quiz-section">
          <div className="container">
            <div className="eyebrow">Lesson 07 · Match</div>
            <h2>
              Find your <span className="accent">formula.</span>
            </h2>
            <p>Tell us what your skin is doing this season. We'll match you to actives and shades.</p>
            <div className="quiz-choices">
              {QUIZ_OPTIONS.map((q) => (
                <button
                  key={q.id}
                  className={`quiz-choice ${quiz === q.id ? "active" : ""}`}
                  onClick={() => setQuiz(q.id)}
                >
                  <span className="check">✓</span>{q.label}
                </button>
              ))}
            </div>
            {quiz && (
              <div className="quiz-result" key={quiz}>
                <div className="eyebrow">Your match</div>
                <h3>{QUIZ_OPTIONS.find((q) => q.id === quiz).headline}</h3>
                <p>{QUIZ_OPTIONS.find((q) => q.id === quiz).body}</p>
                <div className="pill-row" style={{ margin: "0 0 28px" }}>
                  {QUIZ_OPTIONS.find((q) => q.id === quiz).pills.map((p, i) => (
                    <span key={i} className="pill">{p}</span>
                  ))}
                </div>
                <button className="btn btn-cream" onClick={() => setPage("shop")}>
                  Shop the recommendation →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function SchoolCard({ tone, label, title, rows }) {
  return (
    <div className={`school-card ${tone}`}>
      <div className="eyebrow">{label}</div>
      <h3>{title}</h3>
      <div>
        {rows.map((r, i) => (
          <div key={i} className="school-row">
            <div className="row-dot"></div>
            <div>
              <h5>{r.name}</h5>
              <p>{r.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

window.SkinSchoolPage = SkinSchoolPage;
