import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const accentMap: Record<string, { text: string; bg: string; border: string }> = {
  teal: { text: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/30' },
  sky: { text: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/30' },
  gold: { text: 'text-gold-400', bg: 'bg-gold-500/10', border: 'border-gold-500/30' },
};

export function Projects() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="relative bg-ink-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-teal-500/8 blur-[120px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-5 sm:px-8 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-teal-400">
            Projects
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Things I've <span className="text-gradient">built</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
            AI-powered projects that showcase practical applications of
            technology to solve real problems and boost productivity.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-teal-500 to-gold-500" />
        </div>

        {/* Project cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const accent = accentMap[project.accent] ?? accentMap.teal;
            return (
              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/8 bg-ink-900/60 transition-all duration-500 hover:border-teal-500/25 hover:shadow-2xl hover:shadow-teal-500/10 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Project image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                  <div
                    className={`absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl ${accent.bg} ${accent.border} border backdrop-blur-md`}
                  >
                    <project.icon className={`h-6 w-6 ${accent.text}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-teal-300">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`rounded-lg border ${accent.border} ${accent.bg} px-2.5 py-1 text-xs font-medium ${accent.text}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View project */}
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-400 transition-colors hover:text-teal-300"
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Hover glow border */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-teal-500/20" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
