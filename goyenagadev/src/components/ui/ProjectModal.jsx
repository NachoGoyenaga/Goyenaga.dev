import { useState, useEffect, useCallback } from 'react';
import { X, ExternalLink, Calendar, UserCheck, Code2, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectModal({ project, lang = 'es', onClose }) {
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

  const gallery = Array.isArray(project?.gallery) ? project.gallery : [];
  const hasPhotos = gallery.length > 0;

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
  }, [gallery.length]);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setActivePhotoIndex((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
  }, [gallery.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePhotoIndex !== null) {
        if (e.key === 'Escape') setActivePhotoIndex(null);
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
      } else {
        if (e.key === 'Escape') onClose();
      }
    };

    // Bloqueo de scroll seguro para iOS
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, activePhotoIndex, handlePrev, handleNext]);

  if (!project) return null;
  const content = project[lang] || project.es || {};

  return (
    /* z-[9999] y safe-area padding para quedar por encima de cualquier barra de Safari y Navbar */
    <div 
      className="fixed inset-0 flex items-center justify-center p-3 sm:p-6 md:p-10 pt-safe pb-safe z-[9999]"
      style={{
        zIndex: 9999,
        paddingTop: 'max(1rem, env(safe-area-inset-top))',
        paddingBottom: 'max(1rem, env(safe-area-inset-bottom))'
      }}
    >
      {/* Fondo oscuro exterior con cierre al toque */}
      <div 
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Contenedor del Modal: max-h-[85dvh] para contemplar la barra dinámica de Safari */}
      <div 
        className="relative w-full max-w-4xl max-h-[85dvh] sm:max-h-[90vh] overflow-y-auto rounded-2xl border border-neutral-800 bg-[#090b0a] p-5 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.95)] z-10 space-y-6 sm:space-y-8"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#262626 #090b0a',
          WebkitOverflowScrolling: 'touch' // Desplazamiento fluido nativo en iOS
        }}
      >
        {/* Botón Cerrar Modal flotante fijo a la tarjeta */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl text-neutral-300 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 transition-colors z-20 shadow-lg"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Encabezado */}
        <div className="space-y-3 pt-1 sm:pt-0 pr-12">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-emerald-400 font-semibold">{content.client}</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400 bg-neutral-900/80 px-2 py-0.5 rounded border border-neutral-800">
              {content.category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans leading-tight">
            {content.title}
          </h1>

          <div className="flex flex-wrap gap-4 pt-1 text-xs font-mono text-neutral-400">
            {content.role && (
              <span className="inline-flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                {content.role}
              </span>
            )}
            {content.year && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                {content.year}
              </span>
            )}
          </div>
        </div>

        {/* Tags Técnicos y Enlaces */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3.5 border-y border-neutral-800/80">
          <div className="flex flex-wrap gap-1.5">
            {Array.isArray(project.tags) && project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded bg-neutral-900 text-neutral-300 border border-neutral-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-300 hover:text-white"
              >
                <Code2 className="w-4 h-4" />
                <span>Código</span>
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]"
              >
                <span>Visitar sitio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Descripción */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono text-emerald-400 tracking-wider uppercase font-semibold">
            // Contexto & Solución
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-sans">
            {content.description}
          </p>
        </div>

        {/* Galería de capturas */}
        {hasPhotos && (
          <div className="space-y-4 pt-4 border-t border-neutral-800/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h2 className="text-xs font-mono text-neutral-400 tracking-wider uppercase">
                // Capturas de la plataforma ({gallery.length})
              </h2>
              <span className="text-[11px] font-mono text-neutral-500">
                (Toca una imagen para ampliar)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {gallery.map((imgSrc, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActivePhotoIndex(idx)}
                  className="group relative cursor-pointer overflow-hidden rounded-xl border border-neutral-800/90 bg-neutral-950 aspect-video flex items-center justify-center hover:border-emerald-500/50 transition-colors"
                >
                  <img
                    src={imgSrc}
                    alt={`Captura ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono bg-black/80 px-3 py-1.5 rounded-md text-emerald-400 border border-emerald-500/30">
                      <ZoomIn className="w-3.5 h-3.5" />
                      Ampliar
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* VISOR LIGHTBOX DE PANTALLA COMPLETA */}
      {activePhotoIndex !== null && hasPhotos && (
        <div 
          className="fixed inset-0 bg-black/98 backdrop-blur-2xl flex flex-col items-center justify-between p-3 sm:p-8 select-none z-[10000]"
          style={{ zIndex: 10000 }}
          onClick={() => setActivePhotoIndex(null)}
        >
          {/* Barra superior con botón de cerrar accesible en iPhone */}
          <div className="w-full flex justify-end items-center py-2 px-1 z-30 pt-safe">
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="p-2 sm:p-2.5 rounded-full text-neutral-300 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 transition-colors shadow-lg"
              aria-label="Cerrar visor"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Área Central: Foto y Controles */}
          <div className="relative w-full flex-grow flex items-center justify-center max-w-5xl px-2 sm:px-12">
            {gallery.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/75 sm:bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/70 hover:border-emerald-500/50 transition-all shadow-xl z-30"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            <div 
              className="relative max-h-[70dvh] sm:max-h-[80vh] w-full flex items-center justify-center overflow-hidden rounded-lg sm:rounded-xl border border-neutral-800/80 bg-neutral-950 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery[activePhotoIndex]}
                alt={`Foto ${activePhotoIndex + 1}`}
                className="max-h-[68dvh] sm:max-h-[78vh] w-auto max-w-full object-contain"
              />
            </div>

            {gallery.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/75 sm:bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/70 hover:border-emerald-500/50 transition-all shadow-xl z-30"
                aria-label="Foto siguiente"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}
          </div>

          {/* Indicador inferior */}
          <div 
            className="my-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-400 shadow-md z-30 mb-safe"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-emerald-400 font-semibold">{activePhotoIndex + 1}</span>
            <span className="mx-1 text-neutral-600">/</span>
            <span>{gallery.length}</span>
          </div>
        </div>
      )}
    </div>
  );
}