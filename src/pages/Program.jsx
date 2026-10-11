import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROGRAMS, STAGES_100, PLAN_4_YEARS } from '../data/programs.js';

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

// penjelajah program: daftar di kiri menempel saat scroll, panel di kanan; item aktif mengikuti panel yang sedang terlihat
function ProgramExplorer() {
  const [active, setActive] = useState(0);
  const panels = useRef([]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(Number(e.target.dataset.index)); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    panels.current.forEach((p) => p && io.observe(p));
    return () => io.disconnect();
  }, []);

  const go = (i) => panels.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  return (
    <section className="pg2-explore" id="program-utama">
      <aside className="pg2-nav">
        <span className="pg2-orn pg2-orn--ring" aria-hidden="true" />
        <span className="pg2-orn pg2-orn--ring2" aria-hidden="true" />
        <img className="pg2-orn pg2-orn--mark" src="/assets/logo-ppkowad.png" alt="" aria-hidden="true" />

        <h2>Apa yang kami jalankan bersama anggota</h2>
        <ol className="pg2-nav-list">
          {PROGRAMS.map((p, i) => (
            <li key={p.title}>
              <button type="button" className={i === active ? 'is-active' : undefined} onClick={() => go(i)}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {p.title}
              </button>
            </li>
          ))}
        </ol>
      </aside>

      <div className="pg2-panels">
        {PROGRAMS.map((p, i) => (
          <article className="pg2-panel" key={p.title} data-index={i} ref={(el) => { panels.current[i] = el; }}>
            <div className="pg2-panel-photo">
              <img src={'/assets/' + p.img} alt={p.title} />
              <span className="pg2-panel-num">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

// 100 hari pertama: judul + ringkasan target, lalu lima tahap berjajar dengan angka hari besar
function FirstHundredDays() {
  return (
    <section className="pg5-days">
      {/* ornamen latar: cincin */}
      <span className="pg2-orn pg5-orn pg5-orn--ring1" aria-hidden="true" />
      <span className="pg2-orn pg5-orn pg5-orn--ring2" aria-hidden="true" />
      <div className="pg5-inner">
        {/* kiri: lima tahap, angka hari besar + deskripsi */}
        <ol className="pg5-stages">
          {STAGES_100.map((s) => {
            const [from, to] = s.time.match(/\d+/g);
            return (
              <li key={s.time}>
                <span className="pg5-range">{from}<em>–</em>{to}<small>hari</small></span>
                <p>{s.text}</p>
              </li>
            );
          })}
        </ol>

        {/* kanan: judul besar + ringkasan target */}
        <div className="pg5-aside">
          <p className="pg5-num">100</p>
          <h2>Hari Pertama</h2>
          <p className="pg5-goal">
            Setiap dari <strong>16 wilayah</strong> punya penghubung dan kegiatan kebersamaan, <strong>17 set seragam</strong>{' '}
            pengurus pusat selesai, <strong>3 mitra</strong> bisa dipakai dengan KTA, dan <strong>17 halaman website</strong>{' '}
            pusat dan wilayah siap diluncurkan.
          </p>
        </div>
      </div>
    </section>
  );
}

// rencana empat tahun: pita foto lebar penuh, empat kolom teks per tahun kerja
function FourYears() {
  return (
    <section className="pg3-years">
      <div className="pg3-years-inner">
        <h2>Rencana Empat Tahun</h2>
        <ol>
          {PLAN_4_YEARS.map((r, i) => (
            <li key={r.year}>
              <span className="pg3-years-step">Tahun ke-{i + 1}</span>
              <strong>{r.year}</strong>
              <p>{r.focus}</p>
              <span className="pg3-years-meta">Target KTA {r.kta} · {r.partners} mitra aktif</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default function Program() {
  return (
    <div className="program-page">
      {/* hero foto layar penuh, seperti Home & Tentang Kami */}
      <section className="pg2-hero">
        <div className="pg2-hero-text">
          <h1 className="pg2-title-phj">
            <span className="phj-peace">Peace,</span> <span className="phj-happy">Happy,</span>{' '}
            <span className="phj-and">and</span> <span className="phj-joy">Joy</span>
          </h1>
          <p className="pg2-statement">
            Tenteram, bahagia, dan menikmati kebersamaan di seluruh <em>16 wilayah.</em>
          </p>
          {/* <p className="pg2-lead">Semua kegiatan bersifat sukarela, ramah usia, dan sesuai kemampuan anggota.</p> */}
        </div>
      </section>

      <ProgramExplorer />
      <FirstHundredDays />
      <FourYears />

      {/* ajakan penutup: pita kuning lebar penuh */}
      <section className="pg2-cta">
        <div className="pg2-cta-inner">
          <div>
            <h2>Ingin berabung bersama kami?</h2>
            <p>Hubungi pengurus pusat atau ketua wilayah Anda untuk mengikuti kegiatan PP-KOWAD berikutnya.</p>
          </div>
          <Link className="pill-btn pg2-cta-btn" to="/contact">Hubungi Kami <Arrow /></Link>
        </div>
      </section>
    </div>
  );
}
