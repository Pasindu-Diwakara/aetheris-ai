import Link from 'next/link';
import { ArrowRight, Terminal } from 'lucide-react';
import Navbar from '@/components/Navbar';
import PromptCard from '@/components/PromptCard';

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-card-border text-sm text-gray-300 mb-4 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Engineered for Next-Gen AI Models
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground max-w-4xl">
          Aetheris AI <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">
            Elite Prompt Architecture
          </span>
        </h1>
        
        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
          The centralized intelligence hub to engineer, optimize, test, and manage production-grade master prompts. Achieve absolute physical realism and stylistic consistency.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <Link href="/generator" className="bg-foreground text-background font-medium px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-gray-200 transition-colors">
            Open Studio <ArrowRight size={18} />
          </Link>
          <Link href="/library" className="glass text-foreground font-medium px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-white/5 transition-colors">
            Browse Library
          </Link>
        </div>
      </main>

      {/* Featured Presets */}
      <section className="border-t border-card-border bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Featured Master Prompts</h2>
              <p className="text-gray-400">Production-ready configurations for immediate use.</p>
            </div>
            <Link href="/library" className="text-sm font-medium text-gray-400 hover:text-accent transition-colors">
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PromptCard 
              title="Cinematic Macro Tech"
              category="Macro Physics"
              optimizedText="Macro photography of a glowing silicon chip, extreme close-up, physical textures, natural depth of field, f/2.8, cinematic studio lighting, highly detailed, photorealistic, 8k --ar 16:9 --v 6.0"
            />
            <PromptCard 
              title="Minimalist UI Concept"
              category="UI/UX Layouts"
              optimizedText="Clean minimalist dashboard UI design, dark mode, glassmorphism elements, monochrome typography, subtle neon accents, professional Dribbble presentation, flat design, high resolution --ar 4:3 --v 6.0"
            />
            <PromptCard 
              title="Brutalist Architecture"
              category="Architectural"
              optimizedText="Exterior shot of a brutalist concrete building, overcast sky, harsh shadows, sharp geometry, architectural photography, hyper-realistic, photorealistic lighting, shot on 35mm lens --ar 16:9 --style raw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
