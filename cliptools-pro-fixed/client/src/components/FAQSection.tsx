/*
 * FAQSection — ClipTools Pro
 * Design: Minimalismo Técnico Premium
 * Accordion FAQ with Schema Markup JSON-LD injection
 */

import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  schemaId?: string;
}

export default function FAQSection({
  faqs,
  title = "Preguntas Frecuentes",
  subtitle = "Todo lo que necesitas saber sobre nuestras herramientas gratuitas.",
  schemaId = "faq-schema",
}: FAQSectionProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    const existing = document.getElementById(schemaId);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = schemaId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(schemaId);
      if (el) el.remove();
    };
  }, [faqs, schemaId]);

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-slate-500 text-lg">{subtitle}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-slate-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-slate-900 text-base py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
