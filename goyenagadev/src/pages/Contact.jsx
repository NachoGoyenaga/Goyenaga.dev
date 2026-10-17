import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('contact.title')} description={t('contact.subtitle')} />
      <div className="max-w-xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">{t('contact.title')}</h1>
          <p className="text-neutral-400 text-sm leading-relaxed">{t('contact.subtitle')}</p>
        </div>

        <div className="space-y-4">
          <a 
            href="mailto:nacho.goyenaga@gmail.com" 
            className="p-5 rounded-lg bg-[#0e0e0e] border border-white/[0.08] hover:border-emerald-500/40 transition-all flex items-center gap-4 group"
          >
            <div className="p-2.5 rounded bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
              <Mail size={18} />
            </div>
            <div>
              <span className="text-[11px] font-mono text-neutral-500 block">{t('contact.email_label')}</span>
              <span className="text-sm text-neutral-200 group-hover:text-emerald-400 transition-colors">nacho.goyenaga@gmail.com</span>
            </div>
          </a>

          <div className="p-5 rounded-lg bg-[#0e0e0e] border border-white/[0.08] flex items-center gap-4">
            <div className="p-2.5 rounded bg-white/[0.04] text-neutral-400">
              <Phone size={18} />
            </div>
            <div>
              <span className="text-[11px] font-mono text-neutral-500 block">{t('contact.phone_label')}</span>
              <span className="text-sm text-neutral-200">+506 8433-0637</span>
            </div>
          </div>

          <div className="p-5 rounded-lg bg-[#0e0e0e] border border-white/[0.08] flex items-center gap-4">
            <div className="p-2.5 rounded bg-white/[0.04] text-neutral-400">
              <MapPin size={18} />
            </div>
            <div>
              <span className="text-[11px] font-mono text-neutral-500 block">{t('contact.location_label')}</span>
              <span className="text-sm text-neutral-200">Heredia, Costa Rica</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}