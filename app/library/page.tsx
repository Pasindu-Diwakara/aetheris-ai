"use client";
import Navbar from '@/components/Navbar';
import PromptCard from '@/components/PromptCard';
import { Search } from 'lucide-react';

export default function LibraryPage() {
  const mockPrompts = [
    {
      title: "Cinematic Macro Tech",
      category: "Macro Physics",
      optimizedText: "Macro photography of a glowing silicon chip, extreme close-up, physical textures, natural depth of field, f/2.8, cinematic studio lighting, highly detailed, photorealistic, 8k --ar 16:9 --v 6.0"
    },
    {
      title: "Minimalist UI Concept",
      category: "UI/UX Layouts",
      optimizedText: "Clean minimalist dashboard UI design, dark mode, glassmorphism elements, monochrome typography, subtle neon accents, professional Dribbble presentation, flat design, high resolution --ar 4:3 --v 6.0"
    },
    {
      title: "Brutalist Architecture",
      category: "Architectural",
      optimizedText: "Exterior shot of a brutalist concrete building, overcast sky, harsh shadows, sharp geometry, architectural photography, hyper-realistic, photorealistic lighting, shot on 35mm lens --ar 16:9 --style raw"
    },
    {
      title: "Cyberpunk Alleyway",
      category: "Cinematic Loops",
      optimizedText: "Dark neon-lit cyberpunk alleyway in Tokyo, rain reflections on pavement, volumetric fog, moody cinematic lighting, 8k resolution, highly detailed, unreal engine 5 render style --ar 16:9 --style raw"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6">
      <Navbar />
      <main className="max-w-7xl mx-auto flex flex-col gap-8 animate-fade-in">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-semibold mb-2">Prompt Library</h1>
            <p className="text-gray-400">Browse and copy production-ready master prompts.</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search library..." 
              className="pl-10 pr-4 py-2 w-full md:w-64 bg-black/40 border border-card-border rounded-xl text-gray-200 focus:outline-none focus:border-gray-500 transition-colors"
            />
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPrompts.map((prompt, idx) => (
            <PromptCard 
              key={idx}
              title={prompt.title}
              category={prompt.category}
              optimizedText={prompt.optimizedText}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
