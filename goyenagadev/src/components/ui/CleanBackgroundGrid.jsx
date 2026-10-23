export function CleanBackgroundGrid() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#060807]"
      style={{ transform: 'translateZ(0)' }}
    >
      {/* Halo verde */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle 900px at 50% -15%, rgba(16, 185, 129, 0.025), transparent 75%)'
        }}
      />

      {/* Cuadrícula */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.06]" 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%"
      >
        <defs>
          <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#6ee7b7" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>
      
      {/* Viñeta perimetral suave */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, transparent 50%, #060807 92%)'
        }}
      />
    </div>
  );
}