import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CleanBackgroundGrid } from '../components/ui/CleanBackgroundGrid';
import SEO from '../components/SEO';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquareCode,
  Sparkles
} from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation('contact');
  const [copied, setCopied] = useState(false);
  const [catDialogIndex, setCatDialogIndex] = useState(-1);
  const [catBouncing, setCatBouncing] = useState(false);

  const email = "contacto@goyenaga.dev";
  const whatsappUrl = "https://wa.me/50684330637?text=Hola%20Ignacio,%20vi%20tu%20portafolio%20goyenaga.dev%20y%20me%20gustar%C3%ADa%20conversar.";
  const githubUrl = "https://github.com/NachoGoyenaga";
  const linkedinUrl = "https://www.linkedin.com/in/ignacio-goyenaga-a9616a22b/";

  const catDialogs = t('cat.dialogs', { returnObjects: true }) || [];

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleCatClick = () => {
    setCatBouncing(true);
    setCatDialogIndex((prev) => (prev + 1) % catDialogs.length);
    setTimeout(() => setCatBouncing(false), 400);
  };

  const currentDialog = catDialogIndex === -1 
    ? t('cat.dialog_default') 
    : catDialogs[catDialogIndex];

  return (
    <>
      <SEO 
        title={`${t('title')} — goyenaga.dev`} 
        description={t('subtitle')} 
      />

      <CleanBackgroundGrid />

      <div className="py-8 sm:py-12 relative z-10 max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* ENCABEZADO */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono">
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>{t('badge')}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            {t('title')}
          </h1>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-sans">
            {t('subtitle')}
          </p>
        </div>

        {/* CONTENIDO: RECTÁNGULOS HOMOGÉNEOS + GATITO ECHADO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* COLUMNA IZQUIERDA: 5 RECTÁNGULOS TOTALMENTE SIMÉTRICOS */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            
            {/* 1. CORREO PRINCIPAL */}
            <div className="h-20 px-5 rounded-xl border border-neutral-800 bg-[#090b0a]/90 backdrop-blur-sm shadow-md hover:border-emerald-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block leading-tight">
                    {t('email_label')}
                  </span>
                  <a 
                    href={`mailto:${email}`} 
                    className="text-sm font-bold text-white font-mono hover:text-emerald-400 transition-colors truncate block"
                  >
                    {email}
                  </a>
                </div>
              </div>

              {/* Botón de solo icono con las mismas dimensiones que ExternalLink */}
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg text-neutral-500 hover:text-emerald-400 hover:bg-neutral-900 transition-colors shrink-0"
                title={t('copy_email')}
                aria-label={t('copy_email')}
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* 2. WHATSAPP / TELÉFONO */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="h-20 px-5 rounded-xl border border-neutral-800 bg-[#090b0a]/90 backdrop-blur-sm shadow-md hover:border-emerald-500/40 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block leading-tight">
                    {t('phone_label')}
                  </span>
                  <span className="text-sm font-bold text-white font-mono group-hover:text-emerald-400 transition-colors truncate block">
                    +506 8433-0637
                  </span>
                </div>
              </div>
              <div className="p-2 shrink-0">
                <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
              </div>
            </a>

            {/* 3. GITHUB */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="h-20 px-5 rounded-xl border border-neutral-800 bg-[#090b0a]/90 backdrop-blur-sm shadow-md hover:border-emerald-500/40 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 transition-all">
                  <span 
                    className="w-4 h-4 bg-emerald-400 group-hover:bg-black transition-colors inline-block [mask-image:url(/ui/github.svg)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]" 
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block leading-tight">
                    {t('github_label')}
                  </span>
                  <span className="text-sm font-bold text-white font-mono group-hover:text-emerald-400 transition-colors truncate block">
                    github.com/NachoGoyenaga
                  </span>
                </div>
              </div>
              <div className="p-2 shrink-0">
                <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
              </div>
            </a>

            {/* 4. LINKEDIN */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="h-20 px-5 rounded-xl border border-neutral-800 bg-[#090b0a]/90 backdrop-blur-sm shadow-md hover:border-emerald-500/40 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 transition-all">
                  <span 
                    className="w-4 h-4 bg-emerald-400 group-hover:bg-black transition-colors inline-block [mask-image:url(/ui/linked-in.svg)] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]" 
                  />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block leading-tight">
                    {t('linkedin_label')}
                  </span>
                  <span className="text-sm font-bold text-white font-mono group-hover:text-emerald-400 transition-colors truncate block">
                    in/ignacio-goyenaga
                  </span>
                </div>
              </div>
              <div className="p-2 shrink-0">
                <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 transition-colors" />
              </div>
            </a>

            {/* 5. UBICACIÓN (Ahora con idéntico comportamiento en hover) */}
            <div className="h-20 px-5 rounded-xl border border-neutral-800 bg-[#090b0a]/90 backdrop-blur-sm shadow-md hover:border-emerald-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block leading-tight">
                    {t('location_label')}
                  </span>
                  <span className="text-sm font-bold text-white font-sans group-hover:text-emerald-400 transition-colors truncate block">
                    {t('location_value')}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: GATITO ACOSTADO INTERACTIVO */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center pt-2 sm:pt-6">
            
            {/* BURBUJA DE DIÁLOGO */}
            <div className="relative mb-3 max-w-xs w-full transition-all">
              <div className="p-3.5 rounded-2xl bg-neutral-900/95 border border-emerald-500/30 text-emerald-300 font-mono text-xs text-center shadow-[0_0_20px_rgba(16,185,129,0.12)] leading-relaxed">
                {currentDialog}
              </div>
              <div className="w-2.5 h-2.5 bg-neutral-900 border-r border-b border-emerald-500/30 transform rotate-45 mx-auto -mt-1" />
            </div>

            {/* CONTENEDOR DEL GATO INTERACTIVO */}
            <div 
              onClick={handleCatClick}
              className={`relative cursor-pointer select-none transition-transform duration-300 ${
                catBouncing ? 'scale-105 -translate-y-1' : 'hover:scale-[1.02]'
              }`}
              title={t('cat.hint')}
            >
              <svg 
                viewBox="0 0 300 170" 
                className="w-72 sm:w-80 h-auto overflow-visible"
              >
                {/* Sombra sutil debajo del cuerpo */}
                <ellipse cx="150" cy="152" rx="105" ry="12" fill="#000000" opacity="0.6" />

                {/* Cola con balanceo suave */}
                <g className="animate-tail-wag">
                  <path 
                    d="M 215 138 C 245 135, 260 120, 255 105 C 252 98, 244 102, 245 108 C 248 116, 238 126, 212 130" 
                    fill="#17171a" 
                    stroke="#262629" 
                    strokeWidth="1"
                  />
                </g>

                {/* CUERPO CON ANIMACIÓN DE RESPIRACIÓN */}
                <g className="animate-cat-breathe">
                  {/* Lomo y cuerpo recostado en posición de descanso */}
                  <path 
                    d="M 95 142 C 85 118, 115 102, 160 102 C 205 102, 228 115, 222 142 C 218 152, 195 152, 150 152 C 110 152, 100 150, 95 142 Z" 
                    fill="#1c1c20" 
                    stroke="#2d2d33" 
                    strokeWidth="1.5" 
                  />

                  {/* Relieve de pata trasera */}
                  <path 
                    d="M 185 145 C 190 128, 215 125, 220 142" 
                    fill="none" 
                    stroke="#2d2d33" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                  />

                  {/* Patitas delanteras recogidas */}
                  <ellipse cx="108" cy="146" rx="10" ry="6" fill="#17171a" stroke="#2d2d33" strokeWidth="1" />
                  <ellipse cx="126" cy="146" rx="10" ry="6" fill="#141417" stroke="#2d2d33" strokeWidth="1" />

                  {/* Cabeza */}
                  <ellipse cx="112" cy="125" rx="26" ry="21" fill="#202024" stroke="#2d2d33" strokeWidth="1.5" />

                  {/* Oreja izquierda */}
                  <path d="M 94 112 L 86 86 L 108 105 Z" fill="#1c1c20" stroke="#2d2d33" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M 93 109 L 88 92 L 104 105 Z" fill="#2d2d33" opacity="0.6" />

                  {/* Oreja derecha */}
                  <path d="M 120 106 L 134 86 L 134 112 Z" fill="#1c1c20" stroke="#2d2d33" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M 122 106 L 131 92 L 131 109 Z" fill="#2d2d33" opacity="0.6" />

                  {/* OJOS ESMERALDA */}
                  {catBouncing ? (
                    <>
                      <ellipse cx="104" cy="123" rx="5" ry="4" fill="#10b981" />
                      <ellipse cx="120" cy="123" rx="5" ry="4" fill="#10b981" />
                      <circle cx="104" cy="123" r="2.5" fill="#042f24" />
                      <circle cx="120" cy="123" r="2.5" fill="#042f24" />
                      <circle cx="105" cy="121.5" r="1" fill="#ffffff" />
                      <circle cx="121" cy="121.5" r="1" fill="#ffffff" />
                    </>
                  ) : (
                    <>
                      <path d="M 99 123 Q 104 120 109 124" stroke="#10b981" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                      <path d="M 115 124 Q 120 120 125 123" stroke="#10b981" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    </>
                  )}

                  {/* Nariz */}
                  <polygon points="111,129 113,129 112,131" fill="#3f3f46" />

                  {/* Bigotes */}
                  <line x1="86" y1="128" x2="98" y2="129" stroke="#52525b" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                  <line x1="85" y1="133" x2="97" y2="132" stroke="#52525b" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                  <line x1="126" y1="129" x2="138" y2="128" stroke="#52525b" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                  <line x1="127" y1="132" x2="139" y2="133" stroke="#52525b" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
                </g>
              </svg>
            </div>

            {/* Pista de interacción */}
            <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500 pt-3 select-none">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t('cat.hint')}</span>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}