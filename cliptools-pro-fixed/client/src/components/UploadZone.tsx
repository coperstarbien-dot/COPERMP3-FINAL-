/*
 * UploadZone — ClipTools Pro
 * Design: Minimalismo Técnico Premium
 * Drag & drop upload zone with animated border and processing state
 */

import { useState, useRef } from "react";
import { Upload, FileVideo, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface UploadZoneProps {
  toolName: string;
  acceptedFormats?: string;
  onUpload?: (file: File) => void;
}

type UploadState = "idle" | "dragging" | "processing" | "done";

export default function UploadZone({ toolName, acceptedFormats = "MP4, MOV, AVI, MKV, WebM", onUpload }: UploadZoneProps) {
  const [state, setState] = useState<UploadState>("idle");
  const [fileName, setFileName] = useState<string>("");
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("video/")) {
      toast.error("Por favor sube un archivo de video válido.");
      return;
    }
    setFileName(file.name);
    setState("processing");
    setProgress(0);
    onUpload?.(file);

    // Simulate processing
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setState("done");
          toast.success("¡Archivo procesado! La descarga comenzará pronto.");
          return 100;
        }
        return p + Math.random() * 12;
      });
    }, 300);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setState("idle");
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setState("dragging");
  };

  const handleDragLeave = () => {
    setState("idle");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const reset = () => {
    setState("idle");
    setFileName("");
    setProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  if (state === "processing") {
    return (
      <div className="upload-zone rounded-2xl p-12 text-center bg-blue-50/50">
        <div className="flex flex-col items-center gap-4">
          <div className="processing-pulse w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
          <div>
            <p className="font-bold text-slate-900 text-lg">Procesando...</p>
            <p className="text-slate-500 text-sm mt-1">{fileName}</p>
          </div>
          <div className="w-full max-w-xs bg-slate-200 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-xs text-slate-400">{Math.round(Math.min(progress, 100))}% completado</p>
        </div>
      </div>
    );
  }

  if (state === "done") {
    return (
      <div className="upload-zone rounded-2xl p-12 text-center bg-green-50/50 border-green-300">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <p className="font-bold text-slate-900 text-lg">¡Listo para descargar!</p>
            <p className="text-slate-500 text-sm mt-1">{fileName}</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 text-base shadow-md">
            Descargar Archivo
          </Button>
          <button onClick={reset} className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
            Procesar otro archivo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`upload-zone rounded-2xl p-10 md:p-16 text-center cursor-pointer transition-all ${
        state === "dragging" ? "drag-over" : ""
      }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={() => fileInputRef.current?.click()}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        className="hidden"
        onChange={handleInputChange}
      />
      <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-2xl bg-blue-50 border-2 border-blue-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
          {state === "dragging" ? (
            <FileVideo className="w-10 h-10 text-blue-600" />
          ) : (
            <Upload className="w-10 h-10 text-blue-600" />
          )}
        </div>
        <div>
          <p className="font-bold text-slate-900 text-xl md:text-2xl">
            {state === "dragging" ? "Suelta el archivo aquí" : `Subir Video para ${toolName}`}
          </p>
          <p className="text-slate-500 mt-2 text-sm md:text-base">
            Arrastra y suelta tu video aquí, o{" "}
            <span className="text-blue-600 font-semibold">haz clic para seleccionar</span>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {acceptedFormats.split(", ").map((fmt) => (
            <span key={fmt} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
              {fmt}
            </span>
          ))}
        </div>
        <Button
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 text-base shadow-md btn-shimmer"
          onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
        >
          Subir Video
        </Button>
        <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
          Tus archivos se eliminan automáticamente después de 1 hora para mayor seguridad.
        </p>
      </div>
    </div>
  );
}
