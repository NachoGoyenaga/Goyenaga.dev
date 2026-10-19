import { useState, useEffect } from 'react';

export function CleanBackgroundGrid() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => setTime(new Date().toTimeString().split(' ')[0]);
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden"
      >
        <div 
          className="absolute -top-36 left-1/2 -translate-x-1/2 w-[750px] h-[350px] rounded-full pointer-events-none"
          style={{
            backgroundColor: 'rgba(16, 185, 129, 0.08)',
            filter: 'blur(130px)',
          }}
        />
        <div className="absolute inset-0 matrix-active-grid pointer-events-none" />
      </div>

      {/* Visible únicamente en tablets y computadoras para no estorbar en móviles */}
      <div 
        aria-hidden="true" 
        className="fixed bottom-5 right-6 z-30 hidden sm:flex items-center gap-2 font-mono text-[11px] text-neutral-300 bg-black/90 px-3 py-1.5 rounded-md border border-emerald-500/40 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)] select-none pointer-events-none"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
        <span className="text-emerald-400 font-semibold shrink-0">SYS_ONLINE</span>
        <span className="text-neutral-600">|</span>
        <span>HEREDIA // {time || '12:00:00'}</span>
      </div>
    </>
  );
}