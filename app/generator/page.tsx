"use client";
import { useState } from 'react';
import { Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function GeneratorPage() {
  const [rawIdea, setRawIdea] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [optimizedPrompt, setOptimizedPrompt] = useState('');

  const handleOptimize = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rawIdea.trim()) return;

    setIsProcessing(true);
    setOptimizedPrompt('');

    // Simulate API call for prompt enhancement
    setTimeout(() => {
      setOptimizedPrompt(
        `Professional photography of ${rawIdea}, ultra-detailed, highly realistic, physical lighting, avoiding unnatural glows, shot on 35mm lens, f/1.8, cinematic aesthetic, highly structured composition --ar 16:9 --style raw`
      );
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <Navbar />
      
      <main className="max-w-4xl mx-auto flex flex-col gap-8 animate-fade-in">
        <header>
          <h1 className="text-3xl font-semibold mb-2">Prompt Optimizer Studio</h1>
          <p className="text-gray-400">Engineer and refine raw ideas into production-grade master prompts.</p>
        </header>

        <section className="glass rounded-2xl p-6 md:p-8">
          <form onSubmit={handleOptimize} className="flex flex-col gap-4">
            <label className="text-sm font-medium text-gray-300">Raw Concept</label>
            <div className="relative">
              <textarea 
                value={rawIdea}
                onChange={(e) => setRawIdea(e.target.value)}
                placeholder="e.g., A futuristic car in a cyberpunk city..."
                className="w-full bg-black/40 border border-card-border rounded-xl p-4 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors resize-none h-32 font-mono text-sm"
              />
            </div>
            
            <div className="flex justify-end">
              <button 
                type="submit" 
                disabled={isProcessing || !rawIdea.trim()}
                className="bg-foreground text-background font-medium py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
                {isProcessing ? 'Optimizing...' : 'Engineer Prompt'}
              </button>
            </div>
          </form>
        </section>

        {optimizedPrompt && (
          <section className="glass rounded-2xl p-6 md:p-8 border-l-2 border-l-foreground animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-lg font-medium mb-4 flex items-center gap-2">
              <ArrowRight size={20} className="text-gray-500" />
              Master Prompt
            </h2>
            <div className="bg-black/60 rounded-xl p-6 border border-card-border">
              <p className="font-mono text-gray-300 leading-relaxed text-sm">
                {optimizedPrompt}
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <button 
                onClick={() => navigator.clipboard.writeText(optimizedPrompt)}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
              >
                Copy to Clipboard
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
