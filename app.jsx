const { useState, useEffect, useCallback, useMemo, useRef } = React;

/* Products / data now live in data.jsx (loaded first) */

/* ============== State ============== */
function useCart() {
  const [items, setItems] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  const add = (product, shade) => {
    const key = `${product.id}-${shade.name}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.key === key);
      if (existing) {
        return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + 1 } : i));
      }
      return [
        ...prev,
        {
          key,
          productId: product.id,
          name: product.name,
          shade: shade.name,
          color: shade.color,
          price: product.price,
          qty: 1,
        },
      ];
    });
    setToast({ name: product.name, shade: shade.name, color: shade.color });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2600);
  };

  const remove = (key) => setItems((prev) => prev.filter((i) => i.key !== key));
  const clear = () => setItems([]);
  const setQty = (key, delta) =>
    setItems((prev) =>
      prev
        .map((i) => (i.key === key ? { ...i, qty: Math.max(0, i.qty + delta) } : i))
        .filter((i) => i.qty > 0)
    );
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.price, 0);

  return { items, count, total, add, remove, clear, setQty, drawerOpen, setDrawerOpen, toast };
}

/* ============== Nav ============== */
function Nav({ page, setPage, cart }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pages = [
    { id: "home", label: "Home" },
    { id: "shop", label: "Shop" },
    { id: "about", label: "About" },
    { id: "school", label: "Skin School" },
  ];

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <button className="brand" onClick={() => setPage("home")}>
          ROOH<span className="brand-dot"></span>BEAUTY
        </button>
        <div className="nav-links">
          {pages.map((p) => (
            <button
              key={p.id}
              className={`nav-link ${page === p.id || (p.id === "shop" && page === "product") ? "active" : ""}`}
              onClick={() => setPage(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>
        <button className="bag-btn" onClick={() => cart.setDrawerOpen(true)}>
          BAG
          {cart.count > 0 && <span className="bag-count">{cart.count}</span>}
        </button>
      </div>
    </nav>
  );
}

/* ============== Footer ============== */
function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>ROOH <span style={{ opacity: 0.5 }}>·</span> BEAUTY</h3>
            <div className="tag">Colour · Care · Confidence.</div>
            <p>Skincare-infused color cosmetics formulated for sensitive, acne-prone, hyperpigmented skin and two-toned lips.</p>
          </div>
          <div className="footer-col">
            <h5>Shop</h5>
            <ul>
              <li><a onClick={() => setPage("shop")}>Foundation</a></li>
              <li><a onClick={() => setPage("shop")}>Concealer</a></li>
              <li><a onClick={() => setPage("shop")}>Lip</a></li>
              <li><a onClick={() => setPage("shop")}>The Collection</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Learn</h5>
            <ul>
              <li><a onClick={() => setPage("school")}>Skin School</a></li>
              <li><a onClick={() => setPage("school")}>Ingredient Guide</a></li>
              <li><a onClick={() => setPage("shop")}>Shade Finder</a></li>
              <li><a onClick={() => setPage("about")}>Our Story</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Help</h5>
            <ul>
              <li><a>Shipping</a></li>
              <li><a>Contact</a></li>
              <li><a>FAQ</a></li>
              <li><a>Wholesale</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copy">© 2027 Rooh Beauty LLC · Jersey City, NJ</div>
          <div className="footer-pills">
            <span className="footer-pill">Cruelty-Free</span>
            <span className="footer-pill">Vegan</span>
            <span className="footer-pill">Fragrance-Free</span>
            <span className="footer-pill">Derm-Tested</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============== Cart Drawer ============== */
function CartDrawer({ cart, onCheckout }) {
  return (
    <React.Fragment>
      <div
        className={`drawer-overlay ${cart.drawerOpen ? "open" : ""}`}
        onClick={() => cart.setDrawerOpen(false)}
      ></div>
      <aside className={`drawer ${cart.drawerOpen ? "open" : ""}`}>
        <div className="drawer-head">
          <h3>Your Bag</h3>
          <button className="drawer-close" onClick={() => cart.setDrawerOpen(false)} aria-label="Close">✕</button>
        </div>
        <div className="drawer-body">
          {cart.items.length === 0 ? (
            <div className="drawer-empty">
              <h4>Your bag is empty.</h4>
              <p>Shades chosen with care will appear here.</p>
            </div>
          ) : (
            cart.items.map((item) => (
              <div key={item.key} className="cart-item">
                <div className="cart-swatch" style={{ background: item.color }}></div>
                <div>
                  <div className="cart-name">{item.name}</div>
                  <div className="cart-shade">{item.shade}</div>
                  <div className="qty-stepper">
                    <button onClick={() => cart.setQty(item.key, -1)} aria-label="Decrease">−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => cart.setQty(item.key, 1)} aria-label="Increase">+</button>
                    <button className="cart-remove" onClick={() => cart.remove(item.key)}>Remove</button>
                  </div>
                </div>
                <div className="cart-price">${item.price * item.qty}</div>
              </div>
            ))
          )}
        </div>
        <div className="drawer-foot">
          <div className="cart-total">
            <span>Total</span>
            <span>${cart.total}</span>
          </div>
          <button
            className="btn btn-primary checkout-btn"
            disabled={cart.items.length === 0}
            onClick={onCheckout}
          >
            Checkout
          </button>
          <div className="cart-ship">
            {cart.total >= 50 || cart.total === 0
              ? "Free shipping over $50."
              : `Add $${50 - cart.total} for free shipping.`}
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
}

/* ============== Toast ============== */
function Toast({ toast }) {
  const [visible, setVisible] = React.useState(false);
  const [content, setContent] = React.useState(null);
  React.useEffect(() => {
    if (toast) {
      setContent(toast);
      // next frame -> trigger show transition
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      const t = setTimeout(() => setContent(null), 380);
      return () => clearTimeout(t);
    }
  }, [toast]);
  if (!content) return null;
  return (
    <div className={`toast ${visible ? "show" : ""}`}>
      <span className="sw" style={{ background: content.color }}></span>
      <span>Added <em>{content.shade}</em> to bag</span>
    </div>
  );
}

Object.assign(window, { useCart, Nav, Footer, CartDrawer, Toast });
