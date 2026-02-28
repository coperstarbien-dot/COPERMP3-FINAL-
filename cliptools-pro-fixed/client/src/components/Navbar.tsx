/*
 * Navbar — ClipTools Pro
 * Design: Minimalismo Técnico Premium
 * Sticky top nav, white bg with subtle border, logo + nav links + CTA
 */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/convertidor-mp3-gratis", label: "MP3 Gratis" },
  { href: "/comprimir-video-online", label: "Comprimir" },
  { href: "/recortar-video-online", label: "Recortar" },
  { href: "/cambiar-formato-video", label: "Formatos" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="container">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
              <Scissors className="w-4 h-4 text-white" />
            </div>
            <span className="font-extrabold text-lg text-slate-900 tracking-tight">
              ClipTools<span className="text-blue-600">Pro</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 shadow-sm"
            >
              <Link href="/">Subir Video</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-slate-100 pt-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button
                asChild
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                <Link href="/" onClick={() => setOpen(false)}>
                  Subir Video
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
