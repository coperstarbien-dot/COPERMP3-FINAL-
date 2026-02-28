/*
 * Contacto — ClipTools Pro
 * /contacto
 */

import { useEffect, useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    document.title = "Contacto | ClipTools Pro";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("¡Mensaje enviado! Te responderemos en menos de 24 horas.");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-50 pt-14 pb-10">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <MessageSquare className="w-4 h-4" />
            Soporte
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Contáctanos</h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            ¿Tienes alguna pregunta o sugerencia? Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Información de contacto</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Email</p>
                    <p className="text-slate-500 text-sm">hola@cliptools.pro</p>
                    <p className="text-slate-400 text-xs mt-1">Respondemos en menos de 24 horas</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Soporte técnico</p>
                    <p className="text-slate-500 text-sm">Para problemas con las herramientas, usa el formulario indicando el tipo de archivo y el error que recibes.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-blue-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Preguntas frecuentes</h3>
                <p className="text-slate-600 text-sm mb-4">Antes de contactarnos, revisa nuestras preguntas frecuentes. Es posible que ya tengamos la respuesta que buscas.</p>
                <a href="/#herramientas" className="text-blue-600 font-semibold text-sm hover:underline">Ver FAQ →</a>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nombre</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Asunto</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="soporte">Soporte técnico</option>
                    <option value="sugerencia">Sugerencia de mejora</option>
                    <option value="publicidad">Publicidad / Colaboración</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Mensaje</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Describe tu consulta..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md"
                >
                  {sending ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Enviar mensaje
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
