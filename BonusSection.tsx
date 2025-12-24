
import React from 'react';
import { Crown, Palette, PenTool, Rocket, Gem, Flame, ArrowRight, Users } from 'lucide-react';
import { Reveal } from './Reveal';

export const BonusSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#08080a] relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
            <Reveal className="border border-yellow-500/30 bg-gradient-to-br from-[#1c1c1e] to-[#000000] rounded-[2.5rem] p-10 lg:p-16 shadow-[0_0_60px_-20px_rgba(234,179,8,0.15)] relative overflow-hidden group">
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-yellow-500/20 transition-colors duration-700"></div>
                
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="text-4xl">🎁</div>
                        <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
                            <Crown className="w-4 h-4" />
                            RECRUITING & MARKEN-BONUS
                        </div>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
                        Der Social-Media-Autopilot <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">(Wert: 6.000€/Jahr)</span>
                    </h3>
                    
                    <p className="text-xl text-gray-400 mb-10 max-w-3xl font-light leading-relaxed">
                        Fahrlehrermangel ist dein größtes Problem? Werde als modernster Arbeitgeber sichtbar. Wir posten deine Erfolge vollautomatisch, ziehen neue Schüler an und beeindrucken potenzielle Fahrlehrer.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                        {[
                            { icon: <Palette className="w-5 h-5 text-yellow-500"/>, title: "Profi-Branding", text: "Dein Logo & Farben auf jedem Post – maximale Autorität." },
                            { icon: <Users className="w-5 h-5 text-yellow-500"/>, title: "Employer Branding", text: "Zeige, dass deine Fahrlehrer Zeit zum Fahren haben, nicht zum Tippen." },
                            { icon: <Rocket className="w-5 h-5 text-yellow-500"/>, title: "Null Aufwand", text: "Nach der Prüfung postet das System in 30 Sek. auf Insta & Facebook." },
                        ].map((item, i) => (
                             <div key={i} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                                <div className="flex items-center gap-2 mb-3">
                                    {item.icon}
                                    <h4 className="font-bold text-sm text-white">{item.title}</h4>
                                </div>
                                <p className="text-xs text-gray-400">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
                      <a href="#termin" className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition shadow-lg flex items-center gap-2 group">
                        Bonus-Verfügbarkeit prüfen
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                </div>
            </Reveal>
        </div>
    </section>
  );
};
