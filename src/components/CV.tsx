import { Download, FileText, GraduationCap, Award, Briefcase, Mail } from 'lucide-react';
import { profileData, certificates } from '@/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function CV() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="cv" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute left-0 bottom-1/4 h-72 w-72 rounded-full bg-teal-500/8 blur-[120px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-5xl px-5 sm:px-8 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-teal-400">
            Resume / CV
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            My <span className="text-gradient">Curriculum Vitae</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-teal-500 to-gold-500" />
        </div>

        {/* CV card */}
        <div className="overflow-hidden rounded-3xl border border-teal-500/15 bg-ink-800/60 shadow-2xl">
          <div className="grid lg:grid-cols-[1fr_1.2fr]">
            {/* Left: CV preview */}
            <div className="relative hidden bg-gradient-to-br from-ink-800 to-ink-900 p-8 lg:flex lg:flex-col lg:items-center lg:justify-center">
              <div className="absolute inset-0 bg-grid-dark opacity-30" />
              <div className="relative text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-teal-400 to-teal-600 shadow-xl shadow-teal-500/20">
                  <FileText className="h-12 w-12 text-ink-950" strokeWidth={1.5} />
                </div>
                <p className="mt-6 font-display text-2xl font-bold text-white">
                  Jabulile Mhlongo
                </p>
                <p className="mt-1 text-sm text-teal-300">
                  AI &amp; Digital Skills Enthusiast
                </p>
                <div className="mt-6 space-y-2 text-sm text-gray-400">
                  <p className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-teal-400" />
                    {profileData.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: CV summary content */}
            <div className="p-8 sm:p-10">
              <h3 className="font-display text-xl font-bold text-white">
                Professional Summary
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Motivated and digitally skilled professional with certifications in
                Artificial Intelligence, digital literacy, and a strong academic
                foundation. Passionate about leveraging AI and technology to solve
                problems, improve productivity, and create innovative solutions.
              </p>

              {/* Education timeline */}
              <div className="mt-6 space-y-4">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-400">
                  <GraduationCap className="h-4 w-4" />
                  Education &amp; Certifications
                </h4>
                {certificates.map((cert) => (
                  <div
                    key={cert.shortName}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-3"
                  >
                    <div
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${cert.gradient}`}
                    >
                      <cert.icon className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">
                        {cert.shortName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {cert.institution} · {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key strengths */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                  <Award className="h-5 w-5 text-teal-400" />
                  <p className="mt-2 text-sm font-semibold text-white">
                    AI Certified
                  </p>
                  <p className="text-xs text-gray-500">Certified professional</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/5 p-3">
                  <Briefcase className="h-5 w-5 text-gold-400" />
                  <p className="mt-2 text-sm font-semibold text-white">
                    Digital Skills
                  </p>
                  <p className="text-xs text-gray-500">ICDL certified</p>
                </div>
              </div>

              {/* Download button */}
              <a
                href={profileData.cvUrl}
                download
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-teal-500/25 transition-all hover:shadow-xl hover:shadow-teal-500/40 hover:brightness-110 sm:text-base"
              >
                <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                Download My CV
              </a>
              <p className="mt-3 text-center text-xs text-gray-500">
                PDF format · Replace with your actual CV file
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
