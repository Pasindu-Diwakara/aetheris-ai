import Link from 'next/link';
import { Terminal, Library, Layers } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-card-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-accent font-semibold tracking-wide">
          <div className="w-8 h-8 rounded bg-foreground flex items-center justify-center text-background">
            <Terminal size={18} />
          </div>
          <span className="text-lg">Aetheris AI</span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-[var(--text-muted)] font-medium">
          <Link href="/generator" className="hover:text-accent transition-colors flex items-center gap-1.5">
            <Terminal size={16} /> Studio
          </Link>
          <Link href="/library" className="hover:text-accent transition-colors flex items-center gap-1.5">
            <Library size={16} /> Library
          </Link>
          <Link href="/collections" className="hover:text-accent transition-colors flex items-center gap-1.5">
            <Layers size={16} /> Collections
          </Link>
          <div className="pl-4 border-l border-card-border ml-2 flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
