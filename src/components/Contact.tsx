import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MapPin } from 'lucide-react';
import { profileData, contactLinks } from '@/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Status = 'idle' | 'success' | 'error';

export function Contact() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (status !== 'idle') setStatus('idle');
  };

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-ink-800/60 px-4 py-3 text-sm text-white placeholder-gray-500 transition-all focus:border-teal-500/50 focus:bg-ink-800 focus:outline-none focus:ring-2 focus:ring-teal-500/20';

  return (
    <section id="contact" className="relative bg-ink-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-30" />
      <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-teal-500/8 blur-[120px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl px-5 sm:px-8 transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-teal-400">
            Contact
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Let's work <span className="text-gradient">together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-400">
            Have a question, opportunity, or just want to connect? Send a message
            and I'll get back to you.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-teal-500 to-gold-500" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: contact info */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-teal-500/15 bg-ink-900/60 p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-white">
                Contact Information
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Reach out through any of these channels.
              </p>

              <div className="mt-6 space-y-4">
                {/* Name */}
                <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10">
                    <Phone className="h-5 w-5 text-teal-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">Phone</p>
                    <a
                      href={`tel:${profileData.phone}`}
                      className="text-sm font-semibold text-white transition-colors hover:text-teal-300"
                    >
                      {profileData.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10">
                    <Mail className="h-5 w-5 text-teal-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">Email</p>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="truncate text-sm font-semibold text-white transition-colors hover:text-teal-300"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10">
                    <MapPin className="h-5 w-5 text-teal-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm font-semibold text-white">
                      South Africa
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-3xl border border-teal-500/15 bg-ink-900/60 p-6 sm:p-8">
              <h3 className="font-display text-lg font-bold text-white">
                Professional Profiles
              </h3>
              <div className="mt-4 space-y-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition-all hover:border-teal-500/25 hover:bg-teal-500/5"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10 transition-colors group-hover:bg-teal-500/20">
                      <link.icon className="h-4 w-4 text-teal-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500">{link.label}</p>
                      <p className="truncate text-sm font-medium text-white transition-colors group-hover:text-teal-300">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="rounded-3xl border border-teal-500/15 bg-ink-900/60 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-white">
              Send a Message
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Fill in the form below and I'll respond as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-gray-400">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-400">
                  Subject
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  placeholder="Job opportunity, collaboration, question..."
                  className={inputClass}
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Write your message here..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 rounded-xl border border-teal-500/30 bg-teal-500/10 px-4 py-3 text-sm text-teal-300">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  Please fill in your name, email, and message.
                </div>
              )}

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-teal-500/25 transition-all hover:shadow-xl hover:shadow-teal-500/40 hover:brightness-110 sm:text-base"
              >
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
