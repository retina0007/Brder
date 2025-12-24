
import React from 'react';
import { Trophy, CheckCircle2, CalendarDays } from 'lucide-react';
import { Reveal } from './Reveal';

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-24 px-6 bg-[#050507] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
            <Reveal className="text-center mb-12 lg:mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">Dein Fahrschul-Upgrade</h2>
                <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto font-light">
                    Wir installieren keine komplizierte Software. Wir sorgen für mehr Gewinn. Das sind die zwei Säulen unseres Systems:
                </p>
            </Reveal>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Säule 1: Marktführerschaft */}
                <Reveal className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8 rounded-2xl shadow-2xl hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start justify-between mb-6">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-yellow-400 rounded-2xl flex items-center justify-center">
                            <Trophy className="w-6 h-6 lg:w-7 lg:h-7 text-yellow-900" />
                        </div>
                        <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Säule 1: Ruf</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 uppercase">Marktführerschaft durch Ruf</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm lg:text-base">
                        Sichere dir den Platzhirsch-Status bei Google. Unsere KI sorgt dafür, dass jeder zufriedene Schüler deine Fahrschule öffentlich empfiehlt – ohne Nachhaken.
                    </p>
                    <div className="space-y-3 mb-6">
                        {[
                            "Vollautomatisch: WhatsApp geht raus, sobald der Prüfer 'Bestanden' sagt.",
                            "Psychologisch optimiert: Fragt im Moment der größten Freude.",
                            "Dominanz: Du wirst die erste Wahl in deiner Stadt."
                        ].map((item, i) => (
                             <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-300">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white/10 border border-white/20 p-4 rounded-xl">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider italic">Ergebnis</span>
                            <span className="text-2xl font-bold text-green-400">+450% Rezensionen</span>
                        </div>
                    </div>
                </Reveal>
                {/* Säule 2: Operative Entlastung */}
                <Reveal className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 lg:p-8 rounded-2xl shadow-2xl hover:bg-white/10 transition-all duration-300" delay="0.2s">
                    <div className="flex items-start justify-between mb-6">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-600 rounded-2xl flex items-center justify-center">
                            <CalendarDays className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                        </div>
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Säule 2: Zeit</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 uppercase">Operative Entlastung</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm lg:text-base">
                        Reduziere die "Tipp-Zeit" deiner Fahrlehrer auf Null. Das System klärt Terminfragen und füllt Lücken im Kalender vollautomatisch via WhatsApp.
                    </p>
                    <div className="space-y-3 mb-6">
                         {[
                            "24/7 Erreichbarkeit: Antwortet auch sonntags um 22 Uhr.",
                            "Intelligent: Füllt Lücken im Kalender hocheffizient auf.",
                            "Freiheit: Deine Fahrlehrer fahren wieder, statt zu organisieren."
                        ].map((item, i) => (
                             <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-300">{item}</span>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white/10 border border-white/20 p-4 rounded-xl">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider italic">Zeitgewinn</span>
                            <span className="text-2xl font-bold text-green-400">8-12h pro Woche</span>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
  );
};
