/*
 * Terminos — ClipTools Pro
 * /terminos-de-uso
 */

import { useEffect } from "react";
import { FileText } from "lucide-react";

export default function Terminos() {
  useEffect(() => {
    document.title = "Términos de Uso | ClipTools Pro";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-50 pt-14 pb-10">
        <div className="container max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <FileText className="w-4 h-4" />
            Legal
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Términos de Uso</h1>
          <p className="text-slate-500">Última actualización: 1 de febrero de 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl mx-auto prose prose-slate max-w-none">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">1. Aceptación de los términos</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Al usar ClipTools Pro, aceptas estos términos de uso. Si no estás de acuerdo con alguno de los términos, no uses el servicio. Nos reservamos el derecho de modificar estos términos en cualquier momento.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-4">2. Uso permitido</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            ClipTools Pro está diseñado para uso personal y profesional legítimo. Puedes usar el servicio para convertir, comprimir, recortar y cambiar el formato de videos de los que seas el propietario o tengas los derechos necesarios para procesar.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-4">3. Uso prohibido</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            Está prohibido usar ClipTools Pro para procesar contenido que viole derechos de autor sin autorización, contenido ilegal, material que infrinja la privacidad de terceros, o cualquier contenido que viole las leyes aplicables. No está permitido el uso automatizado masivo del servicio sin autorización previa.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-4">4. Derechos de propiedad intelectual</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            ClipTools Pro no reclama ningún derecho de propiedad sobre los archivos que procesas. Eres el único responsable del contenido que subes y de asegurarte de tener los derechos necesarios para procesarlo.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-4">5. Limitación de responsabilidad</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            ClipTools Pro se proporciona "tal cual" sin garantías de ningún tipo. No somos responsables de pérdidas de datos, interrupciones del servicio o daños derivados del uso del servicio. El servicio puede estar temporalmente no disponible por mantenimiento.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-4">6. Límites del servicio gratuito</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            La versión gratuita de ClipTools Pro tiene límites de tamaño de archivo (500MB) y puede incluir publicidad. Nos reservamos el derecho de modificar estos límites en cualquier momento.
          </p>

          <h2 className="text-2xl font-extrabold text-slate-900 mt-8 mb-4">7. Ley aplicable</h2>
          <p className="text-slate-600 leading-relaxed">
            Estos términos se rigen por las leyes aplicables. Cualquier disputa se resolverá en los tribunales competentes. Si alguna disposición de estos términos es inválida, el resto permanece en vigor.
          </p>
        </div>
      </section>
    </div>
  );
}
