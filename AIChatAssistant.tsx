
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';
import { MessageSquare, Mic, X, Send, MicOff, Sparkles } from 'lucide-react';

export const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Hallo! Ich bin deine Retina Flow Assistenz. Wie kann ich dir helfen, deine Fahrschule auf Autopilot zu stellen?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sessionRef = useRef<any>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: userMsg,
        config: {
          systemInstruction: 'Du bist eine professionelle Assistenz für Retina Flow. Deine Zielgruppe sind Fahrschulinhaber. Deine Sprache ist direkt, lösungsorientiert und vermeidet IT-Fachbegriffe. Du betonst Zeitersparnis, Mitarbeiterzufriedenheit und Umsatzsteigerung. Erkläre, dass Retina Flow die Tipp-Arbeit der Fahrlehrer übernimmt und Google-Bewertungen automatisiert.'
        }
      });
      
      setMessages(prev => [...prev, { role: 'model', text: response.text || 'Entschuldigung, ich konnte darauf nicht antworten.' }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Ups, da ist etwas schiefgelaufen. Bitte versuche es gleich noch einmal.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const toggleVoice = async () => {
    if (isVoiceActive) {
      if (sessionRef.current) sessionRef.current.close?.();
      setIsVoiceActive(false);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (!audioContextRef.current) audioContextRef.current = new AudioContext({ sampleRate: 24000 });
      setIsVoiceActive(true);

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-09-2025',
        callbacks: {
          onopen: () => {
            const inputCtx = new AudioContext({ sampleRate: 16000 });
            const source = inputCtx.createMediaStreamSource(stream);
            const processor = inputCtx.createScriptProcessor(4096, 1, 1);
            processor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const int16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) int16[i] = inputData[i] * 32768;
              const base64 = btoa(String.fromCharCode(...new Uint8Array(int16.buffer)));
              sessionPromise.then(session => session.sendRealtimeInput({ media: { data: base64, mimeType: 'audio/pcm;rate=16000' } }));
            };
            source.connect(processor);
            processor.connect(inputCtx.destination);
          },
          onmessage: async (msg) => {
            const audioData = msg.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (audioData && audioContextRef.current) {
              const binary = atob(audioData);
              const bytes = new Uint8Array(binary.length);
              for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
              const int16 = new Int16Array(bytes.buffer);
              const buffer = audioContextRef.current.createBuffer(1, int16.length, 24000);
              const channel = buffer.getChannelData(0);
              for (let i = 0; i < int16.length; i++) channel[i] = int16[i] / 32768.0;
              const source = audioContextRef.current.createBufferSource();
              source.buffer = buffer;
              source.connect(audioContextRef.current.destination);
              source.start();
            }
          },
          onerror: () => setIsVoiceActive(false),
          onclose: () => setIsVoiceActive(false)
        },
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: 'Du bist eine Sprach-Assistenz für Retina Flow. Sprich wie ein Partner für Fahrschulinhaber. Hilfsbereit, geschäftsorientiert und klar.'
        }
      });
      sessionRef.current = await sessionPromise;
    } catch (err) {
      setIsVoiceActive(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-[60] bg-accent text-white p-4 rounded-full shadow-glow hover:scale-110 transition-transform group flex items-center gap-3"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-bold">Frag die Retina-KI</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 left-6 w-[90vw] max-w-[400px] h-[70vh] max-h-[600px] bg-white rounded-3xl shadow-2xl z-[65] border border-gray-100 flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-primary p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5" />
              <div className="font-bold text-sm">Retina Flow KI</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={toggleVoice} className={`p-2 rounded-full transition ${isVoiceActive ? 'bg-red-500 animate-pulse' : 'bg-white/10 hover:bg-white/20'}`}>
                {isVoiceActive ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition"><X className="w-5 h-5" /></button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 no-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-xs text-gray-400 animate-pulse">KI schreibt...</div>}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Frag etwas..."
                className="flex-1 bg-gray-100 border-none rounded-2xl px-4 py-3 text-sm"
              />
              <button onClick={handleSendMessage} className="bg-primary text-white p-3 rounded-2xl"><Send className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
