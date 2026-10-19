import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, ArrowRight } from 'lucide-react';

import { WebMobileSubTabMockup } from './mockups/WebMobileSubTabMockup';
import { BackendLogicMockup } from './mockups/BackendLogicMockup';
import { CloudDataMockup } from './mockups/CloudDataMockup';

export function SolutionInteractiveViewer() {
  const { t } = useTranslation('home');
  const [activeTab, setActiveTab] = useState('web');

  const tabsConfig = [
    { id: 'web', name: t('solutions.tabs.web.name'), short: t('solutions.tabs.web.short'), sub: t('solutions.tabs.web.sub') },
    { id: 'backend', name: t('solutions.tabs.backend.name'), short: t('solutions.tabs.backend.short'), sub: t('solutions.tabs.backend.sub') },
    { id: 'data', name: t('solutions.tabs.data.name'), short: t('solutions.tabs.data.short'), sub: t('solutions.tabs.data.sub') },
  ];

  const solutions = {
    web: {
      number: t('solutions.web.number'),
      title: t('solutions.web.title'),
      headline: t('solutions.web.headline'),
      description: t('solutions.web.description'),
      benefits: t('solutions.web.benefits', { returnObjects: true }) || [],
      techs: ['React', 'Next.js', '.NET MAUI', 'Tailwind CSS', 'TypeScript', 'Vite'],
      mockup: <WebMobileSubTabMockup />
    },
    backend: {
      number: t('solutions.backend.number'),
      title: t('solutions.backend.title'),
      headline: t('solutions.backend.headline'),
      description: t('solutions.backend.description'),
      benefits: t('solutions.backend.benefits', { returnObjects: true }) || [],
      techs: ['.NET Core (C#)', 'Java', 'APIs RESTful', 'Clean Architecture', 'JWT Authentication'],
      mockup: <BackendLogicMockup />
    },
    data: {
      number: t('solutions.data.number'),
      title: t('solutions.data.title'),
      headline: t('solutions.data.headline'),
      description: t('solutions.data.description'),
      benefits: t('solutions.data.benefits', { returnObjects: true }) || [],
      techs: ['SQL Server', 'Stored Procedures', 'Microsoft Azure', 'ETL', 'Diseño Relacional'],
      mockup: <CloudDataMockup />
    }
  };

  const current = solutions[activeTab];

  return (
    <div className="rounded-xl border border-white/[0.09] bg-[#090909] p-4 sm:p-7 lg:p-9 shadow-2xl relative space-y-6">
      
      {/* 1. Selector superior de 3 pestañas */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-3 border-b border-white/[0.08] pb-3 sm:pb-5 font-mono">
        {tabsConfig.map((item, idx) => {
          const isSelected = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-2 sm:p-4 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-emerald-500/10 border-emerald-500/50 text-white'
                  : 'bg-white/[0.01] border-white/[0.05] text-neutral-400 hover:text-white hover:border-white/[0.12]'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-0.5 sm:mb-1">
                <span className={`text-[10px] sm:text-xs font-bold leading-tight ${isSelected ? 'text-emerald-400' : 'text-neutral-300'}`}>
                  <span className="hidden sm:inline">{idx + 1}. {item.name}</span>
                  <span className="sm:hidden">{item.short}</span>
                </span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0 ml-1" />}
              </div>
              <span className="text-[8.5px] sm:text-[11px] text-neutral-500 block truncate">
                {item.sub}
              </span>
            </button>
          );
        })}
      </div>

      {/* 2. Cuerpo dinámico: Descripción + Maqueta */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch"
        >
          {/* Lado izquierdo: Información y tecnologías */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-3.5">
              <div>
                <span className="text-[10.5px] font-mono text-emerald-400 uppercase tracking-wider block mb-1 font-semibold">
                  {current.headline}
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-white font-sans tracking-tight">
                  {current.title}
                </h3>
              </div>

              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-sans font-normal">
                {current.description}
              </p>

              <div className="space-y-2 pt-1 font-sans text-xs sm:text-sm text-neutral-300">
                {current.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tecnologías */}
            <div className="pt-3 border-t border-white/[0.06] space-y-2 font-mono">
              <span className="text-[9.5px] text-neutral-500 uppercase tracking-widest block font-bold">
                {t('solutions.web.techs_label')}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {current.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-white/[0.02] text-emerald-300 border border-emerald-500/25 text-[10.5px] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Lado derecho: Maqueta interactiva */}
          <div className="lg:col-span-5 p-3 sm:p-5 rounded-lg bg-black/90 border border-white/[0.08] shadow-inner flex flex-col justify-between min-h-[380px]">
            {current.mockup}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 3. Barra de cierre 100% internacionalizada */}
      <div className="pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
        <span className="text-neutral-500 text-[11px] hidden sm:inline">
          {t('solutions_section.cta_prompt')}
        </span>
        <a
          href="#contacto"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] cursor-pointer"
        >
          <span>{t('solutions_section.cta_button')}</span>
          <ArrowRight size={14} />
        </a>
      </div>

    </div>
  );
}