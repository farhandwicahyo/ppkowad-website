// img: nama file foto di public/assets. Pakai PNG tanpa latar (cutout) supaya kepala tampil keluar dari kartu; null = siluet
const KETUA_UMUM = [
  { img: null, period: '2014 - 2021', rank: 'Brigjen TNI (K) Purn', name: 'Yulia Ganawati' },
  { img: null, period: '2022 - 2026', rank: 'Brigjen TNI (K) Purn', name: 'Hastuti Sari Sukapti, S.H.' },
  { img: 'dian-andriani.png', period: '2026 - 2030', rank: 'Mayjen TNI (K) Purn', name: 'Dr. dr. Dian Andriani Ratna Dewi', credentials: 'Sp.KK, M.Biomed, M.A.R.S., FINSDV, FAADV', current: true },
];

export default function BoardSection() {
  return (
      <section className="board-section" id="jajaran">
        <h2 className="board-title">Ketua Umum dari <span className="accent">Masa ke Masa</span></h2>
        <div className="bc-grid">
          {KETUA_UMUM.map((k, i) => (
            <article className="bc-card" key={k.period} title={k.credentials ? k.name + ', ' + k.credentials : k.name}>
              <div className="bc-bg" aria-hidden="true" />
              {k.img ? (
                <span className="bc-photo"><img src={'/assets/' + k.img} alt={k.name} /></span>
              ) : (
                <svg className="bc-empty" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="8" r="4.2" /><path d="M3.5 24c0-5 4-8 8.5-8s8.5 3 8.5 8Z" /></svg>
              )}
              <div className="bc-plate">
                <h3>{k.name}</h3>
                <p>{k.rank}</p>
                <span>Ketua Umum ke-{i + 1} · {k.period}{k.current ? ' · Menjabat' : ''}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
  );
}
