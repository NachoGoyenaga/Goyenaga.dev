import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

// UI esencial y liviana
import { CleanBackgroundGrid } from '../components/ui/CleanBackgroundGrid';
import { TerminalTypewriter } from '../components/ui/TerminalTypewriter';
import { TerminalStatusBadge } from '../components/ui/TerminalStatusBadge';
import { RealProjectCard } from '../components/ui/RealProjectCard';

// Iconos necesarios para el Hero y Proyectos
import { ArrowDown, ArrowUpRight, Shield, Award, Mail, Phone, ChevronRight, Cpu } from 'lucide-react';

// Carga diferida de la maqueta interactiva pesada
const SolutionInteractiveViewer = lazy(() =>
  import('../components/ui/home/SolutionInteractiveViewer').then(module => ({
    default: module.SolutionInteractiveViewer
  }))
);

export default function Home() {
  const { t } = useTranslation('home');
  const typewriterPhrases = t('hero.typewriter_phrases', { returnObjects: true }) || [];

  return (
    <>
      <SEO title="Ignacio Goyenaga | Full Stack & Systems Engineer" />
      <CleanBackgroundGrid />

      <div className="space-y-24 sm:space-y-32 relative z-10">
        
        {/* ACTO 1: HERO (Pinta en el milisegundo 0 sin retrasos escalonados) */}
        <section className="pt-4 sm:pt-12 max-w-4xl space-y-6">
          <TerminalStatusBadge />

          <div className="space-y-3">
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">
              {t('hero.operator_label')}
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
              <span>{t('hero.headline_prefix')}</span>{' '}
              <TerminalTypewriter phrases={typewriterPhrases} />
            </h1>
          </div>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans font-normal">
            {t('hero.description')}
          </p>

          {/* Credenciales */}
          <div className="space-y-2">
            <div className="h-[1px] w-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 py-1 font-mono text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <Shield size={14} className="text-emerald-400 shrink-0" />
                <span>{t('hero.credentials.degree')}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Award size={14} className="text-emerald-400 shrink-0" />
                <span>{t('hero.credentials.cert')}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <Cpu size={14} className="text-emerald-400 shrink-0" />
                <span>{t('hero.credentials.stack')}</span>
              </div>
            </div>
            <div className="h-[1px] w-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0" />
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
            <a
              href="#soluciones"
              className="px-6 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2 cursor-pointer"
            >
              {t('hero.actions.explore')}
              <ArrowDown size={14} />
            </a>
            <Link
              to="/curriculum"
              className="px-6 py-3.5 rounded-lg bg-[#0d0d0d] hover:bg-white/[0.05] border border-white/[0.1] text-neutral-200 transition-all"
            >
              {t('hero.actions.cv')}
            </Link>
          </div>
        </section>

        {/* ACTO 2: SOLUCIONES (Carga de forma asíncrona) */}
        <section id="soluciones" className="space-y-6 scroll-mt-24">
          <div className="border-b border-white/[0.08] pb-4 font-mono">
            <span className="text-xs text-emerald-400 uppercase tracking-widest block mb-1">
              {t('solutions_section.tag')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
              {t('solutions_section.title')}
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-1 font-sans">
              {t('solutions_section.subtitle')}
            </p>
          </div>

          <Suspense fallback={
            <div className="w-full h-72 rounded-xl border border-white/[0.08] bg-white/[0.01] flex items-center justify-center font-mono text-xs text-neutral-500">
              <span className="animate-pulse">Cargando entorno interactivo...</span>
            </div>
          }>
            <SolutionInteractiveViewer />
          </Suspense>
        </section>

        {/* ACTO 3: PROYECTOS */}
        <section className="space-y-8">
          <div className="flex justify-between items-end border-b border-white/[0.08] pb-4 font-mono">
            <div>
              <span className="text-xs text-emerald-400 uppercase tracking-widest block mb-1">
                {t('projects_section.tag')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                {t('projects_section.title')}
              </h2>
            </div>
            <Link
              to="/proyectos"
              className="text-xs text-neutral-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
            >
              {t('projects_section.view_all')} <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="space-y-6">
            <RealProjectCard
              client="Consejo de Promoción de la Competitividad"
              title="Base de Datos Estadística y Automatización Cantonal"
              type="Práctica Profesional Supervisada"
              period="Septiembre 2025 - Diciembre 2025"
              problem="La entidad calculaba los indicadores estadísticos de los 84 cantones del país de forma manual en hojas de cálculo de Excel, generando lentitud y alto riesgo de inconsistencia en las series históricas."
              solution="Diseñé la arquitectura relacional en SQL Server, migré la información existente y automaticé el cálculo de los índices mediante Stored Procedures, desplegando la solución en Microsoft Azure lista para consulta en dashboards."
              tags={["SQL Server", "Microsoft Azure", "Stored Procedures", "ETL", "Relacional"]}
            />

            <RealProjectCard
              client="ACADEMA"
              title="Sistema Web de Gestión & API REST"
              type="Programador | TCU"
              period="Septiembre 2024 - Abril 2025"
              problem="La academia requería centralizar matrículas, estudiantes, profesores, asignación de clases e inventario de instrumentos musicales en una plataforma única."
              solution="Desarrollé la API REST y el Backend en .NET (C#) conectado a SQL Server. Implementé autenticación segura, manejo de contraseñas y envío automatizado de correos electrónicos, colaborando también en el Frontend con React."
              tags={[".NET (C#)", "SQL Server", "RESTful API", "React", "Auth Segura", "JavaScript"]}
            />

            <RealProjectCard
              client="yourFirstJob"
              title="Aplicación Móvil Multiplataforma para Empleo"
              type="Proyecto Académico"
              period="Enero 2024 - Abril 2024"
              problem="Falta de un canal accesible y ágil para que estudiantes universitarios postulen a sus primeras oportunidades de trabajo desde el celular."
              solution="Diseñé e implementé la app móvil con .NET MAUI. Desarrollé la API en C#, modelé la base de datos en SQL Server y desplegué los servicios en la nube de Microsoft Azure."
              tags={[".NET MAUI", "C# API", "SQL Server", "Microsoft Azure", "Mobile"]}
            />
          </div>
        </section>

        {/* ACTO 4: CONTACTO */}
        <section 
          id="contacto" 
          className="scroll-mt-24 p-7 sm:p-11 rounded-xl bg-[#090909] border border-white/[0.09] font-mono flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-2xl"
        >
          <div className="space-y-3 max-w-xl">
            <span className="text-xs text-emerald-400 uppercase tracking-widest block">
              {t('contact_section.tag')}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
              {t('contact_section.title')}
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans">
              {t('contact_section.description')}
            </p>
            <div className="flex flex-wrap gap-5 pt-2 text-xs text-neutral-300">
              <span className="flex items-center gap-2">
                <Mail size={13} className="text-emerald-400" /> nacho.goyenaga@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <Phone size={13} className="text-emerald-400" /> +506 8433-0637
              </span>
            </div>
          </div>

          <Link
            to="/contacto"
            className="px-7 py-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] shrink-0 text-center flex items-center justify-center gap-2 cursor-pointer font-mono"
          >
            {t('contact_section.action_button')}
            <ChevronRight size={15} />
          </Link>
        </section>

      </div>
    </>
  );
}