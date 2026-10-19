import { BookOpen, ChartNoAxesCombined, ChefHat, CircleCheck, Cloud, CreditCard, Download, FileChartColumnIncreasing, FilePlus2, Flag, GitBranch, History, ListFilter, ListPlus, MapPin, MessageSquareReply, MousePointer2, Package, PackagePlus, PackageSearch, PanelsTopLeft, Plug, RefreshCw, Search, Send, Table2, Tags, Timer, UserPlus, UserRoundCheck, Wrench } from "lucide-react";
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
    features: ["Fast order taking and table management", "Kitchen order tickets (KOT) and workflow", "Billing, discounts and tax rules", "Day-end sales and payment reports"],
    outcomes: ["Faster order-to-bill flow", "Fewer billing mistakes", "Clearer kitchen coordination"],
    caseStudy: {
      context: "Restaurants and cafés coordinating orders, kitchen tickets and payments.",
      challenge: "Staff switch between separate tools for orders, kitchen tickets and billing. During busy shifts, this makes it harder to keep everyone up to date.",
      solution: "Bring tables, orders, kitchen tickets and payments into one POS. Staff enter the order once and follow it through to checkout.",
      workflow: ["Select table or counter", "Build order with modifiers", "Send kitchen order ticket", "Settle bill and payment", "Review shift and day-end reports"],
      result: "The intended result is a smoother order-to-payment process, with fewer repeated entries and a clear sales summary at shift end."
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
      context: "Retail shops and distributors managing sales, purchases and stock.",
      challenge: "Sales and purchases are recorded separately from stock. Staff must update spreadsheets and check availability by hand.",
      solution: "Connect invoices and purchase entries to one product catalogue. Each transaction updates the stock record and appears in the reports.",
      workflow: ["Create product catalogue", "Record purchases", "Sell and invoice", "Auto-adjust stock", "Review inventory and margins"],
      result: "The intended result is a current view of sales and stock, helping staff check availability and plan replenishment."
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
      context: "Clinics and hospitals coordinating front-desk, clinical and billing work.",
      challenge: "Patient details are spread across departments. Staff have to find or re-enter information as a patient moves from registration to treatment and billing.",
      solution: "Connect registration, appointments, treatment notes and bills to one patient record, with views for each team’s role.",
      workflow: ["Register patient", "Book appointment", "Open encounter", "Record treatment", "Generate bill and reports"],
      result: "The intended result is less repeated administrative work and a clearer patient journey across departments."
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
      context: "Small-business owners and finance teams recording daily receipts and expenses.",
      challenge: "Paper registers and scattered notes make it hard to check balances, close the day and find older entries.",
      solution: "Record income and expenses in one cashbook. Group entries by account and category, then review balances and date-based reports.",
      workflow: ["Open daily book", "Record receipt or expense", "Choose account/category", "Review balance", "Export or share report"],
      result: "The intended result is a daily record that is easier to keep up to date, check and share."
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
      context: "Finance teams tracking incoming and outgoing cheques.",
      challenge: "Cheque details are scattered across registers, spreadsheets and messages. Due dates and clearance status are difficult to follow.",
      solution: "Keep the amount, party, bank, due date and status in one record. Give the team a single list of pending and cleared cheques.",
      workflow: ["Create cheque record", "Assign due date", "Track pending items", "Update clearance status", "Review outstanding report"],
      result: "The intended result is clearer payment tracking and more consistent follow-up on cheques that are due."
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
      context: "Jewellery retailers managing item details, stock and customer purchases.",
      challenge: "Staff need to track purity, item attributes and transaction history alongside daily sales. Separate records make tracing an item difficult.",
      solution: "Link item details, customer purchases, bills and stock movements. Keep each item’s history available from the same system.",
      workflow: ["Register item", "Record purity and attributes", "Create customer transaction", "Bill and update stock", "Review history"],
      result: "The intended result is easier item tracing and more consistent stock and customer records."
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
      context: "Managers and teams assigning tasks across people, projects and deadlines.",
      challenge: "Tasks are assigned through chat and spreadsheets. Managers cannot easily see who owns the work, when it is due or what is delayed.",
      solution: "Keep staff records, task owners, priorities, due dates and progress together. Use a shared workload view to follow up.",
      workflow: ["Create team structure", "Assign task", "Set priority and due date", "Update progress", "Review team workload"],
      result: "The intended result is clear ownership and progress visibility, with fewer status checks spread across messages."
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
      context: "Dispatch and operations teams coordinating consignments, drivers and deliveries.",
      challenge: "Shipment updates and assignments are kept in different places. Teams must chase people to confirm who is responsible and where a delivery stands.",
      solution: "Create one consignment record with vehicle and driver assignments, dispatch milestones and delivery status.",
      workflow: ["Create consignment", "Assign vehicle/driver", "Dispatch shipment", "Update milestones", "Close delivery"],
      result: "The intended result is a shared shipment view that makes dispatch coordination and customer updates simpler."
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
      context: "Support and sales teams handling repeat questions and incoming enquiries.",
      challenge: "Teams answer the same questions repeatedly, while enquiries may arrive when nobody is available to respond.",
      solution: "Let an assistant answer from approved information, ask qualification questions, capture context and hand the conversation to a person when needed.",
      workflow: ["Visitor starts chat", "Assistant understands intent", "Answer or qualify", "Capture useful context", "Route to human when needed"],
      result: "The intended result is faster first-line assistance and better enquiry capture, while keeping people available for questions that need judgment."
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
  { slug: "custom-software-development", icon: Code2, title: "Custom Software Development", description: "Replace scattered tools with software for your orders, records, approvals and reporting.", details: ["Product architecture", "Web application engineering", "Connections between applications (APIs)"], deliverables: ["Discovery and technical plan", "Responsive application", "Testing and deployment"], image: webImage, imageAlt: "Software source code open in a developer workspace", },
  { slug: "ui-ux-product-design", icon: Sparkles, title: "UI/UX & Product Design", description: "Make complex tasks easier with clear screens, simple navigation and prototypes you can test.", details: ["UX flows and wireframes", "Design systems", "Interactive prototypes"], deliverables: ["User journeys", "High-fidelity screens", "Reusable components"], image: uxImage, imageAlt: "Interface wireframes used during a product design workshop", },
  { slug: "web-development", icon: Globe2, title: "Web Development", description: "Build a website or web app that works across devices and is easy to use and update.", details: ["React and modern frontend", "Content management and application connections", "Performance optimisation"], deliverables: ["Responsive frontend", "SEO-ready structure", "Deployment setup"], image: marketingImage, imageAlt: "Creative team discussing a web project", },
  { slug: "mobile-app-development", icon: Smartphone, title: "Mobile App Development", description: "Give customers or staff an iOS and Android app for the tasks they need to complete on the go.", details: ["React Native apps", "Mobile-first UX", "App release support"], deliverables: ["iOS and Android app", "Reusable UI system", "Release-ready builds"], image: mobileImage, imageAlt: "Person using a mobile application", },
  { slug: "ecommerce-solutions", icon: ShoppingCart, title: "E-commerce Solutions", description: "Bring products, checkout, payments and order management together in an online store.", details: ["Storefront development", "Payments and integrations", "Commerce analytics"], deliverables: ["Product catalogue", "Checkout flow", "Operations integration"], image: ecommerceImage, imageAlt: "Small business owner packing an online order", },
  { slug: "business-automation", icon: Workflow, title: "Business Automation", description: "Move data between your tools, send updates and route approvals without repeating the same manual steps.", details: ["Workflow mapping", "Automation rules", "Notifications and handoffs"], deliverables: ["Automation blueprint", "Integrated workflows", "Monitoring approach"], image: toolingImage, imageAlt: "Professional team reviewing operations together", },
  { slug: "ai-chatbot-development", icon: Bot, title: "AI & Chatbot Development", description: "Answer repeat questions, capture enquiries and help staff find approved information, with human handoff when needed.", details: ["Knowledge-based assistants", "Lead qualification", "Human handoff flows"], deliverables: ["Conversation design", "Chat interface", "Knowledge workflow"], image: communityImage, imageAlt: "Team collaborating on an AI-enabled workflow", },
  { slug: "cloud-devops", icon: CloudCog, title: "Cloud & DevOps", description: "Set up hosting, automated releases and monitoring so your software is easier to deploy and maintain.", details: ["Cloud architecture", "Automated build and release pipelines (CI/CD)", "Monitoring and environments"], deliverables: ["Deployment pipeline", "Environment strategy", "Operational documentation"], image: cafeImage, imageAlt: "Modern operations environment", },
  { slug: "maintenance-support", icon: Headphones, title: "Maintenance & Product Support", description: "Keep software useful after launch with bug fixes, updates, performance checks and planned improvements.", details: ["Bug fixes and upgrades", "Performance reviews", "Feature iterations"], deliverables: ["Support backlog", "Release cycles", "Health checks"], image: webImage, imageAlt: "Developer workspace used for product maintenance", },
];

export const differentiators = [
  { number: "01", icon: ShieldCheck, title: "Built for the real world", text: "We start with the tasks your team needs to complete and the systems they already use. Scope follows the problem." },
  { number: "02", icon: Layers3, title: "One team, end to end", text: "Planning, design and development share the same requirements, so decisions stay connected from the first discussion to launch." },
  { number: "03", icon: Gauge, title: "Progress you can see", text: "Review working software at agreed milestones. See what is ready, what comes next, and where a decision is needed." },
];

export const process = [
  { number: "01", icon: Compass, title: "Understand", text: "Tell us what your team does today, where work gets stuck, and what needs to improve. We agree on priorities and a build plan.", outcomes: ["Product priorities", "User insights", "Technical direction"] },
  { number: "02", icon: PenTool, title: "Design", text: "Review the proposed screens, workflow and technical approach. Agree on the solution before development begins.", outcomes: ["UX prototypes", "Visual system", "Solution architecture"] },
  { number: "03", icon: Rocket, title: "Build & launch", text: "Review working features as we build. We test the key workflows, prepare the release and help your team get started.", outcomes: ["Production releases", "Quality assurance", "Launch support"] },
];

export const technologyGroups = [
  { title: "Frontend", description: "The screens people use on the web and on mobile. Selected to fit your devices, workflows and maintenance needs.", items: [{ name: "React", icon: Code2 }, { name: "Next.js", icon: Layers3 }, { name: "TypeScript", icon: Code2 }, { name: "Tailwind CSS", icon: Sparkles }, { name: "React Native", icon: Smartphone }, { name: "Vue.js", icon: Code2 }] },
  { title: "Backend", description: "The services behind logins, business rules and integrations. Selected for the work your application needs to handle.", items: [{ name: "Node.js", icon: ServerCog }, { name: "Express", icon: Boxes }, { name: "NestJS", icon: ServerCog }, { name: "REST & GraphQL", icon: Workflow }, { name: "Python", icon: Code2 }, { name: "Django", icon: ServerCog }] },
  { title: "Database", description: "Where your records are stored and retrieved. Selected for the structure, volume and access patterns of your data.", items: [{ name: "PostgreSQL", icon: Database }, { name: "MongoDB", icon: Database }, { name: "Redis", icon: Activity }, { name: "Firebase", icon: CloudCog }, { name: "MySQL", icon: Database }, { name: "SQLite", icon: Database }] },
  { title: "DevOps & Hosting", description: "Where your software runs and how updates reach users. Selected for deployment, monitoring and operational needs.", items: [{ name: "AWS", icon: CloudCog }, { name: "Vercel", icon: Globe2 }, { name: "Docker", icon: Boxes }, { name: "GitHub Actions", icon: Workflow }, { name: "Cloudflare", icon: ShieldCheck }, { name: "Kubernetes", icon: CloudCog }] },
];

export const clientNames = ["HOSPITALITY", "RETAIL", "HEALTHCARE", "FINANCE", "WORKFORCE", "LOGISTICS"];

// Compatibility aliases for existing homepage sections.
const projectImages: Record<string, string> = { "restaurant-pos": commerceImage, "billing-inventory": cafeImage, "hospital-management": communityImage };

export const projects = products.slice(0, 3).map((product) => ({
  slug: product.slug,
  image: projectImages[product.slug],
  imageAlt: product.title,
  category: product.category,
  name: product.shortTitle,
  icon: product.icon,
  title: product.title,
  result: product.outcomes[0],
  summary: product.description,
  challenge: product.caseStudy.challenge,
  approach: product.caseStudy.solution,
}));
export type ProductPresentation = { workflow: readonly LucideIcon[]; outcomes: readonly LucideIcon[]; serviceSlug: string };
export const productPresentation: Record<string, ProductPresentation> = {
  "restaurant-pos": { workflow: [Table2, ListPlus, ChefHat, CreditCard, ChartNoAxesCombined], outcomes: [Timer, ShieldCheck, Users], serviceSlug: "custom-software-development" },
  "billing-inventory": { workflow: [Package, PackagePlus, ReceiptText, RefreshCw, ChartNoAxesCombined], outcomes: [PackageSearch, FileCheck2, Timer], serviceSlug: "custom-software-development" },
  "hospital-management": { workflow: [UserPlus, CalendarDays, ClipboardList, HeartPulse, ReceiptText], outcomes: [ClipboardList, Users, Timer], serviceSlug: "custom-software-development" },
  "daily-book": { workflow: [BookOpen, ReceiptText, Tags, WalletCards, Download], outcomes: [BookOpen, CheckCheck, ChartNoAxesCombined], serviceSlug: "custom-software-development" },
  "check-management": { workflow: [FilePlus2, CalendarDays, ListChecks, CircleCheck, FileChartColumnIncreasing], outcomes: [CalendarDays, CircleCheck, Database], serviceSlug: "business-automation" },
  "jewellery-management": { workflow: [Gem, ScanLine, Users, ReceiptText, History], outcomes: [ScanLine, Users, Settings2], serviceSlug: "custom-software-development" },
  "employee-tasking": { workflow: [Users, ClipboardList, Flag, ListChecks, ChartNoAxesCombined], outcomes: [UserRoundCheck, ListChecks, CircleCheck], serviceSlug: "business-automation" },
  "logistics-management": { workflow: [Package, Truck, Send, MapPin, PackageCheck], outcomes: [MapPin, Truck, Timer], serviceSlug: "business-automation" },
  "business-chatbots": { workflow: [MessageSquare, Bot, ListFilter, ClipboardList, UserRoundCheck], outcomes: [MessageSquareReply, ClipboardList, Timer], serviceSlug: "ai-chatbot-development" },
};

export type ServicePresentation = { coverage: readonly LucideIcon[]; deliverables: readonly LucideIcon[]; steps: readonly string[] };
export const servicePresentation: Record<string, ServicePresentation> = {
  "custom-software-development": { coverage: [Layers3, Code2, Plug], deliverables: [Compass, PanelsTopLeft, FileCheck2], steps: ["Map the users, records, permissions and business rules your application needs.", "Review the proposed screens, data structure and connections to existing tools.", "Review working features, test the main business workflows and prepare the release."] },
  "ui-ux-product-design": { coverage: [Workflow, PanelsTopLeft, MousePointer2], deliverables: [MapPinned, PanelsTopLeft, Boxes], steps: ["Identify the users, their tasks and the points where the current experience causes confusion.", "Review user journeys, wireframes and a clickable prototype before final screen design.", "Refine the screens and reusable components, then prepare the design handoff for development."] },
  "web-development": { coverage: [Code2, Plug, Gauge], deliverables: [PanelsTopLeft, Search, Cloud], steps: ["Clarify the pages, audience, content and systems the website needs to connect to.", "Review page structure, responsive designs and content-management requirements.", "Build the pages, test links and layouts, and prepare deployment and future updates."] },
  "mobile-app-development": { coverage: [Smartphone, Smartphone, Send], deliverables: [Smartphone, PanelsTopLeft, PackageCheck], steps: ["Identify which tasks people need to complete on their phones and which devices they use.", "Review mobile flows, screens and the integrations the app needs.", "Build and test the app, prepare release-ready builds and agree the release requirements."] },
  "ecommerce-solutions": { coverage: [ShoppingCart, CreditCard, ChartNoAxesCombined], deliverables: [Package, ShoppingCart, Plug], steps: ["Map the catalogue, customer journey, payments and order-handling process.", "Review the storefront, checkout and connections to operations tools.", "Build and test browsing, checkout and order flows before preparing the store for launch."] },
  "business-automation": { coverage: [Workflow, Settings2, MessageSquare], deliverables: [ClipboardList, Plug, Activity], steps: ["Map the manual task, its trigger, the data involved and where a person must approve.", "Agree the rules, connected systems, exception handling and handoff points.", "Build the workflow, test normal and failure paths, and document monitoring and ownership."] },
  "ai-chatbot-development": { coverage: [Bot, ListFilter, UserRoundCheck], deliverables: [MessageSquare, Bot, BookOpen], steps: ["Identify the questions, approved information and handoff needs for the assistant.", "Review conversation flows, knowledge sources and the limits of automated responses.", "Build and test the assistant against agreed examples, including escalation to a person."] },
  "cloud-devops": { coverage: [Cloud, GitBranch, Activity], deliverables: [GitBranch, Cloud, BookOpen], steps: ["Review the application, hosting needs, environments and current release process.", "Agree deployment steps, access requirements and monitoring responsibilities.", "Set up and test the release pipeline, then document environments and operational checks."] },
  "maintenance-support": { coverage: [Wrench, Gauge, RefreshCw], deliverables: [ClipboardList, GitBranch, Activity], steps: ["Review the existing product, known issues and the improvements that matter most.", "Agree a prioritized backlog, review points and the checks needed for each change.", "Implement and test agreed changes, review product health and plan subsequent releases."] },
};
