import { Link } from 'react-router-dom';

const PROGRAMS = [
  'Pendidikan & Forum Ilmiah',
  'Pelatihan & Pengembangan Kapasitas',
  'Kolaborasi Strategis',
  'Pengabdian Masyarakat',
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="site-logo" to="/">
            <span className="logo-mark">
              <img src="/assets/logo-ppkowad.png" alt="Logo PPKOWAD" />
            </span>
            <span className="logo-text">PP KOWAD</span>
          </Link>
          <p>PERSATUAN PURNAWIRAWAN KOWAD untuk belajar, berkolaborasi, dan berkontribusi bagi dunia kesehatan.</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.5 1.6-1.5h1.6V3.3C16.4 3.2 15.3 3 14 3c-2.6 0-4.4 1.6-4.4 4.5v2.3H7v3.2h2.6V21h3.9Z" /></svg></a>
            <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4l7.3 9.6L4.4 20h2l6-6.7L17 20h4l-7.6-10 6.6-7.4h-2l-5.5 6.1L8 4H4Z" /></svg></a>
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.9 3.5A1.6 1.6 0 1 1 3.3 5a1.6 1.6 0 0 1 1.6-1.5ZM3.6 8.6h2.6V21H3.6V8.6ZM9.3 8.6h2.5v1.7h.03c.35-.66 1.2-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8V21H16v-5.6c0-1.35-.02-3.1-1.9-3.1-1.9 0-2.2 1.47-2.2 3v5.7H9.3V8.6Z" /></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" /></svg></a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Tautan Cepat</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Tentang Kami</Link></li>
            <li><Link to="/events">Agenda Acara</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Program</h4>
          <ul>
            {PROGRAMS.map((p) => (
              <li key={p}><Link to="/#program">{p}</Link></li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Bantuan</h4>
          <ul>
            <li><Link to="/contact">FAQ</Link></li>
            <li><Link to="/contact">Hubungi Kami</Link></li>
            <li><Link to="/daftar">JOIN US</Link></li>
            <li><Link to="/news">Berita</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Kontak</h4>
          <ul className="footer-contact">
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg><span>Jl Percetakan Negara XI No. 38 RT 07/RW 04, Kel. Rawasari, Cempaka Putih, Jakarta Pusat 10510</span></li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 1h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L7.1 8.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.9 2Z" /></svg><span>+62 851-7783-8869</span></li>
            <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg><span>PP KOWAD@gmail.com</span></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2026 PP KOWAD. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}
