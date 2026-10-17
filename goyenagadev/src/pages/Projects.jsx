import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

export default function Projects() {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true }) || [];

  return (
    <>
      <SEO title={t('projects.title')} description={t('projects.subtitle')} />
      <div className="space-y-10">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">
            {t('projects.title')}
          </h1>
          <p className="text-neutral-400 text-sm">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((proj) => (
            <article 
              key={proj.id} 
              className="p-6 sm:p-8 rounded-lg bg-[#0e0e0e] border border-white/[0.08] hover:border-neutral-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-1">
                <h2 className="text-lg font-semibold text-white">{proj.title}</h2>
                <span className="text-xs font-mono text-neutral-500">{proj.period}</span>
              </div>
              <div className="text-xs font-mono text-emerald-400 mb-4">
                {proj.client} <span className="text-neutral-600">/</span> <span className="text-neutral-400">{proj.type}</span>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="text-xs font-mono text-emerald-300 bg-emerald-500/[0.05] border border-emerald-500/20 px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}