
import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Trophy, CalendarDays, Instagram, Star, BarChart2, Search, 
  Coins, Zap, Clock, CalendarCheck, MessageCircleOff, Banknote, 
  ImagePlus, Palette, Eye, Gift, CheckCheck, ArrowLeft, Video, 
  Phone, Signal, Wifi, BatteryFull, MoreHorizontal, Heart, MessageCircle, 
  Send, Bookmark, Home, Plus, StickyNote, Camera, Mic 
} from 'lucide-react';
import { Reveal } from './Reveal';

type ScenarioId = 'passed' | 'reminder' | 'social';

interface ScenarioContent {
  title: string;
  icon: React.ReactNode;
  headerBg: string;
  steps: string[];
}

const SCENARIOS: Record<ScenarioId, ScenarioContent> = {
  passed: {
    title: 'Bewertungs-Autopilot',
    icon: <Trophy className="w-6 h-6 text-yellow-900" />,
    headerBg: 'bg-yellow-100',
    steps: [
      'Prüfung bestanden! 🎉 Das System erkennt den Erfolg automatisch.',
      '2 Stunden später erhält der Schüler automatisch eine freundliche WhatsApp mit dem Bewertungslink.',
      'Das System erinnert höflich daran, falls vergessen. <strong class="text-gray-900">Ergebnis: 90% mehr Bewertungen.</strong>'
    ]
  },
  reminder: {
    title: 'Termin-Autopilot',
    icon: <CalendarDays className="w-6 h-6 text-blue-600" />,
    headerBg: 'bg-blue-100',
    steps: [
      'Sonntags fragt das System Schüler automatisch per WhatsApp an: "Wann kannst du fahren?"',
      'Die KI checkt Fahrlehrer-Kalender & Fahrzeuge und macht passende Vorschläge.',
      'Schüler antwortet "Dienstag passt" – Termin wird gebucht, bestätigt & erinnert.'
    ]
  },
  social: {
    title: 'Social-Media-Autopilot',
    icon: <Instagram className="w-6 h-6 text-pink-600" />,
    headerBg: 'bg-pink-100',
    steps: [
      'Fahrlehrer macht ein Foto vom Schüler und schickt es per WhatsApp an das System.',
      'Das System erstellt automatisch das Design (Logo, "Bestanden"-Badge) und schreibt einen KI-Text.',
      'Nach kurzer Bestätigung geht der Post live auf Instagram & Facebook.'
    ]
  }
};

export const DemoSection: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<ScenarioId>('passed');
  const [demoName, setDemoName] = useState('Lukas');
  const [messages, setMessages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [igLike, setIgLike] = useState(false);
  const [showIgPost, setShowIgPost] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleScenarioChange = (id: ScenarioId) => {
    setActiveScenario(id);
    setMessages([]);
    setShowIgPost(false);
  };

  const runDemo = () => {
    setIsLoading(true);
    setMessages([]);
    setShowIgPost(false);

    setTimeout(() => {
      setIsLoading(false);
      if (activeScenario === 'social') {
        setShowIgPost(true);
      } else {
        let msg = '';
        if (activeScenario === 'passed') {
          msg = `Hey ${demoName}! Herzlichen Glückwunsch zum Führerschein! 🚗💨 Das hast du super gemacht. Damit auch andere Schüler wissen, dass sie bei uns gut aufgehoben sind, würde uns eine kurze Bewertung bei Google riesig freuen. Dauert nur 30 Sekunden: [Link: g.page/fahrschule/review] Danke dir!`;
        } else {
          msg = `Hallo ${demoName}, planst du Fahrstunden für nächste Woche? Aktuell sind am Dienstag (14:00) und Donnerstag (16:30) noch Termine bei Markus frei. Sag kurz Bescheid!`;
        }
        setMessages([msg]);
      }
    }, 1500);
  };

  useEffect(() => {
    if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const renderResultBox = () => {
    if (activeScenario === 'passed') {
      return (
        <div className="bg-white border border-green-100 rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden group hover:bg-white transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-6 -mt-6 opacity-50 group-hover:scale-110 transition-transform blur-xl"></div>
            <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-3 relative z-10 text-base lg:text-lg">
                <div className="p-2 bg-green-100 rounded-xl shadow-inner"><BarChart2 className="w-5 h-5 text-green-600"/></div>
                Dein Ergebnis:
            </h4>
            <ul className="space-y-3 text-sm lg:text-base text-gray-600 relative z-10">
                <li className="flex items-start gap-4"><div className="mt-0.5 w-6 h-6 bg-yellow-50 rounded-lg flex items-center justify-center border border-yellow-100"><Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500"/></div><span><strong className="text-gray-900">30-50 neue Bewertungen/Jahr</strong> (statt 3-5)</span></li>
                <li className="flex items-start gap-4"><div className="mt-0.5 w-6 h-6 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100"><BarChart2 className="w-3.5 h-3.5 text-blue-500"/></div><span>Von <strong className="text-gray-900">4,2★ auf 4,8★</strong> in 6-12 Monaten</span></li>
                <li className="flex items-start gap-4"><div className="mt-0.5 w-6 h-6 bg-indigo-50 rounded-lg flex items-center justify-center border border-indigo-100"><Search className="w-3.5 h-3.5 text-indigo-500"/></div><span>Besseres <strong className="text-gray-900">Google-Ranking</strong></span></li>
                <li className="flex items-start gap-4"><div className="mt-0.5 w-6 h-6 bg-green-50 rounded-lg flex items-center justify-center border border-green-100"><Coins className="w-3.5 h-3.5 text-green-600"/></div><span>10-15 zusätzliche Schüler = <strong className="text-green-600">20.000-30.000€ Mehrumsatz</strong></span></li>
            </ul>
        </div>
      );
    } else if (activeScenario === 'reminder') {
        return (
            <div className="bg-white border border-blue-100 rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden group hover:bg-white transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-6 -mt-6 opacity-50 group-hover:scale-110 transition-transform blur-xl"></div>
                <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-3 relative z-10 text-base lg:text-lg">
                    <div className="p-2 bg-blue-100 rounded-xl shadow-inner"><Zap className="w-5 h-5 text-blue-600"/></div>
                    Dein Ergebnis:
                </h4>
                <ul className="space-y-3 text-sm lg:text-base text-gray-600 relative z-10">
                    <li className="flex items-start gap-4"><div className="mt-0.5 w-6 h-6 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100"><Clock className="w-3.5 h-3.5 text-blue-500"/></div><span><strong className="text-gray-900">8-12 Std./Woche</strong> Zeitersparnis</span></li>
                    <li className="flex items-start gap-4"><div className="mt-0.5 w-6 h-6 bg-green-50 rounded-lg flex items-center justify-center border border-green-100"><CalendarCheck className="w-3.5 h-3.5 text-green-500"/></div><span><strong className="text-gray-900">100% Auslastung</strong> ohne Lücken</span></li>
                    <li className="flex items-start gap-4"><div className="mt-0.5 w-6 h-6 bg-purple-50 rounded-lg flex items-center justify-center border border-purple-100"><MessageCircleOff className="w-3.5 h-3.5 text-purple-500"/></div><span>Kein <strong className="text-gray-900">WhatsApp-Ping-Pong</strong> am Abend</span></li>
                    <li className="flex items-start gap-4"><div className="mt-0.5 w-6 h-6 bg-emerald-50 rounded-lg flex items-center justify-center border border-emerald-100"><Banknote className="w-3.5 h-3.5 text-emerald-600"/></div><span>Wert: <strong className="text-emerald-600">23.000€/Jahr</strong> (durch Zeitgewinn)</span></li>
                </ul>
            </div>
        );
    } else {
        return (
            <div className="bg-white border border-pink-100 rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden group hover:bg-white transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-full -mr-6 -mt-6 opacity-50 group-hover:scale-110 transition-transform blur-xl"></div>
                <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-3 relative z-10 text-base lg:text-lg">
                    <div className="p-2 bg-pink-100 rounded-xl shadow-inner"><Zap className="w-5 h-5 text-pink-600"/></div>
                    Dein Ergebnis:
                </h4>
                <ul className="space-y-3 text-sm lg:text-base text-gray-600 relative z-10">
                    <li className="flex items-start gap-4"><div className="mt-0.5 w-6 h-6 bg-pink-50 rounded-lg flex items-center justify-center border border-pink-100"><ImagePlus className="w-3.5 h-3.5 text-pink-500"/></div><span><strong className="text-gray-900">40-60 Posts/Jahr</strong> vollautomatisch</span></li>
                    <li className="flex items-start gap-4"><div className="mt-0.5 w-6 h-6 bg-purple-50 rounded-lg flex items-center justify-center border border-purple-100"><Palette className="w-3.5 h-3.5 text-purple-500"/></div><span>Professionelles <strong className="text-gray-900">Employer Branding</strong></span></li>
                    <li className="flex items-start gap-4"><div className="mt-0.5 w-6 h-6 bg-orange-50 rounded-lg flex items-center justify-center border border-orange-100"><Eye className="w-3.5 h-3.5 text-orange-500"/></div><span>Konstante <strong className="text-gray-900">Sichtbarkeit</strong> bei der Zielgruppe</span></li>
                    <li className="flex items-start gap-4"><div className="mt-0.5 w-6 h-6 bg-yellow-50 rounded-lg flex items-center justify-center border border-yellow-100"><Gift className="w-3.5 h-3.5 text-yellow-600"/></div><span>Wert: <strong className="text-gray-900">1.200€/Jahr</strong> (für dich kostenlos)</span></li>
                </ul>
            </div>
        );
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-[#050507] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Reveal className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold mb-4 shadow-lg animate-pulse"><span className="text-lg">✨</span> Live AI Demo</div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Erlebe die KI in Aktion</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">Wähle einen Modus und sieh zu, wie Retina Flow die Kommunikation übernimmt.</p>
            </Reveal>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start delay-100">
                {/* Left Controls */}
                <div className="space-y-6 order-2 lg:order-1">
                    <div className="flex justify-center lg:justify-start gap-4">
                        <button onClick={() => handleScenarioChange('passed')} className={`animate-float-gentle group relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white border hover:border-accent hover:shadow-[0_0_20px_rgba(41,151,255,0.3)] transition-all duration-300 flex flex-col items-center justify-center gap-1 backdrop-blur-sm ${activeScenario === 'passed' ? 'ring-2 ring-accent scale-105 border-accent active-pulse' : 'border-gray-100 ring-transparent'}`}>
                            <div className="absolute -top-1 -right-1 bg-green-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm z-10">LEAD</div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-0.5 transition-transform group-hover:scale-110 ${activeScenario === 'passed' ? 'bg-blue-50' : 'bg-gray-50'}`}>
                                <Trophy className={`w-4 h-4 ${activeScenario === 'passed' ? 'text-primary' : 'text-gray-400'}`} />
                            </div>
                            <span className={`text-[9px] font-bold uppercase tracking-wide ${activeScenario === 'passed' ? 'text-accent' : 'text-gray-400'}`}>Review</span>
                        </button>
                        
                        <button onClick={() => handleScenarioChange('reminder')} className={`animate-float-gentle group relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white border hover:border-accent hover:shadow-[0_0_20px_rgba(41,151,255,0.3)] transition-all duration-300 flex flex-col items-center justify-center gap-1 backdrop-blur-sm ${activeScenario === 'reminder' ? 'ring-2 ring-accent scale-105 border-accent active-pulse' : 'border-gray-100 ring-transparent'}`} style={{animationDelay: '1s'}}>
                             <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-0.5 transition-transform group-hover:scale-110 ${activeScenario === 'reminder' ? 'bg-blue-50' : 'bg-gray-50'}`}>
                                <CalendarDays className={`w-4 h-4 group-hover:text-accent ${activeScenario === 'reminder' ? 'text-primary' : 'text-gray-400'}`} />
                            </div>
                            <span className={`text-[9px] font-bold uppercase tracking-wide group-hover:text-accent ${activeScenario === 'reminder' ? 'text-accent' : 'text-gray-400'}`}>Termin</span>
                        </button>

                        <button onClick={() => handleScenarioChange('social')} className={`animate-float-gentle group relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white border hover:border-accent hover:shadow-[0_0_20px_rgba(41,151,255,0.3)] transition-all duration-300 flex flex-col items-center justify-center gap-1 backdrop-blur-sm ${activeScenario === 'social' ? 'ring-2 ring-accent scale-105 border-accent active-pulse' : 'border-gray-100 ring-transparent'}`} style={{animationDelay: '2s'}}>
                            <div className="absolute -top-1 -right-1 bg-accent text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm z-10">NEU</div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-0.5 transition-transform group-hover:scale-110 ${activeScenario === 'social' ? 'bg-blue-50' : 'bg-gray-50'}`}>
                                <Instagram className={`w-4 h-4 group-hover:text-accent ${activeScenario === 'social' ? 'text-primary' : 'text-gray-400'}`} />
                            </div>
                            <span className={`text-[9px] font-bold uppercase tracking-wide group-hover:text-accent ${activeScenario === 'social' ? 'text-accent' : 'text-gray-400'}`}>Social</span>
                        </button>
                    </div>

                    <div className="bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-xl relative backdrop-blur-md">
                        <div className="absolute top-0 left-8 -translate-y-1/2 bg-blue-50 px-4 py-1 rounded-full border border-blue-100 text-xs font-bold text-blue-600 shadow-sm uppercase tracking-wider">
                            Der Ablauf
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className={`${SCENARIOS[activeScenario].headerBg} p-2 rounded-xl`}>{SCENARIOS[activeScenario].icon}</span>
                            {SCENARIOS[activeScenario].title}
                        </h3>
                        <div className="text-sm lg:text-base text-gray-600 leading-relaxed space-y-4">
                            {SCENARIOS[activeScenario].steps.map((step, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <span className="font-bold text-blue-600 bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0">{idx + 1}</span>
                                    <p dangerouslySetInnerHTML={{ __html: step }} />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {renderResultBox()}

                    {activeScenario !== 'social' && (
                        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 shadow-lg relative backdrop-blur-sm">
                            <div className="mb-4">
                                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Simuliere einen Schüler</label>
                                <div className="flex items-center gap-3">
                                    <input 
                                        type="text" 
                                        value={demoName}
                                        onChange={(e) => setDemoName(e.target.value)}
                                        placeholder="Name (z.B. Lukas)" 
                                        className="flex-1 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-gray-600 focus:bg-black focus:border-accent focus:ring-1 focus:ring-accent/50 outline-none transition text-sm"
                                    />
                                    <button 
                                        onClick={runDemo}
                                        className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition shadow-[0_0_15px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 group whitespace-nowrap text-sm hover:scale-105 duration-200"
                                    >
                                        <Play className="w-4 h-4 fill-current" />
                                        Demo starten
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeScenario === 'social' && (
                         <div className="bg-white/5 p-6 rounded-3xl border border-white/10 shadow-lg relative backdrop-blur-sm">
                            <div className="mb-4">
                                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Social Media Demo</label>
                                <div className="flex items-center gap-3">
                                    <button 
                                        onClick={runDemo}
                                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-bold hover:brightness-110 transition shadow-lg flex items-center justify-center gap-2 group whitespace-nowrap text-sm hover:scale-105 duration-200"
                                    >
                                        <Instagram className="w-4 h-4" />
                                        Post generieren
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Phone Mockup */}
                <div className="relative w-full max-w-sm mx-auto lg:mr-0 order-1 lg:order-2">
                    <div className="relative bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-800 ring-1 ring-white/20">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-xl z-20"></div>
                        <div className="bg-white rounded-[2rem] overflow-hidden h-[500px] sm:h-[560px] lg:h-[600px] flex flex-col relative">
                             <div className="bg-white/90 backdrop-blur-md px-6 pt-4 pb-2 flex items-center justify-between text-[11px] text-gray-900 z-20 absolute top-0 w-full font-medium">
                                <span>9:41</span>
                                <div className="flex items-center gap-1.5">
                                    <Signal className="w-3 h-3" />
                                    <Wifi className="w-3 h-3" />
                                    <BatteryFull className="w-3 h-3" />
                                </div>
                            </div>

                            {activeScenario !== 'social' ? (
                                <>
                                    {/* WA Header */}
                                    <div className="bg-[#075E54] px-4 pt-12 pb-3 flex items-center gap-3 text-white shadow-md z-10">
                                        <ArrowLeft className="w-5 h-5" />
                                        <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xs border border-white/30">FS</div>
                                        <div className="flex-1">
                                            <div className="font-bold text-sm">Fahrschule Markus</div>
                                            <div className="text-[11px] text-green-100/80">Retina Flow Bot</div>
                                        </div>
                                        <div className="flex gap-4 opacity-90">
                                            <Video className="w-5 h-5" />
                                            <Phone className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Chat Area */}
                                    <div className="bg-[#ECE5DD] flex-1 p-3 overflow-y-auto relative no-scrollbar" id="chat-container">
                                        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')", backgroundSize: '400px' }}></div>
                                        <div className="relative z-10 flex flex-col gap-3 pt-1">
                                            <div className="flex justify-center mb-2"><span className="bg-[#DCE1E6] text-gray-600 text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">HEUTE</span></div>
                                            
                                            <div className="gemini-glow-container bg-white p-2.5 rounded-lg rounded-tl-none shadow-sm text-xs text-gray-800 max-w-[85%] self-start relative border border-gray-100">
                                                <p className="leading-relaxed relative z-10">Hey! 👋 Ich bin dein Retina Flow Assistent. Wähle links einen Modus aus.</p>
                                                <div className="text-[8px] text-gray-400 text-right mt-0.5 flex justify-end gap-1 items-center relative z-10">09:41 <CheckCheck className="w-2.5 h-2.5 text-blue-400"/></div>
                                            </div>

                                            {messages.map((msg, idx) => (
                                                <div key={idx} className="animate-fade-in bg-[#E7FFDB] p-2.5 rounded-lg rounded-tr-none shadow-sm text-xs text-gray-800 max-w-[85%] self-end relative border border-green-100">
                                                    <p className="leading-relaxed">{msg}</p>
                                                    <div className="text-[8px] text-gray-400 text-right mt-0.5 flex justify-end gap-1 items-center">Gerade eben <CheckCheck className="w-2.5 h-2.5 text-blue-400"/></div>
                                                </div>
                                            ))}

                                            {isLoading && (
                                                <div className="bg-white p-2.5 rounded-lg rounded-tl-none shadow-sm w-12 self-start">
                                                    <div className="flex gap-1 justify-center">
                                                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                                                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                                                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                                                    </div>
                                                </div>
                                            )}
                                            <div ref={chatEndRef} />
                                        </div>
                                    </div>
                                    
                                    {/* WA Input */}
                                    <div className="bg-[#F0F2F5] px-2 py-2 flex items-center gap-2 border-t border-gray-200 z-10">
                                        <Plus className="w-5 h-5 text-[#007AFF]" />
                                        <div className="flex-1 bg-white px-3 py-1.5 rounded-full border border-gray-200 flex items-center justify-between">
                                            <span className="text-gray-400 text-xs">Nachricht</span>
                                            <StickyNote className="w-4 h-4 text-gray-400" />
                                        </div>
                                        <Camera className="w-5 h-5 text-[#007AFF]" />
                                        <Mic className="w-5 h-5 text-[#007AFF]" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* IG Header */}
                                    <div className="bg-white px-3 pt-10 pb-2 flex items-center justify-between border-b border-gray-100 z-10">
                                        <ArrowLeft className="w-5 h-5 text-black" />
                                        <div className="text-center">
                                            <div className="font-bold text-[10px] text-gray-500 uppercase tracking-wide">Beiträge</div>
                                            <div className="font-bold text-xs text-black">fahrschule_markus</div>
                                        </div>
                                        <MoreHorizontal className="w-5 h-5 text-black" />
                                    </div>

                                    {/* IG Feed */}
                                    <div className="bg-white flex-1 overflow-y-auto relative no-scrollbar">
                                        {isLoading && (
                                            <div className="h-full flex flex-col items-center justify-center p-6 text-center absolute inset-0 bg-white z-20">
                                                <div className="w-8 h-8 border-4 border-gray-100 border-t-accent rounded-full animate-spin mb-3"></div>
                                                <p className="text-gray-500 font-medium text-xs animate-pulse">KI generiert Bild & Text...</p>
                                            </div>
                                        )}
                                        {showIgPost && !isLoading && (
                                            <div className="animate-fade-in pb-16">
                                                <div className="flex items-center justify-between p-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-7 h-7 bg-gradient-to-tr from-yellow-400 to-purple-600 p-[1.5px] rounded-full">
                                                            <div className="w-full h-full bg-white rounded-full p-[1.5px]">
                                                                <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden">
                                                                    <div className="w-full h-full bg-primary flex items-center justify-center text-white text-[8px] font-bold">FS</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="font-bold text-xs text-gray-900">fahrschule_markus</span>
                                                    </div>
                                                    <MoreHorizontal className="w-4 h-4 text-gray-600" />
                                                </div>
                                                <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                                                    <img 
                                                        src="Gemini_Generated_Image_i65srbi65srbi65s.png" 
                                                        alt="Führerschein bestanden" 
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="p-2">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <div className="flex items-center gap-3">
                                                            <Heart 
                                                                className={`w-5 h-5 transition cursor-pointer ${igLike ? 'text-red-500 fill-red-500' : 'text-black hover:text-red-500'}`} 
                                                                onClick={() => setIgLike(!igLike)}
                                                            />
                                                            <MessageCircle className="w-5 h-5 text-black -rotate-90" />
                                                            <Send className="w-5 h-5 text-black" />
                                                        </div>
                                                        <Bookmark className="w-5 h-5 text-black" />
                                                    </div>
                                                    <div className="font-bold text-xs mb-1 text-gray-900">Gefällt {igLike ? 43 : 42} Mal</div>
                                                    <div className="text-xs leading-snug">
                                                        <span className="font-bold mr-1 text-gray-900">fahrschule_markus</span>
                                                        <span className="text-gray-800">Endlich geschafft! 🥳 Anna hat den Führerschein in der Tasche! 🚗💨 Wir wünschen dir allzeit gute und sichere Fahrt. #Fahrschule #Bestanden #Freiheit #AnnaOnTour</span>
                                                    </div>
                                                    <div className="text-[9px] text-gray-400 mt-1 uppercase">VOR 2 MINUTEN</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* IG Nav */}
                                    <div className="bg-white px-5 py-2.5 flex items-center justify-between border-t border-gray-100 z-10">
                                        <Home className="w-5 h-5 text-black" />
                                        <Search className="w-5 h-5 text-gray-400" />
                                        <div className="w-5 h-5 border-2 border-black rounded-md flex items-center justify-center"><Plus className="w-3 h-3 text-black" /></div>
                                        <Heart className="w-5 h-5 text-gray-400" />
                                        <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
