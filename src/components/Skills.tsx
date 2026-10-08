import { useScrollReveal } from '@/hooks/useScrollReveal';
import { skillCategories } from '@/data';
import { Cpu, Zap } from 'lucide-react';

const accentMap: Record<string, { bar: string; bg: string; text: string; glow: string }> = {
  teal: {
    bar: 'from-teal-400 to-teal-600',
    bg: 'bg-teal-500/10',
    text: 'text-teal-400',
    glow: 'group-hover:shadow-teal-500/20',
  },
  sky: {
    bar: 'from-sky-400 to-blue-600',
    bg: 'bg-sky-500/10',
    text: 'text-sky-400',
    glow: 'group-hover:shadow-sky-500/20',
  },
  gold: {
    bar: 'from-gold-400 to-gold-600',
    bg: 'bg-gold-500/10',
    text: 'text-gold-400',
    glow: 'group-hover:shadow-gold-500/20',
  },
};

export function Skills() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="relative bg-ink-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-sky-500/8 blur-[120px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-5 sm:px-8 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-teal-400">
            Skills &amp; Expertise
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            What I bring to the <span className="text-gradient">table</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
            A blend of AI knowledge, digital literacy, and professional skills
            built through certifications, hands-on projects, and continuous
            learning.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-teal-500 to-gold-500" />
        </div>

        {/* Skill category cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category, ci) => {
            const accent = accentMap[category.accent] ?? accentMap.teal;
            return (
              <div
                key={category.title}
                className={`group rounded-3xl border border-white/8 bg-ink-900/60 p-6 shadow-xl transition-all duration-500 hover:border-teal-500/25 hover:bg-ink-800/60 ${accent.glow} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${ci * 150}ms` }}
              >
                {/* Category header */}
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${accent.bg} transition-transform group-hover:scale-110`}
                  >
                    <category.icon className={`h-7 w-7 ${accent.text}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>

                {/* Skill items with progress */}
                <div className="space-y-4">
                  {category.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <skill.icon className={`h-4 w-4 ${accent.text}`} />
                          <span className="text-sm font-medium text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-xs font-bold ${accent.text}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-ink-700">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${accent.bar} transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${ci * 150 + si * 100 + 300}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech badges row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {[
            'Artificial Intelligence',
            'AI Tools',
            'Microsoft Office',
            'Digital Literacy',
            'Internet Research',
            'Communication',
            'Problem Solving',
            'Time Management',
            'Organisation',
            'Adaptability',
            'Teamwork',
            'Creativity',
            'Research Skills',
            'Basic Technology',
          ].map((badge, i) => (
            <span
              key={badge}
              className={`inline-flex items-center gap-1.5 rounded-full border border-teal-500/15 bg-teal-500/5 px-3.5 py-1.5 text-xs font-medium text-gray-300 transition-all hover:border-teal-400/30 hover:text-teal-300 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 50 + 600}ms` }}
            >
              {i % 2 === 0 ? (
                <Zap className="h-3 w-3 text-teal-400" />
              ) : (
                <Cpu className="h-3 w-3 text-teal-400" />
              )}
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
