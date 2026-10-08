import { CheckCircle2, Sparkles, Brain, Target, BookOpen } from 'lucide-react';
import { profileData } from '@/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const highlights = [
  { icon: Brain, label: 'AI Knowledge', desc: 'Certified in AI concepts & applications' },
  { icon: BookOpen, label: 'Continuous Learner', desc: 'Always expanding digital skillset' },
  { icon: Target, label: 'Problem Solver', desc: 'Technology-driven practical solutions' },
  { icon: Sparkles, label: 'Digitally Skilled', desc: 'ICDL certified & computer literate' },
];

const values = [
  'Passionate about artificial intelligence and its real-world applications',
  'Strong foundation in digital literacy, computer skills, and productivity tools',
  'Committed to continuous learning and professional development',
  'Skilled in research, communication, and collaborative problem solving',
];

export function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-teal-500/8 blur-[100px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-5 sm:px-8 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-teal-400">
            About Me
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Get to know <span className="text-gradient">Jabulile</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-teal-500 to-gold-500" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: profile image with stats */}
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-teal-500/15 to-gold-500/10 blur-xl" />
            <div className="relative overflow-hidden rounded-3xl border border-teal-500/20 shadow-2xl">
              <img
                src={profileData.profileImage}
                alt="Jabulile Mhlongo"
                className="h-[480px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
            </div>

            {/* Stats overlay */}
            <div className="relative -mt-8 grid grid-cols-3 gap-3 px-2">
              {[
                { value: '3', label: 'Certificates' },
                { value: '15+', label: 'Skills' },
                { value: '3', label: 'Projects' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl border border-teal-500/15 px-3 py-4 text-center"
                >
                  <p className="font-display text-2xl font-bold text-teal-400">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: bio + highlights */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                {profileData.bio}
              </p>
            </div>

            {/* Values list */}
            <div className="space-y-3 rounded-2xl border border-teal-500/15 bg-ink-800/50 p-6">
              {values.map((value, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-teal-400" />
                  <span className="text-sm text-gray-300">{value}</span>
                </div>
              ))}
            </div>

            {/* Highlight cards */}
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className="group rounded-2xl border border-white/8 bg-white/5 p-4 transition-all duration-300 hover:border-teal-500/30 hover:bg-teal-500/5"
                  style={{
                    transitionDelay: `${i * 80}ms`,
                  }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 transition-colors group-hover:bg-teal-500/20">
                    <item.icon className="h-5 w-5 text-teal-400" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
