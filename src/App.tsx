import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SiteFooter, SiteHeader } from "./components/site-shell";
import HomePage from "./routes/index";
import ServicesPage from "./routes/services";
import ServiceDetailPage from "./routes/services.$slug";
import ProductsPage from "./routes/products";
import ProductDetailPage from "./routes/products.$slug";
import CaseDetailPage from "./routes/case-studies.$slug";
import { RouteEffects } from "./components/route-effects";
import WhyPage from "./routes/why-us";
import CasesPage from "./routes/case-studies.index";
import TechPage from "./routes/tech-stack";
import ContactPage from "./routes/contact";

function NotFound() {
  return <main id="main-content" tabIndex={-1} className="page-hero"><div className="mx-auto max-w-site px-page text-center"><h1 className="display-title">404</h1><p className="mt-6 text-lg text-muted-foreground">Page not found.</p><a href="/" className="button-solid mt-8">Go home</a></div></main>;
}

export function SiteContents() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <RouteEffects />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:slug" element={<ProductDetailPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/why-us" element={<WhyPage />} />
        <Route path="/explanation" element={<CasesPage />} />
        <Route path="/explanation/:slug" element={<CaseDetailPage />} />
        <Route path="/tech-stack" element={<TechPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SiteFooter />
    </>
  );
}

export default function App() {
  return <BrowserRouter><SiteContents /></BrowserRouter>;
}
