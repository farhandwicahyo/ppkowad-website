import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Tentang Kami' },
  { to: '/events', label: 'Agenda Acara' },
  { to: '/news', label: 'Berita' },
  { to: '/contact', label: 'Kontak' },
];

const activeClass = ({ isActive }) => (isActive ? 'active' : undefined);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={'site-nav' + (scrolled ? ' scrolled' : '')}>
      <div className="nav-inner">
        <Link className="site-logo" to="/" onClick={close}>
          <span className="logo-mark">
            <img src="/assets/logo-ppkowad.png" alt="Logo PPKOWAD" />
          </span>
          <span className="logo-text">PP KOWAD<small>PERSATUAN PURNAWIRAWAN KOWAD</small></span>
        </Link>
        <ul className={'nav-links' + (open ? ' open' : '')}>
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end onClick={close} className={activeClass}>{l.label}</NavLink>
            </li>
          ))}
          <li className="nav-join-us">
            <NavLink to="/daftar" onClick={close} className={activeClass}>JOIN US</NavLink>
          </li>
        </ul>
        {/* <Link className="btn btn-teal" to="/daftar">JOIN US</Link> */}
        <button className="mobile-toggle" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
