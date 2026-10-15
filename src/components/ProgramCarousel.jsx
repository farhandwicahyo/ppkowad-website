import { useLayoutEffect, useRef, useState } from 'react';
import { PROGRAMS } from '../data/programs.js';

const N = PROGRAMS.length;
// Tiga set kartu [klon-sebelum][asli][klon-sesudah] -> carousel infinite loop
const ITEMS = [0, 1, 2].flatMap((set) => PROGRAMS.map((p, i) => ({ ...p, real: i, clone: set !== 1, key: set + '-' + i })));
const realOf = (pos) => ((pos % N) + N) % N;

export default function ProgramCarousel() {
  const [pos, setPos] = useState(N); // mulai di awal set "asli"
  const [animate, setAnimate] = useState(true);
  const [offset, setOffset] = useState(0);
  const firstCard = useRef(null);
  const active = realOf(pos);

  // hitung translateX dari lebar kartu aktual (+16px gap), hitung ulang saat resize
  useLayoutEffect(() => {
    const compute = () => {
      if (firstCard.current) setOffset(pos * (firstCard.current.offsetWidth + 16));
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, [pos]);

  // setelah animasi selesai di zona klon, lompat diam-diam ke posisi setara di set asli
  const onTransitionEnd = (e) => {
    if (e.propertyName !== 'transform') return;
    if (pos >= N * 2 || pos < 0) {
      setAnimate(false);
      setPos((p) => (p >= N * 2 ? p - N : p + N));
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    }
  };

  return (
    <div className="program-carousel">
      <div className="pc-image">
        {PROGRAMS.map((p, i) => (
          <div className={'pc-image-panel' + (i === active ? ' active' : '')} key={p.title}>
            <img src={'/assets/' + p.img} alt={p.title} />
          </div>
        ))}
      </div>

      <div className="pc-panel">
        <div className="pc-cards-wrap">
          <div className="pc-track-viewport">
            <div
              className="pc-cards"
              style={{ transform: 'translateX(' + -offset + 'px)', transition: animate ? undefined : 'none' }}
              onTransitionEnd={onTransitionEnd}
            >
              {ITEMS.map((it, i) => (
                <div
                  key={it.key}
                  ref={i === 0 ? firstCard : null}
                  className={'pc-card' + (it.real === active ? ' active' : '') + (it.clone ? ' pc-clone' : '')}
                  onClick={() => setPos(i)}
                >
                  <h3>{it.title}</h3>
                  <span className="pc-line"></span>
                  <p>{it.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pc-nav">
            <button className="pc-btn" type="button" aria-label="Program sebelumnya" onClick={() => setPos((p) => p - 1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" aria-hidden="true"><path d="M20 12H4M10 5l-7 7 7 7" /></svg>
            </button>
            <button className="pc-btn" type="button" aria-label="Program berikutnya" onClick={() => setPos((p) => p + 1)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" aria-hidden="true"><path d="M4 12h16M14 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
