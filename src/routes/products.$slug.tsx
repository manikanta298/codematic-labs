import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";
import { products } from "../lib/site-data";

export default function ProductDetailPage() {
  useReveal();
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  if (!product) return <main className="page-hero"><div className="mx-auto max-w-site px-page"><p className="eyebrow">Product not found</p><h1 className="display-title mt-6">That product isn’t here.</h1><Link to="/products" className="button-outline mt-10">Back to products</Link></div></main>;
  const Icon = product.icon;
  return (
    <main>
      <section className="page-hero product-detail-hero">
        <div className="mx-auto max-w-site px-page">
          <Link to="/products" className="card-link"><ArrowLeft className="size-4" /> All products</Link>
          <div className="product-detail-icon mt-12"><Icon className="size-8" /></div>
          <p className="product-category mt-8">{product.category}</p>
          <h1 className="display-title mt-4 max-w-5xl">{product.title}</h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-muted-foreground">{product.description}</p>
          <p className="mt-6 text-sm font-bold text-primary-glow">{product.audience}</p>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto grid max-w-site gap-6 px-page lg:grid-cols-2">
          <div className="product-detail-panel" data-reveal><p className="eyebrow">Core capabilities</p><div className="mt-7 grid gap-4">{product.features.map((feature) => <div key={feature} className="detail-list-item"><CheckCircle2 className="size-5" /><span>{feature}</span></div>)}</div></div>
          <div className="product-detail-panel product-detail-panel-accent" data-reveal><p className="eyebrow">Designed for outcomes</p><div className="mt-7 grid gap-4">{product.outcomes.map((outcome) => <div key={outcome} className="detail-list-item"><span className="outcome-number">+</span><span>{outcome}</span></div>)}</div></div>
        </div>
      </section>

      <section className="section-shell border-y border-border bg-surface">
        <div className="mx-auto max-w-site px-page">
          <div className="max-w-3xl" data-reveal><p className="eyebrow">Case study</p><h2 className="section-title mt-5">From operational problem to <span className="text-gradient">working system.</span></h2></div>
          <div className="case-study-grid mt-16">
            <div className="case-study-intro" data-reveal><span>01</span><h3>Context</h3><p>{product.caseStudy.context}</p></div>
            <div className="case-study-intro" data-reveal><span>02</span><h3>Challenge</h3><p>{product.caseStudy.challenge}</p></div>
            <div className="case-study-intro" data-reveal><span>03</span><h3>Solution</h3><p>{product.caseStudy.solution}</p></div>
            <div className="case-study-intro case-study-wide" data-reveal><span>04</span><h3>Workflow</h3><div className="workflow-steps">{product.caseStudy.workflow.map((step, i) => <div key={step}><b>{String(i + 1).padStart(2, "0")}</b><span>{step}</span></div>)}</div></div>
            <div className="case-study-result case-study-wide" data-reveal><span>05 / Outcome</span><p>{product.caseStudy.result}</p></div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-8 px-page md:flex-row md:items-end" data-reveal>
          <div><p className="eyebrow">Need something similar?</p><h2 className="section-title mt-5">Let’s build your <span className="text-gradient">next system.</span></h2></div>
          <Link to="/contact" className="button-solid">Start a conversation <ArrowUpRight className="size-4" /></Link>
        </div>
      </section>
    </main>
  );
}
