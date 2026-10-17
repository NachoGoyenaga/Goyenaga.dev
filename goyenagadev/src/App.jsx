import React from 'react';

export default function App() {
  const skills = {
    backend: ["C# / .NET", "APIs RESTful", "Java", "Python", "C++"],
    database: ["Microsoft SQL Server", "Modelado relacional", "Stored Procedures", "MySQL", "Migración de datos"],
    cloudAndTools: ["Microsoft Azure", "React / Vite / NextJS", ".NET MAUI", "Cisco CCNA 2", "Git / GitHub"]
  };

  const projects = [
    {
      title: "Base de Datos Estadística Cantonal de Costa Rica",
      role: "Consejo de Promoción de la Competitividad de Costa Rica",
      period: "Sep 2025 - Dic 2025",
      tags: ["SQL Server", "Microsoft Azure", "Stored Procedures", "ETL / Migración"],
      description: "Diseño, estructuración y migración de base de datos relacional para procesar información estadística de los cantones de Costa Rica. Automatización mediante Stored Procedures para reemplazar cálculos manuales de Excel y despliegue en Azure."
    },
    {
      title: "Sistema Web de Gestión & API REST",
      role: "ACADEMA (TCU)",
      period: "Sep 2024 - Abr 2025",
      tags: [".NET (C#)", "React", "SQL Server", "REST API", "Auth Segura"],
      description: "Desarrollo del backend y API REST en .NET para la administración de matrículas, estudiantes e inventario. Implementación de base de datos relacional en SQL Server, gestión segura de contraseñas, notificaciones por correo y frontend interactivo en React."
    },
    {
      title: "yourFirstJob - App Multiplataforma",
      role: "Proyecto Académico",
      period: "Ene 2024 - Abr 2024",
      tags: [".NET MAUI", "C# API", "SQL Server", "Microsoft Azure"],
      description: "Aplicación móvil multiplataforma para búsqueda de empleo estudiantil. Diseño de interfaces, lógica de negocio con API en C#, modelado de datos en SQL Server y despliegue completo de la infraestructura en Microsoft Azure."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight text-white font-mono">
            goyenaga<span className="text-cyan-400">.dev</span>
          </a>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</a>
            <a href="#habilidades" className="hover:text-cyan-400 transition-colors">Habilidades</a>
            <a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-28">
        
        {/* Hero */}
        <section className="min-h-[65vh] flex flex-col justify-center">
          <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-3 font-mono">
            Hola, mi nombre es
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight mb-4">
            Ignacio Goyenaga.
          </h1>
          <h2 className="text-2xl sm:text-4xl font-semibold text-slate-400 mb-6">
            Ingeniero en Sistemas | Desarrollador Backend & Bases de Datos
          </h2>
          <p className="max-w-2xl text-slate-400 text-lg leading-relaxed mb-8">
            Especializado en arquitectura de software con <span className="text-slate-200 font-medium">.NET (C#)</span>, 
            modelado avanzado y optimización en <span className="text-slate-200 font-medium">SQL Server</span>, 
            y soluciones en la nube con <span className="text-slate-200 font-medium">Microsoft Azure</span>.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:nacho.goyenaga@gmail.com" 
              className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all">
              Contáctame
            </a>
            <a 
              href="#proyectos" 
              className="px-6 py-3 rounded-lg border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all">
              Ver Proyectos
            </a>
          </div>
        </section>

        {/* Habilidades */}
        <section id="habilidades">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-cyan-400 text-lg font-mono">01.</span> Habilidades Técnicas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="text-cyan-400 font-semibold mb-4 text-base">Backend & Lenguajes</h4>
              <ul className="text-slate-400 space-y-2 text-sm">
                {skills.backend.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-cyan-400">▹</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="text-cyan-400 font-semibold mb-4 text-base">Bases de Datos</h4>
              <ul className="text-slate-400 space-y-2 text-sm">
                {skills.database.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-cyan-400">▹</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
              <h4 className="text-cyan-400 font-semibold mb-4 text-base">Cloud, Frontend & Redes</h4>
              <ul className="text-slate-400 space-y-2 text-sm">
                {skills.cloudAndTools.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-cyan-400">▹</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="text-cyan-400 text-lg font-mono">02.</span> Proyectos y Experiencia
          </h3>
          <div className="space-y-6">
            {projects.map((proj, idx) => (
              <article key={idx} className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                  <h4 className="text-xl font-bold text-white">{proj.title}</h4>
                  <span className="text-xs text-slate-400 font-mono">{proj.period}</span>
                </div>
                <p className="text-cyan-400 text-sm font-medium mb-3">{proj.role}</p>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{proj.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs text-cyan-400 font-mono bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="text-center py-12 border-t border-slate-800">
          <span className="text-cyan-400 font-mono text-sm mb-2 block">03. ¿Qué sigue?</span>
          <h2 className="text-3xl font-bold text-white mb-4">Ponte en Contacto</h2>
          <p className="max-w-md mx-auto text-slate-400 mb-8 text-sm sm:text-base leading-relaxed">
            Actualmente estoy en Heredia, Costa Rica, disponible para nuevos retos profesionales, desarrollo backend y consultoría en bases de datos.
          </p>
          <a 
            href="mailto:nacho.goyenaga@gmail.com" 
            className="inline-block px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all">
            nacho.goyenaga@gmail.com
          </a>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        <p>Diseñado y desarrollado para goyenaga.dev — Heredia, Costa Rica.</p>
      </footer>
    </div>
  );
}