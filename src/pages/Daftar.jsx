import { useEffect, useRef, useState } from 'react';

const TARGET_DATE = new Date('2026-10-21T23:59:00');
const WA_NUMBER = '6285710116209';
const REGISTER_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScsD1uOYiCovimHAN5PAQBba18ypU0vnSTyYK_3lRIJX3PYRg/viewform';
const ABSTRACT_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSepNU1pRFGgy-WqR0kiMtjnt6714IeZFt81bFmmzFDNl69atg/viewform';

const pad2 = (n) => String(n).padStart(2, '0');

function remaining() {
  const diff = Math.max(0, TARGET_DATE - new Date());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Countdown() {
  const [t, setT] = useState(remaining);

  useEffect(() => {
    const timer = setInterval(() => setT(remaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-wrap">
      <div className="countdown">
        <div className="unit"><span className="value">{pad2(t.days)}</span></div>
        <div className="unit"><span className="value">{pad2(t.hours)}</span></div>
        <div className="unit"><span className="value">{pad2(t.minutes)}</span></div>
        <div className="unit"><span className="value">{pad2(t.seconds)}</span></div>
      </div>
      <div className="countdown-labels">
        <span>Hari</span><span>Jam</span><span>Menit</span><span>Detik</span>
      </div>
    </div>
  );
}

const REASONS = [
  {
    title: 'Scientific Experience',
    text: 'Dapatkan pengalaman mempresentasikan karya ilmiah, mempertahankan gagasan, serta menerima evaluasi dalam suasana kompetisi akademik yang profesional.',
    icon: (<><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M8 21h8M12 18v3" /></>),
  },
  {
    title: 'Publication Opportunity',
    text: (
      <>
        Para pemenang terpilih berkesempatan untuk mempublikasikan karya ilmiahnya di{' '}
        <a className="cf-link" href="https://journal.ajmpm.net/index.php/ojs" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>AJMPM</a>
        , sesuai dengan ketentuan editorial dan proses review jurnal.
      </>
    ),
    icon: (<><path d="M4 19V5a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" /><path d="M14 3v6h6" /></>),
  },
  {
    title: 'Expert Feedback',
    text: 'Peroleh masukan konstruktif dari dewan juri dan para ahli untuk membantu meningkatkan kualitas penelitian, penulisan, dan presentasi ilmiah.',
    icon: (<><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></>),
  },
  {
    title: 'Official Certificate',
    text: 'Peserta akan memperoleh sertifikat resmi sebagai bentuk apresiasi atas partisipasi dalam scientific competition.',
    icon: (<path d="M12 2l2.6 6.6L22 9l-5 5.2L18.4 22 12 18l-6.4 4L7 14.2 2 9l7.4-.4Z" />),
  },
  {
    title: 'Academic Networking',
    text: 'Bangun jejaring dengan peserta, akademisi, peneliti, dan profesional kesehatan dari berbagai institusi serta bidang keilmuan.',
    icon: (<><circle cx="9" cy="8" r="3.5" /><path d="M2.5 19c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" /><circle cx="17.5" cy="8.5" r="2.7" /><path d="M15.3 13.2c2.7.3 4.7 2.4 4.7 5.3" /></>),
  },
];

// posisi kartu relatif terhadap kartu aktif (sama seperti logika coverflow lama)
function posOf(i, active, total) {
  const diff = (i - active + total) % total;
  if (diff === 0) return 'active';
  if (diff === 1) return 'next1';
  if (diff === 2) return 'next2';
  if (diff === total - 1) return 'prev1';
  if (diff === total - 2) return 'prev2';
  return 'hidden';
}

function Coverflow() {
  const [active, setActive] = useState(0);
  const total = REASONS.length;

  return (
    <div className="coverflow">
      <button className="cf-nav cf-prev" type="button" aria-label="Sebelumnya" onClick={() => setActive((a) => (a - 1 + total) % total)}>&lsaquo;</button>
      <div className="cf-track">
        {REASONS.map((r, i) => (
          <div className="cf-card" key={r.title} data-pos={posOf(i, active, total)} onClick={() => setActive(i)}>
            <span className="vc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{r.icon}</svg></span>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
      <button className="cf-nav cf-next" type="button" aria-label="Berikutnya" onClick={() => setActive((a) => (a + 1) % total)}>&rsaquo;</button>
    </div>
  );
}

function NameModal({ open, onClose }) {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setName('');
      setError(false);
      const id = setTimeout(() => inputRef.current && inputRef.current.focus(), 50);
      return () => clearTimeout(id);
    }
  }, [open]);

  const confirm = () => {
    const trimmed = name.trim();
    if (!trimmed) {
      setError(true);
      inputRef.current && inputRef.current.focus();
      return;
    }
    const message = `Halo,\nNama saya ${trimmed}\n\nKonfirmasi sudah melakukan pendaftaran`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className={'modal-overlay' + (open ? ' active' : '')} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-box">
        <h3 className="modal-title">Konfirmasi Pendaftaran</h3>
        <p className="modal-sub">Masukkan nama kamu, nanti otomatis terisi di pesan Whatsapp.</p>
        <input
          ref={inputRef}
          type="text"
          className="modal-input"
          placeholder="Nama lengkap"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') confirm(); }}
        />
        <p className={'modal-error' + (error ? ' active' : '')}>Nama tidak boleh kosong.</p>
        <div className="modal-actions">
          <button type="button" className="modal-btn modal-btn-cancel" onClick={onClose}>Batal</button>
          <button type="button" className="modal-btn modal-btn-confirm" onClick={confirm}>Kirim</button>
        </div>
      </div>
    </div>
  );
}

export default function Daftar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="join-hero">
        <p className="eyebrow">Segera Daftarkan Dirimu</p>
        <h1>The 3rd Symposium of Indonesian Health Resilience Association</h1>
        <p className="desc">Advancing Health Resilience Through The 5M Framework</p>
        <Countdown />
        <a className="btn btn-white" href={REGISTER_URL + '?usp=send_form'} target="_blank" rel="noopener noreferrer">Daftar Sekarang</a>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Scientific Competition</p>
          <h2><span className="accent">Submit Your Abstract Now</span></h2>
          <p>Saatnya karyamu mendapat panggung. Tunjukkan gagasan, penelitian, dan inovasi terbaikmu dalam forum ilmiah yang mempertemukan peserta, akademisi, dan profesional dari berbagai institusi.</p>
        </div>
        <Coverflow />
      </section>

      <section className="section soft" id="formSection">
        <div className="section-header">
          <p className="eyebrow">Formulir Pendaftaran</p>
          <h2>Daftarkan Dirimu Sekarang</h2>
          <p>Lengkapi data di bawah ini sebelum waktu pendaftaran habis. Prosesnya cepat, cukup kurang dari 2 menit.</p>
        </div>

        <div className="form-grid">
          <div className="form-wrap">
            <p className="form-wrap-label">Formulir Pendaftaran Peserta</p>
            <iframe src={REGISTER_URL + '?embedded=true'} title="Formulir Pendaftaran Peserta" scrolling="yes">Memuat formulir…</iframe>
          </div>
          <div className="form-wrap">
            <p className="form-wrap-label">Formulir Submit Abstrak</p>
            <iframe src={ABSTRACT_URL + '?embedded=true'} title="Formulir Submit Abstrak" scrolling="yes">Memuat formulir…</iframe>
          </div>
        </div>

        <div className="form-actions">
          <button className="wa-btn" type="button" onClick={() => setModalOpen(true)}>
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.87.505 3.68 1.462 5.267L2 22l4.868-1.437a9.958 9.958 0 0 0 5.136 1.404h.004c5.518 0 10.004-4.486 10.004-10.004S17.522 2 12.004 2zm0 18.166h-.003a8.15 8.15 0 0 1-4.16-1.14l-.298-.177-3.104.916.925-3.15-.194-.31a8.145 8.145 0 0 1-1.256-4.301c0-4.514 3.674-8.188 8.193-8.188 2.188 0 4.245.853 5.792 2.4a8.13 8.13 0 0 1 2.397 5.792c0 4.514-3.674 8.158-8.292 8.158z" />
            </svg>
            Konfirmasi Pendaftaran via Whatsapp
          </button>
        </div>
      </section>

      <NameModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
