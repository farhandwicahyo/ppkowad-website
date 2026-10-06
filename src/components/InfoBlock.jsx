import { Link } from 'react-router-dom';
import CountUp from './CountUp.jsx';

// Blok teks di antara section bergambar: judul + deskripsi + tombol, lalu 3 angka besar
export default function InfoBlock({ eyebrow, title, text, cta, stats = [] }) {
  return (
    <section className="info-block">
      <div className="info-block-inner">
        <div className="info-block-top">
          <div>
            <p className="info-block-eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
          </div>
          <p className="info-block-text">{text}</p>
          {cta && (
            <Link className="pill-btn pill-btn--dark" to={cta.to}>
              {cta.label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          )}
        </div>

        {stats.length > 0 && (
          <div className="info-block-stats">
            {stats.map((s) => (
              <div className="info-stat" key={s.label}>
                <p className="info-stat-label">{s.label}</p>
                <p className="info-stat-value"><CountUp value={s.value} /></p>
                <p className="info-stat-caption">{s.caption}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
