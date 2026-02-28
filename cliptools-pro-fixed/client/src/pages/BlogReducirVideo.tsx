/*
 * BlogReducirVideo — ClipTools Pro
 * /blog/reducir-tamano-video
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import CommentSection from "@/components/CommentSection";

export default function BlogReducirVideo() {
  useEffect(() => {
    document.title = "Cómo Reducir el Tamaño de un Video sin Perder Resolución | ClipTools Pro";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Aprende a reducir el tamaño de tus videos sin perder calidad. Técnicas de compresión, configuraciones de codec y herramientas gratuitas.");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-3xl mx-auto py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-sm mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver al Blog
        </Link>
        <div className="mb-6">
          <span className="text-xs font-bold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">Tutoriales</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
          Cómo Reducir el Tamaño de un Video sin Perder Resolución
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-8 pb-8 border-b border-slate-100">
          <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />5 Feb 2026</div>
          <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" />6 min de lectura</div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80"
          alt="Reducir tamaño de video"
          className="w-full rounded-2xl mb-10 object-cover h-64 md:h-80"
          loading="lazy"
        />
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 leading-relaxed mb-6 text-lg">
            Reducir el tamaño de un video sin perder calidad es posible gracias a los modernos algoritmos de compresión. En esta guía te explicamos las mejores técnicas.
          </p>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">¿Qué determina el tamaño de un video?</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            El tamaño de un archivo de video depende de varios factores: la resolución (1080p vs 4K), la tasa de bits (bitrate), la duración, el codec de compresión y el número de fotogramas por segundo. Entender estos factores te permite reducir el tamaño de forma inteligente.
          </p>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Técnicas para reducir el tamaño de un video</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            La forma más efectiva de reducir el tamaño sin perder resolución es reducir el bitrate del video. El bitrate determina cuántos datos se usan por segundo de video. Un video 1080p de alta calidad puede tener un bitrate de 8Mbps, pero muchas veces 4Mbps es suficiente para mantener una calidad excelente.
          </p>
          <p className="text-slate-600 leading-relaxed mb-5">
            Otra técnica es usar codecs más eficientes. H.265 (HEVC) produce archivos hasta un 50% más pequeños que H.264 manteniendo la misma calidad. Sin embargo, H.265 requiere más potencia de procesamiento para reproducirse.
          </p>
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 my-8">
            <h3 className="font-bold text-emerald-900 mb-2">¿Quieres comprimir tu video ahora?</h3>
            <p className="text-emerald-800 text-sm leading-relaxed mb-3">
              Usa nuestra herramienta gratuita para reducir el tamaño de tu video en segundos.
            </p>
            <Link href="/comprimir-video-online" className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              Comprimir Video Gratis <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Cuándo reducir la resolución</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Si el video va a verse principalmente en móviles, reducir de 4K a 1080p puede reducir el tamaño a la mitad sin que el espectador note diferencia. La mayoría de pantallas de smartphone no pueden mostrar diferencias entre 1080p y 4K.
          </p>
        </div>
        <div className="mt-10 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="font-extrabold text-2xl mb-2">Comprime tu video ahora</h3>
          <p className="text-blue-100 mb-5">Hasta 80% de reducción sin perder calidad visible.</p>
          <Link href="/comprimir-video-online" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
            Comprimir Video Gratis <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <CommentSection articleId="reducir-tamano-video" articleTitle="Cómo Reducir el Tamaño de un Video sin Perder Resolución" />
        </div>
      </div>
    </div>
  );
}
