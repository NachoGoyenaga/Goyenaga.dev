export function CleanBackgroundGrid() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050806]"
      style={{ transform: 'translateZ(0)' }}
    >
      {/* Malla SVG estática: 0 ms de cálculo para el procesador del móvil */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.15]" 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%"
      >
        <defs>
          <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#10b981" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
      
      {/* Viñeta sutil para oscurecer los bordes sin filtros pesados */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
    </div>
  );
}