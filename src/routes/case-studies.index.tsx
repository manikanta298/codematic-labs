import { SemanticIcon } from "../components/semantic-icon";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { AnimatedWords } from "../components/motion";
import { useReveal } from "../hooks/use-reveal";
import { products } from "../lib/site-data";

export default function CasesPage() {
  useReveal();
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-hero">
        <div className="mx-auto max-w-site px-page">
          <p className="eyebrow">Solution examples</p>
          <h1 className="display-title mt-6 max-w-6xl"><AnimatedWords text="Business problems. Simple software solutions." accentFrom={2} /></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">See nine examples of solutions we can build. Each explains a business problem, a possible solution and how it could work. These are illustrative examples, not completed client projects or measured results.</p>
        </div>
      </section>
      <section className="section-shell">
        <div className="mx-auto max-w-site px-page">
          <div className="case-index-grid">
            {products.map((product, index) => { const Icon = product.icon; return (
              <article key={product.slug} className="case-index-card" data-reveal>
                <div className="flex items-center justify-between"><div className="product-icon"><SemanticIcon icon={Icon} className="size-5" /></div><span className="product-index">0{index + 1}</span></div>
                <p className="product-category mt-8">{product.category}</p>
                <h2>{product.title}</h2>
                <p>{product.caseStudy.challenge}</p>
                <Link to={`/case-studies/${product.slug}`} className="product-link mt-7">See the problem and solution <ArrowUpRight className="size-4" /></Link>
              </article>
            ); })}
          </div>
        </div>
      </section>
    </main>
  );
}
