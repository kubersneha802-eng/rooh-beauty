/* ============== MAIN APP ============== */
function App() {
  const [page, setPageInternal] = useState("home");
  const [activeProduct, setActiveProduct] = useState("foundation");
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const cart = useCart();

  const setPage = (p, productId) => {
    if (p === "product" && productId) setActiveProduct(productId);
    setPageInternal(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openCheckout = () => {
    cart.setDrawerOpen(false);
    setCheckoutOpen(true);
  };

  let PageEl = null;
  if (page === "home") PageEl = <HomePage setPage={setPage} cart={cart} />;
  else if (page === "shop") PageEl = <ShopPage cart={cart} setPage={setPage} />;
  else if (page === "product") PageEl = <ProductPage productId={activeProduct} cart={cart} setPage={setPage} />;
  else if (page === "about") PageEl = <AboutPage setPage={setPage} />;
  else if (page === "school") PageEl = <SkinSchoolPage setPage={setPage} cart={cart} />;

  const pageKey = page === "product" ? `product-${activeProduct}` : page;

  return (
    <React.Fragment>
      <Nav page={page} setPage={setPage} cart={cart} />
      <PageFade pageKey={pageKey}>{PageEl}</PageFade>
      <Footer setPage={setPage} />
      <CartDrawer cart={cart} onCheckout={openCheckout} />
      <Checkout cart={cart} open={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
      <Toast toast={cart.toast} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
