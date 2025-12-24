
import React, { useState, useEffect } from 'react';
import { Info, Banknote, TrendingUp, Lightbulb, ArrowRight, Clock } from 'lucide-react';
import { Reveal } from './Reveal';

export const ROICalculator: React.FC = () => {
  const [teachers, setTeachers] = useState(3);
  const [hourlyRate, setHourlyRate] = useState(60);
  const [savedHoursPerWeek, setSavedHoursPerWeek] = useState(4);
  const [results, setResults] = useState({ monthly: 0, yearly: 0, time: 0 });

  useEffect(() => {
    // Rechnung: Zeitersparnis pro Lehrer wird in zusätzliche Fahrstunden umgewandelt
    const weeklyRevenue = teachers * savedHoursPerWeek * hourlyRate;
    const yearly = weeklyRevenue * 52;
    const monthlyAvg = Math.round(yearly / 12);
    setResults({ monthly: monthlyAvg, yearly: yearly, time: teachers * savedHoursPerWeek });
  }, [teachers, hourlyRate, savedHoursPerWeek]);

  return (
    <section id="roi" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">Dein Profit-Hebel</h2>
          <p className="text-lg lg:text-xl text-textGray max-w-3xl mx-auto">
            Berechne, wie viel ungenutztes Potenzial in deinem Team steckt.
          </p>
        </Reveal>
        
        <Reveal className="bg-gradient-to-br from-blue-50 to-white p-8 lg:p-12 rounded-3xl shadow-2xl border border-blue-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-lg font-bold text-textDark">Anzahl Fahrlehrer</label>
                  <span className="text-2xl font-bold text-primary">{teachers}</span>
                </div>
                <input 
                  type="range" min="1" max="20" value={teachers} 
                  onChange={(e) => setTeachers(parseInt(e.target.value))}
                  className="w-full accent-primary"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-lg font-bold text-textDark">Umsatz pro Fahrstunde (45 min)</label>
                  <span className="text-2xl font-bold text-primary">{hourlyRate}€</span>
                </div>
                <input 
                  type="range" min="40" max="120" value={hourlyRate} step="5"
                  onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                  className="w-full accent-primary" 
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-lg font-bold text-textDark">Eingesparte Orga-Zeit / Woche pro Lehrer</label>
                  <span className="text-2xl font-bold text-primary">{savedHoursPerWeek} Std.</span>
                </div>
                <input 
                  type="range" min="1" max="10" value={savedHoursPerWeek}
                  onChange={(e) => setSavedHoursPerWeek(parseInt(e.target.value))}
                  className="w-full accent-primary" 
                />
                <p className="text-[10px] text-gray-400 mt-2 italic">Durschnittlich 4-6 Stunden pro Woche gehen für WhatsApp & Orga verloren.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-card border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center"><TrendingUp className="w-6 h-6 text-green-600"/></div>
                  <span className="text-sm font-black text-textGray uppercase tracking-widest">Zusatz-Potenzial pro Jahr</span>
                </div>
                <div className="text-5xl font-black text-green-600 mb-2">{results.yearly.toLocaleString('de-DE')}€</div>
                <p className="text-sm text-textGray leading-relaxed">
                  Das ist der Umsatz, den dein Team aktuell durch Tippen statt Fahren verliert.
                </p>
              </div>

              <div className="bg-primary text-white p-8 rounded-2xl shadow-xl border border-blue-400/30">
                <div className="flex items-start gap-4 mb-4">
                  <Clock className="w-6 h-6 text-blue-200 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl mb-1">Zeitgewinn für dein Team</h4>
                    <p className="text-blue-100 text-sm">
                      Du schenkst deinen <strong>{teachers} Fahrlehrern</strong> insgesamt <strong className="text-white">{results.time} Stunden pro Woche</strong> Lebensqualität. Zufriedene Mitarbeiter kündigen seltener.
                    </p>
                  </div>
                </div>
                <a href="#termin" className="w-full bg-white text-primary py-4 rounded-xl font-bold text-center block hover:bg-blue-50 transition">Potenzial-Analyse anfordern</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
