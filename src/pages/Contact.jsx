import { useState } from 'react';
import PageHero from '../components/PageHero.jsx';

const WA_NUMBER = '6285710116209';

const INFO = [
  {
    label: 'Alamat',
    value: 'Jl Percetakan Negara XI No. 38 RT 07/RW 04, Kel. Rawasari, Cempaka Putih, Jakarta Pusat 10510',
    icon: (<><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></>),
  },
  {
    label: 'Telepon / WhatsApp',
    value: '+62 851-7783-8869',
    icon: (<path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 1h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L7.1 8.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.9 2Z" />),
  },
  {
    label: 'Email',
    value: 'PP KOWAD@gmail.com',
    icon: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>),
  },
  {
    label: 'Jam Operasional',
    value: 'Senin - Jumat, 09.00 - 17.00 WIB',
    icon: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>),
  },
];

const EMPTY = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const text =
      'Halo, saya ingin menghubungi PP KOWAD.\n\n' +
      'Nama: ' + form.name.trim() + '\n' +
      'Email: ' + form.email.trim() + '\n' +
      'Subjek: ' + form.subject.trim() + '\n' +
      'Pesan: ' + form.message.trim();
    window.open('https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text), '_blank', 'noopener,noreferrer');
    setForm(EMPTY);
  };

  return (
    <>
      <PageHero
        eyebrow="Kontak Kami"
        title="Hubungi Kami"
        text="Ada pertanyaan seputar keanggotaan, program, atau acara kami? Silakan hubungi kami melalui kanal di bawah ini."
        crumb="Kontak"
      />

      <section className="section">
        <div className="contact-grid">
          <div className="contact-info-card">
            <h3>Informasi Kontak</h3>
            <p>Tim kami siap membantu menjawab pertanyaan seputar keanggotaan, program, dan acara yang kami selenggarakan.</p>
            <ul className="contact-info-list">
              {INFO.map((it) => (
                <li key={it.label}>
                  <span className="ci-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{it.icon}</svg></span>
                  <span><strong>{it.label}</strong><span>{it.value}</span></span>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-form">
            <h3 style={{ fontSize: 19, fontWeight: 800, color: 'var(--navy)', marginBottom: 6 }}>Kirim Pesan</h3>
            <p style={{ fontSize: 13.5, color: 'var(--text-gray)', marginBottom: 24 }}>Isi formulir di bawah ini, tim kami akan segera menghubungi kamu kembali.</p>
            <form onSubmit={submit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="cName">Nama Lengkap</label>
                  <input type="text" id="cName" required placeholder="Nama kamu" value={form.name} onChange={update('name')} />
                </div>
                <div className="form-field">
                  <label htmlFor="cEmail">Email</label>
                  <input type="email" id="cEmail" required placeholder="nama@email.com" value={form.email} onChange={update('email')} />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="cSubject">Subjek</label>
                <input type="text" id="cSubject" required placeholder="Contoh: Pertanyaan seputar keanggotaan" value={form.subject} onChange={update('subject')} />
              </div>
              <div className="form-field">
                <label htmlFor="cMessage">Pesan</label>
                <textarea id="cMessage" rows="5" required placeholder="Tulis pesan kamu di sini..." value={form.message} onChange={update('message')} />
              </div>
              <button type="submit" className="btn btn-teal" style={{ width: '100%', justifyContent: 'center' }}>Kirim via WhatsApp</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
