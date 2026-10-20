import { products, services } from "./site-data";

export const siteOrigin = "https://codematic-labs.vercel.app";
export type RouteMetadata = { title: string; description: string; path: string; noindex?: boolean; type?: "website" | "article" };
const pages: Record<string, [string, string]> = {
  "/": ["Business Software, Apps & Automation", "Codematic Labs builds business software, websites, mobile apps and AI tools to simplify daily work. Explore our services and examples of solutions we can build."],
  "/products": ["Business Software We Can Build", "Explore illustrative solutions we can build for orders, stock, patient records, finances, teams, deliveries and customer enquiries."],
  "/services": ["Software Development & Design Services", "Explore custom software, UI/UX design, websites, mobile apps, automation, AI assistants, cloud operations and product support."],
  "/case-studies": ["Illustrative Software Examples", "See nine illustrative solutions we can build, from the business problem to the proposed workflow and intended benefit. These are not measured client results."],
  "/why-us": ["Our Team Approach & Delivery Process", "See how Codematic Labs connects planning, design and development through a clear process with working progress and launch preparation."],
  "/tech-stack": ["Technology Stack", "Explore the tools we use for screens, application features, data storage and hosting, chosen around your users and the tools you already use."],
  "/contact": ["Discuss Your Software Project", "Tell Codematic Labs about the product or workflow you want to improve. Share your users, existing tools, timeline and desired outcome."],
};
export const publicPaths = [
  ...Object.keys(pages),
  ...products.flatMap(p => [`/products/${p.slug}`, `/case-studies/${p.slug}`]),
  ...services.map(s => `/services/${s.slug}`),
];
export function getRouteMetadata(pathname: string): RouteMetadata {
  const path = pathname.replace(/\/+$/, "") || "/";
  const page = pages[path];
  if (page) return { title: `${page[0]} | Codematic Labs`, description: page[1], path };
  const [kind, slug] = path.slice(1).split("/");
  const product = products.find(p => p.slug === slug);
  if (path.split("/").length === 3 && product && (kind === "products" || kind === "case-studies")) {
    return {
      title: `${product.title}${kind === "case-studies" ? " — Example Solution" : " — Solution We Can Build"} | Codematic Labs`,
      description: kind === "case-studies" ? `${product.title}: an illustrative solution we can build, with a proposed workflow and intended benefits. Not measured client results.` : `A solution we can build: ${product.description}`,
      path,
      type: kind === "case-studies" ? "article" : "website",
    };
  }
  const service = services.find(s => s.slug === slug);
  if (kind === "services" && path.split("/").length === 3 && service) return { title: `${service.title} | Codematic Labs`, description: service.description, path };
  return { title: "Page Not Found | Codematic Labs", description: "This page could not be found. Explore Codematic Labs software solutions and services.", path, noindex: true };
}
