import { useTranslation } from 'react-i18next';

export function RealProjectCard({ client, title, type, period, problem, solution, tags = [] }) {
  const { t } = useTranslation('home');

  return (
    <div className="p-5 sm:p-8 rounded-xl bg-[#090909] border border-white/[0.09] hover:border-emerald-500/40 transition-all space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3 font-mono text-xs">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-white font-semibold">{client}</span>
        </div>
        <span className="text-neutral-500 text-[11px]">{period} // {type}</span>
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 font-sans text-xs">
        <div className="p-3.5 rounded-lg bg-black/60 border border-white/[0.05] space-y-1">
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block font-bold">
            {t('projects_section.problem_label')}
          </span>
          <p className="text-neutral-300 text-xs leading-relaxed">
            {problem}
          </p>
        </div>

        <div className="p-3.5 rounded-lg bg-emerald-950/15 border border-emerald-500/20 space-y-1">
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold">
            {t('projects_section.solution_label')}
          </span>
          <p className="text-neutral-200 text-xs leading-relaxed">
            {solution}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.06] font-mono text-[11px]">
        {tags.map((tag, i) => (
          <span 
            key={i} 
            className="px-2.5 py-0.5 rounded bg-white/[0.02] text-emerald-300 border border-emerald-500/20 text-[10px] font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}