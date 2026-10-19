import { useState, useEffect } from 'react';
import { Activity } from 'lucide-react';

export function TerminalStatusBadge() {
  const [time, setTime] = useState(() => 
    new Date().toLocaleTimeString('en-US', { hour12: false })
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-md bg-[#0a0f0d] border border-emerald-500/20 font-mono text-[11px] text-emerald-400/90 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-semibold tracking-wider">SYS_ONLINE</span>
      </div>

      <span className="text-neutral-600">|</span>
      <span className="text-neutral-300">HEREDIA // {time}</span>
      <span className="text-neutral-600 hidden sm:inline">|</span>

      <div className="hidden sm:flex items-center gap-1.5 text-neutral-400">
        <Activity size={12} className="text-emerald-500" />
        <span>AVAILABLE</span>
      </div>
    </div>
  );
}