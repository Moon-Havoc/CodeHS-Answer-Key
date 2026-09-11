import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import CommandPalette from '@/components/ui/CommandPalette';

export const metadata: Metadata = {
  title: 'CodeHS Python Assistant | Step-by-Step Curriculum Solutions & Guides',
  description:
    'Comprehensive step-by-step tutorials, verified solutions, progressive hints, and debugging strategies for CodeHS Introduction to Python Programming.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <body className="bg-[#080c14] text-slate-100 min-h-screen antialiased selection:bg-indigo-500/30 selection:text-white flex flex-col">
        <Navbar />
        <CommandPalette />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-800/60 bg-[#060910] py-8 text-center text-xs text-slate-500">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} CodeHS Python Assistant · Built for computer science students & educators.</p>
            <div className="flex items-center gap-4 text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Curriculum Active (Units 2-10)
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
