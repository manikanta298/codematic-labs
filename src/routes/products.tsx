import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { AnimatedWords } from "../components/motion";
import { useReveal } from "../hooks/use-reveal";
import { products } from "../lib/site-data";

export default function ProductsPage() {
  useReveal();
  return (
    <main>
      <section className="page-hero product-hero">
        <div className="mx-auto max-w-site px-page">
          <p className="eyebrow">Our software</p>
          <h1 className="display-title mt-6 max-w-6xl"><AnimatedWords text="Software built around the work." accentFrom={3} /></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            Nine purpose-built products for hospitality, retail, healthcare, finance, workforce, logistics and AI-enabled operations.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-[.12em] text-muted-foreground">
            <span className="product-stat">09 products</span><span className="product-stat">09 case studies</span><span className="product-stat">Responsive web-first UX</span>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-site px-page">
          <div className="product-grid">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <article key={product.slug} className="product-card" data-reveal>
                  <div className="product-card-top">
                    <div className="product-icon"><Icon className="size-6" /></div>
                    <span className="product-index">0{index + 1}</span>
                  </div>
                  <span className="product-category">{product.category}</span>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <div className="product-feature-list">
                    {product.features.slice(0, 3).map((feature) => <span key={feature}>{feature}</span>)}
                  </div>
                  <Link to={`/products/${product.slug}`} className="product-link">
                    Explore product <ArrowUpRight className="size-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell product-case-band">
        <div className="mx-auto grid max-w-site gap-10 px-page lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div data-reveal><p className="eyebrow">Built first-hand</p><h2 className="section-title mt-5">Every product has a <span className="text-gradient">story.</span></h2></div>
          <p data-reveal className="max-w-2xl text-lg leading-8 text-muted-foreground">
            Explore the problem, workflow, product decisions and outcome behind each software system. These pages are structured as reusable case studies rather than generic feature lists.
          </p>
        </div>
      </section>
    </main>
  );
}
