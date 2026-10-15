import { Link, useLocation } from 'react-router-dom';

// pita ajakan bergabung: lebar penuh, kuning PP-KOWAD, tampil di semua halaman kecuali Home
export default function JoinBanner() {
  const { pathname } = useLocation();
  if (pathname === '/') return null;

  // di halaman Kontak formulirnya sudah ada di atas, jadi tombolnya mengarah ke formulir itu
  const onContact = pathname === '/contact';

  return (
    <section className="join-banner">
      <div className="join-banner-inner">
        <div>
          <h2>Ingin bergabung bersama kami?</h2>
          <p>Hubungi pengurus pusat atau ketua wilayah Anda untuk mengikuti kegiatan PP-KOWAD berikutnya.</p>
        </div>
        <Link className="pill-btn join-banner-btn" to={onContact ? '/contact#cName' : '/contact'}>
          {onContact ? 'Isi Formulir' : 'Hubungi Kami'}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </Link>
      </div>
    </section>
  );
}
