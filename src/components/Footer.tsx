import { Brain, ArrowUp, Phone, Mail } from 'lucide-react';
import { navItems, profileData, contactLinks } from '@/data';

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-teal-500/15 bg-ink-950">
      <div className="absolute inset-0 bg-grid-dark opacity-20" />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2.5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 shadow-lg shadow-teal-500/20 transition-transform group-hover:scale-110">
                <Brain className="h-5 w-5 text-ink-950" strokeWidth={2.5} />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Jabulile<span className="text-teal-400">.</span>
              </span>
            </button>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              AI &amp; Digital Skills Enthusiast passionate about technology,
              artificial intelligence, and continuous learning.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={`tel:${profileData.phone}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-teal-500/30 hover:text-teal-400"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-teal-500/30 hover:text-teal-400"
              >
                <Mail className="h-4 w-4" />
              </a>
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-teal-500/30 hover:text-teal-400"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-teal-400">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-sm text-gray-400 transition-colors hover:text-teal-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-teal-400">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-teal-300"
                >
                  <Phone className="h-4 w-4 text-teal-400" />
                  {profileData.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-2 break-all text-sm text-gray-400 transition-colors hover:text-teal-300"
                >
                  <Mail className="h-4 w-4 text-teal-400" />
                  {profileData.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Jabulile Lungile Mhlongo. All rights
            reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-400 transition-all hover:border-teal-500/30 hover:text-teal-300"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
