import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { AnimatedWords } from "../components/motion";
import { useReveal } from "../hooks/use-reveal";
import { services } from "../lib/site-data";

export default function ServicesPage() {
  useReveal();
  return (
    <main>
      <section className="page-hero">
        <div className="mx-auto max-w-site px-page">
          <p className="eyebrow">Services</p>
          <h1 className="display-title mt-6 max-w-6xl"><AnimatedWords text="From product idea to dependable software." accentFrom={4} /></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">Nine specialist capabilities that can be used independently or combined into one accountable product team.</p>
        </div>
      </section>
      <section className="section-shell">
        <div className="mx-auto max-w-site px-page">
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article key={service.slug} className="service-card" data-reveal>
                  <div className="service-card-image"><img src={service.image} alt={service.imageAlt} loading="lazy" /></div>
                  <div className="service-card-copy">
                    <div className="flex items-start justify-between gap-4"><div className="product-icon"><Icon className="size-5" /></div><span className="product-index">0{index + 1}</span></div>
                    <p className="product-category mt-7">Service</p>
                    <h2>{service.title}</h2>
                    <p className="service-description">{service.description}</p>
                    <div className="service-mini-list">{service.details.map((detail) => <span key={detail}>{detail}</span>)}</div>
                    <Link to={`/services/${service.slug}`} className="product-link">View service <ArrowUpRight className="size-4" /></Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section-shell product-case-band"><div className="mx-auto max-w-site px-page"><div className="rounded-[6px] border border-border bg-card p-8 sm:p-12"><p className="eyebrow">Flexible engagement</p><h2 className="section-title mt-5 max-w-4xl">Choose one capability or bring us in <span className="text-gradient">end to end.</span></h2><div className="mt-8 flex flex-wrap gap-3"><Link to="/products" className="button-outline">Explore software <ArrowUpRight className="size-4" /></Link><Link to="/contact" className="button-solid">Talk to our team <ArrowUpRight className="size-4" /></Link></div></div></div></section>
    </main>
  );
}
