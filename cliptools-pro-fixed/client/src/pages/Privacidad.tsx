/*
 * Privacidad — ClipTools Pro
 * /politica-de-privacidad
 */

import { useEffect } from "react";
import { Shield } from "lucide-react";

export default function Privacidad() {
  useEffect(() => {
    document.title = "Política de Privacidad | ClipTools Pro";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-50 pt-14 pb-10">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            Privacidad y Seguridad
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Política de Privacidad</h1>
          <p className="text-slate-500">Última actualización: 1 de febrero de 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl mx-auto prose prose-slate max-w-none">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">1. Información que recopilamos</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            ClipTools Pro es una herramienta completamente gratuita que no requiere registro. No recopilamos información personal identificable como nombres, emails o contraseñas. Los únicos datos que procesamos son los archivos de video que subes temporalmente para su procesamiento.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-4">2. Procesamiento de archivos</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Los archivos de video que subes a ClipTools Pro se procesan en nuestros servidores seguros únicamente para realizar la operación solicitada (conversión, compresión, recorte o cambio de formato). Los archivos se almacenan temporalmente y se eliminan automáticamente después de 1 hora. Nunca accedemos al contenido de tus archivos para ningún otro propósito.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-4">3. Cookies y análisis</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y cookies de análisis anónimas para entender cómo se usa el servicio. No usamos cookies de seguimiento de terceros para publicidad personalizada. Los datos de análisis son completamente anónimos y no pueden vincularse a ningún usuario individual.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-4">4. Publicidad</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            ClipTools Pro muestra anuncios de Google AdSense para financiar el servicio gratuito. Google puede usar cookies para mostrar anuncios relevantes basados en tus visitas anteriores a este y otros sitios web. Puedes optar por no recibir publicidad personalizada visitando la configuración de anuncios de Google.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-4">5. Seguridad</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Todas las transferencias de archivos se realizan mediante conexión HTTPS cifrada. Nuestros servidores están protegidos con medidas de seguridad estándar de la industria. Los archivos procesados se eliminan automáticamente y no se almacenan de forma permanente.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-4">6. Tus derechos</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Dado que no recopilamos datos personales, no hay datos que solicitar, modificar o eliminar. Si tienes alguna pregunta sobre nuestra política de privacidad, puedes contactarnos a través de nuestra página de contacto.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-4">7. Cambios en esta política</h2>
          <p className="text-slate-600 leading-relaxed">
            Podemos actualizar esta política de privacidad ocasionalmente. Los cambios significativos se notificarán en el sitio web. El uso continuado del servicio después de los cambios implica la aceptación de la nueva política.
          </p>
        </div>
      </section>
    </div>
  );
}
