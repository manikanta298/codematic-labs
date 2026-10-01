import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { AnimatedWords } from "../components/motion";
import { useReveal } from "../hooks/use-reveal";
import { products } from "../lib/site-data";

export default function CasesPage() {
  useReveal();
  return (
    <main>
      <section className="page-hero">
        <div className="mx-auto max-w-site px-page">
          <p className="eyebrow">Case studies</p>
          <h1 className="display-title mt-6 max-w-6xl"><AnimatedWords text="Nine products. Nine stories." accentFrom={2} /></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">See how each initially developed software product was shaped around a real operational workflow, from the problem through the solution and outcome.</p>
        </div>
      </section>
      <section className="section-shell">
        <div className="mx-auto max-w-site px-page">
          <div className="case-index-grid">
            {products.map((product, index) => { const Icon = product.icon; return (
              <article key={product.slug} className="case-index-card" data-reveal>
                <div className="flex items-center justify-between"><div className="product-icon"><Icon className="size-5" /></div><span className="product-index">0{index + 1}</span></div>
                <p className="product-category mt-8">{product.category}</p>
                <h2>{product.title}</h2>
                <p>{product.caseStudy.challenge}</p>
                <Link to={`/products/${product.slug}`} className="product-link mt-7">Read full case study <ArrowUpRight className="size-4" /></Link>
              </article>
            ); })}
          </div>
        </div>
      </section>
    </main>
  );
}
