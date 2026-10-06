import { useEffect, useRef, useState } from 'react';

const DURATION_MS = 1800;

// "1.123" -> 1123 (format ribuan dipertahankan), "2014" -> 2014 (tanpa titik ribuan)
function parse(value) {
  const text = String(value);
  return { target: Number(text.replace(/\./g, '')), grouped: text.includes('.') };
}

const format = (n, grouped) => (grouped ? n.toLocaleString('id-ID') : String(n));

// angka menghitung naik dari 0 ke `value` sekali, saat elemen terlihat di layar
export default function CountUp({ value }) {
  const { target, grouped } = parse(value);
  const ref = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || Number.isNaN(target)) return;

    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) { setCurrent(target); return; }

    let raf;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / DURATION_MS, 1);
        setCurrent(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { io.disconnect(); run(); }
    }, { threshold: 0.4 });
    io.observe(el);

    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [target]);

  return <span ref={ref}>{Number.isNaN(target) ? value : format(current, grouped)}</span>;
}
