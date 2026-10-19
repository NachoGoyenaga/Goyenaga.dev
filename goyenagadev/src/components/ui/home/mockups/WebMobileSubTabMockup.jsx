import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Laptop, Smartphone } from 'lucide-react';

export function WebMobileSubTabMockup() {
  const { t } = useTranslation('home');
  const [subView, setSubView] = useState('web');
  const [users, setUsers] = useState(146);
  const [mobileUsers, setMobileUsers] = useState(93);
  const [rps, setRps] = useState(44);

  useEffect(() => {
    const timer = setInterval(() => {
      setUsers((prev) => prev + Math.floor(Math.random() * 7) - 3);
      setMobileUsers((prev) => prev + Math.floor(Math.random() * 5) - 2);
      setRps((prev) => Math.max(26, prev + Math.floor(Math.random() * 5) - 2));
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full min-h-[440px] flex flex-col justify-between font-mono text-xs space-y-4">
      {/* Selector superior */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-lg border border-white/[0.06]">
          <button
            onClick={() => setSubView('web')}
            className={`px-2.5 sm:px-3 py-1 rounded text-[10px] sm:text-[11px] transition-all cursor-pointer flex items-center gap-1.5 ${
              subView === 'web'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Laptop size={12} />
            <span>{t('solutions.mockups.web_tab')}</span>
          </button>
          <button
            onClick={() => setSubView('mobile')}
            className={`px-2.5 sm:px-3 py-1 rounded text-[10px] sm:text-[11px] transition-all cursor-pointer flex items-center gap-1.5 ${
              subView === 'mobile'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 font-bold'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Smartphone size={12} />
            <span>{t('solutions.mockups.mobile_tab')}</span>
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-emerald-400 font-bold shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{t('solutions.mockups.live_telemetry')}</span>
        </div>
      </div>

      {/* Visor interactivo */}
      <div className="flex-1 flex flex-col justify-center items-center py-2 w-full">
        <AnimatePresence mode="wait">
          {subView === 'web' ? (
            <motion.div
              key="web"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="w-full space-y-3 p-3.5 sm:p-4 rounded-xl bg-black/80 border border-white/[0.08] shadow-2xl"
            >
              <div className="flex items-center gap-2 border-b border-white/[0.06] pb-2 text-[10px]">
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
                </div>
                
                <div className="flex-1 min-w-0 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded text-neutral-300 text-[9px] sm:text-[10px] truncate">
                  app.empresa.com/dashboard
                </div>

                <span className="shrink-0 px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 text-[8px] sm:text-[9px] font-bold border border-emerald-500/30">
                  TLS 1.3
                </span>
              </div>

              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-3 rounded-xs bg-emerald-400" />
                  <span className="font-bold text-white tracking-wide text-[9px] sm:text-[10px]">
                    {t('solutions.mockups.web_panel_title')}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-neutral-400 text-[8.5px] sm:text-[9px]">
                  <span className="text-emerald-400 bg-emerald-500/10 px-1 rounded">UI/UX</span>
                  <span>Analytics</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-neutral-400 block text-[8.5px] sm:text-[9px] mb-0.5">
                    {t('solutions.mockups.active_sessions')}
                  </span>
                  <motion.span 
                    key={users}
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 1 }}
                    className="text-emerald-400 font-bold text-xs sm:text-sm block"
                  >
                    {users} {t('solutions.mockups.clients_unit')}
                  </motion.span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-neutral-400 block text-[8.5px] sm:text-[9px] mb-0.5">
                    {t('solutions.mockups.http_performance')}
                  </span>
                  <span className="text-white font-bold text-xs sm:text-sm block">{rps} req/s</span>
                </div>
              </div>

              <div className="space-y-1 pt-0.5">
                <div className="flex justify-between text-[8.5px] sm:text-[9px] text-neutral-400">
                  <span>{t('solutions.mockups.global_response')}</span>
                  <span className="text-emerald-400 font-bold">14ms {t('solutions.mockups.avg')}</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <motion.div 
                    animate={{ width: ['40%', '85%', '65%', '95%'] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-full bg-emerald-500" 
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-white/[0.05] text-[8.5px] text-neutral-500">
                <span>Frontend React SPA</span>
                <span className="text-emerald-400">{t('solutions.mockups.optimized_prod')}</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="w-[200px] h-[390px] rounded-[2rem] bg-[#121614] p-[3px] border border-neutral-700/80 shadow-[0_0_25px_rgba(16,185,129,0.18)] flex flex-col relative"
            >
              <div className="absolute -left-[3px] top-16 w-[2px] h-6 bg-neutral-600 rounded-l-xs" />
              <div className="absolute -left-[3px] top-24 w-[2px] h-7 bg-neutral-600 rounded-l-xs" />
              <div className="absolute -right-[3px] top-20 w-[2px] h-10 bg-neutral-600 rounded-r-xs" />

              <div className="w-full h-full rounded-[1.8rem] bg-black border border-white/[0.06] p-2.5 pt-2 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between text-[7.5px] text-neutral-300 px-1 pt-0.5">
                  <span className="font-semibold text-white">9:41</span>
                  
                  <div className="w-14 h-3 bg-black border border-white/[0.15] rounded-full flex items-center justify-between px-1.5 shadow-inner">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 border border-white/20" />
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-[7px] text-emerald-400 font-bold">5G</span>
                    <div className="w-3.5 h-1.5 border border-white/60 rounded-[2px] p-[1px] flex items-center">
                      <div className="w-2 h-full bg-white rounded-2xs" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-white/[0.03] border border-white/[0.05] rounded-lg px-2 py-1 mt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-xs bg-emerald-400" />
                    <span className="text-[8px] text-white font-bold tracking-wide">
                      {t('solutions.mockups.mobile_panel_title')}
                    </span>
                  </div>
                  <span className="text-[7px] text-emerald-400 bg-emerald-500/10 px-1 rounded font-mono">.NET MAUI</span>
                </div>

                <div className="space-y-1.5 my-auto">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-[7.5px] text-neutral-400 block mb-0.5">
                      {t('solutions.mockups.mobile_sessions')}
                    </span>
                    <motion.span 
                      key={mobileUsers}
                      initial={{ opacity: 0.6 }}
                      animate={{ opacity: 1 }}
                      className="text-emerald-400 font-bold text-xs block"
                    >
                      {mobileUsers} {t('solutions.mockups.active_clients')}
                    </motion.span>
                  </div>

                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-[7.5px]">
                    <span className="text-neutral-400">{t('solutions.mockups.app_performance')}</span>
                    <span className="text-white font-bold">{rps} req/s</span>
                  </div>

                  <div className="p-2 rounded-lg bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between text-[7.5px]">
                    <span className="text-neutral-400">{t('solutions.mockups.compatibility_label')}</span>
                    <span className="text-emerald-300 font-bold">iOS & Android</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[7px] text-neutral-400">
                    <span>{t('solutions.mockups.sync_cloud')}</span>
                    <span className="text-emerald-400 font-bold">14ms {t('solutions.mockups.latency')}</span>
                  </div>
                  <div className="h-1 rounded-full bg-white/[0.08] overflow-hidden">
                    <motion.div 
                      animate={{ width: ['35%', '90%', '65%', '100%'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className="h-full bg-emerald-500" 
                    />
                  </div>
                </div>

                <div className="w-12 h-1 bg-white/40 rounded-full mx-auto mt-0.5" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="text-[9px] sm:text-[10px] text-neutral-500 flex justify-between pt-2 border-t border-white/[0.06]">
        <span>{t('solutions.mockups.footer_responsive')}</span>
        <span className="text-emerald-400">{t('solutions.mockups.footer_arch')}</span>
      </div>
    </div>
  );
}