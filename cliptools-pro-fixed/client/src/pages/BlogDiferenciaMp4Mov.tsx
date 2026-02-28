/*
 * BlogDiferenciaMp4Mov — ClipTools Pro
 * /blog/diferencia-mp4-mov
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import CommentSection from "@/components/CommentSection";

export default function BlogDiferenciaMp4Mov() {
  useEffect(() => {
    document.title = "Diferencia entre MP4 y MOV: ¿Cuál usar? | ClipTools Pro Blog";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Comparativa completa entre MP4 y MOV. Descubre las diferencias, ventajas y cuándo usar cada formato de video.");
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
          Diferencia entre MP4 y MOV: ¿Cuál usar?
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-8 pb-8 border-b border-slate-100">
          <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />1 Feb 2026</div>
          <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" />4 min de lectura</div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80"
          alt="Diferencia MP4 vs MOV"
          className="w-full rounded-2xl mb-10 object-cover h-64 md:h-80"
          loading="lazy"
        />
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600 leading-relaxed mb-6 text-lg">
            MP4 y MOV son dos de los formatos de video más populares, pero tienen diferencias importantes. Conocerlas te ayudará a elegir el formato correcto para cada situación.
          </p>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">¿Qué es MP4?</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            MP4 (MPEG-4 Part 14) es el formato de video más universal del mundo. Desarrollado por el Moving Picture Experts Group, es compatible con prácticamente todos los dispositivos, sistemas operativos y plataformas. Usa los codecs H.264 o H.265 para comprimir el video de forma eficiente.
          </p>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">¿Qué es MOV?</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            MOV es el formato nativo de Apple, desarrollado para QuickTime. Es el formato que usan los iPhone y Mac para grabar y editar video. Generalmente produce archivos de mayor calidad que MP4, pero también de mayor tamaño.
          </p>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">Comparativa MP4 vs MOV</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left p-3 border border-slate-200 font-bold text-slate-900">Característica</th>
                  <th className="text-left p-3 border border-slate-200 font-bold text-blue-700">MP4</th>
                  <th className="text-left p-3 border border-slate-200 font-bold text-slate-700">MOV</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Compatibilidad", "Universal (todos los dispositivos)", "Principalmente Apple"],
                  ["Tamaño de archivo", "Más pequeño", "Más grande"],
                  ["Calidad", "Excelente", "Excelente (ligeramente superior)"],
                  ["Edición profesional", "Buena", "Mejor (más datos)"],
                  ["Redes sociales", "Ideal", "Compatible pero más grande"],
                  ["Dispositivos Apple", "Compatible", "Nativo"],
                ].map(([feature, mp4, mov]) => (
                  <tr key={feature} className="border-b border-slate-100">
                    <td className="p-3 border border-slate-200 font-medium text-slate-700">{feature}</td>
                    <td className="p-3 border border-slate-200 text-slate-600">{mp4}</td>
                    <td className="p-3 border border-slate-200 text-slate-600">{mov}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 mt-10 mb-4">¿Cuándo usar MP4 y cuándo MOV?</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Usa MP4 cuando necesites compartir el video en redes sociales, enviarlo por email o WhatsApp, o cuando no sabes qué dispositivo usará el receptor. Usa MOV cuando trabajes en edición profesional en Mac, cuando necesites la máxima calidad para post-producción, o cuando el destino final sea un dispositivo Apple.
          </p>
        </div>
        <div className="mt-10 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="font-extrabold text-2xl mb-2">¿Necesitas convertir MOV a MP4?</h3>
          <p className="text-blue-100 mb-5">Usa nuestra herramienta gratuita en segundos.</p>
          <Link href="/cambiar-formato-video" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors">
            Cambiar Formato Ahora <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <CommentSection articleId="diferencia-mp4-mov" articleTitle="Diferencia entre MP4 y MOV: Cuál usar?" />
        </div>
      </div>
    </div>
  );
}
