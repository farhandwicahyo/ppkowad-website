import BoardSection from '../components/BoardSection.jsx';

const LOGO_MEANING = [
  ['Tameng', 'Ketahanan, perlindungan, dan kesiapsiagaan dalam menjaga kesehatan bangsa.'],
  ['Tongkat Asclepius', 'Simbol kesehatan yang melambangkan pelayanan kesehatan, penyembuhan, ilmu pengetahuan, dan profesionalisme.'],
  ['Sayap', 'Kecepatan, mobilitas, dan semangat organisasi dalam memberikan respons terhadap berbagai tantangan kesehatan.'],
  ['Padi dan Kapas', 'Kesejahteraan, kemanusiaan, serta pengabdian kepada masyarakat.'],
  ['Dua Bintang', 'Kolaborasi antara unsur sipil dan militer dalam memperkuat ketahanan kesehatan nasional.'],
  ['Bentuk Lingkaran', 'Persatuan, sinergi, dan komitmen yang berkelanjutan.'],
];

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
  { date: '17 Juli 2025', title: 'Peresmian dan Pengukuhan Pengurus Pusat', text: 'Peresmian Persatuan Purnawirawan KOWAD dan pengukuhan Pengurus Pusat masa bakti 2022-2026 di Aula Soeryadi PPAD, Matraman, oleh Plt. Ketua Umum PPAD Mayjen TNI (Purn) Dr. Komaruddin Simanjuntak, S.IP., M.Sc.' },
  { date: '22 September 2026', title: 'MUNAS I di Bandung', text: 'Pengukuhan 16 Ketua Wilayah periode 2026-2030. Mayjen TNI (K) Purn Dr. dr. Dian Andriani Ratna Dewi terpilih sebagai Ketua Umum periode 2026-2030 dan menerima serah terima jabatan.' },
];

const MISI = [
  'Memelihara soliditas antar-anggota PERSATUAN PURNAWIRAWAN KOWAD.',
  'Mengembangkan keilmuan kedokteran militer untuk ketahanan kesehatan nasional di bidang kedokteran militer, kegawatdaruratan, dan bencana.',
  'Memperkuat kolaborasi militer dan sipil dalam tanggap bencana.',
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

      {/* satu kolom, satu latar gelap menyambung: Visi, Misi, lalu Makna Logo */}
      <div className="ab-dark-wrap">
        <section className="ab-dark-section">
          <div className="ab-dark-inner">
            {/* baris 1: visi */}
            <div className="ab-dark-row">
              <p className="ab-dark-eyebrow">Visi Kami</p>
              <h3 className="ab-grad ab-grad--visi">Solid dan Bermitra Strategis</h3>
              <p className="ab-dark-text">Menjadi organisasi PERSATUAN PURNAWIRAWAN KOWAD yang solid dan bermitra strategis dengan pemerintah dalam membangun serta memperkuat ketahanan kesehatan nasional melalui penerapan ilmu kedokteran militer dan kolaborasi militer-sipil.</p>
            </div>

            <div className="ab-arc" aria-hidden="true" />

            {/* baris 2: misi */}
            <div className="ab-dark-row">
              <p className="ab-dark-eyebrow">Misi Kami</p>
              <h3 className="ab-grad ab-grad--misi">Tiga Langkah Utama</h3>
              <p className="ab-dark-text">Tiga langkah utama kami dalam memperkuat ketahanan kesehatan nasional.</p>
              <div className="ab-misi-cards">
                {MISI.map((m, i) => (
                  <div className="ab-misi-card" key={i}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <p>{m}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="ab-dark-row ab-logo-block">
              {/* judul di tengah atas */}
              <div className="ab-logo-title">
                <p className="ab-logo-eyebrow">Identitas</p>
                <h2>Makna Logo</h2>
              </div>

              {/* dua kolom: kiri logo besar, kanan daftar makna */}
              <div className="ab-logo-cols">
                <div className="ab-logo-side">
                  <span className="ab-logo-badge"><img src="/assets/logo-ppkowad.png" alt="Logo PPKOWAD" /></span>
                </div>
                <div className="ab-values-list">
                  {LOGO_MEANING.map(([title, text]) => (
                    <div className="ab-value" key={title}>
                      <span className="ab-value-letter" aria-hidden="true">{title.charAt(0)}</span>
                      <div>
                        <h4>{title}</h4>
                        <p>{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* jajaran anggota (anchor: /about#jajaran) */}
      <BoardSection />

      {/* perjalanan organisasi (anchor: /about#perjalanan) */}
      <section className="section timeline-section" id="perjalanan">
        <div className="section-header">
          <p className="eyebrow">Sejarah Kami</p>
          <h2>Jejak Langkah <span className="accent">PP KOWAD</span></h2>
          <p>Dari rapat perintis pada 1980 hingga Munas I 2026, setiap tonggak menjadi fondasi PP KOWAD untuk terus tumbuh dan mengabdi.</p>
        </div>
        <div className="timeline">
          <div className="timeline-track">
            {[0, 1].flatMap((copy) =>
              MILESTONES.map((m) => (
                <div className="timeline-item" key={copy + m.title} aria-hidden={copy > 0 ? 'true' : undefined}>
                  <div className="timeline-card">
                    <p className="t-year">{m.date}</p>
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

