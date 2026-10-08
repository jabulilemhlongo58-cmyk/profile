import { ArrowRight, Award, Phone, Sparkles, Brain, Cpu } from 'lucide-react';
import { profileData } from '@/data';

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-950 pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-dark" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900/95 to-ink-950" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-teal-500/15 blur-[120px]" />
      <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-gold-500/10 blur-[120px]" />

      {/* Floating decorative orbs */}
      <div className="absolute left-[10%] top-[20%] hidden md:block">
        <div className="animate-float rounded-2xl border border-teal-500/20 bg-teal-500/5 p-4 backdrop-blur-sm">
          <Brain className="h-8 w-8 text-teal-400" />
        </div>
      </div>
      <div className="absolute right-[12%] top-[30%] hidden md:block">
        <div
          className="animate-float rounded-2xl border border-gold-500/20 bg-gold-500/5 p-4 backdrop-blur-sm"
          style={{ animationDelay: '1.5s' }}
        >
          <Cpu className="h-8 w-8 text-gold-400" />
        </div>
      </div>
      <div className="absolute right-[20%] bottom-[15%] hidden md:block">
        <div
          className="animate-float rounded-2xl border border-teal-400/20 bg-teal-400/5 p-4 backdrop-blur-sm"
          style={{ animationDelay: '3s' }}
        >
          <Sparkles className="h-7 w-7 text-teal-300" />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr]">
        {/* Left: text content */}
        <div className="text-center lg:text-left">
          <div className="animate-fade-in-down inline-flex items-center gap-2 rounded-full border border-teal-500/25 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
            </span>
            Available for Opportunities
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Jabulile
            <span className="block text-gradient">Mhlongo</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-200 mt-4 font-display text-xl font-semibold text-gray-300 sm:text-2xl">
            AI &amp; Digital Skills Enthusiast
          </p>

          <p className="animate-fade-in-up animate-delay-300 mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-400 lg:mx-0 sm:text-lg">
            {profileData.tagline} I explore the intersection of artificial
            intelligence, digital tools, and research — building practical
            solutions that make technology work for people.
          </p>

          <div className="animate-fade-in-up animate-delay-400 mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <button
              onClick={() => scrollTo('#projects')}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-teal-500/25 transition-all hover:shadow-xl hover:shadow-teal-500/40 hover:brightness-110 sm:text-base"
            >
              View My Portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('#education')}
              className="inline-flex items-center gap-2 rounded-xl border border-teal-500/30 bg-teal-500/5 px-6 py-3.5 text-sm font-semibold text-teal-200 transition-all hover:border-teal-400/50 hover:bg-teal-500/15 sm:text-base"
            >
              <Award className="h-4 w-4" />
              View Certificates
            </button>
            <a
              href={`tel:${profileData.phone}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10 sm:text-base"
            >
              <Phone className="h-4 w-4" />
              {profileData.phone}
            </a>
          </div>

          <div className="animate-fade-in animate-delay-700 mt-10 flex items-center justify-center gap-6 text-sm text-gray-500 lg:justify-start">
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-teal-400" />
              <span>3 Certifications</span>
            </div>
            <div className="h-4 w-px bg-gray-700" />
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-teal-400" />
              <span>AI Focused</span>
            </div>
            <div className="h-4 w-px bg-gray-700" />
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-teal-400" />
              <span>3 Projects</span>
            </div>
          </div>
        </div>

        {/* Right: profile card */}
        <div className="animate-scale-in animate-delay-300 relative hidden justify-self-center lg:flex">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-teal-500/20 via-transparent to-gold-500/15 blur-2xl" />
          <div className="relative w-72 xl:w-80">
            <div className="overflow-hidden rounded-[1.75rem] border border-teal-500/20 bg-ink-800 shadow-2xl shadow-teal-500/10">
              <img
                src={profileData.profileImage}
                alt="Jabulile Mhlongo"
                className="h-[420px] w-full object-cover"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-900 via-ink-900/80 to-transparent p-5 pt-16">
                <p className="font-display text-lg font-bold text-white">
                  {profileData.fullName}
                </p>
                <p className="text-sm text-teal-300">{profileData.title}</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-4 -top-4 animate-float rounded-2xl border border-teal-500/30 bg-ink-900/90 px-4 py-3 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-teal-600">
                  <Brain className="h-5 w-5 text-ink-950" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400">Certified</p>
                  <p className="text-sm font-bold text-white">AI Professional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500 transition-colors hover:text-teal-400"
        aria-label="Scroll to About"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-widest">
            Scroll
          </span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-gray-600 p-1">
            <div className="h-2 w-1 animate-bounce-slow rounded-full bg-teal-400" />
          </div>
        </div>
      </button>
    </section>
  );
}
