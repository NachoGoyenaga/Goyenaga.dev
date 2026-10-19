import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Activity } from 'lucide-react';

export function TerminalStatusBadge() {
  const { t } = useTranslation('home');
  const [latency, setLatency] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setLatency(Math.floor(Math.random() * 5) + 18);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-md bg-[#0a0a0a] border border-emerald-500/30 font-mono text-xs text-neutral-300 shadow-[0_0_12px_rgba(16,185,129,0.12)]">
      <span className="flex items-center gap-2 text-emerald-400 font-bold">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        {t('badge.status')}
      </span>
      <span className="text-neutral-700">|</span>
      <span className="flex items-center gap-1 text-neutral-400 text-[11px]">
        <Activity size={12} className="text-emerald-400" />
        {latency}ms
      </span>
      <span className="text-neutral-700">|</span>
      <span className="text-neutral-400 text-[11px]">{t('badge.target')}</span>
    </div>
  );
}