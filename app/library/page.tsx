"use client";
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import PromptCard from '@/components/PromptCard';
import { Search } from 'lucide-react';
import { getPromptsAction } from '@/app/actions/prompt';

interface Prompt {
  id: string;
  title: string;
  category: string | null;
  optimizedText: string;
}

export default function LibraryPage() {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPrompts() {
      setIsLoading(true);
      try {
        const data = await getPromptsAction(search);
        setPrompts(data);
      } catch (error) {
        console.error('Failed to load prompts:', error);
      } finally {
        setIsLoading(false);
      }
    }
    
    // Simple debounce
    const timeout = setTimeout(loadPrompts, 300);
    return () => clearTimeout(timeout);
  }, [search]);

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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search library..." 
              className="pl-10 pr-4 py-2 w-full md:w-64 bg-black/40 border border-card-border rounded-xl text-gray-200 focus:outline-none focus:border-gray-500 transition-colors"
            />
          </div>
        </header>

        {isLoading ? (
          <div className="text-gray-500">Loading...</div>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prompts.length === 0 ? (
              <div className="col-span-full text-gray-500">No prompts found.</div>
            ) : (
              prompts.map((prompt) => (
                <PromptCard 
                  key={prompt.id}
                  title={prompt.title}
                  category={prompt.category || 'Uncategorized'}
                  optimizedText={prompt.optimizedText}
                />
              ))
            )}
          </section>
        )}
      </main>
    </div>
  );
}
