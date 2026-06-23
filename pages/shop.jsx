/* ============== SHOP PAGE ============== */
function ShopPage({ cart, setPage }) {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
  useScrollReveal([filter]);

  // sliding filter indicator
  const barRef = useRef(null);
  const [ind, setInd] = useState({ x: 0, w: 0 });
  useEffect(() => {
    if (!barRef.current) return;
    const active = barRef.current.querySelector(".filter-btn.active");
    if (active) {
      setInd({ x: active.offsetLeft, w: active.offsetWidth });
    }
  }, [filter]);

  return (
    <main data-screen-label="Shop">
      <section className="shop-hero">
        <div className="container">
          <div className="eyebrow" data-reveal>Shop</div>
          <h1 style={{ marginTop: 16 }} data-reveal>
            The <span className="accent">Collection.</span>
          </h1>
          <p data-reveal style={{'--reveal-delay':'120ms'}}>82 shades. Three hero products. All formulated for sensitive skin.</p>
        </div>
      </section>

      <div className="filter-bar">
        <div className="container filter-inner" ref={barRef}>
          <span
            className="filter-indicator"
            style={{ transform: `translateX(${ind.x}px)`, width: ind.w }}
          ></span>
          {["All", "Foundation", "Concealer", "Lip"].map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f === "All" ? "All products" : f}
            </button>
          ))}
        </div>
      </div>

      <section className="section-sm">
        <div className="container">
          <div className="product-grid" key={filter}>
            {filtered.map((p, i) => (
              <div key={p.id} data-reveal style={{'--reveal-delay': `${i * 80}ms`}}>
                <ProductCard product={p} onAdd={cart.add} setPage={setPage} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ProductCard({ product, onAdd, setPage }) {
  const [shadeIdx, setShadeIdx] = useState(0);
  const [hoverIdx, setHoverIdx] = useState(null);
  const [added, setAdded] = useState(false);
  const [tappedDot, setTappedDot] = useState(null);
  const previewRef = useRef(null);

  const displayIdx = hoverIdx ?? shadeIdx;
  const shade = product.shades[displayIdx];
  const selectedShade = product.shades[shadeIdx];
  const bg = shade.color + "1F";

  const handleSelect = (i) => {
    setShadeIdx(i);
    setTappedDot(i);
    setTimeout(() => setTappedDot(null), 420);
  };

  const handleAdd = () => {
    onAdd(product, selectedShade);
    if (previewRef.current) flyToCart(previewRef.current, selectedShade.color);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const goPdp = () => setPage("product", product.id);

  return (
    <article className="product-card">
      <button className={`product-preview accent-${product.accent}`} style={{ background: bg }} ref={previewRef} onClick={goPdp} aria-label={`View ${product.name}`}>
        <ProductMock which={product.mock} color={shade.color} shadeCode={shade.code} size={0.52} />
        <span className="product-preview-view">View product →</span>
      </button>
      <div className="label">{product.category} · {product.shadeCount}</div>
      <h3 className="product-card-name" onClick={goPdp}>{product.name}</h3>
      <div className="shade-name" key={shade.name}>{shade.name}</div>
      <p className="desc">{product.desc}</p>
      <div className="shade-dots" onMouseLeave={() => setHoverIdx(null)}>
        {product.shades.map((s, i) => (
          <button
            key={i}
            className={`shade-dot ${i === shadeIdx ? "active" : ""} ${tappedDot === i ? "tap" : ""}`}
            style={{ background: s.color }}
            onClick={() => handleSelect(i)}
            onMouseEnter={() => setHoverIdx(i)}
            aria-label={s.name}
            title={s.name}
          ></button>
        ))}
        <button className="shade-dot-more" onClick={goPdp} title="See all shades">+{flatten(product.shadeGroups).length + (product.correctors ? product.correctors.length : 0) - product.shades.length}</button>
      </div>
      <div className="active-chips">
        {product.actives.map((a, i) => (
          <span key={i} className="active-chip">{a}</span>
        ))}
      </div>
      <div className="card-foot">
        <span className="card-price">${product.price}</span>
        <button className={`add-btn ${added ? "added" : ""}`} onClick={handleAdd}>
          <span className="label">{added ? "Added ✓" : "Add to Bag"}</span>
        </button>
      </div>
    </article>
  );
}

window.ShopPage = ShopPage;
