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
              ["benefits", "Benefits"],
              ["actives", "Key actives"],
              ["how", "How to use"],
              ["inci", "Full ingredients"],
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

/* ----- shade range selector (grouped) ----- */
function ShadeRanges({ groups, correctors, sel, onSelect, noun }) {
  const total = groups.reduce((n, g) => n + g.shades.length, 0) + (correctors ? correctors.length : 0);
  return (
    <div className="shade-ranges">
      <div className="shade-ranges-head">
        <span className="mono">Choose your {noun}</span>
        <span className="mono dim">{total} total</span>
      </div>
      {groups.map((g, gi) => (
        <div key={gi} className="shade-group">
          <div className="shade-group-label">
            <span>{g.label}</span>
            {g.note && <span className="shade-group-note">{g.note}</span>}
          </div>
          <div className="shade-grid">
            {g.shades.map((s) => (
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
      ))}

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

window.ProductPage = ProductPage;
