import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import News from './components/News';
import Teachers from './components/Teachers';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home setActiveSection={setActiveSection} />;
      case 'profile':
        return <Profile />;
      case 'gallery':
        return <Gallery />;
      case 'news':
        return <News />;
      case 'teachers':
        return <Teachers />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-yellow-50">
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        scrolled={scrolled}
      />
      <main className="pt-20">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;