import React from 'react';
import { XCircle, Smartphone, Hourglass, BatteryWarning, AlertTriangle, CheckCircle2, Coffee, PieChart, Star, TrendingUp } from 'lucide-react';
import { Reveal } from './Reveal';

export const BeforeAfterSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
            <Reveal className="text-center mb-12 lg:mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 text-textDark">Vorher vs. Nachher</h2>
                <p className="text-lg lg:text-xl text-gray-500 max-w-3xl mx-auto">
                    So sieht dein Arbeitsalltag vor und nach Retina Flow aus
                </p>
            </Reveal>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* BEFORE */}
                <Reveal className="space-y-6">
                    <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                        <XCircle className="w-4 h-4" />
                        VORHER
                    </div>
                    
                    <div className="space-y-4">
                        <div className="bg-white p-5 lg:p-6 rounded-2xl border-2 border-red-100 shadow-card">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-red-50 rounded-xl flex items-center justify-center border border-red-100 shrink-0">
                                    <Smartphone className="w-5 h-5 lg:w-6 lg:h-6 text-red-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-red-900">Montag 08:00 Uhr</h4>
                                    <p className="text-textGray text-sm leading-relaxed">
                                        Handy vibriert durchgehend. 47 WhatsApp-Nachrichten mit Terminanfragen. Du versuchst, alle zu koordinieren, während du eigentlich Fahrstunden gibst.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-5 lg:p-6 rounded-2xl border-2 border-red-100 shadow-card">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-red-50 rounded-xl flex items-center justify-center border border-red-100 shrink-0">
                                    <Hourglass className="w-5 h-5 lg:w-6 lg:h-6 text-red-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-red-900">Mittag 12:30 Uhr</h4>
                                    <p className="text-textGray text-sm leading-relaxed">
                                        Mittagspause? Fehlanzeige. Du sitzt im Büro und versuchst, die Terminlücken zu schließen. Schüler A kann nur dienstags, Schüler B nur mittwochs...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-5 lg:p-6 rounded-2xl border-2 border-red-100 shadow-card">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-red-50 rounded-xl flex items-center justify-center border border-red-100 shrink-0">
                                    <BatteryWarning className="w-5 h-5 lg:w-6 lg:h-6 text-red-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-red-900">Abend 19:00 Uhr</h4>
                                    <p className="text-textGray text-sm leading-relaxed">
                                        Du hast gerade einem Schüler zum bestandenen Führerschein gratuliert. „Kannst du uns bei Google bewerten?" Natürlich vergisst er es.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-red-900 font-bold mb-2">Versteckte Kosten:</p>
                                <p className="text-red-800 text-sm leading-relaxed">
                                    8-12h Terminkoordination pro Woche = <strong>23.000€/Jahr</strong><br/>
                                    Verpasste Bewertungen = <strong>30.000€/Jahr</strong> entgangener Umsatz<br/>
                                    Inaktives Social Media = <strong>20.000€/Jahr</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
                {/* AFTER */}
                <Reveal className="space-y-6" delay="0.2s">
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                        <CheckCircle2 className="w-4 h-4" />
                        NACHHER
                    </div>
                    
                    <div className="space-y-4">
                        <div className="bg-white p-5 lg:p-6 rounded-2xl border-2 border-green-100 shadow-card">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-50 rounded-xl flex items-center justify-center border border-green-100 shrink-0">
                                    <Coffee className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-green-900">Montag 08:00 Uhr</h4>
                                    <p className="text-textGray text-sm leading-relaxed">
                                        Du trinkst entspannt deinen Kaffee. Der Termin-Autopilot hat über Nacht 27 Anfragen bearbeitet und optimal verteilt. Dein Kalender ist voll – ohne dein Zutun.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-5 lg:p-6 rounded-2xl border-2 border-green-100 shadow-card">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-50 rounded-xl flex items-center justify-center border border-green-100 shrink-0">
                                    <PieChart className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-green-900">Mittag 12:30 Uhr</h4>
                                    <p className="text-textGray text-sm leading-relaxed">
                                        Echte Mittagspause. Du planst deine Expansion ins benachbarte Stadtgebiet und checkst die Zahlen. Spoiler: Dein Google-Rating ist von 4,2★ auf 4,8★ gestiegen.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-5 lg:p-6 rounded-2xl border-2 border-green-100 shadow-card">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-50 rounded-xl flex items-center justify-center border border-green-100 shrink-0">
                                    <Star className="w-5 h-5 lg:w-6 lg:h-6 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-green-900">Abend 19:00 Uhr</h4>
                                    <p className="text-textGray text-sm leading-relaxed">
                                        Ein Schüler hat bestanden. 2 Minuten später erhält er automatisch eine WhatsApp mit dem Google-Bewertungslink. Am nächsten Tag: 5★-Rezension mit emotionalem Text.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-xl">
                        <div className="flex items-start gap-3">
                            <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-green-900 font-bold mb-2">Gewonnene Ressourcen:</p>
                                <p className="text-green-800 text-sm leading-relaxed">
                                    8-12h pro Woche für <strong>strategisches Wachstum</strong><br/>
                                    30% mehr Neukunden durch <strong>bessere Bewertungen</strong><br/>
                                    Konstante Sichtbarkeit auf <strong>Social Media</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
  );
};