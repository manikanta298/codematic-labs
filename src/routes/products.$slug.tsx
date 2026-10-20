import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Users, CircleAlert, Lightbulb, Workflow, Target } from "lucide-react";
import { SemanticIcon } from "../components/semantic-icon";
import { useReveal } from "../hooks/use-reveal";
import { products, productPresentation } from "../lib/site-data";

export default function ProductDetailPage({ caseStudy = false }: { caseStudy?: boolean }) {
  useReveal();
  const { slug } = useParams();
  const product = products.find(item => item.slug === slug);
  const directory = caseStudy ? "/case-studies" : "/products";
  if (!product) return <main id="main-content" tabIndex={-1} className="page-hero"><div className="mx-auto max-w-site px-page"><p className="eyebrow">{caseStudy ? "Example" : "Solution"} not found</p><h1 className="display-title mt-6">That {caseStudy ? "example" : "solution"} isn’t here.</h1><Link to={directory} className="button-outline mt-10">Back to {caseStudy ? "examples" : "solutions"}</Link></div></main>;
  const Icon = product.icon;
  const presentation = productPresentation[product.slug]!;
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-hero product-detail-hero">
        <div className="mx-auto max-w-site px-page">
          <Link to={directory} className="card-link"><ArrowLeft className="size-4" /> All {caseStudy ? "examples" : "solutions"}</Link>
          <div className="product-detail-icon mt-12"><SemanticIcon icon={Icon} className="size-8" /></div>
          <p className="product-category mt-8">{product.category} · Illustrative solution we can build</p>
          <h1 className="display-title mt-4 max-w-5xl">{product.title}</h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-muted-foreground">{caseStudy ? product.caseStudy.challenge : product.description}</p>
          <p className="mt-6 text-sm font-bold text-primary-glow">{product.audience}</p>
        </div>
      </section>
      <section className="section-shell">
        <div className="mx-auto grid max-w-site gap-6 px-page lg:grid-cols-2">
          <div className="product-detail-panel" data-reveal><p className="eyebrow">What we can build</p><div className="mt-7 grid gap-4">{product.features.map(feature => <div key={feature} className="detail-list-item"><SemanticIcon icon={CheckCircle2} className="size-5" /><span>{feature}</span></div>)}</div></div>
          <div className="product-detail-panel product-detail-panel-accent" data-reveal><p className="eyebrow">What it could help you do</p><div className="mt-7 grid gap-4">{product.outcomes.map((outcome, index) => <div key={outcome} className="detail-list-item"><SemanticIcon icon={presentation.outcomes[index]!} /><span>{outcome}</span></div>)}</div></div>
        </div>
      </section>
      <section className="section-shell border-y border-border bg-surface">
        <div className="mx-auto max-w-site px-page">
          <div className="max-w-3xl" data-reveal>
            <p className="eyebrow">{caseStudy ? "Illustrative solution · Intended benefits, not measured client results" : "Example workflow · A solution we can build"}</p>
            <h2 className="section-title mt-5">{caseStudy ? <>The problem. The solution. <span className="text-gradient">How it works.</span></> : <>A clear workflow for <span className="text-gradient">daily use.</span></>}</h2>
          </div>
          <div className="case-study-grid mt-16">
            {caseStudy && <>
              <div className="case-study-intro" data-reveal><span>01</span><h3 className="icon-heading"><SemanticIcon icon={Users} />Who it helps</h3><p>{product.caseStudy.context}</p></div>
              <div className="case-study-intro" data-reveal><span>02</span><h3 className="icon-heading"><SemanticIcon icon={CircleAlert} />The problem</h3><p>{product.caseStudy.challenge}</p></div>
              <div className="case-study-intro" data-reveal><span>03</span><h3 className="icon-heading"><SemanticIcon icon={Lightbulb} />The solution</h3><p>{product.caseStudy.solution}</p></div>
            </>}
            <div className="case-study-intro case-study-wide" data-reveal><span>{caseStudy ? "04" : "01"}</span><h3 className="icon-heading"><SemanticIcon icon={Workflow} />How it works</h3><div className="workflow-steps">{product.caseStudy.workflow.map((step, index) => <div key={step}><div className="workflow-step-heading"><b>{String(index + 1).padStart(2, "0")}</b><SemanticIcon icon={presentation.workflow[index]!} /></div><span>{step}</span></div>)}</div></div>
            {caseStudy && <div className="case-study-result case-study-wide" data-reveal><span className="icon-heading"><SemanticIcon icon={Target} />05 / Intended result</span><p>{product.caseStudy.result}</p></div>}
          </div>
          <div className="related-links" data-reveal>
            <Link to={caseStudy ? `/products/${product.slug}` : `/case-studies/${product.slug}`} className="card-link">{caseStudy ? "Explore solution features" : "See the example problem and solution"}<ArrowUpRight className="size-4" /></Link>
            <Link to={`/services/${presentation.serviceSlug}`} className="card-link">Explore the related service<ArrowUpRight className="size-4" /></Link>
          </div>
        </div>
      </section>
      <section className="section-shell">
        <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-8 px-page md:flex-row md:items-end" data-reveal>
          <div><p className="eyebrow">Need something similar?</p><h2 className="section-title mt-5">Simplify the same work <span className="text-gradient">in your business.</span></h2></div>
          <Link to="/contact" className="button-solid">Start a conversation <ArrowUpRight className="size-4" /></Link>
        </div>
      </section>
    </main>
  );
}
