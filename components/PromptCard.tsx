"use client";
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface PromptCardProps {
  title: string;
  category: string;
  optimizedText: string;
}

export default function PromptCard({ title, category, optimizedText }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(optimizedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass glass-hover p-6 rounded-xl flex flex-col gap-4 transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-2 block">{category}</span>
          <h3 className="text-lg font-medium text-foreground">{title}</h3>
        </div>
        <button 
          onClick={handleCopy}
          className="p-2 rounded-lg bg-black/40 border border-card-border hover:bg-gray-800 transition-colors text-gray-300 hover:text-white"
          title="Copy prompt"
        >
          {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
        </button>
      </div>
      <div className="text-sm text-gray-500 font-mono leading-relaxed bg-black/60 border border-card-border p-4 rounded-lg overflow-x-auto">
        {optimizedText}
      </div>
    </div>
  );
}
