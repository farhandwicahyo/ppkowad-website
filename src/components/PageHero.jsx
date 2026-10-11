// hero dengan foto latar; image = nama file di public/assets (opsional, default foto MUNAS)
// peak: tepi bawah hero berbentuk takik "V" di tengah, area takik memperlihatkan latar section di bawahnya
export default function PageHero({ eyebrow, title, text, className = '', peak = false, image }) {
  const hero = (
    <section
      className={('page-hero ' + (peak ? 'page-hero--peak ' : '') + className).trim()}
      style={image ? { '--hero-image': `url('/assets/${image}')` } : undefined}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );

  return peak ? <div className="peak-wrap">{hero}</div> : hero;
}
