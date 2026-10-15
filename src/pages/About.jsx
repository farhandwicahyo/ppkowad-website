import BoardSection from '../components/BoardSection.jsx';
import { REGIONS } from '../data/regions.js';
import { TUJUAN, FUNGSI, STRUKTUR, STRUKTUR_NOTE, ATRIBUT } from '../data/organisasi.js';

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

// tampilkan hanya bulan dan tahun ("22 September 2026" -> "September 2026"); jika hanya tahun, tampilkan tahun
const monthYear = (date) => date.replace(/^\d+(-\d+)?\s+/, '');

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
  { date: '22 September 2026', title: 'MUNAS I di Bandung', text: 'Pengukuhan 16 Ketua Wilayah periode 2026-2030. Mayjen TNI (K) Purn Dr. dr. Dian Andriani Ratna Dewi terpilih sebagai Ketua Umum periode 2026-2030 dan menerima serah terima jabatan.' },
];

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
        <section className="ab-dark-section">
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
                {MISI.map((t) => {
                  const [verb, ...rest] = t.split(' ');
                  return (
                    <div className="ab-vm4-item" key={t}>
                      <h4>{verb}</h4>
                      <p>{rest.join(' ')}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* makna logo: logo besar di tengah, unsur-unsur lambang melengkung di bawahnya */}
            <div className="ab-dark-row ab-logo2">
              <h2 className="ab-sec-title">Makna Logo</h2>
              <span className="ab-logo-badge ab-logo2-badge"><img src="/assets/logo-ppkowad.png" alt="Logo PPKOWAD" /></span>

              <div className="ab-parts">
                {LOGO_ELEMENTS.map(([part, title, text], i) => {
                  // posisi turun mengikuti setengah elips: ujung kiri/kanan paling atas, tengah paling bawah
                  const u = -1 + (2 * i) / (LOGO_ELEMENTS.length - 1);
                  return (
                    <div className="ab-part" key={title} style={{ '--dy': Math.sqrt(1 - u * u).toFixed(3) }}>
                      <span className="ab-part-img"><img src={'/assets/logo-parts/' + part + '.png'} alt="" /></span>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  );
                })}
              </div>

              <p className="ab-logo-summary ab-logo2-summary"><strong>Arti keseluruhan.</strong> {LOGO_SUMMARY}</p>
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
      </BoardSection>


      {/* tujuan & fungsi, struktur kepengurusan, dan atribut organisasi (AD/ART 2025) */}
      <section className="dr-section" id="organisasi">
        <div className="dr-wrap">
          <div className="dr-row">
            <h2>Tujuan dan Fungsi</h2>
            <div className="dr-cols">
              <div>
                <h3><small>AD Pasal 7</small>Tujuan</h3>
                <ul className="dr-list">{TUJUAN.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
              <div>
                <h3><small>AD Pasal 8</small>Fungsi</h3>
                <ul className="dr-list">{FUNGSI.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            </div>
          </div>

          <div className="dr-row" id="struktur">
            <h2>Struktur Kepengurusan</h2>
            <div className="dr-cols dr-cols--3">
              {STRUKTUR.map((g) => (
                <div key={g.title}>
                  <h3><small>{g.level}</small>{g.title}</h3>
                  <ul className="dr-list">{g.items.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
              ))}
              <p className="dr-note">{STRUKTUR_NOTE}</p>
            </div>
          </div>

          <div className="dr-row" id="atribut">
            <h2>Atribut Organisasi</h2>
            <div className="dr-cols">
              {ATRIBUT.map((a) => (
                <div key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* perjalanan organisasi (anchor: /about#perjalanan) */}
      <section className="section timeline-section" id="perjalanan">
        <div className="section-header">
          <h2>Jejak Langkah <span className="accent">PP KOWAD</span></h2>
        </div>
        <div className="timeline">
          <div className="timeline-track">
            {[0, 1].flatMap((copy) =>
              MILESTONES.map((m) => (
                <div className="timeline-item" key={copy + m.title} aria-hidden={copy > 0 ? 'true' : undefined}>
                  <p className="tl-date">{monthYear(m.date)}</p>
                  <div className="timeline-card">
                    <h4>{m.title}</h4>
                    <p>{m.text}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

