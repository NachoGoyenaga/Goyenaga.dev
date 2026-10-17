import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(nextLang);
  };

  const navLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.projects'), path: '/proyectos' },
    { label: t('nav.resume'), path: '/curriculum' },
    { label: t('nav.contact'), path: '/contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0a0a0a]/80 backdrop-blur-md z-50 border-b border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/" className="text-sm font-semibold tracking-tight text-white font-mono hover:text-emerald-400 transition-colors">
          goyenaga<span className="text-emerald-400">.dev</span>
        </NavLink>

        {/* Links + Selector de idioma */}
        <div className="flex items-center space-x-6">
          <nav className="hidden sm:flex space-x-6 text-xs tracking-wide">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-400 font-medium"
                    : "text-neutral-400 hover:text-neutral-100 transition-colors"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Switch de Idioma */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono text-neutral-300 bg-white/[0.04] border border-white/[0.08] hover:border-emerald-500/50 hover:text-emerald-300 transition-all cursor-pointer"
            title="Cambiar idioma / Switch language"
          >
            <Globe size={13} className="text-neutral-400" />
            <span className="uppercase font-semibold tracking-wider">
              {i18n.language.substring(0, 2)}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}