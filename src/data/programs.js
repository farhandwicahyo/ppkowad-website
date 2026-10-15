// Program Kerja PP-KOWAD 2026–2030 ("Peace, Happy, and Joy").
// Dipakai oleh halaman Program, carousel & foto program di Home, dan footer.
export const PROGRAMS = [
  {
    title: 'Kebersamaan Rutin Wilayah',
    img: 'hut-selfie.jpg',
    text: 'Satu kegiatan bulanan di setiap wilayah: hobi, olahraga, seni, cerita pengabdian, atau perayaan sederhana. Bisa diadakan secara lokal, dalam kelompok kecil, maupun melalui WA.',
  },
  {
    title: 'Sahabat Kowad',
    img: 'pengajian-portrait.jpg',
    text: 'Sapaan dan perhatian bagi anggota yang tinggal sendiri, sedang berduka, sakit, atau sulit bepergian, agar setiap anggota tetap merasa diperhatikan.',
  },
  {
    title: 'KTA dan Kemitraan',
    img: 'munas-signing.jpg',
    text: 'Kartu Tanda Anggota yang terverifikasi sekaligus menjadi kartu diskon di mitra pilihan: kebutuhan harian, layanan kesehatan, optik, usaha anggota, rekreasi, dan penginapan.',
  },
  {
    title: 'HUT Tahunan dan Munas',
    img: 'munas-podium.jpg',
    text: 'Setiap September menjadi momen silaturahmi, karya anggota, apresiasi, dan laporan singkat. Wilayah dapat merayakan secara lokal atau daring, dan Munas empat tahunan berikutnya digelar September 2030.',
  },
];

// Target utama program 100 hari (1 Oktober 2026 – 8 Januari 2027)
export const TARGETS_100 = [
  { label: 'Wilayah', value: '16', caption: 'Penghubung dan kegiatan kebersamaan.' },
  { label: 'Seragam', value: '17', caption: 'Satu set untuk setiap pengurus pusat.' },
  { label: 'Mitra Aktif', value: '3', caption: 'Manfaat KTA sudah dapat digunakan.' },
  { label: 'Halaman Website', value: '17', caption: 'Website pusat dan 16 wilayah.' },
];

// Kalender Kegiatan Program 100 Hari Kerja PP-KOWAD Tahun 2026 (1 Oktober 2026 – 8 Januari 2027)
export const STAGES_100 = [
  {
    time: 'Hari 1–14', month: 'Oktober',
    items: [
      'Pembagian tugas Pengurus PP-KOWAD Pusat',
      'Pendataan seluruh anggota PP-KOWAD',
      'Tersedianya ukuran seragam Pengurus PP-KOWAD Pusat',
      'Penunjukan penghubung PP-KOWAD Wilayah sebagai pengelola website',
    ],
  },
  {
    time: 'Hari 15–30', month: 'Oktober',
    items: [
      'Terwujudnya 17 KTA Pengurus PP-KOWAD Pusat dan pilot anggota PP-KOWAD Wilayah',
      'Produksi seragam Pengurus PP-KOWAD Pusat',
      'Penjajakan ke mitra usaha',
    ],
  },
  {
    time: 'Hari 31–60', month: 'November',
    items: [
      '17 seragam Pengurus PP-KOWAD Pusat selesai',
      'Terwujud kerja sama dengan 3 mitra',
    ],
  },
  {
    time: 'Hari 61–90', month: 'Desember',
    items: [
      'Konsultasi AD/ART',
      'Terlaksana kegiatan lintas wilayah dan dukungan',
    ],
  },
  {
    time: 'Hari 91–100', month: '8 Januari 2027',
    items: [
      'Evaluasi kegiatan program 100 hari',
      'Finalisasi AD/ART',
      'Peluncuran website PP-KOWAD',
      'Pembuatan laporan kegiatan program 100 hari PP-KOWAD Pusat',
    ],
  },
];

export const PLAN_4_YEARS = [
  { year: '2026–2027', focus: 'Kebersamaan 16 wilayah dan website', kta: '90%', partners: '5' },
  { year: '2027–2028', focus: 'Perluasan manfaat setempat', kta: '95%', partners: '8' },
  { year: '2028–2029', focus: 'Arsip digital dan kader pengurus', kta: '98%', partners: '12' },
  { year: '2029–2030', focus: 'Munas dan keberlanjutan layanan', kta: '98%', partners: '15' },
];
