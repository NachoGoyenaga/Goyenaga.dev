import { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

export default function CodeWindow() {
  const [activeTab, setActiveTab] = useState('profile.cs');
  const [copied, setCopied] = useState(false);

  const snippets = {
    'profile.cs': `// Full Stack Engineer
public class IgnacioGoyenaga 
{
    public string Role => "Full Stack Engineer";
    public string[] CoreStack => new[] { ".NET", "C#", "SQL Server", "React", "Azure" };
    public string Location => "Heredia, Costa Rica";

    public async Task<Status> BuildSolutionAsync() 
    {
        var backend = await DeployRestApiAsync();
        var database = await OptimizeStoredProcsAsync();
        return Status.ProductionReady;
    }
}`,
    'schema.sql': `-- Relational Modeling & Performance
CREATE PROCEDURE sp_ProcessCantonalMetrics
    @ProvinciaId INT,
    @Year INT = 2025
AS
BEGIN
    SET NOCOUNT ON;
    SELECT c.CantonName, AVG(m.Score) AS CompetitivenessIndex
    FROM Cantones c
    INNER JOIN Metricas m ON c.Id = m.CantonId
    WHERE c.ProvinciaId = @ProvinciaId
    GROUP BY c.CantonName;
END;`,
    'system.ts': `// Cloud & Frontend Architecture
export const DeveloperConfig = {
  name: "Ignacio Goyenaga",
  frontend: ["React", "Vite", "Next.js", "Tailwind CSS"],
  mobile: [".NET MAUI"],
  networking: "Cisco CCNA 2 Certified",
  focus: "Clean Architecture & Scalable Systems",
};`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="rounded-xl border border-white/[0.1] bg-[#0c0c0c]/90 backdrop-blur-xl shadow-2xl overflow-hidden text-xs">
      {/* Barra superior de la ventana */}
      <div className="h-10 px-4 bg-white/[0.02] border-b border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          
          <div className="flex items-center gap-1.5 ml-3 font-mono text-[11px] text-neutral-400">
            <Terminal size={12} className="text-emerald-400" />
            <span>goyenaga-core</span>
          </div>
        </div>

        <button 
          onClick={handleCopy}
          className="text-neutral-500 hover:text-neutral-300 transition-colors p-1"
          title="Copiar código"
        >
          {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
        </button>
      </div>

      {/* Pestañas de archivos */}
      <div className="flex border-b border-white/[0.06] bg-black/40 text-[11px] font-mono">
        {Object.keys(snippets).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 transition-all border-r border-white/[0.06] ${
              activeTab === tab
                ? 'bg-[#0c0c0c] text-emerald-400 border-b-2 border-b-emerald-400 font-medium'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Visor de código */}
      <pre className="p-5 font-mono text-[11px] leading-relaxed text-neutral-300 overflow-x-auto bg-[#0a0a0a]/50">
        <code>{snippets[activeTab]}</code>
      </pre>

      {/* Pie de terminal */}
      <div className="h-7 px-4 bg-emerald-950/20 border-t border-emerald-500/10 flex items-center justify-between font-mono text-[10px] text-emerald-400/80">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> UTF-8 • {activeTab.endsWith('.cs') ? 'C# / .NET' : activeTab.endsWith('.sql') ? 'T-SQL' : 'TypeScript'}
        </span>
        <span className="text-neutral-400">Azure Connected</span>
      </div>
    </div>
  );
}