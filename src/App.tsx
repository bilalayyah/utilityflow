import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { ArticlePage } from './pages/ArticlePage';
import { BlogCategoryPage } from './pages/BlogCategoryPage';
import { BlogHomePage } from './pages/BlogHomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ContactPage } from './pages/ContactPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { ToolPage } from './pages/ToolPage';
import { ToolsDirectoryPage } from './pages/ToolsDirectoryPage';
import { SiteLayout } from './components/layout/SiteLayout';
import { LocaleProvider } from './locales/LocaleContext';

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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact/" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy-policy/" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/terms-of-service/" element={<TermsOfServicePage />} />
                        <Route path="/blog" element={<BlogHomePage />} />
            <Route path="/blog/" element={<BlogHomePage />} />
            <Route path="/blog/category/:categorySlug" element={<BlogCategoryPage />} />
            <Route path="/blog/category/:categorySlug/" element={<BlogCategoryPage />} />
            <Route path="/blog/:articleSlug" element={<ArticlePage />} />
            <Route path="/blog/:articleSlug/" element={<ArticlePage />} />
            <Route path="/:toolSlug" element={<ToolPage />} />
            <Route path="/:toolSlug/" element={<ToolPage />} />

            {/* Spanish (es) routes — same components, locale from URL */}
            <Route path="/es" element={<HomePage />} />
            <Route path="/es/" element={<HomePage />} />
            <Route path="/es/todas-las-herramientas" element={<ToolsDirectoryPage />} />
            <Route path="/es/todas-las-herramientas/" element={<ToolsDirectoryPage />} />
            <Route path="/es/categoria/:categorySlug" element={<CategoryPage />} />
            <Route path="/es/categoria/:categorySlug/" element={<CategoryPage />} />
            <Route path="/es/acerca-de" element={<AboutPage />} />
            <Route path="/es/acerca-de/" element={<AboutPage />} />
            <Route path="/es/contacto" element={<ContactPage />} />
            <Route path="/es/contacto/" element={<ContactPage />} />
            <Route path="/es/politica-de-privacidad" element={<PrivacyPolicyPage />} />
            <Route path="/es/politica-de-privacidad/" element={<PrivacyPolicyPage />} />
            <Route path="/es/terminos-de-servicio" element={<TermsOfServicePage />} />
            <Route path="/es/terminos-de-servicio/" element={<TermsOfServicePage />} />
                        <Route path="/es/blog" element={<BlogHomePage />} />
            <Route path="/es/blog/" element={<BlogHomePage />} />
            <Route path="/es/blog/category/:categorySlug" element={<BlogCategoryPage />} />
            <Route path="/es/blog/category/:categorySlug/" element={<BlogCategoryPage />} />
            <Route path="/es/blog/:articleSlug" element={<ArticlePage />} />
            <Route path="/es/blog/:articleSlug/" element={<ArticlePage />} />
            <Route path="/es/:toolSlug" element={<ToolPage />} />
            <Route path="/es/:toolSlug/" element={<ToolPage />} />

            {/* Portuguese (pt) routes — same components, locale from URL */}
            <Route path="/pt" element={<HomePage />} />
            <Route path="/pt/" element={<HomePage />} />
            <Route path="/pt/todas-as-ferramentas" element={<ToolsDirectoryPage />} />
            <Route path="/pt/todas-as-ferramentas/" element={<ToolsDirectoryPage />} />
            <Route path="/pt/categoria/:categorySlug" element={<CategoryPage />} />
            <Route path="/pt/categoria/:categorySlug/" element={<CategoryPage />} />
            <Route path="/pt/sobre" element={<AboutPage />} />
            <Route path="/pt/sobre/" element={<AboutPage />} />
            <Route path="/pt/contato" element={<ContactPage />} />
            <Route path="/pt/contato/" element={<ContactPage />} />
            <Route path="/pt/politica-de-privacidade" element={<PrivacyPolicyPage />} />
            <Route path="/pt/politica-de-privacidade/" element={<PrivacyPolicyPage />} />
            <Route path="/pt/termos-de-servico" element={<TermsOfServicePage />} />
            <Route path="/pt/termos-de-servico/" element={<TermsOfServicePage />} />
                        <Route path="/pt/blog" element={<BlogHomePage />} />
            <Route path="/pt/blog/" element={<BlogHomePage />} />
            <Route path="/pt/blog/category/:categorySlug" element={<BlogCategoryPage />} />
            <Route path="/pt/blog/category/:categorySlug/" element={<BlogCategoryPage />} />
            <Route path="/pt/blog/:articleSlug" element={<ArticlePage />} />
            <Route path="/pt/blog/:articleSlug/" element={<ArticlePage />} />
            <Route path="/pt/:toolSlug" element={<ToolPage />} />
            <Route path="/pt/:toolSlug/" element={<ToolPage />} />

            {/* French (fr) routes — same components, locale from URL */}
            <Route path="/fr" element={<HomePage />} />
            <Route path="/fr/" element={<HomePage />} />
            <Route path="/fr/tous-les-outils" element={<ToolsDirectoryPage />} />
            <Route path="/fr/tous-les-outils/" element={<ToolsDirectoryPage />} />
            <Route path="/fr/categorie/:categorySlug" element={<CategoryPage />} />
            <Route path="/fr/categorie/:categorySlug/" element={<CategoryPage />} />
            <Route path="/fr/a-propos" element={<AboutPage />} />
            <Route path="/fr/a-propos/" element={<AboutPage />} />
            <Route path="/fr/contact" element={<ContactPage />} />
            <Route path="/fr/contact/" element={<ContactPage />} />
            <Route path="/fr/politique-de-confidentialite" element={<PrivacyPolicyPage />} />
            <Route path="/fr/politique-de-confidentialite/" element={<PrivacyPolicyPage />} />
            <Route path="/fr/conditions-d-utilisation" element={<TermsOfServicePage />} />
            <Route path="/fr/conditions-d-utilisation/" element={<TermsOfServicePage />} />
                        <Route path="/fr/blog" element={<BlogHomePage />} />
            <Route path="/fr/blog/" element={<BlogHomePage />} />
            <Route path="/fr/blog/category/:categorySlug" element={<BlogCategoryPage />} />
            <Route path="/fr/blog/category/:categorySlug/" element={<BlogCategoryPage />} />
            <Route path="/fr/blog/:articleSlug" element={<ArticlePage />} />
            <Route path="/fr/blog/:articleSlug/" element={<ArticlePage />} />
            <Route path="/fr/:toolSlug" element={<ToolPage />} />
            <Route path="/fr/:toolSlug/" element={<ToolPage />} />

            {/* German (de) routes — same components, locale from URL */}
            <Route path="/de" element={<HomePage />} />
            <Route path="/de/" element={<HomePage />} />
            <Route path="/de/alle-tools" element={<ToolsDirectoryPage />} />
            <Route path="/de/alle-tools/" element={<ToolsDirectoryPage />} />
            <Route path="/de/kategorie/:categorySlug" element={<CategoryPage />} />
            <Route path="/de/kategorie/:categorySlug/" element={<CategoryPage />} />
            <Route path="/de/ueber-uns" element={<AboutPage />} />
            <Route path="/de/ueber-uns/" element={<AboutPage />} />
            <Route path="/de/kontakt" element={<ContactPage />} />
            <Route path="/de/kontakt/" element={<ContactPage />} />
            <Route path="/de/datenschutzerklaerung" element={<PrivacyPolicyPage />} />
            <Route path="/de/datenschutzerklaerung/" element={<PrivacyPolicyPage />} />
            <Route path="/de/nutzungsbedingungen" element={<TermsOfServicePage />} />
            <Route path="/de/nutzungsbedingungen/" element={<TermsOfServicePage />} />
                        <Route path="/de/blog" element={<BlogHomePage />} />
            <Route path="/de/blog/" element={<BlogHomePage />} />
            <Route path="/de/blog/category/:categorySlug" element={<BlogCategoryPage />} />
            <Route path="/de/blog/category/:categorySlug/" element={<BlogCategoryPage />} />
            <Route path="/de/blog/:articleSlug" element={<ArticlePage />} />
            <Route path="/de/blog/:articleSlug/" element={<ArticlePage />} />
            <Route path="/de/:toolSlug" element={<ToolPage />} />
            <Route path="/de/:toolSlug/" element={<ToolPage />} />

            {/* Italian (it) routes — same components, locale from URL */}
            <Route path="/it" element={<HomePage />} />
            <Route path="/it/" element={<HomePage />} />
            <Route path="/it/tutti-gli-strumenti" element={<ToolsDirectoryPage />} />
            <Route path="/it/tutti-gli-strumenti/" element={<ToolsDirectoryPage />} />
            <Route path="/it/categoria/:categorySlug" element={<CategoryPage />} />
            <Route path="/it/categoria/:categorySlug/" element={<CategoryPage />} />
            <Route path="/it/chi-siamo" element={<AboutPage />} />
            <Route path="/it/chi-siamo/" element={<AboutPage />} />
            <Route path="/it/contatti" element={<ContactPage />} />
            <Route path="/it/contatti/" element={<ContactPage />} />
            <Route path="/it/informativa-sulla-privacy" element={<PrivacyPolicyPage />} />
            <Route path="/it/informativa-sulla-privacy/" element={<PrivacyPolicyPage />} />
            <Route path="/it/termini-di-servizio" element={<TermsOfServicePage />} />
            <Route path="/it/termini-di-servizio/" element={<TermsOfServicePage />} />
                        <Route path="/it/blog" element={<BlogHomePage />} />
            <Route path="/it/blog/" element={<BlogHomePage />} />
            <Route path="/it/blog/category/:categorySlug" element={<BlogCategoryPage />} />
            <Route path="/it/blog/category/:categorySlug/" element={<BlogCategoryPage />} />
            <Route path="/it/blog/:articleSlug" element={<ArticlePage />} />
            <Route path="/it/blog/:articleSlug/" element={<ArticlePage />} />
            <Route path="/it/:toolSlug" element={<ToolPage />} />
            <Route path="/it/:toolSlug/" element={<ToolPage />} />

            {/* Indonesian (id) routes — same components, locale from URL */}
            <Route path="/id" element={<HomePage />} />
            <Route path="/id/" element={<HomePage />} />
            <Route path="/id/semua-alat" element={<ToolsDirectoryPage />} />
            <Route path="/id/semua-alat/" element={<ToolsDirectoryPage />} />
            <Route path="/id/kategori/:categorySlug" element={<CategoryPage />} />
            <Route path="/id/kategori/:categorySlug/" element={<CategoryPage />} />
            <Route path="/id/tentang-kami" element={<AboutPage />} />
            <Route path="/id/tentang-kami/" element={<AboutPage />} />
            <Route path="/id/kontak" element={<ContactPage />} />
            <Route path="/id/kontak/" element={<ContactPage />} />
            <Route path="/id/kebijakan-privasi" element={<PrivacyPolicyPage />} />
            <Route path="/id/kebijakan-privasi/" element={<PrivacyPolicyPage />} />
            <Route path="/id/syarat-layanan" element={<TermsOfServicePage />} />
            <Route path="/id/syarat-layanan/" element={<TermsOfServicePage />} />
                        <Route path="/id/blog" element={<BlogHomePage />} />
            <Route path="/id/blog/" element={<BlogHomePage />} />
            <Route path="/id/blog/category/:categorySlug" element={<BlogCategoryPage />} />
            <Route path="/id/blog/category/:categorySlug/" element={<BlogCategoryPage />} />
            <Route path="/id/blog/:articleSlug" element={<ArticlePage />} />
            <Route path="/id/blog/:articleSlug/" element={<ArticlePage />} />
            <Route path="/id/:toolSlug" element={<ToolPage />} />
            <Route path="/id/:toolSlug/" element={<ToolPage />} />

            {/* Russian (ru) routes — same components, locale from URL */}
            <Route path="/ru" element={<HomePage />} />
            <Route path="/ru/" element={<HomePage />} />
            <Route path="/ru/vse-instrumenty" element={<ToolsDirectoryPage />} />
            <Route path="/ru/vse-instrumenty/" element={<ToolsDirectoryPage />} />
            <Route path="/ru/kategoriya/:categorySlug" element={<CategoryPage />} />
            <Route path="/ru/kategoriya/:categorySlug/" element={<CategoryPage />} />
            <Route path="/ru/o-nas" element={<AboutPage />} />
            <Route path="/ru/o-nas/" element={<AboutPage />} />
            <Route path="/ru/kontakty" element={<ContactPage />} />
            <Route path="/ru/kontakty/" element={<ContactPage />} />
            <Route path="/ru/politika-konfidentsialnosti" element={<PrivacyPolicyPage />} />
            <Route path="/ru/politika-konfidentsialnosti/" element={<PrivacyPolicyPage />} />
            <Route path="/ru/usloviya-ispolzovaniya" element={<TermsOfServicePage />} />
            <Route path="/ru/usloviya-ispolzovaniya/" element={<TermsOfServicePage />} />
                        <Route path="/ru/blog" element={<BlogHomePage />} />
            <Route path="/ru/blog/" element={<BlogHomePage />} />
            <Route path="/ru/blog/category/:categorySlug" element={<BlogCategoryPage />} />
            <Route path="/ru/blog/category/:categorySlug/" element={<BlogCategoryPage />} />
            <Route path="/ru/blog/:articleSlug" element={<ArticlePage />} />
            <Route path="/ru/blog/:articleSlug/" element={<ArticlePage />} />
            <Route path="/ru/:toolSlug" element={<ToolPage />} />
            <Route path="/ru/:toolSlug/" element={<ToolPage />} />

            {/* Japanese (ja) routes — same components, locale from URL */}
            <Route path="/ja" element={<HomePage />} />
            <Route path="/ja/" element={<HomePage />} />
            <Route path="/ja/tools" element={<ToolsDirectoryPage />} />
            <Route path="/ja/tools/" element={<ToolsDirectoryPage />} />
            <Route path="/ja/kategori/:categorySlug" element={<CategoryPage />} />
            <Route path="/ja/kategori/:categorySlug/" element={<CategoryPage />} />
            <Route path="/ja/watashitachi" element={<AboutPage />} />
            <Route path="/ja/watashitachi/" element={<AboutPage />} />
            <Route path="/ja/otoiawase" element={<ContactPage />} />
            <Route path="/ja/otoiawase/" element={<ContactPage />} />
            <Route path="/ja/puraibashi-porishi" element={<PrivacyPolicyPage />} />
            <Route path="/ja/puraibashi-porishi/" element={<PrivacyPolicyPage />} />
            <Route path="/ja/riyo-kiyaku" element={<TermsOfServicePage />} />
            <Route path="/ja/riyo-kiyaku/" element={<TermsOfServicePage />} />
                        <Route path="/ja/blog" element={<BlogHomePage />} />
            <Route path="/ja/blog/" element={<BlogHomePage />} />
            <Route path="/ja/blog/category/:categorySlug" element={<BlogCategoryPage />} />
            <Route path="/ja/blog/category/:categorySlug/" element={<BlogCategoryPage />} />
            <Route path="/ja/blog/:articleSlug" element={<ArticlePage />} />
            <Route path="/ja/blog/:articleSlug/" element={<ArticlePage />} />
            <Route path="/ja/:toolSlug" element={<ToolPage />} />
            <Route path="/ja/:toolSlug/" element={<ToolPage />} />

            {/* Korean (ko) routes — same components, locale from URL */}
            <Route path="/ko" element={<HomePage />} />
            <Route path="/ko/" element={<HomePage />} />
            <Route path="/ko/tools" element={<ToolsDirectoryPage />} />
            <Route path="/ko/tools/" element={<ToolsDirectoryPage />} />
            <Route path="/ko/kategori/:categorySlug" element={<CategoryPage />} />
            <Route path="/ko/kategori/:categorySlug/" element={<CategoryPage />} />
            <Route path="/ko/sogae" element={<AboutPage />} />
            <Route path="/ko/sogae/" element={<AboutPage />} />
            <Route path="/ko/mun-ui" element={<ContactPage />} />
            <Route path="/ko/mun-ui/" element={<ContactPage />} />
            <Route path="/ko/peuraibeosi-jeongchaek" element={<PrivacyPolicyPage />} />
            <Route path="/ko/peuraibeosi-jeongchaek/" element={<PrivacyPolicyPage />} />
            <Route path="/ko/iyong-yagwan" element={<TermsOfServicePage />} />
            <Route path="/ko/iyong-yagwan/" element={<TermsOfServicePage />} />
                        <Route path="/ko/blog" element={<BlogHomePage />} />
            <Route path="/ko/blog/" element={<BlogHomePage />} />
            <Route path="/ko/blog/category/:categorySlug" element={<BlogCategoryPage />} />
            <Route path="/ko/blog/category/:categorySlug/" element={<BlogCategoryPage />} />
            <Route path="/ko/blog/:articleSlug" element={<ArticlePage />} />
            <Route path="/ko/blog/:articleSlug/" element={<ArticlePage />} />
            <Route path="/ko/:toolSlug" element={<ToolPage />} />
            <Route path="/ko/:toolSlug/" element={<ToolPage />} />

            {/* Simplified Chinese (zh) routes — same components, locale from URL */}
            <Route path="/zh" element={<HomePage />} />
            <Route path="/zh/" element={<HomePage />} />
            <Route path="/zh/all-tools" element={<ToolsDirectoryPage />} />
            <Route path="/zh/all-tools/" element={<ToolsDirectoryPage />} />
            <Route path="/zh/fenlei/:categorySlug" element={<CategoryPage />} />
            <Route path="/zh/fenlei/:categorySlug/" element={<CategoryPage />} />
            <Route path="/zh/guanyu-women" element={<AboutPage />} />
            <Route path="/zh/guanyu-women/" element={<AboutPage />} />
            <Route path="/zh/lianxi-women" element={<ContactPage />} />
            <Route path="/zh/lianxi-women/" element={<ContactPage />} />
            <Route path="/zh/yinsi-zhengce" element={<PrivacyPolicyPage />} />
            <Route path="/zh/yinsi-zhengce/" element={<PrivacyPolicyPage />} />
            <Route path="/zh/shiyong-tiaokuan" element={<TermsOfServicePage />} />
            <Route path="/zh/shiyong-tiaokuan/" element={<TermsOfServicePage />} />
                        <Route path="/zh/blog" element={<BlogHomePage />} />
            <Route path="/zh/blog/" element={<BlogHomePage />} />
            <Route path="/zh/blog/category/:categorySlug" element={<BlogCategoryPage />} />
            <Route path="/zh/blog/category/:categorySlug/" element={<BlogCategoryPage />} />
            <Route path="/zh/blog/:articleSlug" element={<ArticlePage />} />
            <Route path="/zh/blog/:articleSlug/" element={<ArticlePage />} />
            <Route path="/zh/:toolSlug" element={<ToolPage />} />
            <Route path="/zh/:toolSlug/" element={<ToolPage />} />


            {/* Hindi (hi) routes — same components, locale from URL */}
            <Route path="/hi" element={<HomePage />} />
            <Route path="/hi/" element={<HomePage />} />
            <Route path="/hi/sabhi-tools" element={<ToolsDirectoryPage />} />
            <Route path="/hi/sabhi-tools/" element={<ToolsDirectoryPage />} />
            <Route path="/hi/shreni/:categorySlug" element={<CategoryPage />} />
            <Route path="/hi/shreni/:categorySlug/" element={<CategoryPage />} />
            <Route path="/hi/hamare-bare-mein" element={<AboutPage />} />
            <Route path="/hi/hamare-bare-mein/" element={<AboutPage />} />
            <Route path="/hi/sampark" element={<ContactPage />} />
            <Route path="/hi/sampark/" element={<ContactPage />} />
            <Route path="/hi/gopniyata-neeti" element={<PrivacyPolicyPage />} />
            <Route path="/hi/gopniyata-neeti/" element={<PrivacyPolicyPage />} />
            <Route path="/hi/sewa-ki-shartein" element={<TermsOfServicePage />} />
            <Route path="/hi/sewa-ki-shartein/" element={<TermsOfServicePage />} />
                        <Route path="/hi/blog" element={<BlogHomePage />} />
            <Route path="/hi/blog/" element={<BlogHomePage />} />
            <Route path="/hi/blog/category/:categorySlug" element={<BlogCategoryPage />} />
            <Route path="/hi/blog/category/:categorySlug/" element={<BlogCategoryPage />} />
            <Route path="/hi/blog/:articleSlug" element={<ArticlePage />} />
            <Route path="/hi/blog/:articleSlug/" element={<ArticlePage />} />
            <Route path="/hi/:toolSlug" element={<ToolPage />} />
            <Route path="/hi/:toolSlug/" element={<ToolPage />} />
            {/* Arabic (ar) routes — same components, locale from URL */}
            <Route path="/ar" element={<HomePage />} />
            <Route path="/ar/" element={<HomePage />} />
            <Route path="/ar/jami-aladawat" element={<ToolsDirectoryPage />} />
            <Route path="/ar/jami-aladawat/" element={<ToolsDirectoryPage />} />
            <Route path="/ar/tasnif/:categorySlug" element={<CategoryPage />} />
            <Route path="/ar/tasnif/:categorySlug/" element={<CategoryPage />} />
            <Route path="/ar/man-nahnu" element={<AboutPage />} />
            <Route path="/ar/man-nahnu/" element={<AboutPage />} />
            <Route path="/ar/ittasil-bina" element={<ContactPage />} />
            <Route path="/ar/ittasil-bina/" element={<ContactPage />} />
            <Route path="/ar/siyasat-al-khususiyya" element={<PrivacyPolicyPage />} />
            <Route path="/ar/siyasat-al-khususiyya/" element={<PrivacyPolicyPage />} />
            <Route path="/ar/shurut-al-khidma" element={<TermsOfServicePage />} />
            <Route path="/ar/shurut-al-khidma/" element={<TermsOfServicePage />} />
            <Route path="/ar/blog" element={<BlogHomePage />} />
            <Route path="/ar/blog/" element={<BlogHomePage />} />
            <Route path="/ar/blog/category/:categorySlug" element={<BlogCategoryPage />} />
            <Route path="/ar/blog/category/:categorySlug/" element={<BlogCategoryPage />} />
            <Route path="/ar/blog/:articleSlug" element={<ArticlePage />} />
            <Route path="/ar/blog/:articleSlug/" element={<ArticlePage />} />
            <Route path="/ar/:toolSlug" element={<ToolPage />} />
            <Route path="/ar/:toolSlug/" element={<ToolPage />} />
            {/* Turkish (tr) routes — same components, locale from URL */}
            <Route path="/tr" element={<HomePage />} />
            <Route path="/tr/" element={<HomePage />} />
            <Route path="/tr/tum-araclar" element={<ToolsDirectoryPage />} />
            <Route path="/tr/tum-araclar/" element={<ToolsDirectoryPage />} />
            <Route path="/tr/kategori/:categorySlug" element={<CategoryPage />} />
            <Route path="/tr/kategori/:categorySlug/" element={<CategoryPage />} />
            <Route path="/tr/hakkimizda" element={<AboutPage />} />
            <Route path="/tr/hakkimizda/" element={<AboutPage />} />
            <Route path="/tr/iletisim" element={<ContactPage />} />
            <Route path="/tr/iletisim/" element={<ContactPage />} />
            <Route path="/tr/gizlilik-politikasi" element={<PrivacyPolicyPage />} />
            <Route path="/tr/gizlilik-politikasi/" element={<PrivacyPolicyPage />} />
            <Route path="/tr/kullanim-sartlari" element={<TermsOfServicePage />} />
            <Route path="/tr/kullanim-sartlari/" element={<TermsOfServicePage />} />
            <Route path="/tr/blog" element={<BlogHomePage />} />
            <Route path="/tr/blog/" element={<BlogHomePage />} />
            <Route path="/tr/blog/category/:categorySlug" element={<BlogCategoryPage />} />
            <Route path="/tr/blog/category/:categorySlug/" element={<BlogCategoryPage />} />
            <Route path="/tr/blog/:articleSlug" element={<ArticlePage />} />
            <Route path="/tr/blog/:articleSlug/" element={<ArticlePage />} />
            <Route path="/tr/:toolSlug" element={<ToolPage />} />
            <Route path="/tr/:toolSlug/" element={<ToolPage />} />
            <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </SiteLayout>
      </LocaleProvider>
    </BrowserRouter>
  );
}
