import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { RefreshCw } from 'lucide-react';

export function BackendLogicMockup() {
  const { t } = useTranslation('home');
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCycle((c) => (c + 1) % 4);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      name: 'API REST (.NET Core / C#)',
      desc: 'HTTP Controller & Routing',
      status: cycle % 2 === 0 ? '200 OK' : 'STREAMING',
      color: 'text-emerald-400',
      progress: [65, 95, 80, 100][cycle]
    },
    {
      name: 'Auth Service & JWT Token',
      desc: 'Role validation & Claims',
      status: 'VERIFIED',
      color: 'text-emerald-400',
      progress: [100, 85, 100, 90][cycle]
    },
    {
      name: 'Background Worker Queue',
      desc: 'Async tasks & Event dispatch',
      status: cycle === 2 ? 'RETRYING' : 'QUEUED',
      color: cycle === 2 ? 'text-yellow-400' : 'text-emerald-400',
      progress: [45, 60, 85, 70][cycle]
    }
  ];

  return (
    <div className="h-full min-h-[420px] sm:min-h-[460px] flex flex-col justify-between font-mono text-xs space-y-3.5">
      <div className="flex items-center justify-between text-[11px] text-neutral-400 border-b border-white/[0.08] pb-3">
        <span>{t('solutions.mockups.backend_title')}</span>
        <span className="text-emerald-400 font-bold flex items-center gap-1.5">
          <RefreshCw size={11} className="animate-spin" /> {t('solutions.mockups.backend_live')}
        </span>
      </div>

      <div className="space-y-2.5 my-auto">
        {services.map((svc, i) => (
          <div 
            key={i} 
            className="p-3 rounded-lg bg-black/75 border border-white/[0.08] space-y-2"
          >
            <div className="flex justify-between items-center text-[10px]">
              <div>
                <span className="text-white font-semibold block">{svc.name}</span>
                <span className="text-neutral-500 text-[8.5px] block">{svc.desc}</span>
              </div>
              <span className={`font-bold ${svc.color}`}>{svc.status}</span>
            </div>

            <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div 
                key={`${i}-${cycle}`}
                initial={{ width: '25%' }}
                animate={{ width: `${svc.progress}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-emerald-500"
              />
            </div>

            <div className="flex justify-between text-[8px] text-neutral-500 pt-0.5">
              <span>{t('solutions.mockups.thread_label')}</span>
              <span>11ms</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-[10px] text-neutral-500 flex justify-between pt-2 border-t border-white/[0.06]">
        <span>{t('solutions.mockups.clean_arch')}</span>
        <span className="text-emerald-400">{t('solutions.mockups.secure_microservices')}</span>
      </div>
    </div>
  );
}