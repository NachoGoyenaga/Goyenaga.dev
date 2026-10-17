import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true }) || [];

  return (
    <>
      <SEO title={t('nav.home')} />
      <div className="space-y-24">
        
        {/* Hero Section */}
        <section className="min-h-[50vh] flex flex-col justify-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {t('hero.greeting')}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-3">
            {t('hero.name')}
          </h1>
          <h2 className="text-lg sm:text-xl font-medium text-neutral-400 mb-6 font-mono">
            {t('hero.role')}
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed mb-8">
            {t('hero.description')}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link 
              to="/proyectos" 
              className="px-5 py-2.5 rounded-md bg-emerald-500 hover:bg-emerald-400 text-[#0a0a0a] font-medium text-xs font-mono transition-all"
            >
              {t('hero.cta_projects')}
            </Link>
            <Link 
              to="/curriculum" 
              className="px-5 py-2.5 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-neutral-200 text-xs font-mono transition-all"
            >
              {t('hero.cta_resume')}
            </Link>
          </div>
        </section>

        {/* Proyectos Destacados */}
        <section className="border-t border-white/[0.08] pt-12">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-semibold text-white">
              {t('home.featured_title')}
            </h3>
            <Link 
              to="/proyectos" 
              className="text-xs font-mono text-neutral-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
            >
              {t('home.see_all')} <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.slice(0, 2).map((proj) => (
              <div 
                key={proj.id} 
                className="p-6 rounded-lg bg-[#0e0e0e] border border-white/[0.08] hover:border-emerald-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 block mb-1">
                    {proj.client}
                  </span>
                  <h4 className="text-base font-medium text-white mb-2">
                    {proj.title}
                  </h4>
                  <p className="text-neutral-400 text-xs leading-relaxed mb-6">
                    {proj.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.slice(0, 3).map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-neutral-300 border border-white/[0.06]"
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