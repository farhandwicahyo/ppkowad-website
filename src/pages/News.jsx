import { useCallback, useEffect, useState } from 'react';
import PageHero from '../components/PageHero.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import { ARTICLES } from '../data/articles.js';
import { NEWS } from '../data/news.js';

const pad2 = (n) => String(n).padStart(2, '0');
const src = (path) => '/' + path;

function ModalGallery({ slides }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const goTo = useCallback((i) => setIndex((i + total) % total), [total]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + total) % total);
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % total);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [total]);

  return (
    <>
      <div className="news-modal-gallery">
        <span className="news-modal-count">{pad2(index + 1)} / {pad2(total)}</span>
        <div className="news-modal-slides">
          {slides.map((s, i) => (
            <div key={s.src} className={'news-modal-slide' + (i === index ? ' active' : '')}>
              <img src={src(s.src)} alt={s.alt} />
              <p className="news-modal-caption">{s.caption}</p>
            </div>
          ))}
        </div>
        <button className="news-modal-nav news-modal-prev" type="button" aria-label="Sebelumnya" onClick={() => goTo(index - 1)}>&lsaquo;</button>
        <button className="news-modal-nav news-modal-next" type="button" aria-label="Berikutnya" onClick={() => goTo(index + 1)}>&rsaquo;</button>
      </div>
      <div className="news-modal-thumbs">
        {slides.map((s, i) => (
          <button key={s.src} type="button" className={i === index ? 'active' : undefined} onClick={() => goTo(i)}>
            <img src={src(s.src)} alt="" />
          </button>
        ))}
      </div>
    </>
  );
}

function NewsModal({ article, onClose }) {
  const titleId = article.id + 'ModalTitle';

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
      <div className="news-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <button className="news-modal-close" type="button" aria-label="Tutup" onClick={onClose}>&times;</button>
        <div className="news-modal-media">
          {article.slides.length > 0 ? (
            <ModalGallery slides={article.slides} />
          ) : (
            <div className="news-modal-gallery news-modal-gallery-single">
              <img src={src(article.single.src)} alt={article.single.alt} className={article.faceTop ? 'thumb-face-top' : undefined} />
            </div>
          )}
        </div>
        <div className="news-modal-body">
          <span className="news-tag">{article.tag}</span>
          <h3 id={titleId}>{article.title}</h3>
          <span className="news-date">{article.date}</span>
          {article.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </div>
  );
}

function Card({ item, onOpen }) {
  const inner = (
    <>
      <div className="news-thumb">
        <img src={'/assets/' + item.img} alt={item.title} className={item.faceTop ? 'thumb-face-top' : undefined} />
      </div>
      <div className="news-body">
        <span className="news-tag">{item.tag}</span>
        <h3>{item.title}</h3>
        <span className="news-date">{item.date}</span>
      </div>
    </>
  );

  if (!item.article) return <div className="news-card">{inner}</div>;

  return (
    <a className="news-card news-card-link" href="#" onClick={(e) => { e.preventDefault(); onOpen(item.article); }}>
      {inner}
    </a>
  );
}

export default function News() {
  const [openId, setOpenId] = useState(null);
  const close = useCallback(() => setOpenId(null), []);

  return (
    <>
      <PageHero
        eyebrow="Sorotan Kegiatan"
        title="PP KOWAD dalam Aksi"
        text="Ikuti perkembangan, kegiatan, dan sorotan terbaru dari organisasi kami."
        crumb="Berita"
      />

      <section className="section">
        <div className="news-grid">
          {NEWS.map((item) => <Card key={item.title} item={item} onOpen={setOpenId} />)}
        </div>
      </section>

      {openId && <NewsModal key={openId} article={ARTICLES[openId]} onClose={close} />}

      <CtaBanner
        title="Ingin Terlibat Langsung dalam Kegiatan Kami?"
        text="Bergabunglah sebagai anggota dan ikuti setiap perkembangan kami."
        withIcon
      />
    </>
  );
}
