/*
 * Home — ClipTools Pro
 * Design: Minimalismo Técnico Premium
 * Hero + Tools Grid + SEO Content + Trust Section + FAQ + Testimonials
 * Images: hero-bg, tools-illustration, security-illustration (CDN)
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  Music,
  Minimize2,
  Scissors,
  RefreshCw,
  Shield,
  Cloud,
  Clock,
  Smartphone,
  ArrowRight,
  Play,
  Star,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQSection from "@/components/FAQSection";
import AdBanner from "@/components/AdBanner";
import UploadZone from "@/components/UploadZone";

// Animated counter hook
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const tools = [
  {
    icon: Music,
    title: "Convertir Video a MP3",
    description: "Extrae el audio de cualquier video en segundos. Obtén MP3 de alta calidad desde YouTube, TikTok, Instagram y más.",
    href: "/convertidor-mp3-gratis",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    badge: "Más popular",
  },
  {
    icon: Minimize2,
    title: "Comprimir Video",
    description: "Reduce el tamaño de tu video sin perder calidad visible. Ideal para WhatsApp, email y redes sociales.",
    href: "/comprimir-video-online",
    color: "bg-violet-50",
    iconColor: "text-violet-600",
    badge: null,
  },
  {
    icon: Scissors,
    title: "Recortar Video",
    description: "Corta y recorta tus videos online de forma precisa. Elimina partes innecesarias en segundos.",
    href: "/recortar-video-online",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    badge: null,
  },
  {
    icon: RefreshCw,
    title: "Cambiar Formato",
    description: "Convierte entre MP4, MOV, AVI, MKV, WebM y más formatos. Compatible con todos los dispositivos.",
    href: "/cambiar-formato-video",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
    badge: "Nuevo",
  },
];

const trustFeatures = [
  {
    icon: Shield,
    title: "Seguridad de Archivos",
    description: "Tus archivos nunca son compartidos con terceros. Conexión cifrada SSL en todo momento.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Cloud,
    title: "Procesamiento en la Nube",
    description: "Servidores de alta velocidad para procesar tus videos en segundos, sin importar el tamaño.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Clock,
    title: "Eliminación Automática",
    description: "Todos los archivos se eliminan automáticamente después de 1 hora. Tu privacidad garantizada.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Smartphone,
    title: "Compatible con Todo",
    description: "Funciona en Chrome, Safari, Edge y Firefox. En PC, tablet y móvil sin instalar nada.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
];

const testimonials = [
  {
    name: "María G.",
    role: "Creadora de contenido",
    text: "Increíble herramienta. Convierto mis videos a MP3 en segundos para mis podcasts. Sin registro ni complicaciones.",
    stars: 5,
  },
  {
    name: "Carlos R.",
    role: "Editor de video",
    text: "La compresión de video es brutal. Reduzco archivos de 500MB a 50MB sin que se note la diferencia.",
    stars: 5,
  },
  {
    name: "Laura M.",
    role: "Community Manager",
    text: "Uso ClipTools Pro todos los días para adaptar videos a diferentes formatos para redes sociales.",
    stars: 5,
  },
];

const homeFAQs = [
  {
    question: "¿Cómo convertir video a MP3 gratis?",
    answer: "Con ClipTools Pro es muy sencillo: sube tu video (MP4, MOV, AVI, etc.), selecciona la herramienta 'Convertir a MP3' y descarga el archivo de audio en segundos. No necesitas registrarte ni instalar ningún programa. El proceso es 100% online y gratuito.",
  },
  {
    question: "¿Es seguro subir mis archivos a ClipTools Pro?",
    answer: "Sí, completamente seguro. Todos los archivos se transfieren mediante conexión SSL cifrada. Nunca compartimos tus archivos con terceros, y se eliminan automáticamente de nuestros servidores después de 1 hora. Tu privacidad es nuestra prioridad.",
  },
  {
    question: "¿Pierde calidad el video al comprimirlo?",
    answer: "Nuestro algoritmo de compresión inteligente reduce el tamaño del archivo hasta un 80% manteniendo la calidad visual. Usamos codecs modernos como H.264 y H.265 para obtener el mejor balance entre tamaño y calidad.",
  },
  {
    question: "¿Funciona ClipTools Pro en móvil?",
    answer: "Sí, ClipTools Pro está diseñado con enfoque mobile-first. Funciona perfectamente en smartphones y tablets con iOS y Android, en los navegadores Chrome, Safari, Firefox y Edge. No necesitas instalar ninguna app.",
  },
  {
    question: "¿Tiene límite de tamaño de archivo?",
    answer: "En la versión gratuita puedes subir archivos de hasta 500MB. Para archivos más grandes, próximamente lanzaremos ClipTools Pro Premium sin límites de tamaño y sin anuncios.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [counterStarted, setCounterStarted] = useState(false);
  const count = useCounter(50000, 2500, counterStarted);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCounterStarted(true); },
      { threshold: 0.3 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32"
        style={{
          backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663389068752/KkUHmdbSKTgfRts3ke75jr/hero-bg-A6uD9c8R4mbA3ed46f7ksx.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-8">
              <Play className="w-3.5 h-3.5 fill-blue-600" />
              Herramientas gratuitas para creadores de contenido
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-6">
              Convierte, Comprime y{" "}
              <span className="text-blue-600">Edita tus Videos</span>{" "}
              Gratis Online
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Sin registro. Sin marcas de agua.{" "}
              <span className="font-bold text-slate-800">100% Online.</span>
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="btn-shimmer text-white font-bold px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link href="#herramientas">
                  Subir Video
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-200 text-slate-700 font-semibold px-8 py-4 text-base rounded-xl hover:bg-slate-50"
              >
                <Link href="/blog">Ver tutoriales</Link>
              </Button>
            </div>

            {/* Trust text */}
            <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              Tus archivos se eliminan automáticamente después de 1 hora para mayor seguridad.
            </p>

            {/* Counter */}
            <div className="mt-12 inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-8 py-4 shadow-sm">
              <div className="text-3xl font-black text-blue-600 tabular-nums count-up">
                +{count.toLocaleString("es-ES")}
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-900 text-sm">videos procesados</p>
                <p className="text-slate-500 text-xs">por creadores como tú</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AD SPACE — Below Hero */}
      <div className="container py-6">
        <AdBanner size="leaderboard" className="mx-auto" label="Publicidad — Google Ads" />
      </div>

      {/* HERRAMIENTAS */}
      <section id="herramientas" className="py-20 bg-slate-50/50">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Herramientas Gratuitas de Video
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Todo lo que necesitas para editar tus videos online, sin instalar nada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.href}
                  className="tool-card bg-white rounded-2xl border border-slate-200 p-7 shadow-sm relative overflow-hidden group"
                >
                  {tool.badge && (
                    <span className="absolute top-4 right-4 text-xs font-bold bg-blue-600 text-white px-2.5 py-1 rounded-full">
                      {tool.badge}
                    </span>
                  )}
                  <div className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 ${tool.iconColor}`} />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-xl mb-2">{tool.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{tool.description}</p>
                  <Button
                    asChild
                    className="bg-slate-900 hover:bg-blue-600 text-white font-semibold transition-colors w-full"
                  >
                    <Link href={tool.href}>
                      Usar herramienta
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>

          {/* AD between tools */}
          <div className="mt-10 flex justify-center">
            <AdBanner size="rectangle" label="Banner publicitario" />
          </div>
        </div>
      </section>

      {/* UPLOAD ZONE — Quick access */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Empieza Ahora — Sube tu Video
            </h2>
            <p className="text-slate-500">Sin registro. Procesamiento instantáneo.</p>
          </div>
          <UploadZone toolName="Convertir / Comprimir / Recortar" />
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="md:col-span-2 prose prose-slate max-w-none">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
                  El Mejor Convertidor MP3 Gratis y Editor de Video Online
                </h2>
                <p className="text-slate-600 leading-relaxed mb-5">
                  ClipTools Pro es la plataforma líder para <strong>convertir video a MP3 online</strong> de forma gratuita y sin complicaciones. Si buscas un <strong>convertidor mp3 gratis</strong> que funcione directamente desde tu navegador, sin instalar software y sin marcas de agua, has llegado al lugar correcto.
                </p>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Nuestras herramientas permiten <strong>convertir mp4 a mp3</strong>, <strong>comprimir video sin perder calidad</strong>, recortar fragmentos específicos y cambiar el formato de tus archivos multimedia. Todo el procesamiento se realiza en la nube, lo que garantiza velocidad y seguridad sin importar el dispositivo que uses.
                </p>
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
                  ¿Por qué usar ClipTools Pro para convertir video a MP3?
                </h3>
                <p className="text-slate-600 leading-relaxed mb-5">
                  A diferencia de otras herramientas, ClipTools Pro ofrece <strong>conversión de video a MP3 online</strong> con calidad de audio de hasta 320kbps. Soporta todos los formatos populares: MP4, MOV, AVI, MKV, WebM, FLV y más. El proceso es simple: sube tu video, elige la calidad de audio y descarga tu MP3 en segundos.
                </p>
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
                  Comprimir Video Online sin Perder Calidad
                </h3>
                <p className="text-slate-600 leading-relaxed mb-5">
                  ¿Necesitas <strong>reducir el tamaño de un video</strong> para enviarlo por WhatsApp, email o subirlo a redes sociales? Nuestra herramienta de compresión utiliza algoritmos avanzados H.264 y H.265 para <strong>comprimir video sin perder calidad</strong> visible. Puedes reducir un video de 500MB a menos de 50MB manteniendo una resolución excelente.
                </p>
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
                  Editor de Video Online Gratuito para Creadores
                </h3>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Como <strong>editor de video online gratuito</strong>, ClipTools Pro te permite recortar videos con precisión de milisegundos, eliminar partes innecesarias y exportar en el formato que necesites. Ideal para YouTubers, TikTokers, podcasters y cualquier creador de contenido digital.
                </p>
                <p className="text-slate-600 leading-relaxed mb-5">
                  La herramienta de <strong>cambio de formato de video</strong> soporta conversión entre MP4, MOV, AVI, MKV, WebM, FLV, 3GP y más. Perfecta cuando necesitas adaptar tu contenido para diferentes plataformas: Instagram, YouTube, TikTok, Twitter o cualquier dispositivo.
                </p>
                <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">
                  Seguridad y Privacidad en el Procesamiento de Videos
                </h3>
                <p className="text-slate-600 leading-relaxed mb-5">
                  La privacidad de tus archivos es nuestra prioridad. Todos los videos subidos a ClipTools Pro se procesan en servidores seguros con cifrado SSL y se eliminan automáticamente después de 1 hora. Nunca almacenamos tus archivos de forma permanente ni los compartimos con terceros.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  ClipTools Pro es completamente gratuito y no requiere registro. No necesitas crear una cuenta, proporcionar tu email ni instalar ninguna extensión. Simplemente visita la herramienta que necesitas, sube tu video y descarga el resultado. Así de simple, así de rápido.
                </p>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663389068752/KkUHmdbSKTgfRts3ke75jr/tools-illustration-GxE3sd9Umeke9LZ2eAz74L.webp"
                    alt="Herramientas de video online"
                    className="w-full rounded-xl mb-4"
                    loading="lazy"
                  />
                  <h4 className="font-bold text-slate-900 mb-3">Formatos Soportados</h4>
                  <div className="flex flex-wrap gap-2">
                    {["MP4", "MOV", "AVI", "MKV", "WebM", "FLV", "MP3", "AAC", "WAV"].map((fmt) => (
                      <span key={fmt} className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                        {fmt}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-600 rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-lg mb-2">¿Necesitas más?</h4>
                  <p className="text-blue-100 text-sm mb-4">Próximamente: ClipTools Pro Premium sin anuncios y sin límites de tamaño.</p>
                  <button className="w-full bg-white text-blue-600 font-bold py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors">
                    Notificarme
                  </button>
                </div>

                {/* Ad sidebar */}
                <AdBanner size="rectangle" label="Publicidad" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Por qué confían en ClipTools Pro
            </h2>
            <p className="text-slate-500 text-lg">Seguridad, velocidad y privacidad en cada procesamiento.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="text-center p-6">
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mx-auto mb-5`}>
                    <Icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
              Lo que dicen los creadores
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={homeFAQs} />

      {/* FINAL CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Empieza a editar tus videos ahora
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Sin registro. Sin marcas de agua. 100% gratis. Más de 50,000 videos procesados.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Button
                  key={tool.href}
                  asChild
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold"
                >
                  <Link href={tool.href}>
                    <Icon className="w-4 h-4 mr-2" />
                    {tool.title}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* AD bottom */}
      <div className="container py-8">
        <AdBanner size="leaderboard" className="mx-auto" />
      </div>
    </div>
  );
}
