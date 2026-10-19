import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Search, PencilRuler, Rocket } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";
import { SemanticIcon } from "../components/semantic-icon";
import { services, servicePresentation } from "../lib/site-data";

export default function ServiceDetailPage() {
  useReveal();
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);
  if (!service) return <main id="main-content" tabIndex={-1} className="page-hero"><div className="mx-auto max-w-site px-page"><p className="eyebrow">Service not found</p><h1 className="display-title mt-6">That service isn’t here.</h1><Link to="/services" className="button-outline mt-10">Back to services</Link></div></main>;
  const Icon = service.icon;
  const presentation = servicePresentation[service.slug]!;
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="page-hero service-detail-hero">
        <div className="mx-auto max-w-site px-page">
          <Link to="/services" className="card-link"><ArrowLeft className="size-4" /> All services</Link>
          <div className="service-detail-layout mt-12">
            <div><div className="product-detail-icon"><Icon className="size-8" /></div><p className="product-category mt-8">Service</p><h1 className="display-title mt-4 max-w-5xl">{service.title}</h1><p className="mt-8 max-w-3xl text-xl leading-9 text-muted-foreground">{service.description}</p></div>
            <div className="service-detail-image"><img src={service.image} alt={service.imageAlt} /></div>
          </div>
        </div>
      </section>
      <section className="section-shell">
        <div className="mx-auto grid max-w-site gap-6 px-page lg:grid-cols-2">
          <div className="product-detail-panel" data-reveal><p className="eyebrow">What we help you do</p><div className="mt-7 grid gap-4">{service.details.map((item, index) => <div key={item} className="detail-list-item"><SemanticIcon icon={presentation.coverage[index]!} /><span>{item}</span></div>)}</div></div>
          <div className="product-detail-panel product-detail-panel-accent" data-reveal><p className="eyebrow">What you receive</p><div className="mt-7 grid gap-4">{service.deliverables.map((item, index) => <div key={item} className="detail-list-item"><SemanticIcon icon={presentation.deliverables[index]!} /><span>{item}</span></div>)}</div></div>
        </div>
      </section>
      <section className="section-shell border-y border-border bg-surface">
        <div className="mx-auto max-w-site px-page">
          <p className="eyebrow">How we work</p>
          <div className="mt-10 grid gap-0 border-t border-border md:grid-cols-3">{["Understand the problem", "Agree on the solution", "Build, test and launch"].map((title, index) => <div key={title} className="process-step"><span>0{index + 1}</span><SemanticIcon icon={[Search, PencilRuler, Rocket][index]!} badge /><h2>{title}</h2><p>{presentation.steps[index]}</p></div>)}</div>
        </div>
      </section>
      <section className="section-shell service-faq"><div className="mx-auto max-w-site px-page"><p className="eyebrow">Before we begin</p><h2 className="section-title mt-5">Questions about <span className="text-gradient">this service.</span></h2><div className="faq-list">
        <details><summary>When is {service.title.toLowerCase()} useful?</summary><p>{service.description} Share your current workflow so we can assess whether this is the right fit.</p></details>
        <details><summary>What should I share for an initial discussion?</summary><p>Tell us who will use the solution, what they do now, the tools involved and your intended result. We clarify scope and constraints before agreeing a timeline or cost.</p></details>
        <details><summary>What does the planned handoff include?</summary><p>Typical deliverables include {service.deliverables.join(", ").toLowerCase()}. The exact scope, responsibilities and any ongoing support are agreed for your project.</p></details>
      </div></div></section>
      <section className="section-shell"><div className="mx-auto flex max-w-site flex-col items-start justify-between gap-8 px-page md:flex-row md:items-end"><div><p className="eyebrow">Let’s work together</p><h2 className="section-title mt-5">Tell us what you need to <span className="text-gradient">build or improve.</span></h2></div><Link to="/contact" className="button-solid">Talk to our team <ArrowUpRight className="size-4" /></Link></div></section>
    </main>
  );
}
