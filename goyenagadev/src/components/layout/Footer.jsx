export default function Footer() {
  return (
    <footer className="mt-20 sm:mt-28 font-mono text-xs text-neutral-500 pb-12 sm:pb-16 relative z-10">
      {/* Línea divisoria Matrix con presencia sutil */}
      <div className="h-[1px] w-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0 mb-8" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span>© 2026 Ignacio Goyenaga — Heredia, Costa Rica.</span>
        </div>
        <div className="flex items-center gap-4 text-neutral-400">
          <span className="text-emerald-400 font-semibold">Clean Architecture</span>
          <span className="text-neutral-700">|</span>
          <span>Full Stack & Cloud</span>
        </div>
      </div>
    </footer>
  );
}