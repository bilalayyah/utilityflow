import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { LocaleProvider } from './locales/LocaleContext';
import { AboutPage } from './pages/AboutPage';
import { AdminCommentsPage } from './pages/AdminCommentsPage';
import { AiTextSummarizerPage } from './pages/AiTextSummarizerPage';
import { AiToolFinderPage } from './pages/AiToolFinderPage';
import { AiWritingAssistantPage } from './pages/AiWritingAssistantPage';
import { CategoryPage } from './pages/CategoryPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { ToolPage } from './pages/ToolPage';
import { ToolsDirectoryPage } from './pages/ToolsDirectoryPage';

export default function App() {
  return (
    <BrowserRouter>
      <LocaleProvider>
        <SiteLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Comments admin — not linked in the nav, not in the sitemap */}
            <Route path="/admin/comments" element={<AdminCommentsPage />} />
            <Route path="/admin/comments/" element={<AdminCommentsPage />} />
            <Route path="/tools" element={<ToolsDirectoryPage />} />
            <Route path="/tools/" element={<ToolsDirectoryPage />} />
            <Route path="/category/:categorySlug" element={<CategoryPage />} />
            <Route path="/category/:categorySlug/" element={<CategoryPage />} />
            <Route path="/ai-writing-assistant" element={<AiWritingAssistantPage />} />
            <Route path="/ai-writing-assistant/" element={<AiWritingAssistantPage />} />
            <Route path="/ai-text-summarizer" element={<AiTextSummarizerPage />} />
            <Route path="/ai-text-summarizer/" element={<AiTextSummarizerPage />} />
            <Route path="/ai-tool-finder" element={<AiToolFinderPage />} />
            <Route path="/ai-tool-finder/" element={<AiToolFinderPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact/" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy-policy/" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/terms-of-service/" element={<TermsOfServicePage />} />
            <Route path="/:toolSlug" element={<ToolPage />} />
            <Route path="/:toolSlug/" element={<ToolPage />} />

            {/* Spanish (es) routes — same components, locale from URL */}
            <Route path="/es" element={<HomePage />} />
            <Route path="/es/" element={<HomePage />} />
            <Route path="/es/todas-las-herramientas" element={<ToolsDirectoryPage />} />
            <Route path="/es/todas-las-herramientas/" element={<ToolsDirectoryPage />} />
            <Route path="/es/categoria/:categorySlug" element={<CategoryPage />} />
            <Route path="/es/categoria/:categorySlug/" element={<CategoryPage />} />
            <Route path="/es/asistente-de-escritura-ia" element={<AiWritingAssistantPage />} />
            <Route path="/es/asistente-de-escritura-ia/" element={<AiWritingAssistantPage />} />
            <Route path="/es/resumidor-de-texto-ia" element={<AiTextSummarizerPage />} />
            <Route path="/es/resumidor-de-texto-ia/" element={<AiTextSummarizerPage />} />
            <Route path="/es/buscador-de-herramientas-ia" element={<AiToolFinderPage />} />
            <Route path="/es/buscador-de-herramientas-ia/" element={<AiToolFinderPage />} />
            <Route path="/es/acerca-de" element={<AboutPage />} />
            <Route path="/es/acerca-de/" element={<AboutPage />} />
            <Route path="/es/contacto" element={<ContactPage />} />
            <Route path="/es/contacto/" element={<ContactPage />} />
            <Route path="/es/politica-de-privacidad" element={<PrivacyPolicyPage />} />
            <Route path="/es/politica-de-privacidad/" element={<PrivacyPolicyPage />} />
            <Route path="/es/terminos-de-servicio" element={<TermsOfServicePage />} />
            <Route path="/es/terminos-de-servicio/" element={<TermsOfServicePage />} />
            <Route path="/es/:toolSlug" element={<ToolPage />} />
            <Route path="/es/:toolSlug/" element={<ToolPage />} />

            {/* Portuguese (pt) routes — same components, locale from URL */}
            <Route path="/pt" element={<HomePage />} />
            <Route path="/pt/" element={<HomePage />} />
            <Route path="/pt/todas-as-ferramentas" element={<ToolsDirectoryPage />} />
            <Route path="/pt/todas-as-ferramentas/" element={<ToolsDirectoryPage />} />
            <Route path="/pt/categoria/:categorySlug" element={<CategoryPage />} />
            <Route path="/pt/categoria/:categorySlug/" element={<CategoryPage />} />
            <Route path="/pt/assistente-de-escrita-ia" element={<AiWritingAssistantPage />} />
            <Route path="/pt/assistente-de-escrita-ia/" element={<AiWritingAssistantPage />} />
            <Route path="/pt/resumidor-de-texto-ia" element={<AiTextSummarizerPage />} />
            <Route path="/pt/resumidor-de-texto-ia/" element={<AiTextSummarizerPage />} />
            <Route path="/pt/buscador-de-ferramentas-ia" element={<AiToolFinderPage />} />
            <Route path="/pt/buscador-de-ferramentas-ia/" element={<AiToolFinderPage />} />
            <Route path="/pt/sobre" element={<AboutPage />} />
            <Route path="/pt/sobre/" element={<AboutPage />} />
            <Route path="/pt/contato" element={<ContactPage />} />
            <Route path="/pt/contato/" element={<ContactPage />} />
            <Route path="/pt/politica-de-privacidade" element={<PrivacyPolicyPage />} />
            <Route path="/pt/politica-de-privacidade/" element={<PrivacyPolicyPage />} />
            <Route path="/pt/termos-de-servico" element={<TermsOfServicePage />} />
            <Route path="/pt/termos-de-servico/" element={<TermsOfServicePage />} />
            <Route path="/pt/:toolSlug" element={<ToolPage />} />
            <Route path="/pt/:toolSlug/" element={<ToolPage />} />

            {/* French (fr) routes — same components, locale from URL */}
            <Route path="/fr" element={<HomePage />} />
            <Route path="/fr/" element={<HomePage />} />
            <Route path="/fr/tous-les-outils" element={<ToolsDirectoryPage />} />
            <Route path="/fr/tous-les-outils/" element={<ToolsDirectoryPage />} />
            <Route path="/fr/categorie/:categorySlug" element={<CategoryPage />} />
            <Route path="/fr/categorie/:categorySlug/" element={<CategoryPage />} />
            <Route path="/fr/assistant-d-ecriture-ia" element={<AiWritingAssistantPage />} />
            <Route path="/fr/assistant-d-ecriture-ia/" element={<AiWritingAssistantPage />} />
            <Route path="/fr/resumeur-de-texte-ia" element={<AiTextSummarizerPage />} />
            <Route path="/fr/resumeur-de-texte-ia/" element={<AiTextSummarizerPage />} />
            <Route path="/fr/chercheur-d-outils-ia" element={<AiToolFinderPage />} />
            <Route path="/fr/chercheur-d-outils-ia/" element={<AiToolFinderPage />} />
            <Route path="/fr/a-propos" element={<AboutPage />} />
            <Route path="/fr/a-propos/" element={<AboutPage />} />
            <Route path="/fr/contact" element={<ContactPage />} />
            <Route path="/fr/contact/" element={<ContactPage />} />
            <Route path="/fr/politique-de-confidentialite" element={<PrivacyPolicyPage />} />
            <Route path="/fr/politique-de-confidentialite/" element={<PrivacyPolicyPage />} />
            <Route path="/fr/conditions-d-utilisation" element={<TermsOfServicePage />} />
            <Route path="/fr/conditions-d-utilisation/" element={<TermsOfServicePage />} />
            <Route path="/fr/:toolSlug" element={<ToolPage />} />
            <Route path="/fr/:toolSlug/" element={<ToolPage />} />

            {/* German (de) routes — same components, locale from URL */}
            <Route path="/de" element={<HomePage />} />
            <Route path="/de/" element={<HomePage />} />
            <Route path="/de/alle-tools" element={<ToolsDirectoryPage />} />
            <Route path="/de/alle-tools/" element={<ToolsDirectoryPage />} />
            <Route path="/de/kategorie/:categorySlug" element={<CategoryPage />} />
            <Route path="/de/kategorie/:categorySlug/" element={<CategoryPage />} />
            <Route path="/de/ki-schreibassistent" element={<AiWritingAssistantPage />} />
            <Route path="/de/ki-schreibassistent/" element={<AiWritingAssistantPage />} />
            <Route path="/de/ki-text-zusammenfasser" element={<AiTextSummarizerPage />} />
            <Route path="/de/ki-text-zusammenfasser/" element={<AiTextSummarizerPage />} />
            <Route path="/de/ki-tool-finder" element={<AiToolFinderPage />} />
            <Route path="/de/ki-tool-finder/" element={<AiToolFinderPage />} />
            <Route path="/de/ueber-uns" element={<AboutPage />} />
            <Route path="/de/ueber-uns/" element={<AboutPage />} />
            <Route path="/de/kontakt" element={<ContactPage />} />
            <Route path="/de/kontakt/" element={<ContactPage />} />
            <Route path="/de/datenschutzerklaerung" element={<PrivacyPolicyPage />} />
            <Route path="/de/datenschutzerklaerung/" element={<PrivacyPolicyPage />} />
            <Route path="/de/nutzungsbedingungen" element={<TermsOfServicePage />} />
            <Route path="/de/nutzungsbedingungen/" element={<TermsOfServicePage />} />
            <Route path="/de/:toolSlug" element={<ToolPage />} />
            <Route path="/de/:toolSlug/" element={<ToolPage />} />

            {/* Italian (it) routes — same components, locale from URL */}
            <Route path="/it" element={<HomePage />} />
            <Route path="/it/" element={<HomePage />} />
            <Route path="/it/tutti-gli-strumenti" element={<ToolsDirectoryPage />} />
            <Route path="/it/tutti-gli-strumenti/" element={<ToolsDirectoryPage />} />
            <Route path="/it/categoria/:categorySlug" element={<CategoryPage />} />
            <Route path="/it/categoria/:categorySlug/" element={<CategoryPage />} />
            <Route path="/it/assistente-di-scrittura-ia" element={<AiWritingAssistantPage />} />
            <Route path="/it/assistente-di-scrittura-ia/" element={<AiWritingAssistantPage />} />
            <Route path="/it/riassuntore-di-testo-ia" element={<AiTextSummarizerPage />} />
            <Route path="/it/riassuntore-di-testo-ia/" element={<AiTextSummarizerPage />} />
            <Route path="/it/cercatore-di-strumenti-ia" element={<AiToolFinderPage />} />
            <Route path="/it/cercatore-di-strumenti-ia/" element={<AiToolFinderPage />} />
            <Route path="/it/chi-siamo" element={<AboutPage />} />
            <Route path="/it/chi-siamo/" element={<AboutPage />} />
            <Route path="/it/contatti" element={<ContactPage />} />
            <Route path="/it/contatti/" element={<ContactPage />} />
            <Route path="/it/informativa-sulla-privacy" element={<PrivacyPolicyPage />} />
            <Route path="/it/informativa-sulla-privacy/" element={<PrivacyPolicyPage />} />
            <Route path="/it/termini-di-servizio" element={<TermsOfServicePage />} />
            <Route path="/it/termini-di-servizio/" element={<TermsOfServicePage />} />
            <Route path="/it/:toolSlug" element={<ToolPage />} />
            <Route path="/it/:toolSlug/" element={<ToolPage />} />

            {/* Indonesian (id) routes — same components, locale from URL */}
            <Route path="/id" element={<HomePage />} />
            <Route path="/id/" element={<HomePage />} />
            <Route path="/id/semua-alat" element={<ToolsDirectoryPage />} />
            <Route path="/id/semua-alat/" element={<ToolsDirectoryPage />} />
            <Route path="/id/kategori/:categorySlug" element={<CategoryPage />} />
            <Route path="/id/kategori/:categorySlug/" element={<CategoryPage />} />
            <Route path="/id/asisten-penulisan-ai" element={<AiWritingAssistantPage />} />
            <Route path="/id/asisten-penulisan-ai/" element={<AiWritingAssistantPage />} />
            <Route path="/id/peringkas-teks-ai" element={<AiTextSummarizerPage />} />
            <Route path="/id/peringkas-teks-ai/" element={<AiTextSummarizerPage />} />
            <Route path="/id/pencari-alat-ai" element={<AiToolFinderPage />} />
            <Route path="/id/pencari-alat-ai/" element={<AiToolFinderPage />} />
            <Route path="/id/tentang-kami" element={<AboutPage />} />
            <Route path="/id/tentang-kami/" element={<AboutPage />} />
            <Route path="/id/kontak" element={<ContactPage />} />
            <Route path="/id/kontak/" element={<ContactPage />} />
            <Route path="/id/kebijakan-privasi" element={<PrivacyPolicyPage />} />
            <Route path="/id/kebijakan-privasi/" element={<PrivacyPolicyPage />} />
            <Route path="/id/syarat-layanan" element={<TermsOfServicePage />} />
            <Route path="/id/syarat-layanan/" element={<TermsOfServicePage />} />
            <Route path="/id/:toolSlug" element={<ToolPage />} />
            <Route path="/id/:toolSlug/" element={<ToolPage />} />

            {/* Russian (ru) routes — same components, locale from URL */}
            <Route path="/ru" element={<HomePage />} />
            <Route path="/ru/" element={<HomePage />} />
            <Route path="/ru/vse-instrumenty" element={<ToolsDirectoryPage />} />
            <Route path="/ru/vse-instrumenty/" element={<ToolsDirectoryPage />} />
            <Route path="/ru/kategoriya/:categorySlug" element={<CategoryPage />} />
            <Route path="/ru/kategoriya/:categorySlug/" element={<CategoryPage />} />
            <Route path="/ru/ai-assistent-pisma" element={<AiWritingAssistantPage />} />
            <Route path="/ru/ai-assistent-pisma/" element={<AiWritingAssistantPage />} />
            <Route path="/ru/ai-summarizator-teksta" element={<AiTextSummarizerPage />} />
            <Route path="/ru/ai-summarizator-teksta/" element={<AiTextSummarizerPage />} />
            <Route path="/ru/ai-poisk-instrumentov" element={<AiToolFinderPage />} />
            <Route path="/ru/ai-poisk-instrumentov/" element={<AiToolFinderPage />} />
            <Route path="/ru/o-nas" element={<AboutPage />} />
            <Route path="/ru/o-nas/" element={<AboutPage />} />
            <Route path="/ru/kontakty" element={<ContactPage />} />
            <Route path="/ru/kontakty/" element={<ContactPage />} />
            <Route path="/ru/politika-konfidentsialnosti" element={<PrivacyPolicyPage />} />
            <Route path="/ru/politika-konfidentsialnosti/" element={<PrivacyPolicyPage />} />
            <Route path="/ru/usloviya-ispolzovaniya" element={<TermsOfServicePage />} />
            <Route path="/ru/usloviya-ispolzovaniya/" element={<TermsOfServicePage />} />
            <Route path="/ru/:toolSlug" element={<ToolPage />} />
            <Route path="/ru/:toolSlug/" element={<ToolPage />} />

            {/* Japanese (ja) routes — same components, locale from URL */}
            <Route path="/ja" element={<HomePage />} />
            <Route path="/ja/" element={<HomePage />} />
            <Route path="/ja/tools" element={<ToolsDirectoryPage />} />
            <Route path="/ja/tools/" element={<ToolsDirectoryPage />} />
            <Route path="/ja/kategori/:categorySlug" element={<CategoryPage />} />
            <Route path="/ja/kategori/:categorySlug/" element={<CategoryPage />} />
            <Route path="/ja/ai-bunsho-sakusei" element={<AiWritingAssistantPage />} />
            <Route path="/ja/ai-bunsho-sakusei/" element={<AiWritingAssistantPage />} />
            <Route path="/ja/ai-yoyaku" element={<AiTextSummarizerPage />} />
            <Route path="/ja/ai-yoyaku/" element={<AiTextSummarizerPage />} />
            <Route path="/ja/ai-tsuru-kensaku" element={<AiToolFinderPage />} />
            <Route path="/ja/ai-tsuru-kensaku/" element={<AiToolFinderPage />} />
            <Route path="/ja/watashitachi" element={<AboutPage />} />
            <Route path="/ja/watashitachi/" element={<AboutPage />} />
            <Route path="/ja/otoiawase" element={<ContactPage />} />
            <Route path="/ja/otoiawase/" element={<ContactPage />} />
            <Route path="/ja/puraibashi-porishi" element={<PrivacyPolicyPage />} />
            <Route path="/ja/puraibashi-porishi/" element={<PrivacyPolicyPage />} />
            <Route path="/ja/riyo-kiyaku" element={<TermsOfServicePage />} />
            <Route path="/ja/riyo-kiyaku/" element={<TermsOfServicePage />} />
            <Route path="/ja/:toolSlug" element={<ToolPage />} />
            <Route path="/ja/:toolSlug/" element={<ToolPage />} />

            {/* Korean (ko) routes — same components, locale from URL */}
            <Route path="/ko" element={<HomePage />} />
            <Route path="/ko/" element={<HomePage />} />
            <Route path="/ko/tools" element={<ToolsDirectoryPage />} />
            <Route path="/ko/tools/" element={<ToolsDirectoryPage />} />
            <Route path="/ko/kategori/:categorySlug" element={<CategoryPage />} />
            <Route path="/ko/kategori/:categorySlug/" element={<CategoryPage />} />
            <Route path="/ko/ai-geul-sseugi" element={<AiWritingAssistantPage />} />
            <Route path="/ko/ai-geul-sseugi/" element={<AiWritingAssistantPage />} />
            <Route path="/ko/ai-yoyak" element={<AiTextSummarizerPage />} />
            <Route path="/ko/ai-yoyak/" element={<AiTextSummarizerPage />} />
            <Route path="/ko/ai-dogu-chatgi" element={<AiToolFinderPage />} />
            <Route path="/ko/ai-dogu-chatgi/" element={<AiToolFinderPage />} />
            <Route path="/ko/sogae" element={<AboutPage />} />
            <Route path="/ko/sogae/" element={<AboutPage />} />
            <Route path="/ko/mun-ui" element={<ContactPage />} />
            <Route path="/ko/mun-ui/" element={<ContactPage />} />
            <Route path="/ko/peuraibeosi-jeongchaek" element={<PrivacyPolicyPage />} />
            <Route path="/ko/peuraibeosi-jeongchaek/" element={<PrivacyPolicyPage />} />
            <Route path="/ko/iyong-yagwan" element={<TermsOfServicePage />} />
            <Route path="/ko/iyong-yagwan/" element={<TermsOfServicePage />} />
            <Route path="/ko/:toolSlug" element={<ToolPage />} />
            <Route path="/ko/:toolSlug/" element={<ToolPage />} />

            {/* Simplified Chinese (zh) routes — same components, locale from URL */}
            <Route path="/zh" element={<HomePage />} />
            <Route path="/zh/" element={<HomePage />} />
            <Route path="/zh/all-tools" element={<ToolsDirectoryPage />} />
            <Route path="/zh/all-tools/" element={<ToolsDirectoryPage />} />
            <Route path="/zh/fenlei/:categorySlug" element={<CategoryPage />} />
            <Route path="/zh/fenlei/:categorySlug/" element={<CategoryPage />} />
            <Route path="/zh/ai-xiezuo-zhushou" element={<AiWritingAssistantPage />} />
            <Route path="/zh/ai-xiezuo-zhushou/" element={<AiWritingAssistantPage />} />
            <Route path="/zh/ai-wenben-zhaiyao" element={<AiTextSummarizerPage />} />
            <Route path="/zh/ai-wenben-zhaiyao/" element={<AiTextSummarizerPage />} />
            <Route path="/zh/ai-gongju-chazhao" element={<AiToolFinderPage />} />
            <Route path="/zh/ai-gongju-chazhao/" element={<AiToolFinderPage />} />
            <Route path="/zh/guanyu-women" element={<AboutPage />} />
            <Route path="/zh/guanyu-women/" element={<AboutPage />} />
            <Route path="/zh/lianxi-women" element={<ContactPage />} />
            <Route path="/zh/lianxi-women/" element={<ContactPage />} />
            <Route path="/zh/yinsi-zhengce" element={<PrivacyPolicyPage />} />
            <Route path="/zh/yinsi-zhengce/" element={<PrivacyPolicyPage />} />
            <Route path="/zh/shiyong-tiaokuan" element={<TermsOfServicePage />} />
            <Route path="/zh/shiyong-tiaokuan/" element={<TermsOfServicePage />} />
            <Route path="/zh/:toolSlug" element={<ToolPage />} />
            <Route path="/zh/:toolSlug/" element={<ToolPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SiteLayout>
      </LocaleProvider>
    </BrowserRouter>
  );
}
