import { Link } from 'react-router-dom';

// peak: tepi bawah hero berbentuk takik "V" di tengah, area takik memperlihatkan latar section di bawahnya
export default function PageHero({ eyebrow, title, text, crumb, className = '', peak = false }) {
  const hero = (
    <section className={('page-hero ' + (peak ? 'page-hero--peak ' : '') + className).trim()}>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
      <div className="breadcrumb">
        <Link to="/">Home</Link><span>/</span>{crumb}
      </div>
    </section>
  );

  return peak ? <div className="peak-wrap">{hero}</div> : hero;
}
