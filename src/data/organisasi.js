// Materi dari AD/ART PP-KOWAD 2025 (Keputusan Ketua Umum Nomor Kep/02/PPKP/V/2025, 17 Mei 2025).
// Dipakai oleh halaman Tentang Kami (tujuan, struktur, atribut), Program (bidang kerja), dan Agenda Acara (siklus musyawarah).

// AD Pasal 7
export const TUJUAN = [
  'Bersama TNI Angkatan Darat ikut menjaga dan mempertahankan tegaknya Negara Kesatuan Republik Indonesia.',
  'Memperkokoh persatuan dan kesatuan anggota atas dasar kekeluargaan yang saling asih, saling asah, dan saling asuh.',
  'Meningkatkan kesejahteraan anggota.',
  'Meningkatkan peran serta dalam kehidupan bermasyarakat, berbangsa, dan bernegara untuk mendukung Pembangunan Nasional melalui peningkatan kemampuan sumber daya manusia.',
];

// AD Pasal 8
export const FUNGSI = [
  'Wadah pembinaan perjuangan dan kegiatan para purnawirawan KOWAD dalam mencapai tujuan organisasi.',
  'Wadah silaturahmi dan komunikasi untuk memperkokoh tali persaudaraan dan kekeluargaan antaranggota.',
  'Meningkatkan pengetahuan, keterampilan, dan kegiatan yang bermanfaat bagi anggota dan masyarakat.',
  'Memberdayakan kaum perempuan Indonesia.',
];

// AD Pasal 12–16, ART Pasal 4 dan 6
export const STRUKTUR = [
  {
    level: 'Tingkat Pusat · Jakarta',
    title: 'Pengurus Pusat',
    items: [
      'Ketua Umum dan Wakil Ketua Umum',
      'Sekretaris Umum dan Wakil Sekretaris Umum',
      'Bendahara dan Wakil Bendahara',
      'Ketua Bidang Organisasi, Hukum, Pendidikan dan Latihan, serta Sosial',
      'Pengawas (3 sampai 5 orang)',
    ],
  },
  {
    level: 'Tingkat Provinsi',
    title: 'Pengurus Wilayah',
    items: [
      'Ketua dan Wakil Ketua',
      'Sekretaris dan Wakil Sekretaris',
      'Bendahara dan Wakil Bendahara',
      'Ketua Seksi Keanggotaan, Sosial dan Budaya, serta Usaha',
      'Penasihat (1 sampai 3 orang)',
    ],
  },
  {
    level: 'Tingkat Kabupaten/Kota',
    title: 'Pengurus Sub Wilayah',
    items: [
      'Ketua dan Wakil Ketua',
      'Sekretaris dan Bendahara',
      'Ketua Urusan Keanggotaan, Sosial dan Budaya, serta Usaha',
      'Dapat dibentuk bila ada minimal 10 anggota',
    ],
  },
];

export const STRUKTUR_NOTE =
  'Masa jabatan pengurus di semua tingkat empat tahun, maksimal dua periode. Musyawarah Nasional (MUNAS) menjadi forum tertinggi organisasi dan memilih Ketua Umum.';

// AD Pasal 18, ART Pasal 24–29
export const ATRIBUT = [
  {
    title: 'Bendera',
    text: 'Persegi panjang 150 × 100 cm dari sutra beludru hitam dengan rumbai kuning emas 10 cm. Lambang dalam bingkai segi lima dibordir benang kuning emas. Dikibarkan pada MUNAS, Rakernas, serah terima jabatan Ketua Umum, HUT terpusat, dan pengukuhan Pengurus Pusat.',
  },
  {
    title: 'Pakaian Seragam Resmi (PSR)',
    text: 'Blouse oranye berkerah hitam dengan rok atau celana panjang hitam, kerudung oranye bagi yang memakai. Dipakai pada MUNAS, MUSWIL, dan HUT terpusat.',
  },
  {
    title: 'Pakaian Seragam Batik (PSB)',
    text: 'Blouse berdasar hijau dengan rok atau celana panjang hitam. Dipakai saat audiensi dengan pejabat, pemakaman anggota, dan undangan dari satuan atau organisasi lain.',
  },
  {
    title: 'Kartu Tanda Anggota (KTA)',
    text: 'Berukuran 8 × 5 cm dengan warna dasar hijau muda, memuat logo, wilayah keanggotaan, tanda jasa, tanda tangan, dan pasfoto 2 × 3 cm berseragam PSR berlatar biru.',
  },
  {
    title: 'Pin',
    text: 'Miniatur lambang berbentuk bulat berukuran 35 mm, berbahan logam kuning emas.',
  },
  {
    title: 'Mars dan Hymne',
    text: 'Mars Purnawirawan KOWAD dan Hymne Purnawirawan KOWAD, syair dan lagu ciptaan Brigjen TNI (Purn) Yulia Ganawati.',
  },
];

// ART Pasal 30 (rencana kerja empat tahunan)
export const BIDANG_KERJA = [
  {
    title: 'Bidang Organisasi',
    items: [
      'Pembinaan organisasi',
      'Kerja sama dengan pemerintah dan instansi terkait',
      'Pemutakhiran data anggota',
      'Pertemuan anggota untuk laporan pertanggungjawaban empat tahunan',
      'Pemilihan dan serah terima jabatan pengurus',
    ],
  },
  {
    title: 'Bidang Hukum',
    items: [
      'Bantuan hukum bagi anggota bersama instansi terkait',
      'Saran dan pendapat hukum kepada Ketua Umum',
      'Penyuluhan hukum bersama dinas terkait dan wilayah',
    ],
  },
  {
    title: 'Bidang Pendidikan dan Latihan',
    items: [
      'Pendidikan, latihan, dan kegiatan kewirausahaan bersama instansi terkait',
      'Kerja sama dengan dinas untuk membuka lapangan usaha demi kesejahteraan anggota',
    ],
  },
  {
    title: 'Bidang Sosial',
    items: [
      'Bhakti sosial dan kegiatan sosial bersama instansi terkait dan wilayah',
      'Pemberdayaan anggota serta penggalian sumber daya dan dana untuk usaha anggota',
    ],
  },
];

// AD Pasal 19–22, ART Pasal 15–22
export const SIKLUS = [
  { name: 'Musyawarah Nasional (MUNAS)', every: 'Setiap 4 tahun', text: 'Forum tertinggi. Menetapkan AD/ART dan rencana kerja, menilai pertanggungjawaban Pengurus Pusat, serta memilih Ketua Umum.' },
  { name: 'Rapat Kerja Nasional (Rakernas)', every: 'Setiap tahun', text: 'Mengevaluasi program kerja pusat, merumuskan langkah atas hambatan, dan memberi arah program tahun berikutnya.' },
  { name: 'Peringatan HUT Terpusat', every: 'Minimal 2 tahun sekali', text: 'Dihadiri anggota dari seluruh Indonesia dan diselenggarakan wilayah secara bergilir bersama Pengurus Pusat.' },
  { name: 'Musyawarah Wilayah (MUSWIL)', every: 'Setiap 4 tahun', text: 'Forum tertinggi di wilayah untuk memilih pengurus dan penasihat serta menilai pertanggungjawaban pengurus wilayah.' },
  { name: 'Rapat Kerja Wilayah (Rakerwil)', every: 'Setiap tahun', text: 'Mengevaluasi program kerja wilayah dan menghimpun masukan untuk MUSWIL.' },
  { name: 'Musyawarah Nasional Luar Biasa (MUNASLUB)', every: 'Bila diperlukan', text: 'Diadakan dalam keadaan luar biasa atau mendesak, atas permintaan Pengurus Pusat atau dua pertiga Pengurus Wilayah.' },
];
