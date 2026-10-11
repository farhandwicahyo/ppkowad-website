import { Link } from 'react-router-dom';
import ProgramCarousel from '../components/ProgramCarousel.jsx';
import ProgramTiles from '../components/ProgramTiles.jsx';
import AboutBanner from '../components/AboutBanner.jsx';
import InfoBlock from '../components/InfoBlock.jsx';
import ContactSection from '../components/ContactSection.jsx';

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);

// Berita: 1 kartu besar + 2 kartu kecil. Masih placeholder; isi `title`, `date`, dan `img` (nama file di public/assets) bila sudah ada
const BERITA = [
  { title: 'NAMA BERITA' },
  { title: 'NAMA BERITA' },
  { title: 'NAMA BERITA' },
];

function Highlights({ items = BERITA }) {
  return (
    <div className={'hl-grid' + (items.length <= 3 ? ' hl-grid--3' : '')}>
      {items.map((n, i) => (
        <Link className={'hl-card' + (i === 0 ? ' hl-card--lead' : '')} to="/news" key={i}>
          {n.img && <img src={'/assets/' + n.img} alt="" />}
          <div className="hl-body">
            <span className="hl-tag">Berita</span>
            <h3>{n.title}</h3>
            {n.date && <span className="hl-date"><CalendarIcon />{n.date}</span>}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-grid">
          <div>
            <p className="eyebrow">PERSATUAN PURNAWIRAWAN KOWAD</p>
            <h1>Merajut Persatuan dan Kesatuan, Mendukung Indonesia <span className="accent">Maju.</span></h1>
            <p className="desc">Purna dalam dinas, abadi dalam pengabdian. PP-KOWAD menghimpun purnawirawan Korps Wanita Angkatan Darat di 16 wilayah untuk terus memelihara jiwa kesatuan dan persatuan dalam kehidupan bermasyarakat, berbangsa, dan bernegara.</p>
          </div>
        </div>
      </section>

      <InfoBlock
        // eyebrow="Tentang Kami"
        title="Wadah Purnawirawan KOWAD di Seluruh Indonesia"
        text="Persatuan Purnawirawan KOWAD menghimpun purnawirawan Korps Wanita Angkatan Darat dalam semangat kebersamaan. Terdaftar sebagai ormas di Kemendagri sejak 2017 dan resmi berbadan hukum sejak 10 Mei 2025."
        // cta={{ label: 'Perjalanan Kami', to: '/about' }}
        stats={[
          { label: 'Berdiri', value: '2014'},
          { label: 'Wilayah', value: '16'},
          { label: 'Anggota', value: '1.123'},
        ]}
      />

      <AboutBanner />

      <InfoBlock
        // eyebrow="Program"
        stack
        title={<>Program Kerja 2026 – 2030<span className="phj"><span className="phj-peace">Peace,</span> <span className="phj-happy">Happy,</span> <span className="phj-and">and</span> <span className="phj-joy">Joy</span></span></>}
        text="Tenteram, bahagia, dan menikmati kebersamaan di seluruh 16 wilayah, melalui kegiatan yang sukarela, ramah usia, dan sesuai kemampuan anggota."
        cta={{ label: 'Lihat Program', to: '/program' }}
      />

      <section className="program-carousel-section">
        <ProgramCarousel />
      </section>

      <InfoBlock
        // eyebrow="Kegiatan"
        title="Kegiatan PP-KOWAD"
        text="Rangkaian kegiatan PP-KOWAD bersama anggota di 16 wilayah, mulai dari kebersamaan rutin bulanan, HUT setiap September, hingga musyawarah nasional."
        cta={{ label: 'Lihat Kegiatan', to: '/events' }}
      />
      <section className="section" id="kegiatan">
        <ProgramTiles />
      </section>

      <section className="section soft hl-section">
        <div className="hl-wrap">
          <div className="hl-head">
            <div>
              {/* <p className="info-block-eyebrow">Berita</p> */}
              <h2>PP KOWAD dalam Aksi</h2>
            </div>
            <p className="info-block-text">Ikuti kabar dan cerita terbaru dari PP KOWAD, dari pandangan para pakar hingga aksi kemanusiaan di lapangan.</p>
            <Link className="pill-btn pill-btn--dark" to="/news">
              Lihat Semua
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
          </div>
          <Highlights />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
