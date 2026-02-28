/*
 * Blog — ClipTools Pro
 * /blog
 * SEO blog listing page
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, BookOpen } from "lucide-react";

const articles = [
  {
    slug: "convertir-video-mp3",
    title: "Cómo Convertir Video a MP3 sin Perder Calidad",
    excerpt: "Guía completa para convertir cualquier video a MP3 manteniendo la máxima calidad de audio. Aprende qué herramientas usar y cómo obtener el mejor resultado.",
    category: "Tutoriales",
    readTime: "5 min",
    date: "15 Feb 2026",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80",
  },
  {
    slug: "formatos-video-redes",
    title: "Mejor Formato de Video para Redes Sociales en 2026",
    excerpt: "Descubre qué formato de video usar en Instagram, TikTok, YouTube y Twitter para obtener la mejor calidad y el menor tamaño de archivo.",
    category: "Guías",
    readTime: "7 min",
    date: "10 Feb 2026",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
  },
  {
    slug: "reducir-tamano-video",
    title: "Cómo Reducir el Tamaño de un Video sin Perder Resolución",
    excerpt: "Aprende las mejores técnicas para comprimir videos manteniendo la calidad visual. Desde ajustes básicos hasta configuraciones avanzadas de codec.",
    category: "Tutoriales",
    readTime: "6 min",
    date: "5 Feb 2026",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
  },
  {
    slug: "diferencia-mp4-mov",
    title: "Diferencia entre MP4 y MOV: ¿Cuál usar?",
    excerpt: "Comparativa completa entre los formatos MP4 y MOV. Descubre cuándo usar cada uno y cómo convertir entre ellos fácilmente.",
    category: "Guías",
    readTime: "4 min",
    date: "1 Feb 2026",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80",
  },
];

export default function Blog() {
  useEffect(() => {
    document.title = "Blog – Tutoriales de Video y Edición Online | ClipTools Pro";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Tutoriales y guías sobre edición de video, conversión de formatos, compresión y más. Aprende a sacar el máximo partido a tus videos.");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-b from-slate-50 to-white pt-14 pb-10">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-4 h-4" />
            Blog & Tutoriales
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5">
            Tutoriales de Video y{" "}
            <span className="text-blue-600">Edición Online</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Guías prácticas para creadores de contenido. Aprende a convertir, comprimir y editar tus videos como un profesional.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <article key={article.slug} className="tool-card bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                    <span className="text-xs text-slate-400">{article.date}</span>
                  </div>
                  <h2 className="font-extrabold text-slate-900 text-xl mb-3 leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{article.excerpt}</p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors"
                  >
                    Leer artículo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            ¿Listo para editar tus videos?
          </h2>
          <p className="text-slate-500 mb-6">Prueba nuestras herramientas gratuitas ahora mismo.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-md"
          >
            Ver todas las herramientas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
