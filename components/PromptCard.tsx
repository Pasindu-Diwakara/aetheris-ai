"use client";
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="glass glass-hover p-6 rounded-xl flex flex-col gap-4 transition-colors duration-300 shadow-sm"
    >
      <div className="flex justify-between items-start">
        <div>
          <span className="text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase mb-2 block">{category}</span>
          <h3 className="text-lg font-medium text-foreground">{title}</h3>
        </div>
        <button 
          onClick={handleCopy}
          className="p-2 rounded-lg bg-[var(--bg-muted)] border border-card-border hover:bg-[var(--btn-hover)] transition-colors text-[var(--text-subtle)] hover:text-[var(--text-hover)]"
          title="Copy prompt"
        >
          {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
        </button>
      </div>
      <div className="text-sm text-[var(--text-subtle)] font-mono leading-relaxed bg-[var(--bg-darker)] border border-card-border p-4 rounded-lg overflow-x-auto">
        {optimizedText}
      </div>
    </motion.div>
  );
}
