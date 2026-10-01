import {
  Activity, Bot, Boxes, BriefcaseBusiness, CalendarDays, CheckCheck, ClipboardList,
  CloudCog, Code2, Coins, Compass, Database, FileCheck2, Gem, Gauge, Globe2, Headphones, HeartPulse,
  KanbanSquare, LayoutDashboard, Layers3, LineChart, ListChecks, MapPinned, MessageSquare,
  PackageCheck, PenTool, ReceiptText, Rocket, ScanLine, ServerCog, Settings2, ShieldCheck,
  ShoppingCart, Smartphone, Sparkles, Stethoscope, Truck, Users, WalletCards,
  Workflow, type LucideIcon,
} from "lucide-react";
import commerceImage from "../assets/project-commerce.jpg";
import cafeImage from "../assets/project-cafe.jpg";
import communityImage from "../assets/project-community.jpg";
import webImage from "../assets/service-web.jpg";
import uxImage from "../assets/service-ux.jpg";
import ecommerceImage from "../assets/service-commerce.jpg";
import toolingImage from "../assets/service-tooling.jpg";
import mobileImage from "../assets/service-mobile.jpg";
import marketingImage from "../assets/service-marketing.jpg";

export type Product = {
  slug: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  audience: string;
  features: string[];
  outcomes: string[];
  caseStudy: {
    context: string;
    challenge: string;
    solution: string;
    workflow: string[];
    result: string;
  };
};

export const products: Product[] = [
  {
    slug: "restaurant-pos",
    icon: ReceiptText,
    title: "Restaurant POS & Billing",
    shortTitle: "Restaurant POS",
    category: "Hospitality",
    description: "A fast point-of-sale platform for restaurants, cafés, cloud kitchens and multi-counter operations.",
    audience: "Restaurants, cafés, food courts and quick-service teams",
    features: ["Fast order taking and table management", "KOT and kitchen workflow", "Billing, discounts and tax rules", "Day-end sales and payment reports"],
    outcomes: ["Faster order-to-bill flow", "Fewer billing mistakes", "Clearer kitchen coordination"],
    caseStudy: {
      context: "Built around busy service-floor workflows where every extra tap can slow a queue.",
      challenge: "Staff needed ordering, KOT, billing and reporting in one focused interface instead of switching between disconnected tools.",
      solution: "We shaped a role-aware POS workflow around tables, orders, kitchen tickets, payments and shift closing, with the most common actions always within reach.",
      workflow: ["Select table or counter", "Build order with modifiers", "Send KOT to kitchen", "Settle bill and payment", "Review shift and day-end reports"],
      result: "A focused operations system designed to reduce friction during peak service while keeping managers in control of the numbers."
    }
  },
  {
    slug: "billing-inventory",
    icon: Boxes,
    title: "Billing & Inventory",
    shortTitle: "Billing + Inventory",
    category: "Retail",
    description: "Connected billing and stock control for shops that need accurate inventory without spreadsheet overhead.",
    audience: "Retail stores, distributors and growing local businesses",
    features: ["GST-ready invoice workflows", "Purchase and stock entries", "Low-stock alerts and adjustments", "Customer and supplier ledgers"],
    outcomes: ["Better stock visibility", "Cleaner purchase records", "Quicker checkout"],
    caseStudy: {
      context: "Designed for businesses where sales, purchases and stock movement must tell the same story.",
      challenge: "Manual stock updates made it difficult to know what was actually available and which products needed replenishment.",
      solution: "We connected billing, purchase entry, inventory movement and reporting around a single product catalogue and transaction history.",
      workflow: ["Create product catalogue", "Record purchases", "Sell and invoice", "Auto-adjust stock", "Review inventory and margins"],
      result: "A practical retail operating layer that turns daily transactions into a dependable view of stock and sales."
    }
  },
  {
    slug: "hospital-management",
    icon: Stethoscope,
    title: "Hospital Management System",
    shortTitle: "Hospital Management",
    category: "Healthcare",
    description: "A modular hospital workflow covering registration, appointments, clinical records, billing and reporting.",
    audience: "Clinics, hospitals and specialty healthcare centres",
    features: ["Patient registration and profiles", "Appointments and doctor schedules", "Treatment and clinical records", "Billing, pharmacy and reports"],
    outcomes: ["One patient record", "Clearer department workflows", "Faster administrative work"],
    caseStudy: {
      context: "Built as a modular healthcare operations platform so different departments can work from the same patient context.",
      challenge: "Front-desk, clinical and billing teams needed shared information without exposing unnecessary workflow complexity.",
      solution: "We organised the product around patient identity, encounters, appointments, treatment activity and financial transactions, with role-specific views.",
      workflow: ["Register patient", "Book appointment", "Open encounter", "Record treatment", "Generate bill and reports"],
      result: "A scalable foundation for healthcare operations with room to add specialty modules as the organisation grows."
    }
  },
  {
    slug: "daily-book",
    icon: WalletCards,
    title: "Daily Book",
    shortTitle: "Daily Book",
    category: "Finance & Operations",
    description: "A simple daily cashbook and business record system for tracking income, expenses and balances.",
    audience: "Small businesses, operators and finance teams",
    features: ["Daily income and expense entries", "Cash and account balances", "Category-wise summaries", "Date-filtered reports"],
    outcomes: ["Consistent daily records", "Faster reconciliation", "Useful business snapshots"],
    caseStudy: {
      context: "Created for owners who need financial visibility without the complexity of a full accounting suite.",
      challenge: "Paper registers and scattered notes made daily closing and historical lookup unnecessarily difficult.",
      solution: "We reduced the workflow to quick entries, clear balances, categories and searchable day-wise reports.",
      workflow: ["Open daily book", "Record receipt or expense", "Choose account/category", "Review balance", "Export or share report"],
      result: "A lightweight daily financial workflow that makes routine bookkeeping easier to maintain."
    }
  },
  {
    slug: "check-management",
    icon: CheckCheck,
    title: "Check Management System",
    shortTitle: "Check Management",
    category: "Finance",
    description: "A structured system for recording, tracking and following up on incoming and outgoing cheques.",
    audience: "Businesses managing recurring cheque collections and payments",
    features: ["Cheque issue and receipt registers", "Due-date tracking", "Status and bank details", "Follow-up and reporting views"],
    outcomes: ["Fewer missed due dates", "Clear payment status", "Centralised cheque records"],
    caseStudy: {
      context: "Designed around a simple but high-consequence operational problem: knowing what is due, when and where.",
      challenge: "Cheque details were spread across registers, messages and spreadsheets, making follow-up unreliable.",
      solution: "We created a lifecycle-based record with due dates, parties, amounts, bank information and status history.",
      workflow: ["Create cheque record", "Assign due date", "Track pending items", "Update clearance status", "Review outstanding report"],
      result: "A focused control centre for cheque operations and follow-up."
    }
  },
  {
    slug: "jewellery-management",
    icon: Gem,
    title: "Jewellery Shop Management",
    shortTitle: "Jewellery Management",
    category: "Retail",
    description: "A jewellery-focused business system for stock, customer records, billing and item-level traceability.",
    audience: "Jewellery retailers, showrooms and gold businesses",
    features: ["Item and purity details", "Customer and sales records", "Stock movement tracking", "Billing and transaction history"],
    outcomes: ["Stronger item traceability", "Better customer records", "Simpler showroom operations"],
    caseStudy: {
      context: "Jewellery operations require more detail per item than a conventional retail catalogue.",
      challenge: "Teams needed a consistent way to manage item attributes, customer transactions and stock movement.",
      solution: "We modelled products and transactions around item-level metadata while keeping billing and customer workflows quick for showroom staff.",
      workflow: ["Register item", "Record purity and attributes", "Create customer transaction", "Bill and update stock", "Review history"],
      result: "A specialised retail workflow designed around the detail and accountability jewellery businesses need."
    }
  },
  {
    slug: "employee-tasking",
    icon: KanbanSquare,
    title: "Employee Management & Tasking",
    shortTitle: "Employee Tasking",
    category: "Workforce",
    description: "A team operations platform for employee records, assignments, priorities, progress and accountability.",
    audience: "SMBs, agencies and distributed operations teams",
    features: ["Employee profiles and roles", "Task assignment and priorities", "Status and due-date tracking", "Team activity and reports"],
    outcomes: ["Clear ownership", "Better task visibility", "More consistent follow-through"],
    caseStudy: {
      context: "Built for teams that had outgrown chat messages and spreadsheets as their primary task system.",
      challenge: "Work ownership and progress were difficult to see across people, projects and deadlines.",
      solution: "We combined employee context with lightweight task boards, status transitions, priorities and reporting.",
      workflow: ["Create team structure", "Assign task", "Set priority and due date", "Update progress", "Review team workload"],
      result: "A practical work-management layer that gives managers visibility without creating process overhead."
    }
  },
  {
    slug: "logistics-management",
    icon: Truck,
    title: "Logistics Management",
    shortTitle: "Logistics",
    category: "Logistics",
    description: "A logistics operations platform for consignments, assignments, status tracking and delivery visibility.",
    audience: "Transporters, distributors and logistics operators",
    features: ["Consignment creation", "Vehicle and driver assignment", "Shipment status timeline", "Operational reports"],
    outcomes: ["Centralised shipment visibility", "Clearer dispatch workflow", "Faster status updates"],
    caseStudy: {
      context: "Designed around the movement of a consignment from booking through dispatch and delivery.",
      challenge: "Operational teams needed one view of shipment status, responsibility and delivery progress.",
      solution: "We structured the system around consignments, assignments, milestones and status history, keeping dispatch actions prominent.",
      workflow: ["Create consignment", "Assign vehicle/driver", "Dispatch shipment", "Update milestones", "Close delivery"],
      result: "A connected logistics workflow that helps teams coordinate movement and communicate status."
    }
  },
  {
    slug: "business-chatbots",
    icon: Bot,
    title: "Business Chatbots",
    shortTitle: "AI Chatbots",
    category: "AI & Automation",
    description: "Conversational assistants for customer support, lead capture, FAQs and internal knowledge workflows.",
    audience: "Businesses that want faster first-line customer and team support",
    features: ["Website chat experiences", "FAQ and knowledge responses", "Lead qualification flows", "Human handoff and conversation history"],
    outcomes: ["Faster first response", "More captured enquiries", "Reduced repetitive support work"],
    caseStudy: {
      context: "Built to turn repetitive questions into an always-available first layer of assistance.",
      challenge: "Teams were spending time answering the same questions while valuable leads could arrive outside business hours.",
      solution: "We designed a conversational flow with curated knowledge, qualification prompts, escalation paths and clear handoff points.",
      workflow: ["Visitor starts chat", "Assistant understands intent", "Answer or qualify", "Capture useful context", "Route to human when needed"],
      result: "A reusable conversational layer that can support customers without replacing the people behind the business."
    }
  }
];

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  image: string;
  imageAlt: string;
  deliverables: string[];
};

export const services: Service[] = [
  { slug: "custom-software-development", icon: Code2, title: "Custom Software Development", description: "Business software engineered around your actual workflows instead of forcing your team into generic tools.", details: ["Product architecture", "Web application engineering", "API and systems integration"], deliverables: ["Discovery and technical plan", "Responsive application", "Testing and deployment"], image: webImage, imageAlt: "Software source code open in a developer workspace", },
  { slug: "ui-ux-product-design", icon: Sparkles, title: "UI/UX & Product Design", description: "Clear product experiences that turn complex workflows into interfaces people can learn quickly.", details: ["UX flows and wireframes", "Design systems", "Interactive prototypes"], deliverables: ["User journeys", "High-fidelity screens", "Reusable components"], image: uxImage, imageAlt: "Interface wireframes used during a product design workshop", },
  { slug: "web-development", icon: Globe2, title: "Web Development", description: "Fast, responsive websites and web apps built for discoverability, accessibility and long-term iteration.", details: ["React and modern frontend", "CMS and API integration", "Performance optimisation"], deliverables: ["Responsive frontend", "SEO-ready structure", "Deployment setup"], image: marketingImage, imageAlt: "Creative team discussing a web project", },
  { slug: "mobile-app-development", icon: Smartphone, title: "Mobile App Development", description: "Cross-platform mobile products that keep the experience consistent from prototype to production.", details: ["React Native apps", "Mobile-first UX", "App release support"], deliverables: ["iOS and Android app", "Reusable UI system", "Release-ready builds"], image: mobileImage, imageAlt: "Person using a mobile application", },
  { slug: "ecommerce-solutions", icon: ShoppingCart, title: "E-commerce Solutions", description: "Commerce experiences connecting catalogue, checkout, payments and fulfilment into one journey.", details: ["Storefront development", "Payments and integrations", "Commerce analytics"], deliverables: ["Product catalogue", "Checkout flow", "Operations integration"], image: ecommerceImage, imageAlt: "Small business owner packing an online order", },
  { slug: "business-automation", icon: Workflow, title: "Business Automation", description: "Automate repetitive work and connect systems so your team can spend more time on decisions.", details: ["Workflow mapping", "Automation rules", "Notifications and handoffs"], deliverables: ["Automation blueprint", "Integrated workflows", "Monitoring approach"], image: toolingImage, imageAlt: "Professional team reviewing operations together", },
  { slug: "ai-chatbot-development", icon: Bot, title: "AI & Chatbot Development", description: "Useful conversational systems for support, lead generation and internal knowledge workflows.", details: ["Knowledge-based assistants", "Lead qualification", "Human handoff flows"], deliverables: ["Conversation design", "Chat interface", "Knowledge workflow"], image: communityImage, imageAlt: "Team collaborating on an AI-enabled workflow", },
  { slug: "cloud-devops", icon: CloudCog, title: "Cloud & DevOps", description: "Reliable deployment foundations that make shipping, monitoring and scaling less stressful.", details: ["Cloud architecture", "CI/CD pipelines", "Monitoring and environments"], deliverables: ["Deployment pipeline", "Environment strategy", "Operational documentation"], image: cafeImage, imageAlt: "Modern operations environment", },
  { slug: "maintenance-support", icon: Headphones, title: "Maintenance & Product Support", description: "Ongoing improvements, fixes and product care after launch, with a clear backlog and release rhythm.", details: ["Bug fixes and upgrades", "Performance reviews", "Feature iterations"], deliverables: ["Support backlog", "Release cycles", "Health checks"], image: webImage, imageAlt: "Developer workspace used for product maintenance", },
];

export const differentiators = [
  { number: "01", icon: ShieldCheck, title: "Built for the real world", text: "Practical decisions, durable architecture, and software your team can confidently own." },
  { number: "02", icon: Layers3, title: "One team, end to end", text: "Strategy, product design, and engineering work together from the first conversation to launch." },
  { number: "03", icon: Gauge, title: "Progress you can see", text: "Clear milestones, useful demos, and honest communication keep delivery moving and risks visible." },
];

export const process = [
  { number: "01", icon: Compass, title: "Discover", text: "Frame the right problem, align on outcomes, and create a focused delivery roadmap.", outcomes: ["Product priorities", "User insights", "Technical direction"] },
  { number: "02", icon: PenTool, title: "Design", text: "Make the experience tangible early and validate decisions before they become expensive.", outcomes: ["UX prototypes", "Visual system", "Solution architecture"] },
  { number: "03", icon: Rocket, title: "Deliver", text: "Build in visible increments, test continuously, and release dependable software.", outcomes: ["Production releases", "Quality assurance", "Launch support"] },
];

export const technologyGroups = [
  { title: "Frontend", description: "Fast, accessible interfaces that stay maintainable.", items: [{ name: "React", icon: Code2 }, { name: "Next.js", icon: Layers3 }, { name: "TypeScript", icon: Code2 }, { name: "Tailwind CSS", icon: Sparkles }, { name: "React Native", icon: Smartphone }] },
  { title: "Backend", description: "Reliable services and APIs shaped around the product.", items: [{ name: "Node.js", icon: ServerCog }, { name: "Express", icon: Boxes }, { name: "NestJS", icon: ServerCog }, { name: "REST & GraphQL", icon: Workflow }] },
  { title: "Database", description: "Data models designed for clarity, performance, and growth.", items: [{ name: "PostgreSQL", icon: Database }, { name: "MongoDB", icon: Database }, { name: "Redis", icon: Activity }, { name: "Firebase", icon: CloudCog }] },
  { title: "DevOps & Hosting", description: "Repeatable delivery, observability, and secure infrastructure.", items: [{ name: "AWS", icon: CloudCog }, { name: "Vercel", icon: Globe2 }, { name: "Docker", icon: Boxes }, { name: "GitHub Actions", icon: Workflow }, { name: "Cloudflare", icon: ShieldCheck }] },
];

export const clientNames = ["ARCLINE", "NORTHSTAR", "VANTAGE", "BRIGHTCO", "FIELDWORK", "ORBITAL"];

// Compatibility aliases for existing homepage sections.
const projectImages: Record<string, string> = { "restaurant-pos": commerceImage, "billing-inventory": cafeImage, "hospital-management": communityImage };

export const projects = products.slice(0, 3).map((product) => ({
  slug: product.slug,
  image: projectImages[product.slug],
  imageAlt: product.title,
  category: product.category,
  name: product.shortTitle,
  title: product.title,
  result: product.outcomes[0],
  summary: product.description,
  challenge: product.caseStudy.challenge,
  approach: product.caseStudy.solution,
}));