import { SemanticIcon } from "../components/semantic-icon";
import { technologyLogos } from "../lib/technology-logos";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, MoveRight } from "lucide-react";
import heroImage from "../assets/hero.jpg";
import { AnimatedWords } from "../components/motion";
import { useReveal } from "../hooks/use-reveal";
import { process, projects, services, technologyGroups } from "../lib/site-data";

export default function HomePage() {
  useReveal();

  return (
    <main id="main-content" tabIndex={-1} className="overflow-x-clip">
      <section className="home-hero">
        <img src={heroImage} alt="Software developer working across multiple monitors in a dark studio" width={2000} height={1500} className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[760px] max-w-site items-end px-page pb-16 pt-36 sm:pb-24 lg:min-h-[850px]">
          <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
            <div className="max-w-[980px]">
              <p className="index-label mb-7"><span>01</span> Software, apps & automation</p>
              <h1 className="display-title max-w-6xl"><AnimatedWords text="Software that makes work simpler." accentFrom={2} /></h1>
            </div>
            <div className="hero-brief">
              <p className="text-base leading-7 text-muted-foreground">We build business software, websites, mobile apps and AI tools. Tell us what slows your team down. We’ll help you turn it into a clear, working solution.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/contact" className="button-solid">Talk to our team <ArrowUpRight className="size-4" /></Link>
                <Link to="/case-studies" className="button-quiet">See our work <MoveRight className="size-4" /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-mark" aria-hidden="true"><span>Scroll to explore</span><i /></div>
      </section>

      <LogoMarquee />

      <section className="section-shell">
        <div className="mx-auto max-w-site px-page">
          <div className="section-heading" data-reveal>
            <div><p className="index-label"><span>02</span> What we build</p><h2 className="section-title mt-5">Tools for your <span className="text-gradient">daily work.</span></h2></div>
            <p>Choose the service you need, see what it includes, and discuss how it fits your business.</p>
          </div>
          <div className="capability-index mt-14">
            {services.map(({ slug, icon: Icon, title, description }, index) => (
              <article key={title} className="capability-row group" data-reveal>
                <span className="capability-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="capability-icon"><SemanticIcon icon={Icon} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={`/services/${slug}`} aria-label={`Explore ${title}`} className="capability-link"><ArrowUpRight className="size-5" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <KineticShowcase />

      <section className="section-shell editorial-band">
        <div className="mx-auto max-w-site px-page">
          <div className="section-heading" data-reveal>
            <div><p className="index-label"><span>03</span> Our method</p><h2 className="section-title mt-5">Understand. Design. <span className="text-gradient">Build and launch.</span></h2></div>
            <p>First, we understand the problem. Then we agree on the solution, build it in stages, and help your team use it.</p>
          </div>
          <div className="process-grid mt-14">
            {process.map(({ number, icon: Icon, title, text, outcomes }) => (
              <article key={number} className="process-card" data-reveal>
                <div className="flex items-start justify-between"><span className="process-number">{number}</span><SemanticIcon icon={Icon} className="size-6 text-primary-glow" /></div>
                <h3>{title}</h3><p>{text}</p>
                <ul>{outcomes.map((item) => <li key={item}><SemanticIcon icon={Check} className="size-4" />{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <Link to="/why-us" className="button-outline mt-10">See how we deliver <ArrowRight className="size-4" /></Link>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-site px-page">
          <div className="section-heading" data-reveal>
            <div><p className="index-label"><span>04</span> Selected work</p><h2 className="section-title mt-5">Everyday problems. <span className="text-gradient">Practical solutions.</span></h2></div>
            <div><p className="sample-note">Illustrative product examples. Benefits shown are intended outcomes, not measured client results.</p><Link to="/case-studies" className="card-link mt-5">View all projects <ArrowRight className="size-4" /></Link></div>
          </div>
          <div className="project-editorial-grid mt-12">
            {projects.map((project, index) => (
              <Link key={project.slug} to={`/case-studies/${project.slug}`} className={`project-editorial-card group project-card-${index + 1}`} data-reveal>
                <div className="media-frame photo-treatment"><img src={project.image} alt={project.imageAlt} width={1800} height={1200} loading="lazy" /></div>
                <div className="project-card-copy"><div><p className="project-category-with-icon"><SemanticIcon icon={project.icon} />{project.category}</p><span>{project.result}</span></div><h3>{project.title}</h3><span className="project-name">{project.name}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}

const loopTechnologies = technologyGroups.flatMap(group => group.items.map(({ name }) => ({ name, logo: technologyLogos[name] })));
const technologyDescription = loopTechnologies.map(({ name }) => name).join(", ");

function TechnologyTrack({ reverse = false }: { reverse?: boolean }) {
  return <div className={`custom-icon-track${reverse ? " custom-icon-track-reverse" : ""}`} aria-hidden="true">
    {[0, 1].map(copy => <div className="custom-icon-set" data-loop-copy={copy} key={copy}>
      {loopTechnologies.map(({ name, logo }) => <span className="custom-icon-tile brand-loop-tile" key={name} title={name}><img src={`/technology/${logo}.svg`} alt="" width={32} height={32} decoding="async" /></span>)}
    </div>)}
  </div>;
}

function LogoMarquee() {
  return <section className="trust-band custom-workflow-band">
    <div className="mx-auto grid max-w-site gap-7 px-page md:grid-cols-[210px_1fr] md:items-center">
      <p className="index-label"><span>Built for</span> Business workflows</p>
      <div id="business-workflow-loop" className="custom-icon-viewport" role="img" tabIndex={0} aria-label={`Technologies for business workflows: ${technologyDescription}`}>
        <TechnologyTrack />
      </div>
    </div>
  </section>;
}

function KineticShowcase() {
  return <section className="loop-section custom-service-loop" aria-label="Codematic Labs capabilities in motion">
    <div className="loop-heading mx-auto max-w-site px-page" data-reveal>
      <p className="index-label"><span>Built to move</span> One connected team</p>
      <p>From understanding your workflow to designing, building and supporting the solution.</p>
    </div>
    <div id="capability-loop" className="custom-icon-viewport" role="img" tabIndex={0} aria-label={`Our connected technology stack: ${technologyDescription}`}>
      <TechnologyTrack reverse />
    </div>
  </section>;
}

function CTA() {
  return <section className="cta-band"><div className="cta-rule" aria-hidden="true" /><div className="relative mx-auto grid max-w-site gap-10 px-page lg:grid-cols-[1fr_auto] lg:items-end" data-reveal><div><p className="index-label"><span>05</span> Start a project</p><h2 className="section-title mt-5 max-w-4xl">What would you like to <span className="text-gradient">simplify?</span></h2></div><Link to="/contact" className="button-solid">Start a conversation <ArrowUpRight className="size-4" /></Link></div></section>;
}