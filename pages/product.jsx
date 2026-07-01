/* ============================================================
   PRODUCT DETAIL PAGE (PDP)
   ============================================================ */
function ProductPage({ productId, cart, setPage }) {
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const allShades = flatten(product.shadeGroups);
  const correctors = product.correctors || [];
  const everyShade = allShades.concat(correctors);

  const [sel, setSel] = useState(everyShade[0]);
  const [added, setAdded] = useState(false);
  const [tab, setTab] = useState("benefits");
  const mockRef = useRef(null);

  const accentVar = product.accent === "green" ? "var(--green)" : "var(--rose)";

  const handleAdd = () => {
    cart.add(product, sel);
    if (mockRef.current) flyToCart(mockRef.current, sel.color);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <main data-screen-label={`PDP · ${product.name}`} className="pdp">
      {/* breadcrumb */}
      <div className="pdp-crumbs container-wide">
        <button onClick={() => setPage("shop")}>Shop</button>
        <span>/</span>
        <button onClick={() => setPage("shop")}>{product.category}</button>
        <span>/</span>
        <span className="cur">{product.name}</span>
      </div>

      {/* HERO */}
      <section className="pdp-hero container-wide">
        <div className={`pdp-visual accent-${product.accent}`} data-reveal>
          <div className="pdp-visual-glow"></div>
          <div ref={mockRef} className="pdp-mock">
            <ProductMock which={product.mock} color={sel.color} shadeCode={sel.code} size={1.05} />
          </div>
          <div className="pdp-visual-foot">
            <span className="mono">{product.size}</span>
            <span className="mono">{sel.code} · {sel.name}</span>
          </div>
        </div>

        <div className="pdp-info" data-reveal style={{ "--reveal-delay": "120ms" }}>
          <div className="pdp-eyebrow">{product.category} · {product.shadeCount}</div>
          <h1 className="pdp-title">{product.name}</h1>
          <p className="pdp-tagline">{product.tagline}</p>
          <p className="pdp-desc">{product.longDesc}</p>

          <div className="pdp-specs">
            <div><span className="k">Finish</span><span className="v">{product.finish}</span></div>
            <div><span className="k">Coverage</span><span className="v">{product.coverage}</span></div>
            <div><span className="k">Size</span><span className="v">{product.size}</span></div>
          </div>

          {/* selected shade readout */}
          <div className="pdp-selected">
            <span className="pdp-selected-sw" style={{ background: sel.color }}></span>
            <div>
              <div className="pdp-selected-label">Selected shade</div>
              <div className="pdp-selected-name">{sel.name} <em>· {sel.code}</em></div>
            </div>
          </div>

          {/* shade ranges */}
          <ShadeRanges
            groups={product.shadeGroups}
            correctors={correctors}
            sel={sel}
            onSelect={setSel}
            noun={product.shadeNoun}
          />

          <div className="pdp-buy">
            <span className="pdp-price">${product.price}</span>
            <button className={`btn btn-primary pdp-add ${added ? "added" : ""}`} onClick={handleAdd}>
              {added ? "Added to bag ✓" : `Add to bag — ${sel.name}`}
            </button>
          </div>
          <div className="pdp-ship">Free shipping over $50 · Fragrance-free · Vegan</div>
        </div>
      </section>

      {/* INFO TABS */}
      <section className="pdp-tabs-wrap">
        <div className="container-wide">
          <div className="pdp-tabs">
            {[
              ["benefits",  "Benefits"],
              ["actives",   "Key actives"],
              ["how",       "How to use"],
              ["inci",      "Full ingredients"],
              ["match",     "Find my shade"],
            ].map(([id, label]) => (
              <button key={id} className={`pdp-tab ${tab === id ? "on" : ""}`} onClick={() => setTab(id)}>
                {label}
              </button>
            ))}
          </div>

          <div className="pdp-tab-body">
            {tab === "benefits" && (
              <div className="pdp-benefits" key="b">
                {product.benefits.map((b, i) => (
                  <div key={i} className="pdp-benefit" data-reveal style={{ "--reveal-delay": `${i * 70}ms` }}>
                    <span className="pdp-benefit-no" style={{ color: accentVar }}>0{i + 1}</span>
                    <h4>{b.title}</h4>
                    <p>{b.body}</p>
                  </div>
                ))}
              </div>
            )}

            {tab === "actives" && (
              <div className="pdp-actives" key="a">
                {product.actives_detail.map((a, i) => (
                  <div key={i} className="pdp-active-row" data-reveal style={{ "--reveal-delay": `${i * 60}ms` }}>
                    <div className="pdp-active-name">
                      <h4>{a.name}</h4>
                      {a.pct !== "—" && <span className="pdp-active-pct" style={{ background: accentVar }}>{a.pct}</span>}
                    </div>
                    <p>{a.body}</p>
                  </div>
                ))}
              </div>
            )}

            {tab === "how" && (
              <div className="pdp-how" key="h" data-reveal>
                <p className="pdp-how-text">{product.howTo}</p>
                <div className="pdp-how-note mono">Patch test if your skin is being weird this month. Fragrance-free + non-comedogenic, but we always say it.</div>
              </div>
            )}

            {tab === "inci" && (
              <div className="pdp-inci" key="i" data-reveal>
                <div className="pdp-inci-label mono">Full ingredient list (INCI)</div>
                <p className="pdp-inci-text">{product.inci}</p>
                <div className="pdp-inci-clean">
                  <span className="clean-mark">✦</span>
                  <span>Clean, vegan formula — formulated without parabens, sulfates, phthalates, added fragrance, mineral oil, and animal-derived ingredients.</span>
                </div>
              </div>
            )}

            {tab === "match" && (
              <ShadeQuiz
                key="match"
                product={product}
                allShades={allShades}
                onMatch={(shade) => { setSel(shade); setTab("benefits"); }}
              />
            )}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="pdp-certs">
        <div className="container-wide">
          <div className="pdp-certs-head" data-reveal>
            <div>
              <div className="eyebrow">Tested &amp; certified</div>
              <h2>Care you can <span style={{ fontStyle: "italic", color: "var(--rose)" }}>verify.</span></h2>
            </div>
            <p>Every Rooh formula is held to the same standard — clinical where it counts, kind to sensitive skin always.</p>
          </div>
          <div className="pdp-cert-grid">
            {CERTIFICATIONS.map((c, i) => (
              <div key={i} className="pdp-cert" data-reveal style={{ "--reveal-delay": `${i * 40}ms` }}>
                <span className="pdp-cert-mark">✓</span>
                <div className="pdp-cert-label">{c.label}</div>
                <div className="pdp-cert-note">{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ON SHELF */}
      <section className="pdp-shelf">
        <div className="container-wide pdp-shelf-grid">
          <div className="pdp-shelf-copy" data-reveal>
            <div className="eyebrow">The IRL render</div>
            <h2>What it looks like <span style={{ fontStyle: "italic", color: "var(--rose-soft)" }}>in the wild.</span></h2>
            <p>Heavyweight recycled glass for foundation, soft-touch tubes for concealer and lip — each printed with the Rooh wordmark and shade code so your shelfie does the marketing for us.</p>
            <button className="btn btn-cream" onClick={() => setPage("shop")}>Back to the collection →</button>
          </div>
          <div data-reveal style={{ "--reveal-delay": "120ms" }}>
            <ShelfScene />
          </div>
        </div>
      </section>

      {/* CROSS-SELL */}
      <section className="pdp-cross container-wide">
        <div className="pdp-cross-head" data-reveal>
          <h2>Complete the <span style={{ fontStyle: "italic", color: "var(--rose)" }}>routine.</span></h2>
        </div>
        <div className="pdp-cross-grid">
          {PRODUCTS.filter((p) => p.id !== product.id).map((p, i) => (
            <button key={p.id} className="pdp-cross-card" onClick={() => setPage("product", p.id)} data-reveal style={{ "--reveal-delay": `${i * 80}ms` }}>
              <div className={`pdp-cross-visual accent-${p.accent}`}>
                <ProductMock which={p.mock} color={p.shades[2].color} shadeCode={p.shades[2].code} size={0.5} />
              </div>
              <div className="pdp-cross-info">
                <div className="label">{p.category} · {p.shadeCount}</div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <span className="pdp-cross-price">${p.price} <span className="arrow">→</span></span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

/* ----- shade range selector (flat, darkest → lightest) ----- */
function hexLuminance(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function ShadeRanges({ groups, correctors, sel, onSelect, noun }) {
  const sorted = groups
    .reduce((all, g) => all.concat(g.shades), [])
    .sort((a, b) => hexLuminance(a.color) - hexLuminance(b.color));
  const total = sorted.length + (correctors ? correctors.length : 0);
  return (
    <div className="shade-ranges">
      <div className="shade-ranges-head">
        <span className="mono">Choose your {noun}</span>
        <span className="mono dim">{total} total</span>
      </div>
      <div className="shade-group">
        <div className="shade-grid">
          {sorted.map((s) => (
            <button
              key={s.code}
              className={`shade-chip ${sel.code === s.code ? "active" : ""}`}
              style={{ background: s.color }}
              onClick={() => onSelect(s)}
              title={`${s.name} · ${s.code}${s.depth ? " · " + s.depth : ""}`}
              aria-label={`${s.name} ${s.code}`}
            >
              <span className="shade-chip-code">{s.code.replace(/^[A-Z]+-?/, "")}</span>
            </button>
          ))}
        </div>
      </div>

      {correctors && correctors.length > 0 && (
        <div className="shade-group correctors">
          <div className="shade-group-label">
            <span>Colour correctors</span>
            <span className="shade-group-note">Neutralize before you cover</span>
          </div>
          <div className="corrector-grid">
            {correctors.map((c) => (
              <button
                key={c.code}
                className={`corrector-chip ${sel.code === c.code ? "active" : ""}`}
                onClick={() => onSelect(c)}
              >
                <span className="corrector-sw" style={{ background: c.color }}></span>
                <span className="corrector-text">
                  <span className="corrector-name">{c.name}</span>
                  <span className="corrector-fix">{c.tone} · {c.fixes}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ----- shade match quiz ----- */
function ShadeQuiz({ product, allShades, onMatch }) {
  const [phase, setPhase]       = useState("intro");
  const [step, setStep]         = useState(0);
  const [answers, setAnswers]   = useState({});
  const [result, setResult]     = useState(null);
  const [adjacent, setAdjacent] = useState([]);

  const depthOptions = [
    { value: "fair",      label: "Fair",         hint: "Lighter SA skin — some visible pink or peachy warmth",      color: "#C9A07A" },
    { value: "light",     label: "Light",        hint: "Light golden or peachy-beige, warm undertone visible",      color: "#B8895C" },
    { value: "light-med", label: "Light-Medium", hint: "The most common SA range — warm beige to golden tan",      color: "#A07444" },
    { value: "medium",    label: "Medium",       hint: "Warm caramel, honey, tan — classic South Asian depth",      color: "#8B6040" },
    { value: "med-deep",  label: "Medium-Deep",  hint: "Deep caramel to rich brown, full warm saturation",          color: "#6F4A2E" },
    { value: "deep",      label: "Deep",         hint: "Rich, deep skin — maximum depth and warmth",               color: "#4E3220" },
  ];

  const undertoneOptions = [
    { value: "warm",    label: "Warm",    hint: "Golden, yellow-leaning. Gold jewellery flatters you most. You tan easily and evenly.",         color: "#C9A55A" },
    { value: "cool",    label: "Cool",    hint: "Pink or rosy-leaning. Silver jewellery looks best. You may burn before you tan.",             color: "#C4849B" },
    { value: "neutral", label: "Neutral", hint: "Balanced — neither too warm nor cool. Both metals look equally good on you.",                   color: "#B8906C" },
    { value: "olive",   label: "Olive",   hint: "Yellow-green leaning. Some foundations look ashy or grey on you. Sallow cast is common.",      color: "#8A7A4A" },
  ];

  const concernOptions = [
    { value: "hyperpig", label: "Hyperpigmentation & dark marks",  hint: "Post-acne spots, sun damage, uneven patches — this is the main thing I want coverage to address", icon: "✦" },
    { value: "acne",     label: "Acne-prone & oily skin",          hint: "Breakouts, clogged pores, and midday shine — I need coverage that doesn't make it worse",          icon: "◎" },
    { value: "redness",  label: "Redness & sensitivity",           hint: "My skin reacts easily — visible redness, rosacea-adjacent, or general sensitivity",                icon: "◇" },
    { value: "dullness", label: "Dullness & dehydration",          hint: "Skin looks flat, tired, or tight — I want coverage that adds glow, not weight",                   icon: "○" },
  ];

  const concealConcernOptions = [
    { value: "circles", label: "Dark circles",           hint: "Under-eye discoloration, shadow, or puffiness — the main reason I reach for concealer", icon: "◯" },
    { value: "blemish", label: "Active blemishes",       hint: "Covering spots, active breakouts, or redness around blemishes in real time",            icon: "◎" },
    { value: "marks",   label: "Post-acne marks & PIH",  hint: "Flat dark spots left behind after breakouts — hyperpigmentation that lingers for weeks", icon: "✦" },
    { value: "all",     label: "All of the above",       hint: "The full coverage routine — dark circles, active spots, and lingering marks.",            icon: "★" },
  ];

  const vibeOptions = [
    { value: "nude", label: "Your Lips But Better",  hint: "Effortless, natural warmth — a barely-there wash of color that looks like your best lip day", icon: "◇" },
    { value: "pink", label: "Flushed & Flirty",      hint: "A soft pink or rose that reads like you just came in from outside — fresh and deeply flattering on SA skin", icon: "◎" },
    { value: "bold", label: "Full Statement",        hint: "Full-send, no-explanation-needed red. You walked in and the room did a double take.",          icon: "✦" },
  ];

  const occasionOptions = [
    { value: "daily", label: "Everyday wear",  hint: "Work, errands, casual days out — needs to work for all of it without effort",   icon: "○" },
    { value: "glam",  label: "Occasion glam",  hint: "Events, weddings, dinner — I want it to read intentional and polished",         icon: "★" },
    { value: "both",  label: "I want both",    hint: "A shade I can wear daily that still turns heads when I layer it up",            icon: "◎" },
  ];

  const isLip        = product.id === "lip";
  const isFoundation = product.id === "foundation";

  const questions = isLip ? [
    { key: "vibe",      options: vibeOptions,            question: "What's the vibe today?",               swatched: false },
    { key: "depth",     options: depthOptions,           question: "How deep is your skin tone?",           swatched: true  },
    { key: "occasion",  options: occasionOptions,        question: "When are you reaching for this?",       swatched: false },
  ] : isFoundation ? [
    { key: "depth",     options: depthOptions,           question: "How deep is your skin tone?",           swatched: true  },
    { key: "undertone", options: undertoneOptions,       question: "What's your undertone?",                swatched: true  },
    { key: "concern",   options: concernOptions,         question: "What does your skin need most?",        swatched: false },
  ] : [
    { key: "concern",   options: concealConcernOptions,  question: "What are you covering?",                swatched: false },
    { key: "depth",     options: depthOptions,           question: "How deep is your skin tone?",           swatched: true  },
    { key: "undertone", options: undertoneOptions,       question: "What's your undertone?",                swatched: true  },
  ];

  const getPersonalizedCopy = (ans) => {
    if (isFoundation) {
      const c = {
        hyperpig: "Niacinamide 5% actively fades hyperpigmentation and post-acne marks while you wear it — targeted treatment built into every shade.",
        acne:     "Non-comedogenic and zinc-infused — full coverage that keeps acne-prone skin calm without clogging pores.",
        redness:  "Centella asiatica 2% calms visible redness throughout the full wear. It's in the formula, not just on the label.",
        dullness: "Ceramide NP and sodium hyaluronate keep skin plump and hydrated for a naturally lit finish that doesn't cake by noon.",
      };
      return c[ans.concern] || "";
    }
    if (product.id === "concealer") {
      const c = {
        circles: "Pair with the Peach, Please corrector first — it neutralizes blue-dark under-eye tones before this shade covers completely.",
        blemish:  "Zinc PCA in every shade actively calms blemishes beneath full-coverage color — not just a cover-up.",
        marks:    "Stable vitamin C (SAP 3%) brightens post-acne marks while this shade covers them — treating while you conceal.",
        all:      "Start with the corrector matched to your concern, then layer this shade on top. Two steps, zero trace.",
      };
      return c[ans.concern] || "";
    }
    if (isLip) {
      const c = {
        nude: "Warm peach-based pigments visually even two-toned lips — the lip border softens and the inner lip warms. YLBB but make it science.",
        pink: "This rose-family shade is calibrated to flatter South Asian skin without reading too candy or too pale — the undertone does the work.",
        bold: "Full pigment payoff with peptide support. Tripeptides work on the lip border so the color sits clean and sharp.",
      };
      return c[ans.vibe] || "";
    }
    return "";
  };

  const computeResult = (ans) => {
    let code;
    if (isLip) {
      const m = {
        nude: { daily: "L-04", glam: "L-05", both: "L-04" },
        pink: { daily: "L-09", glam: "L-11", both: "L-10" },
        bold: { daily: "L-14", glam: "L-13", both: "L-15" },
      };
      code = ((m[ans.vibe] || m.nude)[ans.occasion]) || "L-04";
      if (ans.vibe === "bold" && ["med-deep","deep"].includes(ans.depth)) code = "L-15";
    } else if (isFoundation) {
      const m = {
        "fair-warm":"W-01",      "fair-cool":"C-01",      "fair-neutral":"N-02",    "fair-olive":"O-03",
        "light-warm":"W-02",     "light-cool":"C-01",     "light-neutral":"N-02",   "light-olive":"O-03",
        "light-med-warm":"W-03", "light-med-cool":"C-04", "light-med-neutral":"N-03","light-med-olive":"O-03",
        "medium-warm":"W-04",    "medium-cool":"C-04",    "medium-neutral":"N-04",  "medium-olive":"O-04",
        "med-deep-warm":"W-05",  "med-deep-cool":"C-06",  "med-deep-neutral":"N-05","med-deep-olive":"O-05",
        "deep-warm":"W-05",      "deep-cool":"C-06",      "deep-neutral":"N-05",    "deep-olive":"O-05",
      };
      code = m[`${ans.depth}-${ans.undertone}`];
    } else {
      const m = { "fair":"CC-02","light":"CC-03","light-med":"CC-04","medium":"CC-05","med-deep":"CC-06","deep":"CC-07" };
      code = m[ans.depth];
    }
    const matched = allShades.find(s => s.code === code) || allShades[0];
    const idx = allShades.findIndex(s => s.code === matched.code);
    return { matched, adj: [allShades[idx - 1], allShades[idx + 1]].filter(Boolean) };
  };

  const handleAnswer = (key, value) => {
    const next = { ...answers, [key]: value };
    setAnswers(next);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const { matched, adj } = computeResult(next);
      setResult(matched);
      setAdjacent(adj);
      setPhase("result");
    }
  };

  const reset = () => { setStep(0); setAnswers({}); setResult(null); setAdjacent([]); setPhase("intro"); };

  /* intro */
  if (phase === "intro") {
    return (
      <div className="sq-intro" data-reveal>
        <div className="sq-intro-badge mono">Shade Finder</div>
        <h3 className="sq-intro-headline">Find your perfect<br /><em>Rooh shade.</em></h3>
        <p className="sq-intro-sub">{questions.length} questions. A shade matched to your depth, undertone, and what your skin actually needs — no guessing.</p>
        <button className="btn btn-primary sq-intro-cta" onClick={() => setPhase("quiz")}>Start the quiz →</button>
      </div>
    );
  }

  /* result */
  if (phase === "result" && result) {
    const copy = getPersonalizedCopy(answers);
    return (
      <div className="sq-result" data-reveal>
        <div className="sq-result-eyebrow mono">Your Rooh match</div>
        <div className="sq-result-card">
          <div className="sq-result-swatch" style={{ background: result.color }}></div>
          <div className="sq-result-details">
            <h3 className="sq-result-name">{result.name}</h3>
            <div className="sq-result-code mono">{result.code}{result.depth ? ` · ${result.depth}` : ""}</div>
            {copy && <p className="sq-result-copy">{copy}</p>}
          </div>
        </div>
        {adjacent.length > 0 && (
          <div className="sq-adjacent">
            <div className="sq-adjacent-label mono">Also consider — one shade away</div>
            <div className="sq-adjacent-row">
              {adjacent.map(s => (
                <button key={s.code} className="sq-adj-chip" onClick={() => onMatch(s)}>
                  <span className="sq-adj-swatch" style={{ background: s.color }}></span>
                  <span className="sq-adj-info">
                    <span className="sq-adj-name">{s.name}</span>
                    <span className="sq-adj-code mono">{s.code}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="sq-result-actions">
          <button className="btn btn-primary" onClick={() => onMatch(result)}>Select {result.name} →</button>
          <button className="sq-retake mono" onClick={reset}>Retake quiz</button>
        </div>
      </div>
    );
  }

  /* question */
  const q   = questions[step];
  const pct = Math.round((step / questions.length) * 100);
  return (
    <div className="sq-step" data-reveal>
      <div className="sq-bar-track"><div className="sq-bar-fill" style={{ width: `${pct}%` }}></div></div>
      <div className="sq-step-meta mono">{step + 1} of {questions.length}</div>
      <p className="sq-question">{q.question}</p>
      <div className={`sq-opts ${q.swatched ? "sq-opts-swatched" : "sq-opts-text"}`}>
        {q.options.map(opt => (
          <button key={opt.value} className="sq-opt" onClick={() => handleAnswer(q.key, opt.value)}>
            {q.swatched && opt.color
              ? <span className="sq-opt-circle" style={{ background: opt.color }}></span>
              : opt.icon && <span className="sq-opt-icon">{opt.icon}</span>
            }
            <span className="sq-opt-body">
              <span className="sq-opt-label">{opt.label}</span>
              {opt.hint && <span className="sq-opt-hint">{opt.hint}</span>}
            </span>
          </button>
        ))}
      </div>
      {step > 0 && (
        <button className="sq-back mono" onClick={() => setStep(step - 1))}>← Previous question</button>
      )}
    </div>
  );
}

window.ProductPage = ProductPage;
