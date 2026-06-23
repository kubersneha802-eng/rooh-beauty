/* ============== CHECKOUT FLOW ============== */
const { useState: useStateCO } = React;

/* ---- formatting + validation helpers ---- */
function luhnValid(num) {
  const digits = num.replace(/\D/g, "");
  if (digits.length < 13) return false;
  let sum = 0, alt = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let d = parseInt(digits[i], 10);
    if (alt) { d *= 2; if (d > 9) d -= 9; }
    sum += d; alt = !alt;
  }
  return sum % 10 === 0;
}
function cardBrand(num) {
  const d = num.replace(/\D/g, "");
  if (/^4/.test(d)) return "Visa";
  if (/^5[1-5]/.test(d) || /^2[2-7]/.test(d)) return "Mastercard";
  if (/^3[47]/.test(d)) return "Amex";
  if (/^6/.test(d)) return "Discover";
  return "";
}
function fmtCard(v) {
  const d = v.replace(/\D/g, "").slice(0, 16);
  return d.replace(/(.{4})/g, "$1 ").trim();
}
function fmtExpiry(v) {
  const d = v.replace(/\D/g, "").slice(0, 4);
  if (d.length <= 2) return d;
  return d.slice(0, 2) + " / " + d.slice(2);
}

function Field({ label, value, onChange, placeholder, error, type = "text", maxLength, autoComplete, half, full, children }) {
  return (
    <label className={`co-field ${half ? "half" : ""} ${full ? "full" : ""}`}>
      <span className="co-label">{label}</span>
      {children || (
        <input
          className={`co-input ${error ? "err" : ""}`}
          type={type}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {error && <span className="co-err">{error}</span>}
    </label>
  );
}

function Checkout({ cart, open, onClose }) {
  const [step, setStep] = useStateCO(1); // 1 info, 2 payment, 3 confirmed
  const [processing, setProcessing] = useStateCO(false);
  const [orderId, setOrderId] = useStateCO("");
  const [form, setForm] = useStateCO({
    email: "", first: "", last: "", address: "", apt: "", city: "", state: "", zip: "",
    card: "", expiry: "", cvc: "", nameOnCard: "",
  });
  const [pay, setPay] = useStateCO("card"); // card | applepay
  const [errors, setErrors] = useStateCO({});
  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }));

  React.useEffect(() => {
    if (open) { setStep(1); setErrors({}); setProcessing(false); }
  }, [open]);

  const subtotal = cart.total;
  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 5;
  const tax = Math.round(subtotal * 0.06625 * 100) / 100; // NJ
  const grand = Math.round((subtotal + shipping + tax) * 100) / 100;

  const validateInfo = () => {
    const e = {};
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.first.trim()) e.first = "Required";
    if (!form.last.trim()) e.last = "Required";
    if (!form.address.trim()) e.address = "Required";
    if (!form.city.trim()) e.city = "Required";
    if (!form.state.trim()) e.state = "Required";
    if (!/^\d{5}(-\d{4})?$/.test(form.zip.trim())) e.zip = "Enter a 5-digit ZIP.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validatePayment = () => {
    if (pay === "applepay") return true;
    const e = {};
    if (!form.nameOnCard.trim()) e.nameOnCard = "Required";
    if (!luhnValid(form.card)) e.card = "Enter a valid card number.";
    const exp = form.expiry.replace(/\D/g, "");
    if (exp.length !== 4) e.expiry = "MM/YY";
    else {
      const mm = parseInt(exp.slice(0, 2), 10);
      const yy = parseInt(exp.slice(2), 10) + 2000;
      const now = new Date();
      if (mm < 1 || mm > 12) e.expiry = "Bad month";
      else if (yy < now.getFullYear() || (yy === now.getFullYear() && mm < now.getMonth() + 1)) e.expiry = "Expired";
    }
    const cvcLen = cardBrand(form.card) === "Amex" ? 4 : 3;
    if (form.cvc.replace(/\D/g, "").length !== cvcLen) e.cvc = `${cvcLen} digits`;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (step === 1 && validateInfo()) setStep(2);
  };

  const placeOrder = () => {
    if (!validatePayment()) return;
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setOrderId("RB" + Math.random().toString(36).slice(2, 8).toUpperCase());
      setStep(3);
    }, 1700);
  };

  const finishAndClose = () => {
    cart.clear();
    onClose();
  };

  if (!open) return null;
  const brand = cardBrand(form.card);

  return (
    <div className="co-overlay" onClick={(e) => { if (e.target.classList.contains("co-overlay") && step !== 3) onClose(); }}>
      <div className="co-modal">
        {/* LEFT: form */}
        <div className="co-main">
          <div className="co-head">
            <div className="co-brand">ROOH<span className="brand-dot"></span>BEAUTY</div>
            {step !== 3 && <button className="co-x" onClick={onClose} aria-label="Close">✕</button>}
          </div>

          {step !== 3 && (
            <div className="co-steps">
              <span className={`co-step ${step >= 1 ? "on" : ""}`}>1 · Information</span>
              <span className="co-step-line"></span>
              <span className={`co-step ${step >= 2 ? "on" : ""}`}>2 · Payment</span>
            </div>
          )}

          {step === 1 && (
            <div className="co-body">
              <h3 className="co-title">Where are we sending it?</h3>
              <div className="co-grid">
                <Field full label="Email" value={form.email} onChange={set("email")} placeholder="you@email.com" error={errors.email} type="email" autoComplete="email" />
                <Field half label="First name" value={form.first} onChange={set("first")} placeholder="Sneha" error={errors.first} autoComplete="given-name" />
                <Field half label="Last name" value={form.last} onChange={set("last")} placeholder="Kuber" error={errors.last} autoComplete="family-name" />
                <Field full label="Address" value={form.address} onChange={set("address")} placeholder="123 Grove Street" error={errors.address} autoComplete="address-line1" />
                <Field full label="Apartment, suite (optional)" value={form.apt} onChange={set("apt")} placeholder="Apt 4B" autoComplete="address-line2" />
                <Field half label="City" value={form.city} onChange={set("city")} placeholder="Jersey City" error={errors.city} autoComplete="address-level2" />
                <Field label="State" value={form.state} onChange={set("state")} placeholder="NJ" error={errors.state} maxLength={2} autoComplete="address-level1" />
                <Field label="ZIP" value={form.zip} onChange={set("zip")} placeholder="07302" error={errors.zip} maxLength={10} autoComplete="postal-code" />
              </div>
              <div className="co-actions">
                <button className="co-link" onClick={onClose}>← Back to bag</button>
                <button className="btn btn-primary" onClick={next}>Continue to payment →</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="co-body">
              <h3 className="co-title">How would you like to pay?</h3>

              <div className="co-paytabs">
                <button className={`co-paytab ${pay === "card" ? "on" : ""}`} onClick={() => setPay("card")}>
                  <span className="co-paytab-dot"></span> Credit / Debit card
                </button>
                <button className={`co-paytab ${pay === "applepay" ? "on" : ""}`} onClick={() => setPay("applepay")}>
                  <span className="co-applemark"></span> Express pay
                </button>
              </div>

              {pay === "card" ? (
                <div className="co-grid">
                  <Field full label="Name on card" value={form.nameOnCard} onChange={set("nameOnCard")} placeholder="Sneha Kuber" error={errors.nameOnCard} autoComplete="cc-name" />
                  <Field full label="Card number" error={errors.card}>
                    <div className={`co-input co-cardwrap ${errors.card ? "err" : ""}`}>
                      <input
                        className="co-bare"
                        inputMode="numeric"
                        value={form.card}
                        placeholder="4242 4242 4242 4242"
                        onChange={(e) => set("card")(fmtCard(e.target.value))}
                        autoComplete="cc-number"
                      />
                      {brand && <span className="co-brand-badge">{brand}</span>}
                    </div>
                  </Field>
                  <Field half label="Expiry" value={form.expiry} onChange={(v) => set("expiry")(fmtExpiry(v))} placeholder="MM / YY" error={errors.expiry} maxLength={7} autoComplete="cc-exp" />
                  <Field half label="CVC" value={form.cvc} onChange={(v) => set("cvc")(v.replace(/\D/g, "").slice(0, 4))} placeholder="123" error={errors.cvc} maxLength={4} autoComplete="cc-csc" />
                </div>
              ) : (
                <div className="co-express">
                  <p>You'll confirm with Face ID / Touch ID on your device. No card details needed — this is a demo express flow.</p>
                </div>
              )}

              <div className="co-secure">
                <span className="co-lock">🔒</span> Encrypted &amp; secure. We never store card details. (Demo store — no real charge.)
              </div>

              <div className="co-actions">
                <button className="co-link" onClick={() => setStep(1)}>← Information</button>
                <button className="btn btn-primary" onClick={placeOrder} disabled={processing}>
                  {processing ? "Processing…" : `Pay $${grand.toFixed(2)}`}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="co-body co-confirm">
              <div className="co-check">✓</div>
              <h3 className="co-title">You're all set, {form.first || "friend"}.</h3>
              <p className="co-confirm-sub">
                Order <strong>#{orderId}</strong> is confirmed. A receipt is on its way to
                <strong> {form.email}</strong>. Your shades ship from Jersey City within 2 business days.
              </p>
              <div className="co-confirm-card">
                {cart.items.map((i) => (
                  <div key={i.key} className="co-cline">
                    <span className="co-cline-sw" style={{ background: i.color }}></span>
                    <span className="co-cline-name">{i.name} <em>· {i.shade}</em></span>
                    <span className="co-cline-qty">×{i.qty}</span>
                    <span className="co-cline-price">${i.price * i.qty}</span>
                  </div>
                ))}
                <div className="co-cline total">
                  <span>Paid</span>
                  <span>${grand.toFixed(2)}</span>
                </div>
              </div>
              <button className="btn btn-primary" style={{ justifyContent: "center", width: "100%" }} onClick={finishAndClose}>
                Continue shopping
              </button>
            </div>
          )}
        </div>

        {/* RIGHT: order summary */}
        {step !== 3 && (
          <aside className="co-summary">
            <h4 className="co-summary-title">Order summary</h4>
            <div className="co-summary-items">
              {cart.items.map((i) => (
                <div key={i.key} className="co-sline">
                  <div className="co-sline-sw" style={{ background: i.color }}>
                    <span className="co-sline-qty">{i.qty}</span>
                  </div>
                  <div className="co-sline-info">
                    <div className="co-sline-name">{i.name}</div>
                    <div className="co-sline-shade">{i.shade}</div>
                  </div>
                  <div className="co-sline-price">${i.price * i.qty}</div>
                </div>
              ))}
            </div>
            <div className="co-summary-rows">
              <div className="co-srow"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="co-srow"><span>Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
              <div className="co-srow"><span>Tax (NJ)</span><span>${tax.toFixed(2)}</span></div>
            </div>
            <div className="co-grand"><span>Total</span><span>${grand.toFixed(2)}</span></div>
            <div className="co-perk">
              <span>✦</span> Fragrance-free, vegan, and dermatologist tested — every shade in this bag.
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}

window.Checkout = Checkout;
