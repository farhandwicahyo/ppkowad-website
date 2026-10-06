import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export default function AboutBanner({
  image = '/assets/ABC01848.jpg',
  title = 'Tentang Kami',
  text = 'Persatuan Purnawirawan KOWAD berdiri sejak 20 September 2014 dan resmi berbadan hukum sejak 10 Mei 2025, menghimpun 1.123 anggota di 16 wilayah.',
}) {
  return (
    <section className="about-banner" style={{ '--banner-image': `url('${image}')` }}>
      <div className="about-banner-inner">
        <h2>{title}</h2>
        <p className="about-banner-text">{text}</p>
        <div className="about-banner-actions">
          <Link className="pill-btn" to="/about">Selengkapnya <ArrowIcon /></Link>
          <Link className="pill-btn" to="/about#jajaran">Jajaran Anggota <ArrowIcon /></Link>
        </div>
      </div>
    </section>
  );
}
