import React, { useEffect, useRef, useState } from 'react';

function fmt(n) { return n.toLocaleString('en-US'); }

export default function Counter({ n, suffix = '' }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setVal(n);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const t0 = performance.now();
        const DUR = 1300;
        const tick = (t) => {
          const p = Math.min((t - t0) / DUR, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(n * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(e.target);
      });
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [n]);

  return (
    <span ref={ref} className="stat-num" data-count={n} data-suffix={suffix}>
      {fmt(val)}{suffix}
    </span>
  );
}
