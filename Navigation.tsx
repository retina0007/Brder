
import React, { useEffect, useState, useRef } from 'react';
import { Menu, ArrowRight } from 'lucide-react';

const LINKS = [
  { id: 'start', label: 'Start' },
  { id: 'problems', label: 'Probleme' },
  { id: 'solutions', label: 'Lösungen' },
  { id: 'roi', label: 'Ersparnis' },
  { id: 'faq', label: 'FAQ' },
];

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('start');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [markerStyle, setMarkerStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 150;
      
      let current = '';
      LINKS.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollY >= sectionTop - offset) {
            current = link.id;
          }
        }
      });

      if (!current && scrollY < 100) current = 'start';
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const activeLink = document.querySelector(`a[href="#${activeSection}"].nav-link`) as HTMLElement;
    if (activeLink && navRef.current) {
      const parentRect = activeLink.parentElement?.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      
      if (parentRect) {
         setMarkerStyle({
          left: linkRect.left - parentRect.left,
          width: linkRect.width,
          opacity: 1,
        });
      }
    }
  }, [activeSection]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav 
          ref={navRef}
          className="pointer-events-auto bg-navBg nav-glass border border-white/60 shadow-float rounded-full pl-6 pr-2 py-2 flex items-center justify-between max-w-5xl w-full transition-all duration-300 hover:shadow-lg"
        >
          <a href="#" className="flex items-center gap-2.5 mr-4 group">
            <img 
              src="social_post.jpeg" 
              alt="Logo" 
              className="w-8 h-8 rounded-lg object-cover shadow-sm group-hover:scale-105 transition-transform" 
            />
            <span className="font-bold text-lg tracking-tight text-primary">Retina Flow</span>
          </a>

          {/* Center Menu with Floating Marker */}
          <div className="hidden md:flex items-center relative bg-gray-100/50 rounded-full p-1.5 border border-white/40">
            <div 
              id="nav-marker" 
              className="absolute h-[calc(100%-12px)] top-[6px] rounded-full bg-primary shadow-md z-0 transition-all duration-300 ease-out"
              style={{ left: markerStyle.left, width: markerStyle.width, opacity: markerStyle.opacity }}
            />
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link relative z-10 px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 ${activeSection === link.id ? 'active text-white' : 'text-textDark hover:text-primary'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="https://calendly.com/delkhazatto19/30min" target="_blank" rel="noreferrer" className="bg-primary text-white px-5 py-2.5 rounded-full font-bold text-xs hover:bg-blue-800 transition shadow-lg hover:shadow-blue-900/20 flex items-center gap-2">
              Unverbindliches Gespräch 
              <ArrowRight className="w-3 h-3" />
            </a>
            <button 
              onClick={toggleMobileMenu} 
              className="md:hidden text-primary bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition" 
              aria-label="Menü öffnen"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-6 z-40 border border-gray-100 transform transition-all duration-300 origin-top ${mobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 hidden'}`}>
        <div className="flex flex-col gap-3">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMenu}
              className="text-textDark font-medium py-3 px-4 rounded-xl hover:bg-gray-50 transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
