/* ============== Interaction utilities ============== */

// Scroll reveal — adds .in to elements with [data-reveal] when they enter the viewport
function useScrollReveal(deps = []) {
  React.useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]:not(.in)");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line
  }, deps);
}

// Fly a colored swatch from a source element to the bag button in the nav
function flyToCart(sourceEl, color) {
  const bag = document.querySelector(".bag-btn");
  if (!bag || !sourceEl) return;
  const src = sourceEl.getBoundingClientRect();
  const dst = bag.getBoundingClientRect();

  const dot = document.createElement("span");
  dot.className = "fly-dot";
  dot.style.background = color;
  dot.style.left = `${src.left + src.width / 2 - 14}px`;
  dot.style.top = `${src.top + src.height / 2 - 14}px`;
  document.body.appendChild(dot);

  // force reflow then animate
  requestAnimationFrame(() => {
    dot.style.transform = `translate(${dst.left + dst.width / 2 - (src.left + src.width / 2)}px, ${
      dst.top + dst.height / 2 - (src.top + src.height / 2)
    }px) scale(0.35)`;
    dot.style.opacity = "0.2";
  });

  setTimeout(() => {
    dot.remove();
    bag.classList.add("pop");
    setTimeout(() => bag.classList.remove("pop"), 480);
  }, 700);
}

// Smooth cross-fade between page contents
function PageFade({ pageKey, children }) {
  const [render, setRender] = React.useState({ key: pageKey, kids: children });
  const [phase, setPhase] = React.useState("in"); // in | out
  React.useEffect(() => {
    if (pageKey !== render.key) {
      setPhase("out");
      const t = setTimeout(() => {
        setRender({ key: pageKey, kids: children });
        setPhase("in");
      }, 220);
      return () => clearTimeout(t);
    } else {
      setRender({ key: pageKey, kids: children });
    }
  }, [pageKey, children]);
  return (
    <div className={`page-fade ${phase === "in" ? "in" : "out"}`} key={render.key}>
      {render.kids}
    </div>
  );
}

Object.assign(window, { useScrollReveal, flyToCart, PageFade });
