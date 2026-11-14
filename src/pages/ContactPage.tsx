import { CheckCircle2, Mail } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { Breadcrumbs, buildBreadcrumbSchema } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { SITE_CONFIG } from '../config/site';
import { useLocale } from '../locales/LocaleContext';
import { localizeStaticPath } from '../locales/config';
import { getStaticAlternatePaths, toHreflangEntries } from '../locales/routes';
import { formatString } from '../locales/ui';
import type { BreadcrumbItem } from '../types/tool';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactPage() {
  const { locale, t } = useLocale();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(t.contact.topics[0]);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: t.footer.home, href: localizeStaticPath('/', locale) },
    { label: t.nav.contact },
  ];

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!name.trim()) next.name = t.contact.errors.name;
    if (!email.trim()) {
      next.email = t.contact.errors.emailEmpty;
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      next.email = t.contact.errors.emailInvalid;
    }
    if (!subject.trim()) next.subject = t.contact.errors.subject;
    if (message.trim().length < 10) {
      next.message = t.contact.errors.message;
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
    setSubject(t.contact.topics[0]);
    setMessage('');
    setErrors({});
    setSubmitted(false);
  };

  return (
    <>
      <SeoHead
        title={t.contact.seoTitle}
        description={t.contact.seoDescription}
        canonicalPath={localizeStaticPath('/contact/', locale)}
        structuredData={buildBreadcrumbSchema(breadcrumbs)}
        alternates={toHreflangEntries(getStaticAlternatePaths('/contact/'))}
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {t.contact.title}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            {t.contact.intro}
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            {submitted ? (
              <div
                role="status"
                className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8 space-y-4 shadow-sm"
              >
                <div className="flex items-center gap-3 text-emerald-900">
                  <CheckCircle2 className="w-6 h-6 text-emerald-700 shrink-0" aria-hidden="true" />
                  <h2 className="text-xl font-bold">{t.contact.successTitle}</h2>
                </div>
                <p className="text-sm leading-relaxed text-emerald-900">
                  {formatString(t.contact.successThanks, { name, subject })}{' '}
                  {t.contact.successNote}{' '}
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
                  className="rounded-xl border border-emerald-300 bg-white px-4 py-2 text-sm font-semibold text-emerald-900 hover:bg-emerald-100 transition-colors cursor-pointer"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-slate-200 bg-white p-6 space-y-5 shadow-sm"
              >
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    {t.contact.name}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                    placeholder={t.contact.namePlaceholder}
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    {t.contact.email}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                    placeholder={t.contact.emailPlaceholder}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    {t.contact.topic}
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                  >
                    {t.contact.topics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                  {errors.subject && <p className="mt-1.5 text-xs text-red-600">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-900 mb-1.5">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
                    placeholder={t.contact.messagePlaceholder}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:from-indigo-700 hover:to-violet-700 cursor-pointer"
                >
                  {t.contact.submit}
                </button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <Mail className="w-4 h-4 text-indigo-600" aria-hidden="true" />
                <span>{t.contact.directEmail}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.contact.directEmailText}
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
