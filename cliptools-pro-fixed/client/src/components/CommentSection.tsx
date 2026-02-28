/*
 * CommentSection — ClipTools Pro
 * Design: Minimalismo Técnico Premium
 * Reusable comment system with localStorage persistence
 * Features: Add comments, display list, validation, timestamps
 */

import { useState, useEffect } from "react";
import { MessageCircle, Send, Trash2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export interface Comment {
  id: string;
  author: string;
  email: string;
  text: string;
  timestamp: number;
  replies?: Comment[];
}

interface CommentSectionProps {
  articleId: string;
  articleTitle: string;
}

export default function CommentSection({ articleId, articleTitle }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [form, setForm] = useState({ author: "", email: "", text: "" });
  const [submitting, setSubmitting] = useState(false);

  const storageKey = `comments_${articleId}`;

  // Load comments from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        setComments(JSON.parse(stored));
      } catch (e) {
        console.error("Error loading comments:", e);
      }
    }
  }, [articleId, storageKey]);

  // Save comments to localStorage
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(comments));
  }, [comments, storageKey]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.author.trim() || form.author.length < 2) {
      toast.error("El nombre debe tener al menos 2 caracteres.");
      return;
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Por favor ingresa un email válido.");
      return;
    }
    if (!form.text.trim() || form.text.length < 5) {
      toast.error("El comentario debe tener al menos 5 caracteres.");
      return;
    }

    setSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      const newComment: Comment = {
        id: Date.now().toString(),
        author: form.author.trim(),
        email: form.email.trim(),
        text: form.text.trim(),
        timestamp: Date.now(),
      };

      setComments([newComment, ...comments]);
      setForm({ author: "", email: "", text: "" });
      setSubmitting(false);
      toast.success("¡Comentario publicado! Gracias por tu aportación.");
    }, 800);
  };

  const deleteComment = (id: string) => {
    setComments(comments.filter((c) => c.id !== id));
    toast.success("Comentario eliminado.");
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Hace unos segundos";
    if (diffMins < 60) return `Hace ${diffMins} min`;
    if (diffHours < 24) return `Hace ${diffHours}h`;
    if (diffDays < 7) return `Hace ${diffDays}d`;

    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section className="py-12 bg-slate-50 rounded-2xl">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <MessageCircle className="w-6 h-6 text-blue-600" />
          <h3 className="text-2xl font-extrabold text-slate-900">
            Comentarios ({comments.length})
          </h3>
        </div>

        {/* Comment Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 shadow-sm">
          <h4 className="font-bold text-slate-900 mb-4">Deja tu comentario</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Nombre
              </label>
              <input
                type="text"
                required
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
                placeholder="Tu nombre"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="tu@email.com"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              Comentario
            </label>
            <textarea
              required
              rows={4}
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
              placeholder="Comparte tu opinión, pregunta o experiencia con esta herramienta..."
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
            <p className="text-xs text-slate-400 mt-1.5">
              Mínimo 5 caracteres. Los comentarios se moderan antes de publicarse.
            </p>
          </div>

          <Button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Publicando...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Publicar comentario
              </span>
            )}
          </Button>
        </form>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.length === 0 ? (
            <div className="text-center py-8">
              <MessageCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 font-medium">No hay comentarios aún</p>
              <p className="text-slate-400 text-sm">Sé el primero en comentar este artículo.</p>
            </div>
          ) : (
            comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-700 font-bold text-sm">
                        {getInitials(comment.author)}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{comment.author}</p>
                      <p className="text-xs text-slate-400">{formatDate(comment.timestamp)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteComment(comment.id)}
                    className="text-slate-300 hover:text-red-500 transition-colors p-1 rounded-lg hover:bg-red-50"
                    title="Eliminar comentario"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{comment.text}</p>
              </div>
            ))
          )}
        </div>

        {/* Info box */}
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-4">
          <p className="text-xs text-blue-800 leading-relaxed">
            <strong>Nota:</strong> Los comentarios se almacenan localmente en tu navegador. Sé respetuoso y constructivo. 
            No se permiten spam, insultos ni contenido inapropiado. Los comentarios pueden ser editados o eliminados sin previo aviso.
          </p>
        </div>
      </div>
    </section>
  );
}
