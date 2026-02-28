/*
 * ConvertirMP3 — ClipTools Pro
 * /convertidor-mp3-gratis
 * Design: Minimalismo Técnico Premium
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { Music, CheckCircle, ArrowRight, Zap, Shield, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import UploadZone from "@/components/UploadZone";
import FAQSection from "@/components/FAQSection";
import AdBanner from "@/components/AdBanner";

const faqs = [
  {
    question: "¿Cómo convertir un video a MP3 gratis?",
    answer: "Sube tu video (MP4, MOV, AVI, etc.) en la zona de carga, selecciona la calidad de audio deseada (128kbps, 192kbps o 320kbps) y haz clic en 'Convertir'. En segundos tendrás tu archivo MP3 listo para descargar.",
  },
  {
    question: "¿Qué formatos de video acepta el convertidor MP3?",
    answer: "Aceptamos todos los formatos populares: MP4, MOV, AVI, MKV, WebM, FLV, 3GP, WMV y más. Si tu archivo es de video, muy probablemente lo podemos convertir.",
  },
  {
    question: "¿Cuál es la calidad del MP3 resultante?",
    answer: "Ofrecemos tres opciones de calidad: 128kbps (buena para voz), 192kbps (estándar) y 320kbps (máxima calidad, ideal para música). La calidad del MP3 depende también de la calidad de audio del video original.",
  },
  {
    question: "¿Puedo convertir videos de YouTube a MP3?",
    answer: "Nuestra herramienta procesa archivos de video que subas directamente. Para videos de YouTube, primero debes descargar el video y luego subirlo aquí para convertirlo a MP3.",
  },
  {
    question: "¿Hay límite de duración del video?",
    answer: "En la versión gratuita puedes convertir videos de hasta 2 horas de duración y 500MB de tamaño. Para videos más largos, próximamente lanzaremos la versión Premium.",
  },
];

const features = [
  { icon: Zap, text: "Conversión en segundos" },
  { icon: Shield, text: "Sin registro requerido" },
  { icon: Download, text: "Descarga directa MP3" },
  { icon: CheckCircle, text: "Hasta 320kbps de calidad" },
];

export default function ConvertirMP3() {
  useEffect(() => {
    document.title = "Convertidor MP3 Gratis – Convierte Video a MP3 Online | ClipTools Pro";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Convierte cualquier video a MP3 gratis online. Sin registro, sin marcas de agua. Soporta MP4, MOV, AVI, MKV y más. Calidad hasta 320kbps.");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero de herramienta */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-14 pb-10">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Music className="w-4 h-4" />
            Convertidor de Video a MP3
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5">
            Convertidor MP3 Gratis –{" "}
            <span className="text-blue-600">Convierte Video a MP3 Online</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Extrae el audio de cualquier video en segundos. Sin registro, sin marcas de agua. Calidad de audio hasta 320kbps.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.text} className="flex items-center gap-2 text-sm text-slate-600">
                  <Icon className="w-4 h-4 text-blue-600" />
                  {f.text}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Upload Zone */}
      <section className="py-10 bg-white">
        <div className="container max-w-3xl mx-auto">
          <UploadZone
            toolName="Convertir a MP3"
            acceptedFormats="MP4, MOV, AVI, MKV, WebM, FLV"
          />
        </div>
      </section>

      {/* AD — Before download button area */}
      <div className="container py-4">
        <AdBanner size="leaderboard" className="mx-auto" label="Publicidad — antes de descargar" />
      </div>

      {/* Quality selector info */}
      <section className="py-12 bg-slate-50">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-8">Elige la Calidad de Audio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { quality: "128 kbps", label: "Estándar", desc: "Ideal para voz y podcasts. Tamaño pequeño.", color: "border-slate-200" },
              { quality: "192 kbps", label: "Alta Calidad", desc: "Balance perfecto entre calidad y tamaño.", color: "border-blue-300 bg-blue-50", badge: "Recomendado" },
              { quality: "320 kbps", label: "Máxima Calidad", desc: "La mejor calidad de audio disponible.", color: "border-slate-200" },
            ].map((opt) => (
              <div key={opt.quality} className={`rounded-xl border-2 ${opt.color} p-5 text-center relative`}>
                {opt.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {opt.badge}
                  </span>
                )}
                <p className="text-2xl font-black text-slate-900 mb-1">{opt.quality}</p>
                <p className="font-bold text-slate-700 text-sm mb-2">{opt.label}</p>
                <p className="text-slate-500 text-xs">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
              El Mejor Convertidor de Video a MP3 Online Gratis
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              Nuestro <strong>convertidor MP3 gratis</strong> es la herramienta más rápida y sencilla para extraer el audio de cualquier video. Ya sea que quieras <strong>convertir mp4 a mp3</strong>, extraer la música de un video de TikTok, o guardar el audio de una conferencia, ClipTools Pro lo hace en segundos.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              El proceso de <strong>convertir video a mp3 online</strong> es completamente gratuito y no requiere registro. Simplemente sube tu archivo de video, selecciona la calidad de audio que prefieres (128kbps, 192kbps o 320kbps) y descarga tu MP3. El archivo resultante es compatible con todos los reproductores de música: Spotify, Apple Music, VLC, Windows Media Player y cualquier dispositivo móvil.
            </p>
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
              ¿Por qué usar nuestro convertidor de video a MP3?
            </h3>
            <p className="text-slate-600 leading-relaxed mb-5">
              A diferencia de otras herramientas de conversión, ClipTools Pro procesa tus archivos directamente en la nube con servidores de alta velocidad. Esto significa que la conversión es rápida independientemente de la velocidad de tu ordenador. Además, no necesitas instalar ningún software, extensión de navegador ni aplicación.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              Nuestro convertidor soporta todos los formatos de video populares: <strong>MP4 a MP3</strong>, MOV a MP3, AVI a MP3, MKV a MP3, WebM a MP3, FLV a MP3 y muchos más. La calidad del audio resultante depende de la calidad del audio en el video original, pero siempre optimizamos el proceso para obtener el mejor resultado posible.
            </p>
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
              Usos populares del convertidor de video a MP3
            </h3>
            <p className="text-slate-600 leading-relaxed mb-5">
              Los creadores de contenido utilizan nuestro <strong>convertidor mp3 gratis</strong> para múltiples propósitos: extraer música de videos musicales para crear playlists personales, guardar el audio de webinars y conferencias para escuchar offline, crear archivos de audio para podcasts a partir de grabaciones de video, extraer efectos de sonido de videos para proyectos creativos, y convertir tutoriales en video a formato de audio para escuchar mientras se hace ejercicio o se conduce.
            </p>
            <p className="text-slate-600 leading-relaxed">
              ClipTools Pro garantiza que el proceso de <strong>convertir video a mp3 online</strong> sea siempre seguro. Todos los archivos se eliminan automáticamente de nuestros servidores después de 1 hora, y nunca compartimos tus archivos con terceros. Tu privacidad y la seguridad de tu contenido son nuestra máxima prioridad.
            </p>
          </div>
        </div>
      </section>

      {/* AD after content */}
      <div className="container py-4">
        <AdBanner size="leaderboard" className="mx-auto" label="Publicidad — después del resultado" />
      </div>

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="Preguntas sobre el Convertidor MP3"
        subtitle="Todo lo que necesitas saber sobre la conversión de video a MP3."
        schemaId="faq-mp3"
      />

      {/* CTA otras herramientas */}
      <section className="py-16 bg-slate-50">
        <div className="container text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Prueba también nuestras otras herramientas gratuitas
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { href: "/comprimir-video-online", label: "Comprimir Video" },
              { href: "/recortar-video-online", label: "Recortar Video" },
              { href: "/cambiar-formato-video", label: "Cambiar Formato" },
            ].map((link) => (
              <Button key={link.href} asChild variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                <Link href={link.href}>
                  {link.label}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
