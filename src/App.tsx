import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/layout/SiteLayout';
import { LocaleProvider } from './locales/LocaleContext';
import { AboutPage } from './pages/AboutPage';
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

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SiteLayout>
      </LocaleProvider>
    </BrowserRouter>
  );
}
