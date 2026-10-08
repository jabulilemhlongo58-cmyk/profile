import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import { certificates } from '@/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Education() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-gold-500/8 blur-[120px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-5 sm:px-8 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-teal-400">
            Education &amp; Certifications
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Qualifications &amp; <span className="text-gradient">Achievements</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
            Formal education and professional certifications that build a strong
            foundation in AI, digital literacy, and technology.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-teal-500 to-gold-500" />
        </div>

        {/* Certificate cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, i) => (
            <article
              key={cert.name}
              className={`group relative overflow-hidden rounded-3xl border border-white/8 bg-ink-800/60 transition-all duration-500 hover:border-teal-500/25 hover:bg-ink-800/90 hover:shadow-2xl hover:shadow-teal-500/10 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Top image with gradient overlay */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/40 to-transparent" />
                <div
                  className={`absolute -bottom-6 left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${cert.gradient} shadow-lg`}
                >
                  <cert.icon className="h-8 w-8 text-white" strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pb-6 pt-8">
                <div className="mb-3 flex items-center gap-3 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {cert.year}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {cert.institution}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white">
                  {cert.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-teal-500/15 bg-teal-500/8 px-2.5 py-1 text-xs font-medium text-teal-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View button */}
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-teal-500/20 bg-teal-500/5 px-4 py-2.5 text-sm font-semibold text-teal-300 transition-all hover:border-teal-400/40 hover:bg-teal-500/15"
                >
                  View Certificate
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
