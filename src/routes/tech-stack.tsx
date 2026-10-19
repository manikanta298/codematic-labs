import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { AnimatedWords } from "../components/motion";
import { useReveal } from "../hooks/use-reveal";
import { technologyGroups } from "../lib/site-data";

const technologyLogos: Record<string, string> = {
  React: "react",
  "Next.js": "nextjs",
  TypeScript: "typescript",
  "Tailwind CSS": "tailwindcss",
  "React Native": "react",
  "Node.js": "nodejs",
  Express: "express",
  NestJS: "nestjs",
  "REST & GraphQL": "graphql",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Redis: "redis",
  Firebase: "firebase",
  AWS: "amazonwebservices",
  Vercel: "vercel",
  Docker: "docker",
  "GitHub Actions": "githubactions",
  Cloudflare: "cloudflare",
  "Vue.js": "vuejs",
  Python: "python",
  Django: "django",
  MySQL: "mysql",
  SQLite: "sqlite",
  Kubernetes: "kubernetes",
};

export default function TechPage() {
  useReveal();
  return (
    <main>
      <section className="page-hero tech-stack-hero">
        <div className="mx-auto max-w-site px-page">
          <p className="eyebrow">Tech stack</p>
          <h1 className="display-title mt-6 max-w-6xl"><AnimatedWords text="The right tools for your software." accentFrom={2} /></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">Your workflow comes first. We choose the interface, server, database and hosting tools to fit your users, integrations, budget and future maintenance needs.</p>
        </div>
      </section>
      <section className="section-shell tech-stack-section">
        <div className="mx-auto max-w-site px-page">
          <div className="tech-stack-grid">
            {technologyGroups.map((group, index) => (
              <section key={group.title} className="tech-stack-card" aria-labelledby={`tech-group-${index}`} data-reveal>
                <div className="tech-stack-card-heading">
                  <span className="tech-stack-number">{String(index + 1).padStart(2, "0")}</span>
                  <h2 id={`tech-group-${index}`}>{group.title}</h2>
                  <span className="tech-stack-count">{group.items.length} tools</span>
                </div>
                <p className="tech-stack-description">{group.description}</p>
                <ul className="tech-logo-grid">
                  {group.items.map(({ name }) => (
                    <li key={name} className="tech-logo-tile">
                      <span className="tech-logo-surface">
                        <img src={`/technology/${technologyLogos[name]}.svg`} alt="" width={48} height={48} loading="lazy" decoding="async" />
                      </span>
                      <span className="tech-logo-name">{name}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <div className="tech-stack-cta" data-reveal>
            <p>Tell us what you need to build and which systems it must connect to.</p>
            <Link to="/contact" className="button-solid">Discuss your build <ArrowUpRight className="size-4" /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
