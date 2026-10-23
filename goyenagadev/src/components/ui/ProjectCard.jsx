import { ArrowUpRight } from 'lucide-react';

export function ProjectCard({ project, content = {}, onSelect }) {
  if (!project) return null;

  const tags = Array.isArray(project.tags) 
    ? project.tags 
    : (Array.isArray(content.tags) ? content.tags : []);

  return (
    <article
      onClick={() => onSelect && onSelect(project)}
      className="group cursor-pointer flex flex-col justify-between rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 hover:border-emerald-500/50 hover:bg-neutral-900/70 transition-all duration-300"
    >
      <div className="space-y-4">
        {/* Contenedor de miniatura limpio (sin capas flotantes encima) */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-800/80 bg-neutral-950 flex items-center justify-center">
          {project.thumbnail && (
            <img
              src={project.thumbnail}
              alt={content.title || project.title || 'Proyecto'}
              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          )}
        </div>

        {/* Cliente / Categoría */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-emerald-400 font-medium">
            {content.client || project.client || 'goyenaga.com'}
          </span>
          <span className="text-neutral-500 bg-neutral-800/60 px-2 py-0.5 rounded border border-neutral-700/50">
            {content.category || project.category || 'Clientes'}
          </span>
        </div>

        {/* Título & Resumen */}
        <div className="space-y-1.5">
          <h2 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center justify-between">
            <span>{content.title || project.title}</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-emerald-400" />
          </h2>
          <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed font-sans">
            {content.summary || project.summary || content.description}
          </p>
        </div>
      </div>

      {/* Etiquetas técnicas */}
      <div className="pt-4 mt-4 border-t border-neutral-800/60 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-neutral-800/70 text-emerald-300 border border-emerald-500/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;