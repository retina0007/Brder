
import React from 'react';
import { Check, ArrowRight, Calculator, Star } from 'lucide-react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  return (
    <section id="start" className="relative pt-28 pb-16 lg:pt-36 lg:pb-32 px-4 overflow-hidden bg-bgDark">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="IMG_1317.png" 
          alt="Fahrschule Management" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bgDark via-bgDark/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bgDark via-transparent to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="space-y-8 text-white">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 text-accent px-4 py-2 rounded-full text-xs lg:text-sm font-bold shadow-2xl ring-1 ring-white/5 uppercase tracking-widest">
              Das Betriebssystem für Fahrschulen
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-white tracking-tighter">
              8-12 Stunden pro Woche zurück & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-accent to-blue-200">+30% mehr Anmeldungen.</span>
            </h1>
            
            <p className="text-lg lg:text-2xl text-gray-300 leading-relaxed font-light max-w-xl">
              Stoppe das WhatsApp-Chaos. Wir richten dir ein System ein, das die unbezahlte Tipp-Zeit deiner Fahrlehrer in bezahlte Fahrstunden verwandelt – ohne IT-Aufwand für dich.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                { text: "Zeit-Gewinn: Der Termin-Autopilot übernimmt die Absprachen.", bold: "Zeit-Gewinn" },
                { text: "Mehr Anmeldungen: Platz 1 bei Google sorgt für neue Schüler.", bold: "Mehr Anmeldungen" },
                { text: "0% Technik-Stress: Wir richten alles schlüsselfertig ein.", bold: "0% Technik-Stress" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center border border-accent/30 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Check className="w-4 h-4 text-accent group-hover:text-white" />
                  </div>
                  <span className="text-gray-200 text-lg font-medium">
                    <span dangerouslySetInnerHTML={{ __html: item.text.replace(item.bold, `<strong class="text-white">${item.bold}</strong>`) }}></span>
                  </span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-8">
              <a href="#termin" className="bg-white text-black px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-glow flex items-center justify-center gap-3 group">
                Kostenlose Analyse buchen
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#roi" className="bg-white/5 backdrop-blur-2xl border border-white/10 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                Mein Potenzial berechnen
                <Calculator className="w-6 h-6 text-accent" />
              </a>
            </div>

            <div className="flex items-center gap-6 pt-10 border-t border-white/5">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} className="h-12 w-12 rounded-full border-2 border-bgDark ring-2 ring-accent/20 object-cover shadow-2xl" src={`https://i.pravatar.cc/150?u=manager${i}`} alt="Inhaber" />
                ))}
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center border-2 border-bgDark text-[10px] font-black text-white shadow-glow">30+</div>
              </div>
              <p className="text-sm font-medium text-gray-400">
                Bereits in über <span className="text-accent font-black">30 Fahrschulen</span> erfolgreich im Einsatz.
              </p>
            </div>
          </Reveal>
          
          <Reveal className="hidden lg:block relative" delay="0.3s">
            <div className="gemini-glow-container bg-[#0f0f13] rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/10 p-12 text-center space-y-6">
                <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <Check className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-3xl font-black text-white">Alles auf Autopilot.</h3>
                <p className="text-gray-400">Termine, Bewertungen und Social Media – wir managen das System, du steuerst die Fahrschule.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
