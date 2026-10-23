import { useTranslation } from 'react-i18next';
import { CleanBackgroundGrid } from '../components/ui/CleanBackgroundGrid';
import SEO from '../components/SEO';
import { Download, ExternalLink } from 'lucide-react';

export default function Resume() {
  const { t, i18n } = useTranslation('resume');

  // Detecta el idioma activo (es o en)
  const isEnglish = i18n.language?.startsWith('en');

  // Rutas dentro de public/cvs/ y nombres de descarga según el idioma
  const pdfUrl = isEnglish
    ? '/cvs/Goyenaga Castro, Ignacio-Resume.pdf'
    : '/cvs/Goyenaga Castro, Ignacio-CV.pdf';

  const downloadFileName = isEnglish
    ? 'Goyenaga Castro, Ignacio - Resume.pdf'
    : 'Goyenaga Castro, Ignacio - CV.pdf';

  const workExperience = t('work_experience', { returnObjects: true }) || [];
  const academicProjects = t('academic_projects', { returnObjects: true }) || [];
  const technicalSkills = t('technical_skills', { returnObjects: true }) || [];
  const educationList = t('education', { returnObjects: true }) || [];
  const certificationsList = t('certifications', { returnObjects: true }) || [];
  const languagesList = t('languages', { returnObjects: true }) || [];

  return (
    <>
      <SEO 
        title={`${t('header.name')} — CV`} 
        description={t('summary')} 
      />

      <CleanBackgroundGrid />

      <div className="py-6 sm:py-10 relative z-10 max-w-4xl mx-auto px-2 sm:px-4 space-y-4">
        
        {/* BARRA SUPERIOR DINÁMICA POR IDIOMA */}
        <div className="flex items-center justify-end gap-2.5 text-xs font-mono">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors shadow-sm"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>{t('header.view_btn')}</span>
          </a>
          <a
            href={pdfUrl}
            download={downloadFileName}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold transition-all shadow-[0_0_12px_rgba(16,185,129,0.25)] hover:scale-[1.02]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t('header.download_btn')}</span>
          </a>
        </div>

        {/* HOJA ÚNICA TIPO DOCUMENTO */}
        <div className="relative rounded-xl border border-neutral-800 bg-[#0c0e0d] text-neutral-200 p-6 sm:p-12 md:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.85)] font-sans space-y-8">
          
          {/* ENCABEZADO CENTRADO DEL DOCUMENTO */}
          <header className="text-center space-y-2 border-b border-neutral-800/80 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase font-sans">
              {t('header.name')}
            </h1>
            
            <p className="text-emerald-400 font-mono text-xs sm:text-sm font-semibold tracking-wide uppercase">
              {t('header.headline')}
            </p>

            {/* Fila de datos sensible al idioma */}
            <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs font-mono text-neutral-400 pt-1">
              <span>{isEnglish ? 'Phone:' : 'Teléfono:'} {t('contact.phone')}</span>
              <span className="text-neutral-700 hidden sm:inline">|</span>
              <span>{isEnglish ? 'Email:' : 'Correo:'} </span>
              <a 
                href={`mailto:${t('contact.email')}`} 
                className="hover:text-emerald-400 transition-colors underline decoration-neutral-700 underline-offset-2"
              >
                {t('contact.email')}
              </a>
              <span className="text-neutral-700 hidden sm:inline">|</span>
              <span>{isEnglish ? 'Address:' : 'Dirección:'} {t('contact.location')}</span>
              <span className="text-neutral-700 hidden sm:inline">|</span>
              <span>{t('contact.license')}</span>
              <span className="text-neutral-700 hidden sm:inline">|</span>
              <span>{t('contact.visa')}</span>
            </div>
          </header>

          {/* PERFIL / SUMMARY */}
          <section className="space-y-2.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-neutral-800 pb-1">
              {t('sections.summary')}
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-neutral-300 text-justify">
              {t('summary')}
            </p>
          </section>

          {/* EXPERIENCIA LABORAL */}
          <section className="space-y-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-neutral-800 pb-1">
              {t('sections.work_experience')}
            </h2>

            <div className="space-y-6">
              {workExperience.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                    <span className="font-bold text-white">
                      {exp.role}
                    </span>
                    <span className="font-mono text-xs text-neutral-400">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-emerald-400/90 font-medium">
                    {exp.company}
                  </div>

                  {exp.intro && (
                    <p className="text-xs sm:text-sm text-neutral-300 italic pt-0.5">
                      {exp.intro}
                    </p>
                  )}

                  <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-neutral-300">
                    {exp.bullets?.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed marker:text-emerald-500">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* PROYECTOS ACADÉMICOS */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-neutral-800 pb-1">
              {t('sections.academic_projects')}
            </h2>

            <div className="space-y-4">
              {academicProjects.map((proj, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                    <span className="font-bold text-white font-mono">
                      {proj.name}
                    </span>
                    <span className="font-mono text-xs text-neutral-400">
                      {proj.period}
                    </span>
                  </div>

                  <ul className="list-disc list-outside pl-4 space-y-1.5 text-xs sm:text-sm text-neutral-300">
                    {proj.bullets?.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed marker:text-emerald-500">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* EDUCACIÓN */}
          <section className="space-y-2.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-neutral-800 pb-1">
              {t('sections.education')}
            </h2>
            <div className="space-y-2">
              {educationList.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-white">{edu.degree}</span>
                    <span className="text-neutral-400 font-mono text-xs block sm:inline sm:ml-2">
                      — {edu.institution}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">
                    ({edu.year})
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* CERTIFICACIONES */}
          <section className="space-y-2.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-neutral-800 pb-1">
              {t('sections.certifications')}
            </h2>
            <div className="space-y-2">
              {certificationsList.map((cert, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-white">{cert.name}</span>
                    <span className="text-neutral-400 font-mono text-xs block sm:inline sm:ml-2">
                      — {cert.institution}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-neutral-400">
                    ({cert.year})
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* HABILIDADES TÉCNICAS */}
          <section className="space-y-2.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-neutral-800 pb-1">
              {t('sections.skills')}
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
              {technicalSkills.map((skill, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                  <span className="font-bold text-white font-mono text-xs sm:min-w-[190px]">
                    {skill.category}:
                  </span>
                  <span className="text-neutral-300">
                    {skill.items}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* IDIOMAS */}
          <section className="space-y-2.5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 border-b border-neutral-800 pb-1">
              {t('sections.languages')}
            </h2>
            <div className="space-y-1 text-xs sm:text-sm">
              {languagesList.map((lang, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-emerald-400">▹</span>
                  <span className="font-semibold text-white">{lang.name}:</span>
                  <span className="text-neutral-300">{lang.level}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}