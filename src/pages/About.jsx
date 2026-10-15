import { Fragment, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';
import BoardSection from '../components/BoardSection.jsx';
import { REGIONS } from '../data/regions.js';
import { ORGANISASI } from '../data/organisasi.js';

// unsur lambang PP-KOWAD: [berkas di public/assets/logo-parts, judul, makna]
// Sumber: AD/ART PP-KOWAD 2025, Pasal 18 dan Pasal 23 (Lampiran 2), diurutkan dari atas ke bawah lambang
const LOGO_ELEMENTS = [
  ['bintang', 'Tanda Bintang', 'Berwarna kuning emas. Melambangkan keagungan Tuhan Yang Maha Esa, sumber motivasi pengabdian setiap anggota.'],
  ['melati', 'Busur Panah dan Bunga Melati', 'Busur panah kuning emas melambangkan jiwa keprajuritan yang dilandasi kesederhanaan. Bunga melati putih berkelopak hijau melambangkan kesucian dan keikhlasan di sanubari setiap anggota.'],
  ['tugu', 'Tangga dan Tiang', 'Lima anak tangga dan enam tiang berwarna hitam. Melambangkan semangat yang menjadi pedoman anggota untuk meneruskan perjuangan dalam kehidupan bermasyarakat, berlandaskan Pancasila dan Sad Satya Sri Sena.'],
  ['padi', 'Bulir Padi', 'Dua puluh bulir berwarna kuning emas. Bersama kapas, melambangkan cita-cita kesejahteraan keluarga, masyarakat, bangsa, dan negara, serta mengingatkan kelahiran PP-KOWAD pada 20 September 2014.'],
  ['karangan', 'Kapas', 'Sembilan kuntum kapas di sisi kanan lambang, berpasangan dengan bulir padi di sisi kiri sebagai lambang cita-cita kesejahteraan bersama.'],
  ['pita', 'Pita Nama', 'Pita hitam bertuliskan "Persatuan Purnawirawan Korps Wanita Angkatan Darat" berwarna putih, menjelaskan nama organisasi.'],
];

// arti keseluruhan lambang (AD/ART 2025, Pasal 23 ayat 3 huruf g)
const LOGO_SUMMARY = 'Untuk meningkatkan tali persaudaraan, persatuan, dan kesatuan serta menciptakan kesejahteraan bagi keluarga, masyarakat, bangsa, dan negara, anggota purnawirawan KOWAD bertekad membentuk suatu persatuan yang berlandaskan Ketuhanan Yang Maha Esa serta tetap memiliki semangat sesuai nilai-nilai Pancasila dan Sad Satya Sri Sena.';

// visi dan misi (AD PP-KOWAD 2025, Pasal 9)
const VISI = ['Terciptanya Persatuan Purnawirawan Korps Wanita Angkatan Darat yang', 'mandiri, sehat, sejahtera, dan bermartabat.'];
const MISI = [
  'Memberdayakan Persatuan Purnawirawan Korps Wanita Angkatan Darat dengan meningkatkan kapasitasnya secara profesional.',
  'Membangun produktivitas dan menyiapkan kemampuan jiwa kewirausahaan.',
  'Meningkatkan kesehatan yang berkualitas dan ramah lingkungan.',
  'Memantapkan suasana kehidupan yang tenteram penuh kedamaian dan bermartabat.',
];

// tahun dari tanggal tonggak: "10 November 1980" -> "1980"
const yearOf = (date) => date.split(' ').pop();

const MILESTONES = [
  { date: '10 November 1980', title: 'Cikal Bakal Organisasi', text: 'Rapat Perwira Koordinator KOWAD seluruh Indonesia di Puskowad Jakarta menyepakati pembentukan wadah organisasi sukarela bagi Purnawirawan KOWAD.' },
  { date: '1989', title: 'Paguyuban per Angkatan', text: 'Atas prakarsa lulusan Secapa KOWAD pertama (1961), paguyuban dikembangkan bertahap per Angkatan/Lichting, mencakup anggota purnawirawan maupun yang masih aktif.' },
  { date: '1998', title: 'Ikatan Keluarga Dharma Puspha', text: 'Dibentuk IKDP yang memiliki AD/ART dan terdaftar di Departemen Dalam Negeri, namun tidak berlanjut. Paguyuban angkatan dan wilayah tetap berjalan.' },
  { date: '2013', title: 'Sosialisasi AD/ART dan Mars', text: 'Pada Temu Kangen di Yogyakarta, AD/ART PP-KOWAD Wilayah Jabodetabek disosialisasikan, bersama Mars dan Hymne Purnawirawan KOWAD ciptaan Brigjen TNI (Purn) Yulia Ganawati.' },
  { date: '20 September 2014', title: 'Hari Lahir PP-KOWAD', text: 'Rapat Paripurna Tingkat Pusat di Malang membentuk Dewan Pendiri (27 orang), menetapkan 20 September sebagai hari lahir, dan memilih Brigjen TNI (Purn) Yulia Ganawati sebagai Ketua Umum pertama secara aklamasi.' },
  { date: '17 Februari 2015', title: 'Pendirian Disahkan', text: 'Pendirian disahkan lewat Akta Notaris Rusnaldy, SH, Nomor 22, di Jakarta.' },
  { date: '28 November 2015', title: 'Pengukuhan Pengurus', text: 'Pertemuan Anggota Tahunan di Mabes TNI. Ketua Umum PPAD Letjen TNI (Purn) Suryadi mengukuhkan Ketua Umum periode 2015-2018, dan Ketua Umum mengukuhkan 12 Ketua PP-KOWAD Wilayah.' },
  { date: '17 Juni 2017', title: 'Terdaftar sebagai Ormas', text: 'Terdaftar di Dirjen Kesbangpol Kemendagri dengan Surat Keterangan Terdaftar Nomor SKT-01-00-00/033/D.IV.1/VI/2017.' },
  { date: '5 September 2018', title: 'Bagian Keluarga Besar TNI AD', text: 'Surat Telegram KASAD Nomor ST/3150/2018 melibatkan PP-KOWAD dalam program Komsos sebagai bagian dari Keluarga Besar TNI AD.' },
  { date: '2018', title: 'Wilayah ke-13 dan Periode 2018-2021', text: 'Rapat Paripurna di Yogyakarta mengukuhkan PP-KOWAD Wilayah NAD sebagai wilayah ke-13 dan memilih kembali Yulia Ganawati sebagai Ketua Umum periode 2018-2021.' },
  { date: '29 Januari 2019', title: 'Perubahan AD/ART', text: 'Perubahan AD/ART disahkan lewat Akta Notaris Rusnaldy, SH, Nomor 25.' },
  { date: '20 September 2019', title: '14 Wilayah', text: 'Pertemuan anggota di Bali mengukuhkan Wilayah Sulawesi Selatan, sehingga total ada 14 wilayah.' },
  { date: '21 September 2022', title: 'Rapat Paripurna HUT ke-8', text: 'Rapat Paripurna di Jakarta yang sempat tertunda karena pandemi memilih Brigjen TNI (Purn) Hastuti Sari Sukapti, S.H. sebagai Ketua Umum periode 2022-2025.' },
  { date: '19 September 2023', title: 'Paguyuban Menjadi Persatuan', text: 'Rakor dan Rapat Paripurna di Malang menyepakati perubahan AD/ART, termasuk perubahan nama dari Paguyuban menjadi Persatuan.' },
  { date: '3 Juli 2024', title: 'Akta Perubahan Nama', text: 'Akta Notaris Rusnaldy, SH, Nomor 01 menetapkan pengurus pusat periode 2022-2025 dan mengesahkan perubahan nama menjadi Persatuan, di bawah koordinasi PPAD.' },
  { date: '19 September 2024', title: 'Rakor Palembang, 16 Wilayah', text: 'AD/ART 2024 berlaku, bendera baru dan Pakaian Seragam Batik (PSB) diresmikan, serta Wilayah Riau dan Papua dikukuhkan sehingga total ada 16 wilayah.' },
  { date: '23 Oktober 2024', title: 'Anggota Federasi Kowani', text: 'Resmi menjadi anggota Federasi Kowani nomor urut 111, disahkan lewat SK Nomor Skep-14/Kowani/XII/2024 tanggal 4 Desember 2024.' },
  { date: '10 Mei 2025', title: 'Resmi Berbadan Hukum', text: 'Terbit Keputusan Menteri Hukum tentang pengesahan pendirian Perkumpulan Persatuan Purnawirawan Korps Wanita Angkatan Darat.' },
  { date: '17 Mei 2025', title: 'Perubahan AD/ART Ditetapkan', text: 'Ketua Umum menetapkan Perubahan Anggaran Dasar dan Anggaran Rumah Tangga PP-KOWAD lewat Keputusan Nomor Kep/02/PPKP/V/2025, berdasarkan Akta Notaris Rusnaldy, SH, Nomor 01 tanggal 7 Mei 2025.' },
  { date: '17 Juli 2025', title: 'Peresmian dan Pengukuhan Pengurus Pusat', text: 'Peresmian Persatuan Purnawirawan KOWAD dan pengukuhan Pengurus Pusat masa bakti 2022-2026 di Aula Soeryadi PPAD, Matraman, oleh Plt. Ketua Umum PPAD Mayjen TNI (Purn) Dr. Komaruddin Simanjuntak, S.IP., M.Sc.' },
  { date: '22 September 2026', title: 'MUNAS I di Bandung', text: 'Pengukuhan 16 Ketua Wilayah periode 2026-2030. Mayjen TNI (K) Purn Dr. Dr. dr. Dian Andriani RD terpilih sebagai Ketua Umum periode 2026-2030 dan menerima serah terima jabatan.' },
];

// satu blok per tahun: satu judul dan satu penjelasan. Tahun dengan beberapa tonggak memakai ringkasan di MERGED_YEARS
const MERGED_YEARS = {
  '2015': {
    title: 'Pendirian Disahkan dan Pengurus Dikukuhkan',
    text: 'Pendirian disahkan lewat Akta Notaris Rusnaldy, SH, Nomor 22, di Jakarta. Pada Pertemuan Anggota Tahunan di Mabes TNI, Ketua Umum PPAD Letjen TNI (Purn) Suryadi mengukuhkan Ketua Umum periode 2015-2018, dan Ketua Umum mengukuhkan 12 Ketua PP-KOWAD Wilayah.',
  },
  '2018': {
    title: 'Keluarga Besar TNI AD dan Wilayah ke-13',
    text: 'Surat Telegram KASAD Nomor ST/3150/2018 melibatkan PP-KOWAD dalam program Komsos sebagai bagian dari Keluarga Besar TNI AD. Rapat Paripurna di Yogyakarta mengukuhkan PP-KOWAD Wilayah NAD sebagai wilayah ke-13 dan memilih kembali Yulia Ganawati sebagai Ketua Umum periode 2018-2021.',
  },
  '2019': {
    title: 'Perubahan AD/ART dan 14 Wilayah',
    text: 'Perubahan AD/ART disahkan lewat Akta Notaris Rusnaldy, SH, Nomor 25. Pertemuan anggota di Bali kemudian mengukuhkan Wilayah Sulawesi Selatan, sehingga total ada 14 wilayah.',
  },
  '2024': {
    title: 'Perubahan Nama, 16 Wilayah, dan Anggota Kowani',
    text: 'Akta Notaris Rusnaldy, SH, Nomor 01 menetapkan pengurus pusat periode 2022-2025 dan mengesahkan perubahan nama menjadi Persatuan, di bawah koordinasi PPAD. Pada Rakor Palembang, AD/ART 2024 berlaku, bendera baru dan Pakaian Seragam Batik (PSB) diresmikan, serta Wilayah Riau dan Papua dikukuhkan sehingga total ada 16 wilayah. PP-KOWAD juga resmi menjadi anggota Federasi Kowani nomor urut 111, disahkan lewat SK Nomor Skep-14/Kowani/XII/2024 tanggal 4 Desember 2024.',
  },
  '2025': {
    title: 'Berbadan Hukum dan Pengurus Dikukuhkan',
    text: 'Terbit Keputusan Menteri Hukum tentang pengesahan pendirian Perkumpulan Persatuan Purnawirawan Korps Wanita Angkatan Darat, disusul penetapan Perubahan AD/ART oleh Ketua Umum lewat Keputusan Nomor Kep/02/PPKP/V/2025 berdasarkan Akta Notaris Rusnaldy, SH, Nomor 01 tanggal 7 Mei 2025. Persatuan Purnawirawan KOWAD kemudian diresmikan bersama pengukuhan Pengurus Pusat masa bakti 2022-2026 di Aula Soeryadi PPAD, Matraman, oleh Plt. Ketua Umum PPAD Mayjen TNI (Purn) Dr. Komaruddin Simanjuntak, S.IP., M.Sc.',
  },
};

const BY_YEAR = MILESTONES.reduce((groups, m) => {
  const year = yearOf(m.date);
  const last = groups[groups.length - 1];
  if (last && last.year === year) last.items.push(m);
  else groups.push({ year, items: [m] });
  return groups;
}, []).map((g) => {
  if (g.items.length === 1) return { year: g.year, title: g.items[0].title, text: g.items[0].text };
  // cadangan bila tahun baru punya beberapa tonggak tetapi belum ada ringkasannya
  return { year: g.year, ...(MERGED_YEARS[g.year] || { title: g.items.map((i) => i.title).join(' dan '), text: g.items.map((i) => i.text).join(' ') }) };
});

// jalur titik-titik bergaya peta: digambar bertahap mengikuti scroll, pesawat kertas terbang di ujungnya, pin lokasi menandai tujuan
function TrailPath({ count }) {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const maskId = 'trail-' + useId().replace(/:/g, '');
  const [d, setD] = useState('');
  const [len, setLen] = useState(0);
  const [progress, setProgress] = useState(0);
  const [tip, setTip] = useState(null);

  // rangkai jalur dari posisi angka tahun tiap blok, berbelok kiri-kanan
  useLayoutEffect(() => {
    const stage = svgRef.current?.parentNode;
    if (!stage) return;

    const build = () => {
      const items = [...stage.querySelectorAll('.ab-tl3-item')];
      if (items.length < 2) return;
      const base = stage.getBoundingClientRect();
      const pts = items.map((el) => {
        const year = el.querySelector('.ab-tl3-year') || el;
        const r = year.getBoundingClientRect();
        return { x: r.left - base.left + r.width / 2, y: r.top - base.top + r.height * 0.55 };
      });

      // kurva halus; titik kendali melebar bergantian supaya jalurnya berkelok
      let path = 'M ' + pts[0].x.toFixed(1) + ' ' + pts[0].y.toFixed(1);
      for (let i = 1; i < pts.length; i++) {
        const p0 = pts[i - 1];
        const p1 = pts[i];
        const dy = p1.y - p0.y;
        const sway = (i % 2 ? 1 : -1) * Math.min(360, 150 + dy * 0.55);
        path += ' C ' + (p0.x + sway).toFixed(1) + ' ' + (p0.y + dy * 0.28).toFixed(1) +
                ', ' + (p1.x - sway).toFixed(1) + ' ' + (p1.y - dy * 0.28).toFixed(1) +
                ', ' + p1.x.toFixed(1) + ' ' + p1.y.toFixed(1);
      }
      setD(path);
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(stage);
    return () => ro.disconnect();
  }, [count]);

  useLayoutEffect(() => {
    if (pathRef.current && d) setLen(pathRef.current.getTotalLength());
  }, [d]);

  // porsi jalur yang tergambar mengikuti scroll ke bawah dan tidak pernah surut
  useEffect(() => {
    const stage = svgRef.current?.parentNode;
    if (!stage) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = stage.getBoundingClientRect();
      const start = window.innerHeight * 0.8;
      const span = r.height + start - window.innerHeight * 0.7; // selesai saat dasar daftar naik ke 70% tinggi layar
      const p = span > 0 ? Math.min(1, Math.max(0, (start - r.top) / span)) : 1;
      setProgress((prev) => Math.max(prev, p)); // hanya maju: saat scroll ke atas jalur dan panah tetap di tempat
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // posisi dan arah penanda di ujung garis yang sudah tergambar
  useLayoutEffect(() => {
    const el = pathRef.current;
    if (!el || !len) return;
    const at = len * progress;
    const p = el.getPointAtLength(at);
    const q = el.getPointAtLength(Math.max(0, at - 8));
    setTip({ x: p.x, y: p.y, angle: (Math.atan2(p.y - q.y, p.x - q.x) * 180) / Math.PI });
  }, [progress, len]);

  // garis ditampilkan lewat mask yang terbuka sepanjang jalur, jadi latar di baliknya tetap utuh
  return (
    <svg className="ab-trail" ref={svgRef} aria-hidden="true">
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse">
          <path d={d} stroke="#fff" strokeWidth="28" fill="none" strokeLinecap="round"
                style={{ strokeDasharray: len || 1, strokeDashoffset: (len || 1) * (1 - progress) }} />
        </mask>
      </defs>
      <path ref={pathRef} className="ab-trail-line" d={d} mask={'url(#' + maskId + ')'} />
      {tip && progress > 0.02 && progress < 0.995 && (
        <g className="ab-trail-tip" transform={'translate(' + tip.x.toFixed(1) + ' ' + tip.y.toFixed(1) + ') rotate(' + tip.angle.toFixed(1) + ')'}>
          <path d="M 24 0 L -20 -16 L -9 0 L -20 16 Z" />
          <path className="fold" d="M 24 0 L -9 0 L -20 16 Z" />
        </g>
      )}
      {tip && progress >= 0.995 && (
        <g className="ab-trail-end" transform={'translate(' + tip.x.toFixed(1) + ' ' + tip.y.toFixed(1) + ')'}>
          <ellipse className="pin-shadow" cx="0" cy="0" rx="9" ry="3" />
          <g className="pin">
            <path className="pin-body" d="M 0 0 C -5 -11 -16 -17 -16 -28 A 16 16 0 1 1 16 -28 C 16 -17 5 -11 0 0 Z" />
            <circle className="pin-dot" cx="0" cy="-28" r="6.2" />
          </g>
        </g>
      )}
    </svg>
  );
}

// kotak jabatan pada bagan: peran di atas, wakil (bila ada) di bawah garis pemisah
function OrgNode({ role, deputy, className = '', style }) {
  return (
    <div className={'oc-node ' + className} style={style}>
      <strong>{role}</strong>
      {deputy && <span>{deputy}</span>}
    </div>
  );
}

// satu pohon utuh: Pusat -> Wilayah -> Sub Wilayah tersambung garis batang yang sama.
// Ketua Wilayah dan Ketua Sub Wilayah adalah puncak tingkatnya sendiri; antartingkat dipisah garis mendatar putus-putus (AD/ART 2025, Lampiran 1a–1c)
function OrgChart() {
  const last = ORGANISASI.length - 1;
  return (
    <div className="oc-wrap">
      <div className="oc">
        <span className="oc-level-label">{ORGANISASI[0].label}</span>
        {ORGANISASI.map((lvl, i) => (
          <Fragment key={lvl.key}>
            {i > 0 && (
              <div className="oc-sep">
                <i aria-hidden="true" />
                <span>{lvl.label}</span>
              </div>
            )}

            <div className="oc-top">
              <OrgNode {...lvl.top} className="oc-node--root" />
              {lvl.side && (
                <div className="oc-side">
                  <OrgNode role={lvl.side.role} />
                </div>
              )}
            </div>

            <div className="oc-pair">
              <OrgNode {...lvl.pair[0]} />
              <i className="oc-gap" aria-hidden="true" />
              <OrgNode {...lvl.pair[1]} />
            </div>

            <div className={'oc-lower' + (i < last ? ' has-trunk' : '')} style={{ '--n': lvl.kids.length }}>
              <div className="oc-kids">
                {lvl.kids.map((k) => (
                  <div className="oc-kid" key={k}><OrgNode role={k} /></div>
                ))}
              </div>
            </div>
          </Fragment>
        ))}
      </div>

    </div>
  );
}

// logo utama di tengah dikelilingi unsur lambang; klik unsur -> berputar searah jarum jam ke kanan logo utama lalu penjelasan muncul
function LogoOrbit() {
  const n = LOGO_ELEMENTS.length;
  const [spin, setSpin] = useState(0);
  const [active, setActive] = useState(null);

  const select = (i) => {
    if (active === i) { setActive(null); return; }
    const angle = -90 + (360 / n) * i;
    const current = (((angle + spin) % 360) + 360) % 360;
    setSpin(spin + ((360 - current) % 360)); // derajat searah jarum jam sampai di posisi kanan (0 derajat)
    setActive(i);
  };

  const info = active === null ? null : LOGO_ELEMENTS[active];

  return (
    <div className="ab-orbit-wrap">
      {/* kiri: logo utama dikelilingi unsur lambang */}
      <div className="ab-orbit-stage">
        <div className="ab-orbit" style={{ '--spin': spin + 'deg' }}>
          <span className="ab-logo-badge ab-orbit-main"><img src="/assets/logo-ppkowad.png" alt="Logo PPKOWAD" /></span>
          {LOGO_ELEMENTS.map(([part, title], i) => (
            <button
              type="button"
              className={'ab-orbit-item' + (active === i ? ' is-active' : '')}
              key={title}
              aria-pressed={active === i}
              aria-label={title}
              title={title}
              style={{ '--a': (-90 + (360 / n) * i) + 'deg' }}
              onClick={() => select(i)}
            >
              <img src={'/assets/logo-parts/' + part + '.png'} alt="" />
            </button>
          ))}
        </div>
      </div>

      {/* kanan: arti keseluruhan; berganti dengan penjelasan unsur yang dipilih */}
      <div className="ab-orbit-info" aria-live="polite">
        {info ? (
          <div key={active} className="ab-orbit-detail">
            <h4>{info[1]}</h4>
            <p>{info[2]}</p>
          </div>
        ) : (
          <div key="summary" className="ab-orbit-summary">
            <p className="ab-logo-summary"><strong>Makna Logo PP KOWAD.</strong> {LOGO_SUMMARY}</p>
            <p className="ab-orbit-hint">Pilih salah satu unsur lambang untuk melihat maknanya.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="about-page">
      {/* hero layar penuh: nama organisasi besar di kiri atas, paragraf kecil di kanan bawah */}
      <section className="ab-hero2">
        <div className="ab-hero2-top">
          <p className="ab-hero2-eyebrow">Persatuan Purnawirawan KOWAD</p>
          <h1>PP KOWAD</h1>
        </div>
        <p className="ab-hero2-text">
          Persatuan Purnawirawan KOWAD adalah wadah purnawirawan Korps Wanita Angkatan Darat. Lahir pada 20 September 2014,
          terdaftar sebagai ormas di Kemendagri sejak 2017, dan resmi berbadan hukum sejak 10 Mei 2025, kini menghimpun
          1.123 anggota di 16 wilayah di seluruh Indonesia.
        </p>
      </section>

      {/* satu kolom, satu latar gelap menyambung: latar belakang, arah pengabdian, lalu makna logo */}
      <div className="ab-dark-wrap">
        <section className="ab-dark-section ab-dark-top">
          <div className="ab-dark-inner">
            {/* baris 1: visi */}
            <div className="ab-dark-row">
              {/* <p className="ab-dark-eyebrow">Latar Belakang</p> */}
              <h3 className="ab-arc-title" aria-label="Berawal dari Tekad Bersama">
                <svg viewBox="0 0 1200 190" role="presentation" aria-hidden="true">
                  <defs>
                    <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#F2C46A" />
                      <stop offset="100%" stopColor="#E8A032" />
                    </linearGradient>
                    <path id="arcPath" d="M 40 150 Q 600 20 1160 150" />
                  </defs>
                  <text fill="url(#arcGrad)">
                    <textPath href="#arcPath" startOffset="50%" textAnchor="middle">Berawal dari Tekad Bersama</textPath>
                  </text>
                </svg>
              </h3>
              <p className="ab-dark-text">PP-KOWAD lahir dari keinginan dan tekad para anggota KOWAD yang telah mengakhiri dinas kemiliterannya untuk tetap memelihara jiwa kesatuan dan persatuan dalam kehidupan bermasyarakat, berbangsa, dan bernegara.</p>
            </div>

            <div className="ab-arc" aria-hidden="true" />

            {/* visi dan misi: kalimat visi dua baris, lalu empat misi berjajar (kata kerja jadi judul kecil) */}
            <div className="ab-dark-row ab-vm3">
              <p className="ab-vm3-visi">{VISI[0]} <em>{VISI[1]}</em></p>

              <div className="ab-vm4">
                {MISI.map((t, i) => {
                  const [verb, ...rest] = t.split(' ');
                  return (
                    <div className="ab-vm4-item" key={t}>
                      <span className="ab-vm4-no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                      <h4>{verb}</h4>
                      <p>{rest.join(' ')}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* jejak langkah (anchor: /about#perjalanan): daftar vertikal, tahun besar diburamkan di belakang tulisan */}
        <section className="ab-tl3" id="perjalanan">
          <h2 className="ab-sec-title ab-tl3-title">Perjalanan PP KOWAD</h2>
          <div className="ab-tl3-stage">
            <TrailPath count={BY_YEAR.length} />
            <ol className="ab-tl3-list">
              {BY_YEAR.map((g) => (
                <li className="ab-tl3-item" key={g.year}>
                  <span className="ab-tl3-year">{g.year}</span>
                  <div className="ab-tl3-body">
                    <h4>{g.title}</h4>
                    <p>{g.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="ab-dark-section ab-dark-bottom">
          <div className="ab-dark-inner">
            {/* makna logo: logo besar di tengah, unsur-unsur lambang melengkung di bawahnya */}
            <div className="ab-dark-row ab-logo2">
              {/* <h2 className="ab-sec-title">Makna Logo</h2> */}
              <LogoOrbit />

            </div>
          </div>
        </section>
      </div>

      {/* jajaran anggota (anchor: /about#jajaran) */}
      <BoardSection>
        {/* ketua wilayah 2026–2030 (anchor: /about#wilayah), digabung dalam satu section dengan Ketua Umum */}
        <div className="rg-block" id="wilayah">
          <h2 className="board-title rg-title">Ketua Wilayah PP-KOWAD</h2>
          <ol className="rg-grid">
            {REGIONS.map((r) => (
              <li className="bc-card rg-card" key={r.region}>
                <div className="bc-bg" aria-hidden="true" />
                <svg className="bc-empty" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="8" r="4.2" /><path d="M3.5 24c0-5 4-8 8.5-8s8.5 3 8.5 8Z" /></svg>
                <div className="bc-plate">
                  <h3>{r.chair}</h3>
                  <p>{r.region}</p>
                  <span>Ketua Wilayah</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* struktur organisasi: satu bagan di bawah Ketua Wilayah, dengan latar dan ornamen yang sama (anchor: /about#struktur) */}
        <div className="rg-block oc-block" id="struktur">
          <h2 className="board-title rg-title">Struktur Organisasi</h2>
          <OrgChart />
        </div>
      </BoardSection>
    </div>
  );
}

