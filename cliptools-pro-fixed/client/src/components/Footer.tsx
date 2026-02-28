/*
 * Footer — ClipTools Pro
 * Design: Minimalismo Técnico Premium
 * Dark footer with links, legal pages and trust signals
 */

import { Link } from "wouter";
import { Scissors, Shield, Zap, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Scissors className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                ClipTools<span className="text-blue-400">Pro</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Herramientas gratuitas para creadores de contenido. Sin registro, sin marcas de agua.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Shield className="w-3.5 h-3.5 text-green-400" />
              <span>Archivos eliminados en 1 hora</span>
            </div>
          </div>

          {/* Herramientas */}
          <div>
            <h3 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Herramientas</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/convertidor-mp3-gratis", label: "Convertir Video a MP3" },
                { href: "/comprimir-video-online", label: "Comprimir Video" },
                { href: "/recortar-video-online", label: "Recortar Video" },
                { href: "/cambiar-formato-video", label: "Cambiar Formato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Recursos</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/blog", label: "Blog SEO" },
                { href: "/blog/convertir-video-mp3", label: "Cómo convertir a MP3" },
                { href: "/blog/formatos-video-redes", label: "Formatos para redes" },
                { href: "/blog/reducir-tamano-video", label: "Reducir tamaño de video" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white text-sm mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/politica-de-privacidad", label: "Política de Privacidad" },
                { href: "/terminos-de-uso", label: "Términos de Uso" },
                { href: "/contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Zap className="w-3.5 h-3.5 text-yellow-400" />
                <span>Procesamiento en la nube</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Compatible con todos los dispositivos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} ClipTools Pro. Todos los derechos reservados.
          </p>
          <p className="text-xs text-slate-600">
            Herramientas gratuitas de video online · Sin registro · Sin marcas de agua
          </p>
        </div>
      </div>
    </footer>
  );
}
