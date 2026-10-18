import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import InteractiveWorkflow from '../components/ui/InteractiveWorkflow';
import { ArrowUpRight, Sparkles, CheckCircle, Database, Server, Smartphone, Globe, ShieldCheck } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation(['home', 'projects', 'common']);
  
  const rawProjects = t('items', { ns: 'projects', returnObjects: true });
  const projects = Array.isArray(rawProjects) ? rawProjects : [];

  return (
    <>
      <SEO title={t('common:nav.home')} />

      {/* EFECTOS AMBIENTALES DE FONDO DINÁMICO */}
      <div aria-hidden="true" className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Malla cuadriculada */}
        <div className="absolute inset-0 bg-grid-subtle opacity-75 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_20%,#000_30%,transparent_100%)]" />

        {/* Orbe de luz esmeralda superior izquierdo */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-emerald-500/[0.12] rounded-full blur-[140px] animate-ambient" />

        {/* Orbe de luz verde azulado central/derecho */}
        <div className="absolute top-[25%] -right-24 w-[500px] h-[500px] bg-teal-500/[0.08] rounded-full blur-[150px] animate-ambient-delayed" />
      </div>

      <div className="space-y-28">
        
        {/* HERO SECTION A 2 COLUMNAS */}
        <section className="pt-4 sm:pt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Mensaje Claro e Integral */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/25 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t('home:hero.badge_status')}</span>
            </div>

            {/* Titular de Alto Impacto con Degradado Animado */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-neutral-400 tracking-wider uppercase block">
                Ignacio Goyenaga • {t('home:hero.greeting')}
              </span>
              
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
                {t('home:hero.headline_1')} <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-green-400 bg-clip-text text-transparent animate-text-gradient font-extrabold">
                  {t('home:hero.headline_gradient')}
                </span>
              </h1>
            </div>

            {/* Subtítulo comprensible */}
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl">
              {t('home:hero.description')}
            </p>

            {/* Puntos clave de valor (fáciles de leer para cualquier persona) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-emerald-400 shrink-0" />
                <span>Aplicaciones web modernas & responsivas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-emerald-400 shrink-0" />
                <span>Arquitecturas backend (.NET) & APIs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-emerald-400 shrink-0" />
                <span>Bases de datos SQL optimizadas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-emerald-400 shrink-0" />
                <span>Infraestructura Cloud en Microsoft Azure</span>
              </div>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                to="/proyectos" 
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-[#080808] font-semibold text-xs font-mono transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:scale-[1.02]"
              >
                {t('home:hero.cta_projects')}
              </Link>
              <Link 
                to="/contacto" 
                className="px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-neutral-200 text-xs font-mono transition-all hover:border-emerald-500/40"
              >
                Hablemos de tu Proyecto
              </Link>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Interactiva de Metodología */}
          <div className="lg:col-span-5">
            <InteractiveWorkflow />
          </div>

        </section>

        {/* CÓMO PUEDO AYUDARTE (Neutral & Comprensible) */}
        <section className="space-y-6">
          <div className="border-b border-white/[0.08] pb-4">
            <span className="text-xs font-mono text-emerald-400">// SERVICIOS & ALCANCE</span>
            <h2 className="text-2xl font-bold text-white mt-1">¿Qué tipo de soluciones desarrollo?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            <div className="p-6 rounded-2xl bg-[#0d0d0d]/80 border border-white/[0.08] hover:border-emerald-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                  <Globe size={20} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">Desarrollo Web & Plataformas</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Creación de páginas web institucionales, paneles de control (dashboards) y portales interactivos rápidos y optimizados para SEO.
                </p>
              </div>
              <div className="pt-6 font-mono text-[11px] text-emerald-400/80">React • Next.js • Tailwind CSS</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0d0d0d]/80 border border-white/[0.08] hover:border-emerald-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                  <Server size={20} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">Sistemas a Medida & Backend</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Automatización de procesos administrativos, conexión de APIs seguras, pasarelas de información y lógica empresarial sólida.
                </p>
              </div>
              <div className="pt-6 font-mono text-[11px] text-emerald-400/80">.NET (C#) • APIs RESTful • Java</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0d0d0d]/80 border border-white/[0.08] hover:border-emerald-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                  <Database size={20} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">Bases de Datos & Migraciones</h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Estructuración relacional, migración de datos desde Excel, automatización con Stored Procedures y hosting confiable en la nube.
                </p>
              </div>
              <div className="pt-6 font-mono text-[11px] text-emerald-400/80">SQL Server • Azure • Procedimientos</div>
            </div>

          </div>
        </section>

        {/* CASOS REALES DESTACADOS */}
        <section className="space-y-6">
          <div className="flex justify-between items-center border-b border-white/[0.08] pb-4">
            <div>
              <span className="text-xs font-mono text-emerald-400">// EXPERIENCIA COMPROBADA</span>
              <h2 className="text-2xl font-bold text-white mt-1">{t('home:featured_title')}</h2>
            </div>
            <Link 
              to="/proyectos" 
              className="text-xs font-mono text-neutral-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
            >
              {t('home:see_all')} <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((proj) => (
              <div 
                key={proj.id} 
                className="p-7 rounded-2xl bg-[#0d0d0d]/80 border border-white/[0.08] hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-mono text-emerald-400 font-medium">
                      {proj.client}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.06]">
                      {proj.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                    {proj.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
                  {Array.isArray(proj.tags) && proj.tags.slice(0, 4).map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.02] text-neutral-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}