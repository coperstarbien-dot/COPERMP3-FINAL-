/*
 * ComprimirVideo — ClipTools Pro
 * /comprimir-video-online
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { Minimize2, ArrowRight, Zap, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import UploadZone from "@/components/UploadZone";
import FAQSection from "@/components/FAQSection";
import AdBanner from "@/components/AdBanner";

const faqs = [
  {
    question: "¿Cómo comprimir un video sin perder calidad?",
    answer: "Sube tu video en la zona de carga, selecciona el nivel de compresión deseado y haz clic en 'Comprimir'. Nuestro algoritmo H.264/H.265 reduce el tamaño hasta un 80% manteniendo la calidad visual.",
  },
  {
    question: "¿Cuánto se puede reducir el tamaño de un video?",
    answer: "Dependiendo del video original, podemos reducir el tamaño entre un 40% y un 85%. Un video de 500MB puede quedar en 50-100MB manteniendo una calidad excelente.",
  },
  {
    question: "¿Qué formatos de video se pueden comprimir?",
    answer: "Soportamos MP4, MOV, AVI, MKV, WebM, FLV y más. El archivo resultante siempre se entrega en MP4 para máxima compatibilidad.",
  },
  {
    question: "¿La compresión afecta la resolución del video?",
    answer: "No necesariamente. Nuestro compresor mantiene la resolución original (1080p, 4K, etc.) y optimiza la tasa de bits para reducir el tamaño sin cambiar las dimensiones del video.",
  },
  {
    question: "¿Puedo comprimir videos para WhatsApp?",
    answer: "Sí, tenemos un perfil específico para WhatsApp que comprime el video al tamaño máximo permitido por la aplicación (16MB) manteniendo la mejor calidad posible.",
  },
];

export default function ComprimirVideo() {
  useEffect(() => {
    document.title = "Comprimir Video Online Gratis – Reduce Tamaño sin Perder Calidad | ClipTools Pro";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Comprime videos online gratis. Reduce el tamaño de tus videos hasta un 80% sin perder calidad visible. Sin registro. Compatible con MP4, MOV, AVI y más.");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-violet-50 to-white pt-14 pb-10">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Minimize2 className="w-4 h-4" />
            Compresor de Video Online
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5">
            Comprimir Video Online –{" "}
            <span className="text-violet-600">Sin Perder Calidad</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Reduce el tamaño de tus videos hasta un 80% manteniendo la calidad visual. Ideal para WhatsApp, email y redes sociales.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Zap, text: "Hasta 80% de reducción" },
              { icon: BarChart3, text: "Calidad H.264/H.265" },
              { icon: Shield, text: "Sin marca de agua" },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.text} className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon className="w-4 h-4 text-violet-600" />
                  {f.text}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container max-w-3xl mx-auto">
          <UploadZone toolName="Comprimir Video" acceptedFormats="MP4, MOV, AVI, MKV, WebM" />
        </div>
      </section>

      <div className="container py-4">
        <AdBanner size="leaderboard" className="mx-auto" label="Publicidad" />
      </div>

      {/* Compression levels */}
      <section className="py-12 bg-slate-50">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-8">Niveles de Compresión</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { level: "Ligera", reduction: "~30%", desc: "Máxima calidad, reducción moderada.", color: "border-green-200 bg-green-50" },
              { level: "Equilibrada", reduction: "~60%", desc: "Balance perfecto calidad/tamaño.", color: "border-violet-300 bg-violet-50", badge: "Recomendado" },
              { level: "Máxima", reduction: "~80%", desc: "Tamaño mínimo para compartir.", color: "border-orange-200 bg-orange-50" },
            ].map((opt) => (
              <div key={opt.level} className={`rounded-xl border-2 ${opt.color} p-5 text-center relative`}>
                {opt.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {opt.badge}
                  </span>
                )}
                <p className="text-2xl font-black text-slate-900 mb-1">{opt.reduction}</p>
                <p className="font-bold text-slate-700 text-sm mb-2">{opt.level}</p>
                <p className="text-slate-500 text-xs">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto prose prose-slate max-w-none">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
            Cómo Comprimir Video Online sin Perder Calidad
          </h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            <strong>Comprimir video sin perder calidad</strong> es posible gracias a los modernos codecs de compresión H.264 y H.265. Nuestro compresor de video online analiza el contenido de tu video y aplica la compresión óptima para <strong>reducir el tamaño del video</strong> al máximo sin que el ojo humano perciba diferencia.
          </p>
          <p className="text-slate-600 leading-relaxed mb-5">
            La compresión de video funciona eliminando información redundante entre fotogramas consecutivos. En escenas donde hay poco movimiento, el codec puede almacenar solo los cambios entre fotogramas en lugar de cada fotograma completo, lo que reduce drásticamente el tamaño del archivo.
          </p>
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            ¿Para qué sirve comprimir un video?
          </h3>
          <p className="text-slate-600 leading-relaxed mb-5">
            Hay muchas razones para querer <strong>reducir el tamaño de un video</strong>: enviar videos por WhatsApp o Telegram (que tienen límites de tamaño), subir videos a redes sociales más rápido, ahorrar espacio de almacenamiento en tu dispositivo, enviar videos por email sin superar el límite de adjuntos, y compartir videos en plataformas con límites de tamaño como Slack o Discord.
          </p>
          <p className="text-slate-600 leading-relaxed">
            ClipTools Pro ofrece compresión de video completamente gratuita y sin registro. El proceso es simple: sube tu video, elige el nivel de compresión y descarga el resultado. Todos los archivos se eliminan automáticamente después de 1 hora para garantizar tu privacidad.
          </p>
        </div>
      </section>

      <div className="container py-4">
        <AdBanner size="leaderboard" className="mx-auto" label="Publicidad — después del resultado" />
      </div>

      <FAQSection faqs={faqs} title="Preguntas sobre Compresión de Video" schemaId="faq-comprimir" />

      <section className="py-16 bg-slate-50">
        <div className="container text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Prueba también nuestras otras herramientas gratuitas
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { href: "/convertidor-mp3-gratis", label: "Convertir a MP3" },
              { href: "/recortar-video-online", label: "Recortar Video" },
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
