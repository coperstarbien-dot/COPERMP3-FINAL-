/*
 * BlogFormatosRedes — ClipTools Pro
 * /blog/formatos-video-redes
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import CommentSection from "@/components/CommentSection";

const platformData = [
  { platform: "YouTube", format: "MP4 H.264", resolution: "Hasta 8K", fps: "60fps", notes: "Acepta casi cualquier formato" },
  { platform: "Instagram", format: "MP4 H.264", resolution: "1080x1920", fps: "30fps", notes: "Reels: máx 90 seg" },
  { platform: "TikTok", format: "MP4 H.264", resolution: "1080x1920", fps: "30fps", notes: "Máx 10 min" },
  { platform: "Twitter/X", format: "MP4 H.264", resolution: "1280x720", fps: "40fps", notes: "Máx 2:20 min" },
  { platform: "Facebook", format: "MP4 H.264", resolution: "1280x720", fps: "30fps", notes: "Máx 240 min" },
  { platform: "WhatsApp", format: "MP4 H.264", resolution: "720p", fps: "30fps", notes: "Máx 16MB" },
];

export default function BlogFormatosRedes() {
  useEffect(() => {
    document.title = "Mejor Formato de Video para Redes Sociales 2026 | ClipTools Pro Blog";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Descubre el mejor formato de video para Instagram, TikTok, YouTube y más redes sociales en 2026. Guía completa con resoluciones y configuraciones recomendadas.");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-3xl mx-auto py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 text-sm mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Volver al Blog
        </Link>

        <div className="mb-6">
          <span className="text-xs font-bold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">Guías</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
          Mejor Formato de Video para Redes Sociales en 2026
        </h1>

        <div className="flex items-center gap-4 text-sm text-slate-400 mb-8 pb-8 border-b border-slate-100">
          <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />10 Feb 2026</div>
          <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" />7 min de lectura</div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80"
          alt="Formatos de video para redes sociales"
          className="w-full rounded-2xl mb-10 object-cover h-64 md:h-80"
          loading="lazy"
        />

        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 leading-relaxed mb-6 text-lg">
            Elegir el formato correcto para cada red social puede marcar la diferencia entre un video que se ve perfectamente y uno que pierde calidad al subirse. En esta guía te explicamos todo lo que necesitas saber.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Tabla de formatos por plataforma</h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left p-3 border border-slate-200 font-bold text-slate-900">Plataforma</th>
                  <th className="text-left p-3 border border-slate-200 font-bold text-slate-900">Formato</th>
                  <th className="text-left p-3 border border-slate-200 font-bold text-slate-900">Resolución</th>
                  <th className="text-left p-3 border border-slate-200 font-bold text-slate-900">FPS</th>
                  <th className="text-left p-3 border border-slate-200 font-bold text-slate-900">Notas</th>
                </tr>
              </thead>
              <tbody>
                {platformData.map((row, i) => (
                  <tr key={row.platform} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="p-3 border border-slate-200 font-semibold text-slate-900">{row.platform}</td>
                    <td className="p-3 border border-slate-200 text-slate-600">{row.format}</td>
                    <td className="p-3 border border-slate-200 text-slate-600">{row.resolution}</td>
                    <td className="p-3 border border-slate-200 text-slate-600">{row.fps}</td>
                    <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">¿Por qué MP4 H.264 es el rey?</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            MP4 con codec H.264 es el estándar de facto para video en internet. Ofrece excelente calidad visual con tamaños de archivo reducidos, es compatible con prácticamente todos los dispositivos y plataformas, y es el formato que mejor procesan los algoritmos de las redes sociales.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Consejos para cada plataforma</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Para YouTube, puedes subir en la mayor resolución disponible ya que la plataforma se encarga de la compresión. Para Instagram y TikTok, el formato vertical (9:16) es esencial para Reels y Stories. Para Twitter, mantén los videos cortos y en HD para mejor engagement.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 my-8">
            <h3 className="font-bold text-blue-900 mb-2">¿Necesitas cambiar el formato de tu video?</h3>
            <p className="text-blue-800 text-sm leading-relaxed mb-3">
              Usa nuestra herramienta gratuita para convertir tu video al formato ideal para cada plataforma.
            </p>
            <Link href="/cambiar-formato-video" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Cambiar Formato de Video <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-10 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="font-extrabold text-2xl mb-2">Convierte tu video al formato correcto</h3>
          <p className="text-blue-100 mb-5">Herramienta gratuita, sin registro, sin marcas de agua.</p>
          <Link href="/cambiar-formato-video" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
            Cambiar Formato Ahora <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <CommentSection articleId="formatos-video-redes" articleTitle="Mejor Formato de Video para Redes Sociales en 2026" />
        </div>
      </div>
    </div>
  );
}
