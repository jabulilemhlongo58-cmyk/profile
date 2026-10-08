import { useState, useEffect } from 'react';
import { Menu, X, Brain } from 'lucide-react';
import { navItems } from '@/data';
import { useScrollSpy, useScrollProgress } from '@/hooks/useScrollReveal';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();
  const activeId = useScrollSpy(
    navItems.map((n) => n.href.slice(1)),
    120
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass border-b border-teal-500/10 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => handleNavClick('#home')}
            className="group flex items-center gap-2.5"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 shadow-lg shadow-teal-500/30 transition-transform group-hover:scale-110">
              <Brain className="h-5 w-5 text-ink-950" strokeWidth={2.5} />
            </div>
            <span className="font-display text-lg font-bold text-white">
              Jabulile<span className="text-teal-400">.</span>
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-teal-300'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-teal-400 to-teal-300 transition-all duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('#contact')}
              className="rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-lg shadow-teal-500/20 transition-all hover:shadow-teal-500/40 hover:brightness-110"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-teal-400 via-teal-300 to-gold-400 transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-ink-950/80 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-[80vw] border-l border-teal-500/15 bg-ink-900 px-6 py-24 transition-transform duration-400 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="space-y-1">
            {navItems.map((item, i) => {
              const isActive = activeId === item.href.slice(1);
              return (
                <li
                  key={item.href}
                  className={`transition-all duration-300 ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                  }`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-teal-500/10 text-teal-300'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 px-5 py-3 text-sm font-semibold text-ink-950 shadow-lg shadow-teal-500/20"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
}
