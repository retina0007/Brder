
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ImagePlus, Wand2, Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const AIStudio: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResultImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = async () => {
    if (!image || !prompt) return;
    
    setIsProcessing(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const base64Data = image.split(',')[1];
      const mimeType = image.split(',')[0].split(':')[1].split(';')[0];

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { inlineData: { data: base64Data, mimeType: mimeType } },
            { text: prompt }
          ]
        }
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setResultImage(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (error) {
      console.error("Fehler beim Bearbeiten des Bildes:", error);
      alert("Es gab einen Fehler bei der Bildbearbeitung. Bitte versuche es erneut.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section id="ai-studio" className="py-24 px-6 bg-[#0a0a0c] text-white relative">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold mb-4 uppercase tracking-widest">
            <Sparkles className="w-3 h-3" /> Nano Banana Powered
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">Retina AI Image Studio</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Bearbeite deine Fahrschulfotos wie ein Profi – einfach per Texteingabe. Füge Filter hinzu, entferne Hintergründe oder erstelle "Bestanden"-Designs in Sekunden.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <ImagePlus className="text-accent" /> Schritt 1: Bild wählen
              </h3>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="relative aspect-video rounded-2xl border-2 border-dashed border-white/20 hover:border-accent/50 transition-colors flex flex-col items-center justify-center cursor-pointer group overflow-hidden bg-black/20"
              >
                {image ? (
                  <img src={image} className="w-full h-full object-cover" alt="Vorschau" />
                ) : (
                  <>
                    <ImagePlus className="w-12 h-12 text-gray-500 mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-gray-400 font-medium">Klicke zum Hochladen</p>
                  </>
                )}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  className="hidden" 
                  accept="image/*" 
                />
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Wand2 className="text-accent" /> Schritt 2: Prompt eingeben
              </h3>
              <div className="space-y-4">
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder='z.B. "Füge einen Retro-Filter hinzu und schreibe BESTANDEN in Gold darüber"'
                  className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white placeholder-gray-500 focus:border-accent outline-none transition h-32"
                />
                <div className="flex flex-wrap gap-2">
                  {["Retro Filter", "Hintergrund entfernen", "Schwarz-Weiß", "Goldenes Badge hinzufügen"].map((tag) => (
                    <button 
                      key={tag}
                      onClick={() => setPrompt(tag)}
                      className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={processImage}
                  disabled={isProcessing || !image || !prompt}
                  className="w-full bg-accent text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-glow"
                >
                  {isProcessing ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Magie anwenden
                    </>
                  )}
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal className="h-full" delay="0.2s">
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 border border-white/10 rounded-3xl p-8 backdrop-blur-md h-full min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
              
              {resultImage ? (
                <div className="relative w-full h-full animate-fade-in flex flex-col">
                  <h4 className="text-center font-bold text-accent mb-6 flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" /> Dein KI-bearbeitetes Bild
                  </h4>
                  <div className="flex-1 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                    <img src={resultImage} className="w-full h-full object-contain bg-black" alt="Ergebnis" />
                  </div>
                  <div className="mt-6 flex gap-4">
                    <button 
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = resultImage;
                        link.download = 'retina-flow-edit.png';
                        link.click();
                      }}
                      className="flex-1 bg-white text-black py-3 rounded-xl font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2"
                    >
                      Bild speichern
                    </button>
                    <button 
                      onClick={() => { setResultImage(null); setPrompt(""); }}
                      className="flex-1 bg-white/10 text-white py-3 rounded-xl font-bold hover:bg-white/20 transition"
                    >
                      Neu starten
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10 animate-pulse">
                    <Wand2 className="w-10 h-10 text-gray-600" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-300">Bereit für die Magie?</h4>
                    <p className="text-gray-500 max-w-xs mx-auto">
                      Lade ein Bild hoch und gib einen Befehl ein, um die KI-Transformation zu starten.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
