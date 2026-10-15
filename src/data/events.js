// Agenda kegiatan PP-KOWAD (urut tanggal), dipakai oleh halaman Agenda Acara.
// Sumber: Riwayat Singkat dan Program Kerja PP-KOWAD 2026–2030.
import { STAGES_100 } from './programs.js';

// Program 100 Hari Kerja (1 Oktober 2026 – 8 Januari 2027). Rentang tanggal tiap tahap mengikuti kolom bulan di
// Kalender Kegiatan Program 100 Hari Kerja PP-KOWAD 2026: Oktober (Hari 1–30), November (31–60), Desember (61–90), 8 Januari 2027 (91–100).
// Urutan sama dengan STAGES_100.
const RANGES_100 = [
  ['2026-10-01', '2026-10-14'],
  ['2026-10-15', '2026-10-31'],
  ['2026-11-01', '2026-11-30'],
  ['2026-12-01', '2026-12-31'],
  ['2027-01-01', '2027-01-08'],
];
const PROGRAM_100 = STAGES_100.map((st, i) => {
  const [from, to] = st.time.match(/\d+/g);
  return { start: RANGES_100[i][0], end: RANGES_100[i][1], title: st.summary, tag: 'Program 100 Hari · Hari ' + from + '–' + to, desc: st.items.join('; ') + '.' };
});

export const EVENTS = [
  { start: '2024-09-19', end: '2024-09-19', title: 'Rakor Tingkat Pusat Palembang', tag: 'Rapat Koordinasi', desc: 'Pemberlakuan AD/ART 2024, peresmian bendera baru dan Pakaian Seragam Batik, serta pengukuhan Wilayah Riau dan Papua sehingga PP-KOWAD memiliki 16 wilayah.' },
  { start: '2024-10-23', end: '2024-10-23', title: 'Resmi Bergabung dengan Kowani', tag: 'Organisasi', desc: 'PP-KOWAD resmi menjadi anggota Federasi Kongres Wanita Indonesia (Kowani) dengan nomor urut 111.' },
  { start: '2025-05-10', end: '2025-05-10', title: 'PP-KOWAD Resmi Berbadan Hukum', tag: 'Legalitas', desc: 'Terbit Keputusan Menteri Hukum tentang pengesahan pendirian Perkumpulan Persatuan Purnawirawan Korps Wanita Angkatan Darat.' },
  { start: '2025-05-17', end: '2025-05-17', title: 'Penetapan Perubahan AD/ART 2025', tag: 'Legalitas', desc: 'Ketua Umum menetapkan Perubahan Anggaran Dasar dan Anggaran Rumah Tangga PP-KOWAD lewat Keputusan Nomor Kep/02/PPKP/V/2025, berdasarkan Akta Notaris Rusnaldy, SH, Nomor 01 tanggal 7 Mei 2025.' },
  { start: '2025-07-17', end: '2025-07-17', title: 'Peresmian dan Pengukuhan Pengurus Pusat', tag: 'Organisasi', desc: 'Peresmian Persatuan Purnawirawan KOWAD dan pengukuhan Pengurus Pusat masa bakti 2022-2026 di Aula Soeryadi PPAD, Matraman, Jakarta Timur.' },
  { start: '2026-09-22', end: '2026-09-22', title: 'MUNAS I PP-KOWAD', tag: 'Musyawarah Nasional', desc: 'Musyawarah Nasional pertama di Bandung: pengukuhan 16 Ketua Wilayah serta pemilihan Ketua Umum periode 2026-2030.' },
  ...PROGRAM_100,
];
