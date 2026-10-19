import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language && i18n.language.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(nextLang);
  };

  const handleLogoClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Proyectos', path: '/proyectos' },
    { name: 'Currículum', path: '/curriculum' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const currentLang = i18n.language ? i18n.language.slice(0, 2) : 'es';

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050806]/90 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between font-mono text-xs">
        
        {/* LOGO */}
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="flex items-center gap-2 text-white font-bold tracking-tight hover:text-emerald-400 transition-colors cursor-pointer select-none"
          aria-label="Ir al inicio"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
          <span>goyenaga<span className="text-emerald-400">.dev</span></span>
        </Link>

        {/* NAVEGACIÓN EN ESCRITORIO */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors py-1 ${
                  isActive 
                    ? 'text-emerald-400 font-bold border-b border-emerald-400' 
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Botón de idioma en escritorio */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 h-8 px-2.5 rounded-md border border-white/[0.08] bg-white/[0.02] text-neutral-300 hover:text-white hover:border-emerald-500/40 transition-all cursor-pointer font-bold"
          >
            <Globe size={13} className="text-emerald-400 shrink-0" />
            <span className="uppercase">{currentLang}</span>
          </button>
        </div>

        {/* CONTROLES MÓVIL: IDIOMA CON ICONO Y HAMBURGUESA CON ALTURA EQUILIBRADA (h-8) */}
        <div className="flex md:hidden items-center gap-2">
          {/* Botón de Idioma Móvil con Icono Globe */}
          <button
            onClick={toggleLanguage}
            aria-label="Cambiar idioma"
            className="h-8 px-2.5 inline-flex items-center gap-1.5 rounded-md border border-white/[0.1] bg-white/[0.02] text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors font-mono text-[11px] font-bold tracking-tight cursor-pointer"
          >
            <Globe size={13} className="text-emerald-400 shrink-0" />
            <span className="uppercase">{currentLang}</span>
          </button>

          {/* Botón de Menú Hamburguesa */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
            className="h-8 w-8 inline-flex items-center justify-center rounded-md border border-white/[0.1] bg-white/[0.02] text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors cursor-pointer"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-white/[0.08] bg-[#070b08]/98 backdrop-blur-xl px-4 py-4 space-y-2 font-mono text-xs"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between p-2.5 rounded-md transition-colors ${
                    isActive
                      ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-bold'
                      : 'text-neutral-300 hover:bg-white/[0.03]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}