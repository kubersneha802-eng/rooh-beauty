/* ============== HOME PAGE ============== */
function HomePage({ setPage, cart }) {
  useScrollReveal();
  const heroRef = React.useRef(null);
  const handleHeroMove = (e) => {
    const el = heroRef.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = (e.clientX - r.left) / r.width - 0.5;
    const my = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--mx', mx.toFixed(3));
    el.style.setProperty('--my', my.toFixed(3));
  };
  return (
    <main data-screen-label="Home">
      {/* HERO */}
      <section className="hero" ref={heroRef} onMouseMove={handleHeroMove}>
        <div className="orb o1"></div>
        <div className="orb o2"></div>
        <div className="orb o3"></div>
        <div className="container-wide hero-inner">
          <div className="hero-brand" data-reveal>ROOH · BEAUTY</div>
          <h1 data-reveal style={{'--reveal-delay':'80ms'}}>Your skin.<br/><span className="italic">Your story.</span></h1>
          <p className="hero-sub" data-reveal style={{'--reveal-delay':'180ms'}}>
            Skincare-infused color cosmetics, formulated for sensitive, acne-prone,
            hyperpigmented skin and two-toned lips. Fragrance-free. Non-comedogenic.
            Dermatologist tested.
          </p>
          <div className="hero-ctas" data-reveal style={{'--reveal-delay':'260ms'}}>
            <button className="btn btn-primary" onClick={() => setPage("shop")}>
              Shop the Collection
              <span className="arrow" style={{ marginLeft: 4 }}>→</span>
            </button>
            <button className="btn btn-ghost" onClick={() => setPage("school")}>
              Skin School
              <span className="arrow" style={{ marginLeft: 4 }}>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-track">
          {[...Array(2)].map((_, n) => (
            <React.Fragment key={n}>
              <span className="marquee-item">Niacinamide 5%</span>
              <span className="marquee-item">Tranexamic Acid 2%</span>
              <span className="marquee-item">Ceramide NP</span>
              <span className="marquee-item">Azelaic Acid 5%</span>
              <span className="marquee-item">Fragrance-Free</span>
              <span className="marquee-item">Centella Asiatica</span>
              <span className="marquee-item">Sensitive Skin Tested</span>
              <span className="marquee-item">Non-Comedogenic</span>
              <span className="marquee-item">Dermatologist Tested</span>
              <span className="marquee-item">Vegan & Cruelty-Free</span>
              <span className="marquee-item">90 Shades</span>
              <span className="marquee-item">Hyaluronic Acid</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
            <div style={{ maxWidth: 640 }}>
              <div className="eyebrow">The Rooh Standard</div>
              <h2 style={{ fontSize: "clamp(36px, 4vw, 56px)", marginTop: 16 }}>
                A formula philosophy <span style={{ fontStyle: "italic", color: "var(--rose)" }}>without compromise.</span>
              </h2>
            </div>
            <div style={{ maxWidth: 360, color: "var(--muted)", fontSize: 15 }}>
              Color you reach for daily should treat your skin like the skincare you spent hours researching.
            </div>
          </div>

          <div className="feature-grid">
            <div className="feature-card" data-reveal>
              <div className="feature-icon">✺</div>
              <h3>Skincare-grade actives</h3>
              <p>Niacinamide 5%, ceramide NP, centella asiatica, and hyaluronic acid at meaningful percentages — not marketing percentages — wear all day in our foundations and concealers.</p>
            </div>
            <div className="feature-card" data-reveal style={{'--reveal-delay':'100ms'}}>
              <div className="feature-icon" style={{ background: "var(--green-bg)", color: "var(--green)" }}>◐</div>
              <h3>Sensitive skin first</h3>
              <p>Every formula is fragrance-free, non-comedogenic, dermatologist tested, and built around the bumps, redness, and post-acne marks real skin actually has.</p>
            </div>
            <div className="feature-card" data-reveal style={{'--reveal-delay':'200ms'}}>
              <div className="feature-icon" style={{ background: "var(--violet-bg)", color: "var(--violet)" }}>◈</div>
              <h3>Shades for every story</h3>
              <p>90 shades across three hero products with peach, green, and violet correctors built for hyperpigmentation, dark circles, and two-toned lips.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI SHADE MATCH */}
      <section className="shade-match-strip">
        <div className="container">
          <div className="shade-match-grid">
            <div>
              <div className="eyebrow" style={{ color: 'var(--terracotta)' }}>Shade Intelligence · 2027</div>
              <h2 data-reveal style={{ fontSize: 'clamp(36px, 4vw, 60px)', marginTop: 16, maxWidth: 620 }}>
                Your perfect match,<br/><span style={{ fontStyle: 'italic', color: 'var(--terracotta)' }}>found in seconds.</span>
              </h2>
              <p data-reveal style={{ '--reveal-delay': '100ms', marginTop: 24, fontSize: 17, color: 'var(--muted)', maxWidth: 480, lineHeight: 1.65 }}>
                Our AI shade tool reads your skin undertone, depth, and two-tone differential — then maps you to your foundation and concealer. No guessing. No returns.
              </p>
            </div>
            <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 28, alignItems: 'flex-start', '--reveal-delay': '160ms' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['Undertone analysis', 'Depth mapping', 'Two-tone correction'].map((f) => (
                  <div key={f} className="shade-match-feature">
                    <span className="shade-match-dot"></span>
                    {f}
                  </div>
                ))}
              </div>
              <button className="btn" style={{ background: 'var(--terracotta)', color: 'var(--cream)' }} onClick={() => setPage('shop')}>
                Try Shade Match
                <span className="arrow" style={{ marginLeft: 4 }}>→</span>
              </button>
              <div style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                No account needed · Works on all skin tones
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT TEASERS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ marginBottom: 64 }}>
            <div className="eyebrow">Three heroes</div>
            <h2 style={{ fontSize: "clamp(40px, 5vw, 72px)", marginTop: 16, maxWidth: 800 }}>
              The whole collection. <span style={{ fontStyle: "italic", color: "var(--rose)" }}>For now.</span>
            </h2>
          </div>
          <div className="product-teaser-grid">
            <Teaser tone="" label="Foundation · 24hr wear" name="Skin-Forward Foundation" shadeCount="15 shades · sensitive skin" price="$26" shades={FOUNDATION_SHADES} onClick={() => setPage("product", "foundation")} delay="0ms" />
            <Teaser tone="g2" label="Concealer + Corrector" name="Blur & Balance Concealer" shadeCount="11 shades + 4 correctors" price="$20" shades={CONCEALER_SHADES} onClick={() => setPage("product", "concealer")} delay="120ms" />
            <Teaser tone="g3" label="Lip · Treatment Gloss" name="Glow & Go Lip Treatment" shadeCount="11 shades · peptides" price="$18" shades={LIP_SHADES} onClick={() => setPage("product", "lip")} delay="240ms" />
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto">
        <div className="container">
          <div className="eyebrow" data-reveal>Manifesto</div>
          <blockquote data-reveal style={{'--reveal-delay':'100ms'}}>
            Your skin tone is not a trend.<br/>
            It's <span className="accent">the whole point.</span>
          </blockquote>
          <div className="attrib" data-reveal style={{'--reveal-delay':'220ms'}}>— Rooh Beauty Brand Manifesto</div>
        </div>
      </section>

      {/* INGREDIENT STRIP */}
      <section className="ing-strip">
        <div className="container">
          <div className="ing-strip-grid">
            <div>
              <div className="eyebrow" style={{ color: "var(--rose-soft)" }}>Skin School · Ingredients</div>
              <h2 style={{ marginTop: 16 }}>Skincare <span className="accent">in every drop.</span></h2>
              <p>
                We spent two years studying what derms actually recommend for compromised barriers. Then we
                worked them into every shade of foundation, concealer, and gloss — at percentages that perform,
                not just appear on a label.
              </p>
              <div className="pill-row">
                <span className="pill">Niacinamide 5%</span>
                <span className="pill">Tranexamic Acid 2%</span>
                <span className="pill">Ceramide NP</span>
                <span className="pill">Azelaic Acid 5%</span>
                <span className="pill">Centella Asiatica</span>
                <span className="pill">Hyaluronic Acid</span>
                <span className="pill">Bisabolol</span>
                <span className="pill">Panthenol B5</span>
              </div>
              <button className="btn btn-cream" onClick={() => setPage("school")}>
                Enter Skin School
                <span className="arrow" style={{ marginLeft: 4 }}>→</span>
              </button>
            </div>
            <div className="ing-card-grid">
              <div className="ing-card">
                <div>
                  <div className="dot"></div>
                  <h4>Niacinamide</h4>
                </div>
                <span>Calms redness, fades post-acne marks, supports barrier function.</span>
              </div>
              <div className="ing-card">
                <div>
                  <div className="dot" style={{ background: "#C4622D" }}></div>
                  <h4>Tranexamic Acid</h4>
                </div>
                <span>Targets hyperpigmentation and dark spots at the source — without the irritation of acids.</span>
              </div>
              <div className="ing-card">
                <div>
                  <div className="dot" style={{ background: "#EDD3BA" }}></div>
                  <h4>Ceramide NP</h4>
                </div>
                <span>Reinforces the moisture barrier so makeup never feels drying.</span>
              </div>
              <div className="ing-card">
                <div>
                  <div className="dot" style={{ background: "#9EC9E0" }}></div>
                  <h4>Hyaluronic Acid</h4>
                </div>
                <span>Holds water at the surface for plump, hydrated wear all day.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Teaser({ tone, label, name, shadeCount, price, shades, onClick, delay }) {
  return (
    <button className={`teaser-card ${tone}`} onClick={onClick} data-reveal style={{'--reveal-delay': delay || '0ms'}}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ textAlign: "left" }}>
          <div className="teaser-label">{label}</div>
          <h3>{name}</h3>
          <div className="teaser-shades">{shadeCount}</div>
        </div>
      </div>
      <div className="swatch-cluster">
        {shades.map((s, i) => (
          <span key={i} className="sw" style={{ background: s.color }}></span>
        ))}
      </div>
      <div className="teaser-foot">
        <span className="teaser-price">{price}</span>
        <span className="teaser-arrow">→</span>
      </div>
    </button>
  );
}

window.HomePage = HomePage;
