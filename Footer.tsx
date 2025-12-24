
import React from 'react';
import { Mail, Calendar } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="social_post.jpeg" 
                alt="Logo" 
                className="w-10 h-10 rounded-xl object-cover shadow-glow" 
              />
              <span className="font-bold text-2xl text-white tracking-tight">Retina Flow</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-500 max-w-sm">Die All-in-One Automatisierungslösung für zukunftsorientierte Fahrschulen. Mehr Zeit für Schüler, mehr Umsatz für dich.</p>
          </div>
          <div className="hidden md:block md:col-span-2"></div>
          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Produkt</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#solutions" className="hover:text-primary transition-colors duration-200">Funktionen</a></li>
              <li><a href="#roi" className="hover:text-primary transition-colors duration-200">Umsatz-Rechner</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors duration-200">Häufige Fragen</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Kontakt</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3"><Mail className="w-4 h-4 mt-0.5 text-primary" /><a href="mailto:info@retinaflow.de" className="hover:text-white transition-colors duration-200">info@retinaflow.de</a></li>
              <li className="flex items-start gap-3"><Calendar className="w-4 h-4 mt-0.5 text-primary" /><a href="https://calendly.com/delkhazatto19/30min" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">Termin buchen</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; 2024 Retina Flow. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6"><span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>System operational</span></div>
        </div>
      </div>
    </footer>
  );
};
