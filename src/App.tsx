import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SiteFooter, SiteHeader } from "./components/site-shell";
import HomePage from "./routes/index";
import ServicesPage from "./routes/services";
import WhyPage from "./routes/why-us";
import CasesPage from "./routes/case-studies.index";
import CaseDetail from "./routes/case-studies.$slug";
import TechPage from "./routes/tech-stack";
import ContactPage from "./routes/contact";

function NotFound() {
  return (
    <main className="page-hero">
      <div className="mx-auto max-w-site px-page text-center">
        <h1 className="display-title">404</h1>
        <p className="mt-6 text-lg text-muted-foreground">Page not found.</p>
        <a href="/" className="button-solid mt-8">Go home</a>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/why-us" element={<WhyPage />} />
        <Route path="/case-studies" element={<CasesPage />} />
        <Route path="/case-studies/:slug" element={<CaseDetail />} />
        <Route path="/tech-stack" element={<TechPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/case-studies/" element={<CasesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SiteFooter />
    </BrowserRouter>
  );
}
