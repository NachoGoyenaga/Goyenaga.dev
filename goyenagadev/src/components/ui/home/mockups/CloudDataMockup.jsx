import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function CloudDataMockup() {
  const { t } = useTranslation('home');
  const [records, setRecords] = useState(84234);

  useEffect(() => {
    const timer = setInterval(() => {
      setRecords((prev) => prev + Math.floor(Math.random() * 8) + 1);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full min-h-[420px] sm:min-h-[460px] flex flex-col justify-between font-mono text-xs space-y-4">
      <div className="flex items-center justify-between text-[11px] text-neutral-400 border-b border-white/[0.08] pb-3">
        <span>{t('solutions.mockups.cloud_title')}</span>
        <span className="text-emerald-400 font-bold">AZURE SQL</span>
      </div>

      <div className="p-4 rounded-lg bg-black/80 border border-white/[0.08] space-y-3.5 my-auto">
        <div className="flex justify-between items-center text-[11px]">
          <span className="text-neutral-400">{t('solutions.mockups.indexed_records')}</span>
          <motion.span 
            key={records}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            className="text-emerald-400 font-bold text-sm"
          >
            {records.toLocaleString()} {t('solutions.mockups.rows_unit')}
          </motion.span>
        </div>

        <div className="p-3 rounded bg-white/[0.02] border border-white/[0.05] text-[10px] space-y-2">
          <div className="flex justify-between text-neutral-300">
            <span>• {t('solutions.mockups.stored_procs')}</span>
            <span className="text-emerald-400 font-bold">{t('solutions.mockups.compiled')}</span>
          </div>
          <div className="flex justify-between text-neutral-300">
            <span>• {t('solutions.mockups.transactional_integrity')}</span>
            <span className="text-emerald-400 font-bold">ACID Compliant</span>
          </div>
          <div className="flex justify-between text-neutral-300">
            <span>• {t('solutions.mockups.backups')}</span>
            <span className="text-white">Azure Automated 24/7</span>
          </div>
        </div>
      </div>

      <div className="text-[10px] text-neutral-500 flex justify-between pt-2 border-t border-white/[0.06]">
        <span>Microsoft Azure Cloud</span>
        <span className="text-emerald-400">{t('solutions.mockups.azure_high_availability')}</span>
      </div>
    </div>
  );
}