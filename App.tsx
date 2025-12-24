
import React, { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { SolutionsSection } from './components/SolutionsSection';
import { BonusSection } from './components/BonusSection';
import { DemoSection } from './components/DemoSection';
import { ROICalculator } from './components/ROICalculator';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Reveal } from './components/Reveal';
import { AIChatAssistant } from './components/AIChatAssistant';
import { Lock, Calendar } from 'lucide-react';

const FloatingBookingBtn = () => (
  <a 
    href="https://calendly.com/delkhazatto19/30min" 
    target="_blank" 
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-[60] bg-primary text-white p-4 rounded-full shadow-glow hover:scale-110 transition-transform flex items-center gap-3 font-bold group"
  >
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">Kostenloses Strategie-Gespräch</span>
    <Calendar className="w-6 h-6" />
  </a>
);

const CalendlyWidget = () => {
  useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    const head = document.querySelector("head");
    
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.setAttribute("src", scriptSrc);
      script.setAttribute("async", "true");
      head?.appendChild(script);
    }
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url="https://calendly.com/delkhazatto19/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=0540ad" 
      style={{ minWidth: '320px', height: '750px' }} 
    />
  );
};

const CalendlySection = ({ dark = false }) => (
  <section id="termin" className={`py-20 px-4 ${dark ? 'bg-[#0a0a0c] text-white' : 'bg-bgLight border-t border-gray-100'} relative overflow-hidden`}>
    <div className="max-w-5xl mx-auto relative z-10">
      <Reveal className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold">
          <Calendar className="w-4 h-4" /> Unverbindliches Kennenlernen
        </div>
        <h2 className={`text-4xl lg:text-5xl font-bold leading-tight ${dark ? 'text-white' : 'text-textDark'}`}>
          Bereit, dein Handy endlich <span className="text-primary">wieder lautlos zu stellen?</span>
        </h2>
        <p className={`text-lg ${dark ? 'text-gray-400' : 'text-textGray'} max-w-2xl mx-auto`}>
          Hole dir 10+ Stunden Freizeit zurück und sichere dir den Social-Media-Bonus. Wir richten alles für dich ein.
        </p>
        
        <div className="mt-12 bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
            <CalendlyWidget />
        </div>

        <div className="pt-8 flex flex-col items-center gap-4">
          <p className="text-sm text-textGray flex items-center gap-2">
            <Lock className="w-4 h-4 text-green-500" /> Datenschutzkonform & sicher • 30 Tage Geld-zurück-Garantie
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="font-sans text-textDark bg-white antialiased overflow-x-hidden">
      <Navigation />
      <Hero />
      <ProblemSection />
      <BeforeAfterSection />
      <SolutionsSection />
      <BonusSection />
      <CalendlySection />
      <div id="demo">
        <DemoSection />
      </div>
      <ROICalculator />
      <FAQ />
      <CalendlySection dark={true} />
      <Footer />
      <FloatingBookingBtn />
      <AIChatAssistant />
    </div>
  );
};

export default App;
