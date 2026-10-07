import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProgramTiles from '../components/ProgramTiles.jsx';
import AboutBanner from '../components/AboutBanner.jsx';
import InfoBlock from '../components/InfoBlock.jsx';
import { NEWS } from '../data/news.js';

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);

// berita yang punya artikel = "Berita", sisanya = "Kegiatan"
const TABS = [
  { id: 'semua', label: 'Semua', match: () => true },
  { id: 'berita', label: 'Berita', match: (n) => Boolean(n.article) },
  { id: 'kegiatan', label: 'Kegiatan', match: (n) => !n.article },
];

// tab filter + 1 kartu besar + 4 kartu kecil, diambil dari yang terbaru
function Highlights() {
  const [tab, setTab] = useState('semua');
  const items = NEWS.filter(TABS.find((t) => t.id === tab).match).slice(0, 5);

  return (
    <>
      <div className="hl-tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className={tab === t.id ? 'active' : undefined}
            onClick={() => setTab(t.id)}
          >{t.label}</button>
        ))}
      </div>

      <div className="hl-grid">
        {items.map((n, i) => (
          <Link className={'hl-card' + (i === 0 ? ' hl-card--lead' : '')} to="/news" key={n.title}>
            <img src={'/assets/' + n.img} alt="" className={n.faceTop ? 'thumb-face-top' : undefined} />
            <div className="hl-body">
              <span className="hl-tag">{n.tag}</span>
              <h3>{n.title}</h3>
              <span className="hl-date"><CalendarIcon />{n.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-grid">
          <div>
            <p className="eyebrow">PERSATUAN PURNAWIRAWAN KOWAD</p>
            <h1>Bersinergi Membangun Ketahanan Kesehatan Indonesia yang Lebih <span className="accent">Tangguh.</span></h1>
            <p className="desc" style={{ textAlign: 'justify' }}>Menjadi organisasi PERSATUAN PURNAWIRAWAN KOWAD yang solid dan bermitra strategis dengan pemerintah dalam membangun serta memperkuat ketahanan kesehatan nasional melalui penerapan ilmu kedokteran militer dan kolaborasi militer-sipil.</p>
            <div className="hero-actions">
              <a className="btn btn-teal" href="#program">Tentang Kami</a>
            </div>
          </div>
        </div>
      </section>

      <InfoBlock
        title="Wadah Purnawirawan KOWAD di Seluruh Indonesia"
        text="Persatuan Purnawirawan KOWAD menghimpun purnawirawan Korps Wanita Angkatan Darat dalam semangat kebersamaan. Terdaftar sebagai ormas di Kemendagri sejak 2017 dan resmi berbadan hukum sejak 10 Mei 2025."
        cta={{ label: 'Perjalanan Kami', to: '/about' }}
        stats={[
          { label: 'Berdiri', value: '2014'},
          { label: 'Wilayah (2024)', value: '16'},
          { label: 'Anggota (2026)', value: '1.123'},
        ]}
      />

      <AboutBanner />

      <InfoBlock
        title="Empat Pilar Program PP KOWAD"
        text="Pendidikan dan forum ilmiah, pelatihan dan pengembangan kapasitas, kolaborasi strategis, serta pengabdian masyarakat untuk memperkuat peran purnawirawan bagi masyarakat."
        cta={{ label: 'Lihat Agenda', to: '/events' }}
        stats={[
          { label: 'Program Strategis', value: '4'},
          { label: 'Ketua Umum (2014 - 2030)', value: '3' },
          { label: 'Federasi Kowani (2024)', value: '111' },
        ]}
      />

      <section className="section" id="program">
        <ProgramTiles />
      </section>

      <section className="section soft hl-section">
        <div className="hl-wrap">
          <div className="hl-head">
            <div>
              <p className="info-block-eyebrow">Sorotan Kegiatan</p>
              <h2>PP KOWAD dalam Aksi</h2>
            </div>
            <p className="info-block-text">Dari forum organisasi hingga pengabdian masyarakat, setiap langkah menjadi bagian dari kontribusi kami untuk Indonesia.</p>
            <Link className="pill-btn pill-btn--dark" to="/news">
              Lihat Semua
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
          <Highlights />
        </div>
      </section>
    </div>
  );
}
