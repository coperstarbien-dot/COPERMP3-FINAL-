/*
 * App.tsx — ClipTools Pro
 * Design: Minimalismo Técnico Premium
 * All routes with Navbar + Footer layout
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import ConvertirMP3 from "./pages/ConvertirMP3";
import ComprimirVideo from "./pages/ComprimirVideo";
import RecortarVideo from "./pages/RecortarVideo";
import CambiarFormato from "./pages/CambiarFormato";
import Blog from "./pages/Blog";
import BlogConvertirMP3 from "./pages/BlogConvertirMP3";
import BlogFormatosRedes from "./pages/BlogFormatosRedes";
import BlogReducirVideo from "./pages/BlogReducirVideo";
import BlogDiferenciaMp4Mov from "./pages/BlogDiferenciaMp4Mov";
import Privacidad from "./pages/Privacidad";
import Terminos from "./pages/Terminos";
import Contacto from "./pages/Contacto";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/convertidor-mp3-gratis" component={ConvertirMP3} />
        <Route path="/comprimir-video-online" component={ComprimirVideo} />
        <Route path="/recortar-video-online" component={RecortarVideo} />
        <Route path="/cambiar-formato-video" component={CambiarFormato} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/convertir-video-mp3" component={BlogConvertirMP3} />
        <Route path="/blog/formatos-video-redes" component={BlogFormatosRedes} />
        <Route path="/blog/reducir-tamano-video" component={BlogReducirVideo} />
        <Route path="/blog/diferencia-mp4-mov" component={BlogDiferenciaMp4Mov} />
        <Route path="/politica-de-privacidad" component={Privacidad} />
        <Route path="/terminos-de-uso" component={Terminos} />
        <Route path="/contacto" component={Contacto} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
