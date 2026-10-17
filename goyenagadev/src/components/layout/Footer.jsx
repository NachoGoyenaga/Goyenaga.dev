import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/[0.06] py-8 text-center text-xs text-neutral-500 font-mono">
      <p>© {new Date().getFullYear()} {t('footer.text')}</p>
    </footer>
  );
}