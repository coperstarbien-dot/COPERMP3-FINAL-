/*
 * CambiarFormato — ClipTools Pro
 * /cambiar-formato-video
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import UploadZone from "@/components/UploadZone";
import FAQSection from "@/components/FAQSection";
import AdBanner from "@/components/AdBanner";

const faqs = [
  {
    question: "¿Cómo cambiar el formato de un video online?",
    answer: "Sube tu video, selecciona el formato de destino (MP4, MOV, AVI, MKV, WebM, etc.) y haz clic en 'Convertir'. El proceso tarda solo unos segundos dependiendo del tamaño del archivo.",
  },
  {
    question: "¿Qué formatos de video están disponibles?",
    answer: "Soportamos conversión entre MP4, MOV, AVI, MKV, WebM, FLV, 3GP, WMV, TS y más. También puedes convertir a formatos de audio como MP3, AAC y WAV.",
  },
  {
    question: "¿Cuál es el mejor formato de video para redes sociales?",
    answer: "MP4 con codec H.264 es el formato más compatible y recomendado para todas las redes sociales: Instagram, TikTok, YouTube, Twitter y Facebook. Ofrece excelente calidad con tamaño de archivo reducido.",
  },
  {
    question: "¿Puedo convertir MOV a MP4 gratis?",
    answer: "Sí, la conversión de MOV a MP4 es una de las más populares en ClipTools Pro. Es completamente gratuita, sin registro y sin límites de uso.",
  },
  {
    question: "¿Se pierde calidad al cambiar el formato?",
    answer: "La conversión entre formatos puede implicar una pequeña pérdida de calidad al re-codificar. Sin embargo, optimizamos el proceso para que la diferencia sea imperceptible al ojo humano.",
  },
];

const formatPairs = [
  { from: "MP4", to: "MP3", popular: true },
  { from: "MOV", to: "MP4", popular: true },
  { from: "AVI", to: "MP4", popular: false },
  { from: "MKV", to: "MP4", popular: true },
  { from: "WebM", to: "MP4", popular: false },
  { from: "MP4", to: "WebM", popular: false },
  { from: "FLV", to: "MP4", popular: false },
  { from: "MP4", to: "MOV", popular: false },
];

export default function CambiarFormato() {
  useEffect(() => {
    document.title = "Cambiar Formato de Video Online Gratis – Convertir MP4, MOV, AVI | ClipTools Pro";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Cambia el formato de tus videos online gratis. Convierte entre MP4, MOV, AVI, MKV, WebM y más. Sin registro, sin marcas de agua. Rápido y seguro.");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-orange-50 to-white pt-14 pb-10">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <RefreshCw className="w-4 h-4" />
            Conversor de Formatos de Video
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5">
            Cambiar Formato de Video –{" "}
            <span className="text-orange-600">Convierte entre MP4, MOV, AVI y más</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Convierte tus videos entre todos los formatos populares. Compatible con todos los dispositivos y plataformas. Gratis, sin registro.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container max-w-3xl mx-auto">
          <UploadZone toolName="Cambiar Formato" acceptedFormats="MP4, MOV, AVI, MKV, WebM, FLV" />
        </div>
      </section>

      <div className="container py-4">
        <AdBanner size="leaderboard" className="mx-auto" label="Publicidad" />
      </div>

      {/* Popular conversions */}
      <section className="py-12 bg-slate-50">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-8">Conversiones Populares</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {formatPairs.map((pair) => (
              <div
                key={`${pair.from}-${pair.to}`}
                className={`rounded-xl border p-4 text-center ${pair.popular ? "border-orange-200 bg-orange-50" : "border-slate-200 bg-white"}`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="font-bold text-slate-900 text-sm">{pair.from}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                  <span className="font-bold text-orange-600 text-sm">{pair.to}</span>
                </div>
                {pair.popular && (
                  <span className="text-xs text-orange-600 font-medium mt-1 block">Popular</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto prose prose-slate max-w-none">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
            Diferencia entre MP4, MOV, AVI y otros formatos de video
          </h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Entender la <strong>diferencia entre formatos de video</strong> es esencial para los creadores de contenido. <strong>MP4</strong> es el formato más universal, compatible con prácticamente todos los dispositivos y plataformas. Usa el codec H.264 o H.265 y ofrece excelente calidad con tamaño de archivo reducido.
          </p>
          <p className="text-slate-600 leading-relaxed mb-5">
            <strong>MOV</strong> es el formato nativo de Apple y se usa principalmente en Mac y iPhone. Tiene excelente calidad pero archivos más grandes que MP4. Si grabas con un iPhone y necesitas compartir en redes sociales, convertir MOV a MP4 es la mejor opción.
          </p>
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            ¿Cuál es el mejor formato de video para redes sociales?
          </h3>
          <p className="text-slate-600 leading-relaxed mb-5">
            Para la mayoría de plataformas, <strong>MP4 con codec H.264</strong> es la mejor opción. YouTube, Instagram, TikTok, Twitter y Facebook aceptan MP4 sin problemas. Si subes contenido a plataformas profesionales como Vimeo o para edición profesional, MOV o MKV pueden ser mejores opciones por su mayor calidad.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Con ClipTools Pro puedes convertir entre todos estos formatos de forma gratuita y sin registro. Simplemente sube tu video, selecciona el formato de destino y descarga el resultado. El proceso es rápido, seguro y todos los archivos se eliminan automáticamente después de 1 hora.
          </p>
        </div>
      </section>

      <div className="container py-4">
        <AdBanner size="leaderboard" className="mx-auto" label="Publicidad — después del resultado" />
      </div>

      <FAQSection faqs={faqs} title="Preguntas sobre Cambio de Formato" schemaId="faq-formato" />

      <section className="py-16 bg-slate-50">
        <div className="container text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Prueba también nuestras otras herramientas gratuitas</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { href: "/convertidor-mp3-gratis", label: "Convertir a MP3" },
              { href: "/comprimir-video-online", label: "Comprimir Video" },
              { href: "/recortar-video-online", label: "Recortar Video" },
            ].map((link) => (
              <Button key={link.href} asChild variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                <Link href={link.href}>{link.label}<ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
