import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import ChatWidget from './components/ChatWidget';

// Sayfa değişince başa kaydır.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Anahtar yoksa sohbet düğmesi gösterilmez; ziyaretçi bozuk bir özellik görmez.
const chatEnabled = Boolean(process.env.API_KEY);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
        {/* HashRouter adresi bozmasın diye bağlantı yerine odak taşınır. */}
        <a
          href="#main"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('main')?.focus();
          }}
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
          İçeriğe geç
        </a>
        <Navbar />
        <main id="main" tabIndex={-1} className="flex-grow focus:outline-none">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        {chatEnabled && <ChatWidget />}
      </div>
    </Router>
  );
}

export default App;