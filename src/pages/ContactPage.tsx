import { CheckCircle2, Mail } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { SITE_CONFIG } from '../config/site';
import type { BreadcrumbItem } from '../types/tool';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Tool suggestion');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Contact' },
  ];

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!name.trim()) next.name = 'Please enter your name.';
    if (!email.trim()) {
      next.email = 'Please enter your email address.';
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      next.email = 'Please enter a valid email address.';
    }
    if (!subject.trim()) next.subject = 'Please choose or enter a topic.';
    if (message.trim().length < 10) {
      next.message = 'Please include at least 10 characters in your message.';
    }
    return next;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setSubject('Tool suggestion');
    setMessage('');
    setErrors({});
    setSubmitted(false);
  };

  return (
    <>
      <SeoHead
        title="Contact UtilityFlow – Support, Bug Reports & Suggestions"
        description="Get in touch with the UtilityFlow team to report an issue, suggest a new utility tool, or ask questions about privacy and terms."
        canonicalPath="/contact/"
        structuredData={buildBreadcrumbSchema(breadcrumbs)}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Contact Us
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Send bug reports, tool suggestions, or general inquiries. We read every submission and
            prioritize fixes that improve tool accuracy and accessibility.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            {submitted ? (
              <div
                role="status"
                className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8 space-y-4"
              >
                <div className="flex items-center gap-3 text-emerald-900">
                  <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0" aria-hidden="true" />
                  <h2 className="text-xl font-bold">Message prepared</h2>
                </div>
                <p className="text-sm leading-relaxed text-emerald-900">
                  Thank you, <span className="font-semibold">{name}</span>. Your message regarding{' '}
                  <span className="font-semibold">{subject}</span> has been validated. Because{' '}
                  {SITE_CONFIG.name} runs as a static site without storing user submissions on a
                  backend server, you can also send your message directly via your email client to{' '}
                  <a
                    href={`mailto:${SITE_CONFIG.contactEmail}?subject=${encodeURIComponent(
                      `[UtilityFlow] ${subject}`
                    )}&body=${encodeURIComponent(
                      `From: ${name} (${email})\n\n${message}`
                    )}`}
                    className="font-semibold underline"
                  >
                    {SITE_CONFIG.contactEmail}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-lg border border-emerald-300 bg-white px-4 py-2 text-sm font-semibold text-emerald-900 hover:bg-emerald-100 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-xl border border-slate-200 bg-white p-6 space-y-5"
              >
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                    placeholder="Alex Rivera"
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Email address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Topic
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                  >
                    <option value="Tool suggestion">Tool suggestion</option>
                    <option value="Bug report">Bug report</option>
                    <option value="SEO or content correction">SEO or content correction</option>
                    <option value="Privacy or legal inquiry">Privacy or legal inquiry</option>
                    <option value="General question">General question</option>
                  </select>
                  {errors.subject && <p className="mt-1.5 text-xs text-red-600">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                    placeholder="Describe the tool, bug, or question in detail..."
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition-colors cursor-pointer"
                >
                  Submit Message
                </button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-5">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Mail className="w-4 h-4 text-indigo-600" aria-hidden="true" />
                <span>Direct Email</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Prefer to write directly? Email our team at:
              </p>
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="block font-mono text-xs sm:text-sm font-medium text-indigo-600 hover:underline break-all"
              >
                {SITE_CONFIG.contactEmail}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
