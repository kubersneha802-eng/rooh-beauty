/* ============== ABOUT PAGE ============== */
function AboutPage({ setPage }) {
  useScrollReveal();
  return (
    <main data-screen-label="About">
      <section className="about-hero">
        <div className="container">
          <div className="eyebrow" data-reveal>About Rooh Beauty</div>
          <h1 data-reveal style={{ marginTop: 16, '--reveal-delay': '80ms' }}>
            Built for <span className="italic">every skin.</span><br/>
            Every story.
          </h1>
          <p data-reveal style={{'--reveal-delay':'200ms'}}>
            A skincare-infused color cosmetics line for sensitive, acne-prone,
            hyperpigmented skin and two-toned lips — built by someone who
            couldn't find foundation that wouldn't break her out.
          </p>
        </div>
      </section>

      <div className="container">
        <section className="about-story">
          <div className="about-story-text">
            <div className="eyebrow">Origin</div>
            <h2 style={{ marginTop: 16 }}>
              We built it because <span className="accent">no one else would.</span>
            </h2>
            <p>
              Rooh Beauty started in a Jersey City apartment with a spreadsheet of every
              foundation that had ever ruined a Sunday. Fragrance, comedogenic oils, the
              same ten beige shades — the industry had decided that "sensitive skin" meant
              "settle for boring." We didn't agree.
            </p>
            <p>
              So we partnered with a cosmetic chemist and a board-certified derm to design
              from a different starting point: what if every drop of color was also a drop
              of skincare? What if the shades were named like text messages between friends,
              and the formulas were named like prescriptions?
            </p>
            <p>
              The result is a line that holds two truths at once. The formulas are clinical.
              The voice is not. We think care and humor can sit on the same shelf — and on
              the same face, at the same time.
            </p>
          </div>
          <div className="value-grid">
            <div className="value-card" data-reveal>
              <div className="num">01</div>
              <h4>Sensitive skin first</h4>
              <p>Every formula is fragrance-free, non-comedogenic, and dermatologist tested.</p>
            </div>
            <div className="value-card" data-reveal style={{'--reveal-delay':'80ms'}}>
              <div className="num">02</div>
              <h4>Real skincare actives</h4>
              <p>Niacinamide 5%, ceramide NP, centella, peptides — not just on the label.</p>
            </div>
            <div className="value-card" data-reveal style={{'--reveal-delay':'160ms'}}>
              <div className="num">03</div>
              <h4>28 foundation shades</h4>
              <p>Plus 4 correctors. Built for hyperpigmentation, redness, and two-toned lips.</p>
            </div>
            <div className="value-card" data-reveal style={{'--reveal-delay':'240ms'}}>
              <div className="num">04</div>
              <h4>Clean & cruelty-free</h4>
              <p>Vegan formulas, never tested on animals, made with FDA-compliant ingredients.</p>
            </div>
          </div>
        </section>
      </div>

      <div className="about-cta" data-reveal>
        <div className="eyebrow" style={{ color: "var(--rose-soft)" }}>Our promise</div>
        <blockquote>
          "Makeup that cares as much<br/>as you do."
        </blockquote>
        <p>
          Every shade is dermatologist tested. Every formula is fragrance-free.
          Every claim we make is one we can stand behind in a peer-reviewed paper —
          or in a group chat at 11pm.
        </p>
        <div className="cert-pills">
          <span className="cert-pill">Fragrance-Free</span>
          <span className="cert-pill">Cruelty-Free</span>
          <span className="cert-pill">Vegan</span>
          <span className="cert-pill">Non-Comedogenic</span>
          <span className="cert-pill">Sensitive Skin Tested</span>
          <span className="cert-pill">Dermatologist Tested</span>
          <span className="cert-pill">FDA Compliant</span>
        </div>
      </div>

      <div className="container">
        <section className="founder-section">
          <div className="founder-card">
            <div className="avatar">SK</div>
            <h4>Sneha Kuber</h4>
            <div className="role">Founder &amp; Creative Director</div>
            <p style={{ marginTop: 20, color: "var(--muted)", fontSize: 14 }}>
              Self-taught formulator. Recovering perfectionist. Worst foundation
              breakout was in a 2019 elevator.
            </p>
          </div>
          <div className="founder-msg">
            <div className="eyebrow">A note from the founder</div>
            <h2 style={{ marginTop: 16 }}>
              I built this because I needed it. <span className="accent">First.</span>
            </h2>
            <p>
              For most of my twenties I tried every "sensitive skin" foundation on the
              market and walked away with the same closing credits — clogged pores,
              gray cast, or a tiny rash above my upper lip. I have hyperpigmentation
              and a two-toned lip border, and I gave up on color cosmetics for almost
              four years.
            </p>
            <p>
              What changed wasn't a new product. It was reading the ingredient lists of
              the moisturizers I actually loved, and asking: why doesn't anyone put these
              in the things we wear for fourteen hours straight? The answer turned out to
              be cost, formulation difficulty, and a category that historically built
              from "shade match" first and "skin care" last.
            </p>
            <p>
              So Rooh Beauty starts the other way around. Skincare first. Color second.
              Names that make you laugh. Formulas that don't make you itch. If we got it
              right, the line should feel like getting ready with a friend who happens
              to have a chemistry degree.
            </p>
            <div className="signature">— Sneha</div>
          </div>
        </section>
      </div>
    </main>
  );
}

window.AboutPage = AboutPage;
