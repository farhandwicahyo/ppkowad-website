import { Link } from 'react-router-dom';

// header sederhana (gaya sama dengan section Agenda): tulisan kecil, judul, pengantar, tombol
export default function ContactSection() {
  return (
    <section className="ag-section">
      <div className="ag-wrap">
        <div className="hl-head">
          <div>
            {/* <p className="info-block-eyebrow">Kontak</p> */}
            <h2>Hubungi Kami</h2>
          </div>
          <p className="info-block-text">Ada pertanyaan seputar keanggotaan, program, atau acara kami? Tim kami siap membantu menjawabnya.</p>
          <Link className="pill-btn pill-btn--dark" to="/contact">
            Kirim Pesan
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
