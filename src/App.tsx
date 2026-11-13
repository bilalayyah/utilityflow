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

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SiteLayout>
      </LocaleProvider>
    </BrowserRouter>
  );
}
