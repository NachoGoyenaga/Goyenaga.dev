import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { Download, ExternalLink, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

export default function Resume() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language.substring(0, 2);
  const pdfUrl = `/cv-ignacio-goyenaga-${currentLang}.pdf`;

  const skillsCategories = t('resume.skills_categories', { returnObjects: true }) || [];
  const educationItems = t('resume.education_items', { returnObjects: true }) || [];
  const certificationItems = t('resume.certification_items', { returnObjects: true }) || [];
  const info = t('resume.info', { returnObjects: true }) || {};

  return (
    <>
      <SEO title={t('resume.title')} description={t('resume.profile_summary')} />
      <div className="space-y-12">
        
        {/* Header y Acciones de PDF */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">{t('resume.title')}</h1>
            <p className="text-xs font-mono text-neutral-400">
              Ignacio Goyenaga • Heredia, Costa Rica
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-neutral-200 text-xs font-mono transition-colors"
            >
              <ExternalLink size={13} />
              {t('resume.view_pdf')}
            </a>
            <a 
              href={pdfUrl} 
              download
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-emerald-500 hover:bg-emerald-400 text-[#0a0a0a] text-xs font-mono font-medium transition-colors"
            >
              <Download size={13} />
              {t('resume.download_pdf')}
            </a>
          </div>
        </div>

        {/* Resumen Profesional */}
        <section className="space-y-4">
          <p className="text-neutral-300 text-sm leading-relaxed max-w-3xl">
            {t('resume.profile_summary')}
          </p>
          
          <div className="flex flex-wrap gap-4 text-xs font-mono text-neutral-400 pt-2">
            <span className="inline-flex items-center gap-1.5"><MapPin size={13} className="text-emerald-400" /> {info.location}</span>
            <span className="inline-flex items-center gap-1.5"><Phone size={13} className="text-emerald-400" /> {info.phone}</span>
            <span className="inline-flex items-center gap-1.5"><Mail size={13} className="text-emerald-400" /> {info.email}</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck size={13} className="text-emerald-400" /> {info.visa}</span>
          </div>
        </section>

        {/* Habilidades Técnicas por Categoría */}
        <section className="space-y-6 pt-4 border-t border-white/[0.08]">
          <h2 className="text-base font-semibold text-white font-mono">
            // {t('resume.sections.skills')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillsCategories.map((group, idx) => (
              <div key={idx} className="p-5 rounded bg-[#0e0e0e] border border-white/[0.06]">
                <h3 className="text-xs font-mono text-emerald-400 mb-3">{group.category}</h3>
                <ul className="space-y-1.5 text-xs text-neutral-300">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-neutral-600">▪</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Educación y Certificaciones */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/[0.08]">
          <div>
            <h2 className="text-base font-semibold text-white font-mono mb-4">
              // {t('resume.sections.education')}
            </h2>
            {educationItems.map((edu, idx) => (
              <div key={idx} className="p-5 rounded bg-[#0e0e0e] border border-white/[0.06]">
                <h3 className="text-sm font-medium text-white mb-1">{edu.degree}</h3>
                <p className="text-xs text-emerald-400 font-mono mb-1">{edu.institution}</p>
                <span className="text-xs font-mono text-neutral-500">{edu.year}</span>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-base font-semibold text-white font-mono mb-4">
              // {t('resume.sections.certifications')}
            </h2>
            {certificationItems.map((cert, idx) => (
              <div key={idx} className="p-5 rounded bg-[#0e0e0e] border border-white/[0.06]">
                <h3 className="text-sm font-medium text-white mb-1">{cert.name}</h3>
                <p className="text-xs text-emerald-400 font-mono mb-1">{cert.issuer}</p>
                <span className="text-xs font-mono text-neutral-500">{cert.year}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}