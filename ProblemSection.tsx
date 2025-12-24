
import React from 'react';
import { Users, TrendingDown, ShieldAlert, MessageSquareX, BarChart3 } from 'lucide-react';
import { Reveal } from './Reveal';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problems" className="py-32 px-6 bg-bgDark text-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="text-center mb-24">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-black uppercase tracking-widest mb-6">Realitäts-Check</div>
          <h2 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter text-white">
            Warum deine Fahrschule <br/>
            <span className="text-gray-500">unnötig Zeit verliert.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Du hast deine Fahrschule gegründet, um Unternehmer zu sein – nicht um der hochbezahlte 24/7-Notdienst für Terminfragen zu spielen.
          </p>
        </Reveal>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Problem 1: Der teure Sekretär */}
          <Reveal className="bg-[#0f0f13] border border-white/5 p-12 rounded-[2.5rem] hover:border-white/20 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-red-500/10 transition-all"></div>
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-3xl font-black mb-6 text-white tracking-tight">Der "Teure Sekretär"-Effekt</h3>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
              Deine Fahrlehrer (und du) verbringen pro Woche mehrere Stunden mit Nachrichten tippen. Das sind teure Arbeitsstunden, in denen keine Fahrstunde gegeben wird. Du bezahlst Fahrlehrer-Gehalt für Sekretariats-Arbeit.
            </p>
            <div className="space-y-4">
              {[
                "Umsatzverlust durch tippendes Personal",
                "Fehlender Feierabend durch WhatsApp-Druck",
                "Kein Überblick über Absprachen"
              ].map((p, idx) => (
                <div key={idx} className="flex items-center gap-4 text-gray-500 group-hover:text-gray-300 transition-colors">
                  <MessageSquareX className="w-5 h-5 text-red-500/50 flex-shrink-0" />
                  <span className="text-sm font-medium">{p}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Problem 2: Wachstum bringt Chaos */}
          <Reveal className="bg-[#0f0f13] border border-white/5 p-12 rounded-[2.5rem] hover:border-white/20 transition-all duration-500 group relative overflow-hidden" delay="0.2s">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-orange-500/10 transition-all"></div>
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform">
              <TrendingDown className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-3xl font-black mb-6 text-white tracking-tight">Wachstum bringt aktuell nur Chaos</h3>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
              Mehr Schüler bedeuten aktuell zwingend mehr Arbeit am Handy. Du kannst deinen Betrieb nicht vergrößern, ohne selbst auszubrennen oder ständig neues Büro-Personal zu suchen.
            </p>
            <div className="space-y-4">
              {[
                "Bürokosten fressen deinen Gewinn",
                "Expansion fühlt sich wie mehr Last an",
                "Keine Zeit für strategische Planung"
              ].map((p, idx) => (
                <div key={idx} className="flex items-center gap-4 text-gray-500 group-hover:text-gray-300 transition-colors">
                  <BarChart3 className="w-5 h-5 text-orange-500/50 flex-shrink-0" />
                  <span className="text-sm font-medium">{p}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Problem 3: Unsichtbare Qualität */}
          <Reveal className="bg-[#0f0f13] border border-white/5 p-12 rounded-[2.5rem] hover:border-white/20 transition-all duration-500 group relative overflow-hidden" delay="0.3s">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-all"></div>
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-3xl font-black mb-6 text-white tracking-tight">Die unsichtbare Konkurrenz</h3>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg">
              Deine Fahrlehrer machen einen super Job, aber online sieht man das nicht. Die Konkurrenz sammelt fleißig Bewertungen, während deine Erfolge im Auto bleiben. Du verlierst Anmeldungen an Fahrschulen, die schlechter ausbilden.
            </p>
            <div className="space-y-4">
              {[
                "Exzellente Arbeit wird online nicht belohnt",
                "Potenzielle Schüler gehen zur Konkurrenz",
                "Abhängigkeit von teuren Anzeigen"
              ].map((p, idx) => (
                <div key={idx} className="flex items-center gap-4 text-gray-500 group-hover:text-gray-300 transition-colors">
                  <ShieldAlert className="w-5 h-5 text-blue-500/50 flex-shrink-0" />
                  <span className="text-sm font-medium">{p}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
