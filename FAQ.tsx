
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';

const FAQS = [
  {
    question: "Ich bin kein IT-Experte – bekomme ich das hin?",
    answer: "Musst du nicht. Wir übernehmen die komplette Einrichtung ('Done-for-You'). Wir verbinden das System mit deiner Verwaltung (Fahren Lernen, Fahrschulmanager, etc.). Du musst nichts programmieren und keine neue Software lernen."
  },
  {
    question: "Haben meine Fahrlehrer Angst vor Kontrolle?",
    answer: "Im Gegenteil. Unsere Erfahrung zeigt: Fahrlehrer lieben das System, weil sie nach Feierabend wirklich frei haben. Das System fängt die nervigen Standard-Fragen ab, und sie müssen nicht mehr privat auf WhatsApp erreichbar sein."
  },
  {
    question: "Wie funktioniert die WhatsApp-Integration?",
    answer: "Retina Flow verbindet sich nahtlos mit deiner Nummer. Du und dein Team behaltet jederzeit die volle Kontrolle und Einsicht in alle Chats über ein zentrales Dashboard, müsst aber bei Standardfragen nicht mehr manuell eingreifen."
  },
  {
    question: "Ist das Ganze DSGVO-konform?",
    answer: "Absolut. Alle Daten liegen auf deutschen Servern. Wir erfüllen alle strengen Anforderungen für Fahrschulen und stellen dir einen fertigen Auftragsverarbeitungsvertrag (AVV) zur Verfügung."
  },
  {
    question: "Was kostet Retina Flow eigentlich?",
    answer: "Für eine typische Fahrschule (3-5 Lehrer) liegen die Kosten bei ca. 290€/Monat. Das entspricht weniger als 2 Fahrstunden. Wenn das System dir nur 2 Stunden Arbeit im Monat spart, hat es sich schon gelohnt. Realistisch spart es dir 30-50 Stunden."
  },
  {
    question: "Gibt es eine Garantie?",
    answer: "Ja. Wir bieten eine 30-Tage-Geld-zurück-Garantie. Wenn du merkst, dass das System dir keine Zeit spart oder nicht zu deinem Betrieb passt, erstatten wir dir jeden Cent zurück. Ohne Wenn und Aber."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">Klartext & Fragen</h2>
          <p className="text-lg lg:text-xl text-textGray">Alles, was du als Inhaber wissen musst</p>
        </Reveal>
        <Reveal className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
              <button 
                onClick={() => toggle(index)} 
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition"
              >
                <span className="font-bold text-lg text-textDark">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-textGray transition-transform ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 text-textGray leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
