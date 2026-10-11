import { Link } from 'react-router-dom';

// empat kotak kegiatan; judul masih placeholder dan foto belum dipasang
// isi `title` dengan nama kegiatan dan `tileImg` (nama file di public/assets) bila sudah ada
const KEGIATAN = [
  { title: 'NAMA KEGIATAN' },
  { title: 'NAMA KEGIATAN' },
  { title: 'NAMA KEGIATAN' },
  { title: 'NAMA KEGIATAN' },
];

export default function ProgramTiles({ items = KEGIATAN }) {
  return (
    <div className="program-tiles">
      {items.map((p, i) => (
        <Link className="pt-tile" to="/events" key={i}>
          {p.tileImg && <img src={'/assets/' + p.tileImg} alt="" />}
          <span className="pt-tag">Kegiatan</span>
          <h3>{p.title}</h3>
        </Link>
      ))}
    </div>
  );
}
