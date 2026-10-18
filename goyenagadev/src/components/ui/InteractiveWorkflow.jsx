import { useState } from 'react';
import { Layers, Database, Globe, Cloud, CheckCircle2, ArrowRight } from 'lucide-react';

export default function InteractiveWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Layers size={18} />,
      title: "1. Análisis & Arquitectura",
      detail: "Reuniones de requerimientos, diagramas de casos de uso y definición del flujo técnico óptimo."
    },
    {
      icon: <Globe size={18} />,
      title: "2. Cliente & Frontend",
      detail: "Interfaces dinámicas, responsivas y accesibles con React, Next.js y Tailwind CSS, o apps móviles en .NET MAUI."
    },
    {
      icon: <Database size={18} />,
      title: "3. Backend & Bases de Datos",
      detail: "APIs RESTful seguras en .NET (C#) y modelado en SQL Server con automatización mediante Stored Procedures."
    },
    {
      icon: <Cloud size={18} />,
      title: "4. Despliegue Cloud (Azure)",
      detail: "Puesta en producción con alta disponibilidad, seguridad de credenciales y monitoreo en Microsoft Azure."
    }
  ];

  return (
    <div className="relative rounded-2xl border border-white/[0.1] bg-[#0c0c0c]/80 backdrop-blur-xl p-6 sm:p-7 shadow-2xl overflow-hidden group hover:border-emerald-500/40 transition-all duration-500">
      
      {/* Resplandor decorativo interno */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />

      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
        <div>
          <span className="text-[11px] font-mono text-emerald-400 block tracking-wider uppercase">
            Metodología de Trabajo
          </span>
          <h3 className="text-base font-semibold text-white">Desarrollo End-to-End</h3>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20 text-[10px] font-mono text-emerald-300">
          Ciclo Completo
        </span>
      </div>

      {/* Lista de etapas interactivas */}
      <div className="space-y-3">
        {steps.map((step, idx) => {
          const isSelected = activeStep === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                isSelected
                  ? 'bg-emerald-950/25 border-emerald-500/40 shadow-inner'
                  : 'bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1]'
              }`}
            >
              <div className={`p-2 rounded-lg transition-colors ${
                isSelected 
                  ? 'bg-emerald-500 text-black' 
                  : 'bg-white/[0.05] text-neutral-400'
              }`}>
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className={`text-xs font-semibold ${isSelected ? 'text-emerald-300' : 'text-neutral-200'}`}>
                    {step.title}
                  </h4>
                  {isSelected && <CheckCircle2 size={13} className="text-emerald-400" />}
                </div>
                <p className="text-[11px] text-neutral-400 mt-1 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-500">
        <span>Garantía de calidad y escalabilidad</span>
        <span className="text-emerald-400 flex items-center gap-1">Heredia, Costa Rica</span>
      </div>

    </div>
  );
}