import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { allProjects } from '../data/projects';
import { ProjectCard } from '../components/ui/ProjectCard';
import ProjectModal from '../components/ui/ProjectModal';
import { CleanBackgroundGrid } from '../components/ui/CleanBackgroundGrid';
import SEO from '../components/SEO';
import { FolderGit2 } from 'lucide-react';

export default function Projects() {
  const { t } = useTranslation('projects');
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { key: 'all', label: t('filters.all') },
    { key: 'clients', label: t('filters.clients') },
    { key: 'development', label: t('filters.development') },
    { key: 'institutional', label: t('filters.institutional') },
  ];

  const filteredProjects = filter === 'all'
    ? allProjects
    : allProjects.filter((p) => p.categoryKey === filter);

  const selectedContent = selectedProject 
    ? t(`items.${selectedProject.id}`, { returnObjects: true }) 
    : null;

  return (
    <>
      <SEO title={t('header.title')} description={t('header.subtitle')} />

      <CleanBackgroundGrid />

      <div className="py-8 space-y-10 relative z-10">
        {/* Encabezado */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{t('header.badge')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            {t('header.title')}
          </h1>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed font-sans">
            {t('header.subtitle')}
          </p>
        </div>

        {/* Filtros dinámicos */}
        <div className="flex flex-wrap gap-2 border-b border-neutral-800/80 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-1.5 text-xs font-mono rounded-lg transition-all ${
                filter === cat.key
                  ? 'bg-emerald-500 text-black font-semibold shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                  : 'bg-neutral-900/60 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cuadrícula completa de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const projectContent = t(`items.${project.id}`, { returnObjects: true }) || {};
            return (
              <ProjectCard
                key={project.id}
                project={project}
                content={projectContent}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            );
          })}
        </div>

        {/* Modal interactivo */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            content={selectedContent}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </>
  );
}