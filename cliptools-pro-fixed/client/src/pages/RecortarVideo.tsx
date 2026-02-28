/*
 * RecortarVideo — ClipTools Pro
 * /recortar-video-online
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { Scissors, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import UploadZone from "@/components/UploadZone";
import FAQSection from "@/components/FAQSection";
import AdBanner from "@/components/AdBanner";

const faqs = [
  {
    question: "¿Cómo recortar un video online gratis?",
    answer: "Sube tu video, usa los controles de tiempo para seleccionar el inicio y fin del fragmento que quieres conservar, y haz clic en 'Recortar'. El proceso tarda solo unos segundos.",
  },
  {
    question: "¿Puedo recortar múltiples partes de un video?",
    answer: "Sí, puedes seleccionar múltiples segmentos del video para conservar o eliminar. La herramienta te permite hacer cortes precisos con resolución de milisegundos.",
  },
  {
    question: "¿Se pierde calidad al recortar un video?",
    answer: "No. El recorte de video es una operación no destructiva que no re-codifica el video, por lo que la calidad del fragmento resultante es idéntica al original.",
  },
  {
    question: "¿Qué formatos acepta el cortador de video?",
    answer: "Aceptamos MP4, MOV, AVI, MKV, WebM y más. El resultado se entrega en el mismo formato del archivo original o en MP4 si prefieres.",
  },
  {
    question: "¿Puedo recortar videos para Instagram o TikTok?",
    answer: "Sí, puedes recortar tus videos a la duración exacta que necesitas para cada plataforma: 60 segundos para Instagram, 15-60 segundos para TikTok, etc.",
  },
];

export default function RecortarVideo() {
  useEffect(() => {
    document.title = "Recortar Video Online Gratis – Cortar Video sin Instalar Nada | ClipTools Pro";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Recorta y corta tus videos online gratis. Sin registro, sin marcas de agua. Precisión de milisegundos. Compatible con MP4, MOV, AVI, MKV y más.");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-emerald-50 to-white pt-14 pb-10">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Scissors className="w-4 h-4" />
            Cortador de Video Online
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5">
            Recortar Video Online –{" "}
            <span className="text-emerald-600">Gratis y Sin Instalar Nada</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Corta y recorta tus videos con precisión de milisegundos. Ideal para crear clips para redes sociales, eliminar partes innecesarias y más.
          </p>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container max-w-3xl mx-auto">
          <UploadZone toolName="Recortar Video" acceptedFormats="MP4, MOV, AVI, MKV, WebM" />
        </div>
      </section>

      <div className="container py-4">
        <AdBanner size="leaderboard" className="mx-auto" label="Publicidad" />
      </div>

      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto prose prose-slate max-w-none">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
            Cómo Recortar un Video Online Gratis
          </h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Recortar un video online nunca ha sido tan fácil. Con ClipTools Pro puedes <strong>cortar video online</strong> sin instalar ningún software. Simplemente sube tu archivo, selecciona el fragmento que quieres conservar usando los controles de tiempo y descarga el resultado en segundos.
          </p>
          <p className="text-slate-600 leading-relaxed mb-5">
            Nuestra herramienta de recorte de video es perfecta para creadores de contenido que necesitan adaptar sus videos a diferentes plataformas. Puedes crear clips cortos para TikTok e Instagram desde videos más largos, eliminar las partes aburridas de una grabación, o extraer el momento exacto que quieres compartir.
          </p>
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            Recortar Videos para Redes Sociales
          </h3>
          <p className="text-slate-600 leading-relaxed mb-5">
            Cada plataforma tiene sus propias limitaciones de duración: TikTok acepta videos de 15 segundos a 10 minutos, Instagram Reels hasta 90 segundos, YouTube Shorts hasta 60 segundos, y Twitter hasta 2 minutos y 20 segundos. Con nuestro cortador de video online puedes adaptar cualquier video a estas duraciones con precisión.
          </p>
          <p className="text-slate-600 leading-relaxed">
            El recorte de video en ClipTools Pro es una operación no destructiva: no re-codificamos el video, lo que significa que la calidad del fragmento resultante es exactamente igual al original. No hay pérdida de calidad, sin importar cuántas veces recortes el mismo video.
          </p>
        </div>
      </section>

      <div className="container py-4">
        <AdBanner size="leaderboard" className="mx-auto" label="Publicidad — después del resultado" />
      </div>

      <FAQSection faqs={faqs} title="Preguntas sobre Recortar Videos" schemaId="faq-recortar" />

      <section className="py-16 bg-slate-50">
        <div className="container text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Prueba también nuestras otras herramientas gratuitas</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { href: "/convertidor-mp3-gratis", label: "Convertir a MP3" },
              { href: "/comprimir-video-online", label: "Comprimir Video" },
              { href: "/cambiar-formato-video", label: "Cambiar Formato" },
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
