import { Link } from 'react-router-dom';

const PROGRAMS = [
  { img: 'ABC00395.jpg', title: 'Pendidikan & Forum Ilmiah' },
  { img: 'DSC04746.jpg', title: 'Pelatihan & Pengembangan Kapasitas' },
  { img: 'IMG_9993.JPEG', title: 'Kolaborasi Strategis' },
  { img: 'pengabdian-masyarakat.jpg', title: 'Pengabdian Masyarakat' },
];

export default function ProgramTiles() {
  return (
    <div className="program-tiles">
      {PROGRAMS.map((p) => (
        <Link className="pt-tile" to="/events" key={p.title}>
          <img src={'/assets/' + p.img} alt="" />
          <span className="pt-tag">Program</span>
          <h3>{p.title}</h3>
          <span className="pt-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
