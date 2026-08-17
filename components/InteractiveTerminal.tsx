'use client';

import React, { useState } from 'react';
import { TerminalIcon, CodeIcon, CopyIcon, CheckIcon, SparklesIcon } from '@/components/icons';
import { CODE_SNIPPETS, PERSONAL_INFO } from '@/data/portfolioData';

export const InteractiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'code'>('terminal');
  const [copied, setCopied] = useState(false);
  const [activeSnippetIndex, setActiveSnippetIndex] = useState(0);

  // Terminal state
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: 'Fajar --version',
      output: <span className="text-emerald-400">fajar-nasrulloh-cli v2.6.0 [Next.js 16 Architecture Mode]</span>
    },
    {
      cmd: 'whoami',
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="font-semibold text-indigo-300">{PERSONAL_INFO.name}</p>
          <p className="text-xs text-slate-400">{PERSONAL_INFO.role}</p>
          <p className="text-xs text-slate-400">{PERSONAL_INFO.tagline}</p>
        </div>
      )
    },
    {
      cmd: 'help',
      output: (
        <span className="text-slate-400 text-xs">
          Available commands: <code className="text-cyan-400">skills</code>, <code className="text-cyan-400">projects</code>, <code className="text-cyan-400">contact</code>, <code className="text-cyan-400">clear</code>
        </span>
      )
    }
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = terminalInput.trim().toLowerCase();
    if (!cleanCmd) return;

    let responseOutput: React.ReactNode = '';

    switch (cleanCmd) {
      case 'help':
        responseOutput = (
          <div className="text-xs text-slate-300 space-y-1">
            <p>Commands list:</p>
            <p><span className="text-cyan-400 font-mono">skills</span> — View core tech stack mastery</p>
            <p><span className="text-cyan-400 font-mono">projects</span> — List top featured projects</p>
            <p><span className="text-cyan-400 font-mono">contact</span> — Get direct contact email & links</p>
            <p><span className="text-cyan-400 font-mono">whoami</span> — Print developer bio summary</p>
            <p><span className="text-cyan-400 font-mono">clear</span> — Reset terminal output</p>
          </div>
        );
        break;

      case 'skills':
        responseOutput = (
          <div className="text-xs space-y-1 text-slate-300 font-mono">
            <p className="text-indigo-400">⚡ Frontend: Next.js 16 (98%), React 19 (96%), Tailwind v4 (95%)</p>
            <p className="text-cyan-400">⚡ Backend: Node.js (94%), Python/FastAPI (90%), PostgreSQL (92%)</p>
            <p className="text-emerald-400">⚡ AI & Cloud: Vector RAG (92%), Docker (91%), AWS (93%)</p>
          </div>
        );
        break;

      case 'projects':
        responseOutput = (
          <div className="text-xs space-y-1 font-mono">
            <p className="text-cyan-300">1. NexusAI — Enterprise RAG & LLM Engine (&lt;180ms latency)</p>
            <p className="text-indigo-300">2. PulseCloud — Distributed Server Telemetry (120k ops/sec)</p>
            <p className="text-emerald-300">3. HyperShop — Edge-Accelerated E-Commerce (100/100 Lighthouse)</p>
          </div>
        );
        break;

      case 'contact':
        responseOutput = (
          <div className="text-xs font-mono text-emerald-400 space-y-0.5">
            <p>✉ Email: {PERSONAL_INFO.email}</p>
            <p>📍 Location: {PERSONAL_INFO.location}</p>
            <p>🌐 GitHub: {PERSONAL_INFO.github}</p>
          </div>
        );
        break;

      case 'whoami':
        responseOutput = (
          <p className="text-xs text-slate-300">
            {PERSONAL_INFO.bio}
          </p>
        );
        break;

      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;

      default:
        responseOutput = (
          <span className="text-rose-400 text-xs">
            Command not recognized: &apos;{cleanCmd}&apos;. Type <code className="text-cyan-300">help</code> for list.
          </span>
        );
    }

    setTerminalHistory((prev) => [...prev, { cmd: terminalInput, output: responseOutput }]);
    setTerminalInput('');
  };

  const handleCopyCode = () => {
    const currentCode = CODE_SNIPPETS[activeSnippetIndex].code;
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full glass-panel rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-indigo-950/20">
      {/* Terminal Window Header Bar */}
      <div className="px-4 py-3 bg-[#0c0e17] border-b border-slate-800/80 flex items-center justify-between">
        {/* macOS Style Controls */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          <span className="text-xs font-mono text-slate-500 ml-2">bash ~ fajar@dev-workstation</span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
              activeTab === 'terminal'
                ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <TerminalIcon size={14} />
            <span>CLI Terminal</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
              activeTab === 'code'
                ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <CodeIcon size={14} />
            <span>RSC Snippet</span>
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      {activeTab === 'terminal' ? (
        <div className="p-5 font-mono text-sm bg-[#080a12] min-h-[300px] max-h-[360px] overflow-y-auto space-y-4">
          {terminalHistory.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-emerald-400">fajar@nasrulloh:~$</span>
                <span className="text-slate-100 font-semibold">{item.cmd}</span>
              </div>
              <div className="pl-4 border-l border-slate-800/80">{item.output}</div>
            </div>
          ))}

          {/* Interactive Command Input Form */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
            <span className="text-emerald-400 text-xs font-semibold">fajar@nasrulloh:~$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="Type 'help', 'skills', or 'projects'..."
              className="flex-1 bg-transparent text-xs font-mono text-slate-100 focus:outline-none placeholder:text-slate-600"
            />
            <button type="submit" className="text-xs px-2 py-0.5 rounded bg-indigo-600/30 text-indigo-300 hover:bg-indigo-600/50">
              Run
            </button>
          </form>
        </div>
      ) : (
        /* Code Snippet Viewer Body */
        <div className="bg-[#080a12] p-5 font-mono text-xs text-slate-200 min-h-[300px] max-h-[360px] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              {CODE_SNIPPETS.map((snip, idx) => (
                <button
                  key={snip.id}
                  onClick={() => setActiveSnippetIndex(idx)}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all ${
                    activeSnippetIndex === idx
                      ? 'bg-slate-800 text-cyan-300 border border-slate-700'
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {snip.title}
                </button>
              ))}
            </div>

            <button
              onClick={handleCopyCode}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] transition-all"
            >
              {copied ? <CheckIcon size={12} className="text-emerald-400" /> : <CopyIcon size={12} />}
              <span>{copied ? 'Copied!' : 'Copy Code'}</span>
            </button>
          </div>

          <p className="text-[11px] text-slate-400 mb-3 italic">
            // {CODE_SNIPPETS[activeSnippetIndex].description}
          </p>

          <pre className="text-[12px] leading-relaxed text-indigo-200 overflow-x-auto p-3 bg-slate-950/60 rounded-xl border border-slate-900">
            <code>{CODE_SNIPPETS[activeSnippetIndex].code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};
