// Materi dari AD/ART PP-KOWAD 2025 (Keputusan Ketua Umum Nomor Kep/02/PPKP/V/2025, 17 Mei 2025).
// Dipakai oleh halaman Tentang Kami (bagan struktur organisasi).

// Bagan organisasi (AD Pasal 12–16, ART Pasal 4 dan 6; Lampiran 1a–1c)
// top: pimpinan, side: pengawas/penasihat (garis putus-putus), pair: bendahara & sekretaris,
// kids: ketua bidang/seksi/urusan. Ketua Wilayah (puncak tingkat wilayah) dan Ketua Sub Wilayah (puncak tingkat sub wilayah)
// menyambung langsung dengan garis batang dari tingkat di atasnya
export const ORGANISASI = [
  {
    key: 'pusat',
    label: 'Pusat',
    top: { role: 'Ketua Umum', deputy: 'Wakil' },
    side: { role: 'Pengawas' },
    pair: [{ role: 'Bendahara', deputy: 'Wakil' }, { role: 'Sekretaris Umum', deputy: 'Wakil' }],
    kids: ['Ketua Bidang Organisasi', 'Ketua Bidang Hukum', 'Ketua Bidang Pendidikan dan Latihan', 'Ketua Bidang Sosial'],
  },
  {
    key: 'wilayah',
    label: 'Wilayah',
    top: { role: 'Ketua Wilayah', deputy: 'Wakil' },
    side: { role: 'Penasihat' },
    pair: [{ role: 'Bendahara', deputy: 'Wakil' }, { role: 'Sekretaris', deputy: 'Wakil' }],
    kids: ['Ketua Seksi Keanggotaan', 'Ketua Seksi Usaha', 'Ketua Seksi Sosial dan Budaya'],
  },
  {
    key: 'sub',
    label: 'Sub Wilayah',
    top: { role: 'Ketua Sub Wilayah', deputy: 'Wakil' },
    side: null,
    pair: [{ role: 'Bendahara' }, { role: 'Sekretaris' }],
    kids: ['Ketua Urusan Keanggotaan', 'Ketua Urusan Usaha', 'Ketua Urusan Sosial dan Budaya'],
  },
];
