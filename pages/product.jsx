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
  const [step, setStep]       = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult]   = useState(null);

  const depthOptions = [
    { value: "fair",      label: "Fair",         hint: "Lighter SA skin, some pink or peach warmth",   color: "#C9A07A" },
    { value: "light",     label: "Light",        hint: "Light golden or peachy-beige tones",            color: "#B8895C" },
    { value: "light-med", label: "Light-Medium", hint: "The most common SA range — warm beige to tan", color: "#A07444" },
    { value: "medium",    label: "Medium",       hint: "Warm caramel, tan, honey",                      color: "#8B6040" },
    { value: "med-deep",  label: "Medium-Deep",  hint: "Deep caramel to rich brown",                    color: "#6F4A2E" },
    { value: "deep",      label: "Deep",         hint: "Rich, deep skin tones",                         color: "#4E3220" },
  ];

  const undertoneOptions = [
    { value: "warm",    label: "Warm",    hint: "Golden, yellow-leaning — gold jewellery flatters you",       color: "#C9A55A" },
    { value: "cool",    label: "Cool",    hint: "Pink, rosy-leaning — silver jewellery complements you",      color: "#C4849B" },
    { value: "neutral", label: "Neutral", hint: "Balanced mix — both metals work equally well",               color: "#B8906C" },
    { value: "olive",   label: "Olive",   hint: "Yellow-green leaning — some foundations look ashy on you",  color: "#8A7A4A" },
  ];

  const vibeOptions = [
    { value: "nude", label: "Natural YLBB",    hint: "Your-lips-but-better. Everyday effortless." },
    { value: "pink", label: "Flushed & Fresh", hint: "A wash of pink or rose — soft and playful." },
    { value: "bold", label: "Statement Red",   hint: "Full-send. You walked in and the room noticed." },
  ];

  const isLip        = product.id === "lip";
  const isFoundation = product.id === "foundation";

  const questions = isLip
    ? [
        { key: "vibe",      options: vibeOptions,      question: "What's the vibe today?" },
        { key: "depth",     options: depthOptions,     question: "How deep is your skin tone?" },
      ]
    : [
        { key: "depth",     options: depthOptions,     question: "How deep is your skin tone?" },
        { key: "undertone", options: undertoneOptions,  question: "What's your undertone?" },
      ];

  const computeResult = (ans) => {
    if (isLip) {
      const vibeMap = {
        nude: ["L-04", "L-05"],
        pink: ["L-08", "L-09", "L-10", "L-11"],
        bold: ["L-13", "L-14", "L-15"],
      };
      const family    = vibeMap[ans.vibe] || vibeMap.nude;
      const depthIdx  = ["fair","light","light-med","medium","med-deep","deep"].indexOf(ans.depth);
      const pickIdx   = Math.min(Math.floor(depthIdx * family.length / 6), family.length - 1);
      return allShades.find(s => s.code === family[pickIdx]) || allShades[0];
    }

    if (isFoundation) {
      const map = {
        "fair-warm":         "W-01", "fair-cool":         "C-01", "fair-neutral":       "N-02", "fair-olive":         "O-03",
        "light-warm":        "W-02", "light-cool":        "C-01", "light-neutral":      "N-02", "light-olive":        "O-03",
        "light-med-warm":    "W-03", "light-med-cool":    "C-04", "light-med-neutral":  "N-03", "light-med-olive":    "O-03",
        "medium-warm":       "W-04", "medium-cool":       "C-04", "medium-neutral":     "N-04", "medium-olive":       "O-04",
        "med-deep-warm":     "W-05", "med-deep-cool":     "C-06", "med-deep-neutral":   "N-05", "med-deep-olive":     "O-05",
        "deep-warm":         "W-05", "deep-cool":         "C-06", "deep-neutral":       "N-05", "deep-olive":         "O-05",
      };
      return allShades.find(s => s.code === map[`${ans.depth}-${ans.undertone}`]) || allShades[0];
    }

    // concealer — match by depth to cover shade
    const concealerMap = {
      "fair": "CC-02", "light": "CC-03", "light-med": "CC-04",
      "medium": "CC-05", "med-deep": "CC-06", "deep": "CC-07",
    };
    return allShades.find(s => s.code === concealerMap[ans.depth]) || allShades[0];
  };

  const handleAnswer = (key, value) => {
    const next = { ...answers, [key]: value };
    setAnswers(next);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setResult(computeResult(next));
    }
  };

  const reset = () => { setStep(0); setAnswers({}); setResult(null); };

  if (result) {
    return (
      <div className="quiz-result" data-reveal>
        <div className="quiz-result-inner">
          <div className="quiz-result-swatch" style={{ background: result.color }}></div>
          <div className="quiz-result-text">
            <div className="quiz-result-eyebrow mono">Your Rooh match</div>
            <h3 className="quiz-result-name">{result.name}</h3>
            <div className="quiz-result-code mono">{result.code}{result.depth ? ` · ${result.depth}` : ""}</div>
          </div>
        </div>
        <div className="quiz-result-actions">
          <button className="btn btn-primary" onClick={() => onMatch(result)}>
            Select this shade →
          </button>
          <button className="btn btn-ghost quiz-retake" onClick={reset}>Retake quiz</button>
        </div>
      </div>
    );
  }

  const q = questions[step];
  const swatched = q.key === "depth" || q.key === "undertone";

  return (
    <div className="quiz-wrap" data-reveal>
      <div className="quiz-header">
        <div className="quiz-progress mono">
          {questions.map((_, i) => (
            <span key={i} className={`quiz-dot ${i <= step ? "active" : ""}`}></span>
          ))}
        </div>
        <p className="quiz-q">{q.question}</p>
      </div>
      <div className={`quiz-options ${swatched ? "quiz-options-swatched" : "quiz-options-text"}`}>
        {q.options.map(opt => (
          <button key={opt.value} className="quiz-opt" onClick={() => handleAnswer(q.key, opt.value)}>
            {opt.color && <span className="quiz-opt-swatch" style={{ background: opt.color }}></span>}
            <span className="quiz-opt-label">{opt.label}</span>
            {opt.hint && <span className="quiz-opt-hint">{opt.hint}</span>}
          </button>
        ))}
      </div>
      {step > 0 && (
        <button className="quiz-back mono" onClick={() => setStep(step - 1)}>← Back</button>
      )}
    </div>
  );
}

window.ProductPage = ProductPage;
