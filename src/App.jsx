import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Events from './pages/Events.jsx';
import News from './pages/News.jsx';
import Contact from './pages/Contact.jsx';

const TITLES = {
  '/': 'Beranda',
  '/about': 'Tentang Kami',
  '/events': 'Agenda Acara',
  '/news': 'Berita',
  '/contact': 'Kontak',
};

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = (TITLES[pathname] || 'Beranda') + ' | PP KOWAD';
    // ke #anchor bila ada (mis. /#program), selain itu ke atas halaman
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/anggota" element={<Navigate to="/about#jajaran" replace />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
