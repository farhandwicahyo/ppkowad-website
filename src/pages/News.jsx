import { useCallback, useEffect, useState } from 'react';
import PageHero from '../components/PageHero.jsx';

// MODE DEVELOP: semua berita masih placeholder. Saat berita asli sudah ada, isi `img`, `tag`, `title`, `date`, dan `paragraphs`.
const NEWS = Array.from({ length: 6 }, (_, i) => ({ id: i + 1 }));

const LOREM = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
];

function Photo({ className }) {
  return <div className={'news-ph' + (className ? ' ' + className : '')}>FOTO BERITA</div>;
}

function NewsModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="news-modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="news-modal" role="dialog" aria-modal="true" aria-labelledby="newsModalTitle">
        <button className="news-modal-close" type="button" aria-label="Tutup" onClick={onClose}>&times;</button>
        <div className="news-modal-media">
          <div className="news-modal-gallery news-modal-gallery-single">
            <Photo className="news-ph--modal" />
          </div>
        </div>
        <div className="news-modal-body">
          <span className="news-tag">KATEGORI BERITA</span>
          <h3 id="newsModalTitle">JUDUL BERITA</h3>
          <span className="news-date">TANGGAL BERITA</span>
          {LOREM.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </div>
  );
}

function Card({ onOpen }) {
  return (
    <a className="news-card news-card-link" href="#" onClick={(e) => { e.preventDefault(); onOpen(); }}>
      <div className="news-thumb">
        <Photo />
      </div>
      <div className="news-body">
        <span className="news-tag">KATEGORI BERITA</span>
        <h3>JUDUL BERITA</h3>
        <span className="news-date">TANGGAL BERITA</span>
      </div>
    </a>
  );
}

export default function News() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <PageHero
        eyebrow="Berita"
        title="Berita PP-KOWAD"
        text="Ikuti perkembangan, kegiatan, dan kabar terbaru dari organisasi kami."
        image="pengajian-group.jpg"
      />

      <section className="section">
        <div className="news-grid">
          {NEWS.map((n) => <Card key={n.id} onOpen={() => setOpen(true)} />)}
        </div>
      </section>

      {open && <NewsModal onClose={close} />}
    </>
  );
}
