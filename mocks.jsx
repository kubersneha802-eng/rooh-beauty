/* ============================================================
   ROOH BEAUTY — PRODUCT MOCKUPS (photoreal-ish SVG renders)
   Each takes a live shade color so PDP previews update on select.
   ============================================================ */

/* FOUNDATION — frosted glass dropper/pump bottle */
function FoundationMock({ color = "#C99775", shadeCode = "W-03", size = 1 }) {
  return (
    <svg className="mock-svg" viewBox="0 0 260 440" width={260 * size} height={440 * size}
         xmlns="http://www.w3.org/2000/svg" aria-label="Skin-Forward Foundation bottle">
      <defs>
        <linearGradient id="fdGlass" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color={color} stop-opacity="0.92"/>
          <stop offset="0.45" stop-color={color}/>
          <stop offset="0.55" stop-color={color}/>
          <stop offset="1" stop-color={color} stop-opacity="0.78"/>
        </linearGradient>
        <linearGradient id="fdGlassDark" x1="0" x2="1">
          <stop offset="0" stop-color="rgba(0,0,0,0.28)"/>
          <stop offset="0.5" stop-color="rgba(0,0,0,0)"/>
          <stop offset="1" stop-color="rgba(0,0,0,0.22)"/>
        </linearGradient>
        <linearGradient id="fdCap" x1="0" x2="1">
          <stop offset="0" stop-color="#241015"/>
          <stop offset="0.5" stop-color="#54172C"/>
          <stop offset="1" stop-color="#1C0C10"/>
        </linearGradient>
      </defs>
      {/* shadow */}
      <ellipse cx="130" cy="424" rx="78" ry="12" fill="rgba(0,0,0,0.16)"/>
      {/* pump cap */}
      <rect x="104" y="14" width="52" height="40" rx="6" fill="url(#fdCap)"/>
      <rect x="116" y="6" width="28" height="14" rx="3" fill="#3A1019"/>
      <rect x="96" y="52" width="68" height="16" rx="4" fill="#2A0E14"/>
      {/* bottle body — rounded rectangle, glass */}
      <rect x="58" y="70" width="144" height="346" rx="22" fill="url(#fdGlass)"/>
      <rect x="58" y="70" width="144" height="346" rx="22" fill="url(#fdGlassDark)"/>
      {/* product fill line */}
      <rect x="58" y="120" width="144" height="296" rx="22" fill={color} opacity="0.55"/>
      {/* glass highlight */}
      <rect x="72" y="88" width="16" height="312" rx="8" fill="rgba(255,255,255,0.4)"/>
      <rect x="180" y="120" width="8" height="270" rx="4" fill="rgba(255,255,255,0.18)"/>
      {/* label */}
      <rect x="74" y="210" width="112" height="150" rx="4" fill="#FAF8F5" opacity="0.96"/>
      <text x="130" y="240" text-anchor="middle" font-family="Playfair Display, serif" font-size="17" font-weight="600" letter-spacing="1.5" fill="#72243E">ROOH</text>
      <text x="130" y="256" text-anchor="middle" font-family="Playfair Display, serif" font-size="9" letter-spacing="3" fill="#1A1410">BEAUTY</text>
      <line x1="92" y1="270" x2="168" y2="270" stroke="#72243E" stroke-width="0.75"/>
      <text x="130" y="294" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="7.5" letter-spacing="0.5" fill="#1A1410">SKIN-FORWARD</text>
      <text x="130" y="305" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="7.5" letter-spacing="0.5" fill="#1A1410">FOUNDATION</text>
      <text x="130" y="328" text-anchor="middle" font-family="DM Mono, monospace" font-size="9" letter-spacing="1" fill="#72243E">{shadeCode}</text>
      <text x="130" y="348" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="6" letter-spacing="1" fill="rgba(26,20,16,0.6)">30 ML · NIACINAMIDE 5%</text>
    </svg>
  );
}

/* CONCEALER — squat tube with twist cap + doe-foot hint */
function ConcealerMock({ color = "#C9A578", shadeCode = "CC-04", size = 1 }) {
  return (
    <svg className="mock-svg" viewBox="0 0 220 440" width={220 * size} height={440 * size}
         xmlns="http://www.w3.org/2000/svg" aria-label="Blur & Balance Concealer tube">
      <defs>
        <linearGradient id="ccBody" x1="0" x2="1">
          <stop offset="0" stop-color={color} stop-opacity="0.82"/>
          <stop offset="0.5" stop-color={color}/>
          <stop offset="1" stop-color={color} stop-opacity="0.7"/>
        </linearGradient>
        <linearGradient id="ccCap" x1="0" x2="1">
          <stop offset="0" stop-color="#06301F"/>
          <stop offset="0.5" stop-color="#0B4A32"/>
          <stop offset="1" stop-color="#042417"/>
        </linearGradient>
      </defs>
      <ellipse cx="110" cy="424" rx="58" ry="11" fill="rgba(0,0,0,0.16)"/>
      {/* cap */}
      <rect x="70" y="16" width="80" height="150" rx="14" fill="url(#ccCap)"/>
      <rect x="70" y="150" width="80" height="16" rx="4" fill="#042116"/>
      <rect x="82" y="34" width="10" height="110" rx="5" fill="rgba(255,255,255,0.18)"/>
      {/* neck */}
      <rect x="84" y="166" width="52" height="20" rx="4" fill="#D8D2C8"/>
      {/* tube body */}
      <path d="M 78,186 L 142,186 Q 150,186 150,200 L 150,400 Q 150,416 134,416 L 86,416 Q 70,416 70,400 L 70,200 Q 70,186 78,186 Z" fill="url(#ccBody)"/>
      <rect x="84" y="196" width="10" height="206" rx="5" fill="rgba(255,255,255,0.4)"/>
      {/* label */}
      <rect x="74" y="250" width="72" height="120" rx="3" fill="#FAF8F5" opacity="0.96"/>
      <text x="110" y="276" text-anchor="middle" font-family="Playfair Display, serif" font-size="14" font-weight="600" letter-spacing="1.2" fill="#72243E">ROOH</text>
      <text x="110" y="289" text-anchor="middle" font-family="Playfair Display, serif" font-size="7.5" letter-spacing="2.5" fill="#1A1410">BEAUTY</text>
      <line x1="86" y1="300" x2="134" y2="300" stroke="#0B4A32" stroke-width="0.75"/>
      <text x="110" y="318" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="6.5" letter-spacing="0.4" fill="#1A1410">BLUR &amp; BALANCE</text>
      <text x="110" y="338" text-anchor="middle" font-family="DM Mono, monospace" font-size="8.5" letter-spacing="1" fill="#0B4A32">{shadeCode}</text>
      <text x="110" y="356" text-anchor="middle" font-family="DM Sans, sans-serif" font-size="5.5" letter-spacing="0.8" fill="rgba(26,20,16,0.6)">8 ML · VIT C + ZINC</text>
    </svg>
  );
}

/* LIP — slim gloss tube with click cap + wand */
function LipMock({ color = "#D85786", shadeCode = "L-09", size = 1 }) {
  return (
    <svg className="mock-svg" viewBox="0 0 180 440" width={180 * size} height={440 * size}
         xmlns="http://www.w3.org/2000/svg" aria-label="Glow & Go Lip Treatment Gloss">
      <defs>
        <linearGradient id="lpBody" x1="0" x2="1">
          <stop offset="0" stop-color={color} stop-opacity="0.78"/>
          <stop offset="0.5" stop-color={color}/>
          <stop offset="1" stop-color={color} stop-opacity="0.66"/>
        </linearGradient>
        <linearGradient id="lpCap" x1="0" x2="1">
          <stop offset="0" stop-color="#161024"/>
          <stop offset="0.5" stop-color="#26215C"/>
          <stop offset="1" stop-color="#100B1E"/>
        </linearGradient>
      </defs>
      <ellipse cx="90" cy="424" rx="44" ry="10" fill="rgba(0,0,0,0.16)"/>
      {/* click cap */}
      <rect x="62" y="20" width="56" height="150" rx="10" fill="url(#lpCap)"/>
      <circle cx="90" cy="14" r="11" fill="#FAF8F5" stroke="#26215C" stroke-width="1.5"/>
      <rect x="72" y="38" width="8" height="112" rx="4" fill="rgba(255,255,255,0.2)"/>
      {/* neck */}
      <rect x="74" y="170" width="32" height="16" rx="3" fill="#D8D2C8"/>
      {/* glass tube */}
      <rect x="64" y="186" width="52" height="230" rx="14" fill="url(#lpBody)"/>
      <rect x="72" y="198" width="8" height="200" rx="4" fill="rgba(255,255,255,0.42)"/>
      {/* product meniscus */}
      <rect x="64" y="220" width="52" height="196" rx="14" fill={color} opacity="0.6"/>
      {/* vertical brand */}
      <text x="90" y="300" text-anchor="middle" font-family="Playfair Display, serif" font-size="13" font-style="italic" fill="#FAF8F5" transform="rotate(-90 90 300)">ROOH BEAUTY</text>
      {/* shade code chip */}
      <rect x="70" y="372" width="40" height="22" rx="4" fill="#FAF8F5" opacity="0.95"/>
      <text x="90" y="387" text-anchor="middle" font-family="DM Mono, monospace" font-size="9" letter-spacing="0.5" fill="#72243E">{shadeCode}</text>
    </svg>
  );
}

function ProductMock({ which, color, shadeCode, size }) {
  if (which === "concealer") return <ConcealerMock color={color} shadeCode={shadeCode} size={size} />;
  if (which === "lip") return <LipMock color={color} shadeCode={shadeCode} size={size} />;
  return <FoundationMock color={color} shadeCode={shadeCode} size={size} />;
}

/* ON-SHELF SCENE — the trio styled like a retail shelf shot */
function ShelfScene() {
  return (
    <div className="shelf-scene">
      <div className="shelf-cap">As it lands on shelf</div>
      <div className="shelf-row">
        <div className="shelf-item">
          <FoundationMock color="#C99775" shadeCode="W-03" size={0.62} />
          <span className="shelf-tag">Foundation · $26</span>
        </div>
        <div className="shelf-item">
          <ConcealerMock color="#C9A578" shadeCode="CC-04" size={0.6} />
          <span className="shelf-tag">Concealer · $20</span>
        </div>
        <div className="shelf-item">
          <LipMock color="#D85786" shadeCode="L-09" size={0.62} />
          <span className="shelf-tag">Lip · $18</span>
        </div>
      </div>
      <div className="shelf-plank"></div>
      <div className="shelf-brandline">ROOH · BEAUTY — COLOUR · CARE · CONFIDENCE</div>
    </div>
  );
}

Object.assign(window, { FoundationMock, ConcealerMock, LipMock, ProductMock, ShelfScene });
