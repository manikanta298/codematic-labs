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
    description: "Take orders, send kitchen tickets and prepare bills in one system for your restaurant or café.",
    audience: "Restaurants, cafés, food courts and quick-service teams",
    features: ["Fast order taking and table management", "Kitchen order tickets (KOT) and workflow", "Billing, discounts and tax rules", "Day-end sales and payment reports"],
    outcomes: ["Faster order-to-bill flow", "Fewer billing mistakes", "Clearer kitchen coordination"],
    caseStudy: {
      context: "Restaurants and cafés coordinating orders, kitchen tickets and payments.",
      challenge: "Staff switch between separate tools for orders, kitchen tickets and billing. During busy shifts, this makes it harder to keep everyone up to date.",
      solution: "Bring tables, orders, kitchen tickets and payments into one point-of-sale system. Staff enter the order once and follow it through to checkout.",
      workflow: ["Select table or counter", "Add items and customer requests", "Send kitchen order ticket", "Settle bill and payment", "Review shift and day-end reports"],
      result: "The intended result is a smoother order-to-payment process, with fewer repeated entries and a clear sales summary at shift end."
    }
  },
  {
    slug: "billing-inventory",
    icon: Boxes,
    title: "Billing & Inventory",
    shortTitle: "Billing + Inventory",
    category: "Retail",
    description: "Create bills, record purchases and track stock in one place for your shop or distribution business.",
    audience: "Retail stores, distributors and growing local businesses",
    features: ["Invoices with GST details", "Purchase and stock entries", "Low-stock alerts and adjustments", "Customer and supplier account records"],
    outcomes: ["Better stock visibility", "Cleaner purchase records", "Quicker checkout"],
    caseStudy: {
      context: "Retail shops and distributors managing sales, purchases and stock.",
      challenge: "Sales and purchases are recorded separately from stock. Staff must update spreadsheets and check availability by hand.",
      solution: "Connect invoices and purchase entries to one product catalogue. Each transaction updates the stock record and appears in the reports.",
      workflow: ["Create product catalogue", "Record purchases", "Sell and invoice", "Update stock after each sale", "Review stock and sales profit"],
      result: "The intended result is a current view of sales and stock, helping staff check availability and plan replenishment."
    }
  },
  {
    slug: "hospital-management",
    icon: Stethoscope,
    title: "Hospital Management System",
    shortTitle: "Hospital Management",
    category: "Healthcare",
    description: "Manage patient registration, appointments, treatment records, billing and reports in one system.",
    audience: "Clinics, hospitals and specialty healthcare centres",
    features: ["Patient registration and profiles", "Appointments and doctor schedules", "Treatment and clinical records", "Billing, pharmacy and reports"],
    outcomes: ["One patient record", "Clearer department workflows", "Faster administrative work"],
    caseStudy: {
      context: "Clinics and hospitals coordinating front-desk, clinical and billing work.",
      challenge: "Patient details are spread across departments. Staff have to find or re-enter information as a patient moves from registration to treatment and billing.",
      solution: "Connect registration, appointments, treatment notes and bills to one patient record, with views for each team’s role.",
      workflow: ["Register patient", "Book appointment", "Open the patient’s visit record", "Record treatment", "Generate bill and reports"],
      result: "The intended result is less repeated administrative work and a clearer patient journey across departments."
    }
  },
  {
    slug: "daily-book",
    icon: WalletCards,
    title: "Daily Book",
    shortTitle: "Daily Book",
    category: "Finance & Operations",
    description: "Record daily income and expenses, check balances and find past entries in one cashbook.",
    audience: "Small businesses, operators and finance teams",
    features: ["Daily income and expense entries", "Cash and account balances", "Category-wise summaries", "Date-filtered reports"],
    outcomes: ["Consistent daily records", "Easier balance checks", "Clear daily summaries"],
    caseStudy: {
      context: "Small-business owners and finance teams recording daily receipts and expenses.",
      challenge: "Paper registers and scattered notes make it hard to check balances, close the day and find older entries.",
      solution: "Record income and expenses in one cashbook. Group entries by account and category, then check balances and reports for a chosen date range.",
      workflow: ["Open daily book", "Record receipt or expense", "Choose an account and category", "Review balance", "Export or share report"],
      result: "The intended result is a daily record that is easier to keep up to date, check and share."
    }
  },
  {
    slug: "check-management",
    icon: CheckCheck,
    title: "Cheque Management System",
    shortTitle: "Cheque Management",
    category: "Finance",
    description: "Track incoming and outgoing cheques, due dates and payment status in one place.",
    audience: "Businesses managing recurring cheque collections and payments",
    features: ["Cheque issue and receipt registers", "Due-date tracking", "Status and bank details", "Follow-up and reporting views"],
    outcomes: ["Fewer missed due dates", "Clear payment status", "Centralised cheque records"],
    caseStudy: {
      context: "Finance teams tracking incoming and outgoing cheques.",
      challenge: "Cheque details are scattered across registers, spreadsheets and messages. Due dates and clearance status are difficult to follow.",
      solution: "Keep the amount, party, bank, due date and status in one record. Give the team a single list of pending and cleared cheques.",
      workflow: ["Create cheque record", "Assign due date", "Track pending items", "Update clearance status", "Review unpaid or uncleared cheques"],
      result: "The intended result is clearer payment tracking and more consistent follow-up on cheques that are due."
    }
  },
  {
    slug: "jewellery-management",
    icon: Gem,
    title: "Jewellery Shop Management",
    shortTitle: "Jewellery Management",
    category: "Retail",
    description: "Manage jewellery items, purity details, customer purchases, bills and stock history in one place.",
    audience: "Jewellery retailers, showrooms and gold businesses",
    features: ["Item and purity details", "Customer and sales records", "Stock movement tracking", "Billing and transaction history"],
    outcomes: ["Easier item tracking", "Better customer records", "Simpler showroom operations"],
    caseStudy: {
      context: "Jewellery retailers managing item details, stock and customer purchases.",
      challenge: "Staff need to track purity, item attributes and transaction history alongside daily sales. Separate records make tracing an item difficult.",
      solution: "Link item details, customer purchases, bills and stock movements. Keep each item’s history available from the same system.",
      workflow: ["Register item", "Record purity and item details", "Create customer transaction", "Bill and update stock", "Review history"],
      result: "The intended result is easier item tracing and more consistent stock and customer records."
    }
  },
  {
    slug: "employee-tasking",
    icon: KanbanSquare,
    title: "Employee Management & Tasking",
    shortTitle: "Employee Tasking",
    category: "Workforce",
    description: "Keep employee records, assign tasks and see who is responsible, what is due and how work is progressing.",
    audience: "Small businesses, agencies and teams working across locations",
    features: ["Employee profiles and roles", "Task assignment and priorities", "Status and due-date tracking", "Team activity and reports"],
    outcomes: ["Clear task ownership", "A shared view of task progress", "More consistent follow-through"],
    caseStudy: {
      context: "Managers and teams assigning tasks across people, projects and deadlines.",
      challenge: "Tasks are assigned through chat and spreadsheets. Managers cannot easily see who owns the work, when it is due or what is delayed.",
      solution: "Keep staff records, task owners, priorities, due dates and progress together. See each person’s tasks and progress in one shared view.",
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
    description: "Record shipments, assign drivers and vehicles, and track dispatch and delivery updates in one place.",
    audience: "Transporters, distributors and logistics operators",
    features: ["Shipment records", "Vehicle and driver assignment", "Shipment status timeline", "Operational reports"],
    outcomes: ["Shipment updates in one place", "Clearer dispatch steps", "Faster status updates"],
    caseStudy: {
      context: "Dispatch and operations teams coordinating shipments, drivers and deliveries.",
      challenge: "Shipment updates and assignments are kept in different places. Teams must chase people to confirm who is responsible and where a delivery stands.",
      solution: "Create one shipment record with vehicle and driver assignments, dispatch milestones and delivery status.",
      workflow: ["Record shipment", "Assign vehicle/driver", "Dispatch shipment", "Update milestones", "Mark the delivery complete"],
      result: "The intended result is a shared shipment view that makes dispatch coordination and customer updates simpler."
    }
  },
  {
    slug: "business-chatbots",
    icon: Bot,
    title: "Business Chatbots",
    shortTitle: "AI Chatbots",
    category: "AI & Automation",
    description: "Answer common questions, collect customer enquiries and help staff find information, with help from a person when needed.",
    audience: "Businesses that want faster first-line customer and team support",
    features: ["Chat on your website", "Answers to common questions from approved information", "Questions that help identify customer needs", "Passing questions to your team and saving the conversation"],
    outcomes: ["Faster first response", "More captured enquiries", "Reduced repetitive support work"],
    caseStudy: {
      context: "Support and sales teams handling repeat questions and incoming enquiries.",
      challenge: "Teams answer the same questions repeatedly, while enquiries may arrive when nobody is available to respond.",
      solution: "Let an assistant answer from approved information, ask about the visitor’s needs, save enquiry details and hand the conversation to a person when needed.",
      workflow: ["Visitor starts chat", "Assistant checks what the visitor needs", "Answer or ask follow-up questions", "Save the enquiry details", "Pass the conversation to a person when needed"],
      result: "The intended result is faster help with common questions and better enquiry capture, while keeping people available for questions that need judgment."
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
  { slug: "custom-software-development", icon: Code2, title: "Custom Software Development", description: "Replace scattered tools with software for your orders, records, approvals and reporting.", details: ["Plan for the software and its main parts", "Web application development", "Connections between applications (APIs)"], deliverables: ["An agreed plan for the software", "Software that works across screen sizes", "Testing and deployment"], image: webImage, imageAlt: "Software source code open in a developer workspace", },
  { slug: "ui-ux-product-design", icon: Sparkles, title: "UI/UX & Product Design", description: "Make complex tasks easier with clear screens, simple navigation and prototypes you can test.", details: ["Page layouts and the steps users follow", "Consistent colors, fonts and interface elements", "Clickable designs you can try"], deliverables: ["A map of the steps users take", "Detailed screen designs", "Interface elements that can be used across screens"], image: uxImage, imageAlt: "Interface wireframes used during a product design workshop", },
  { slug: "web-development", icon: Globe2, title: "Web Development", description: "Build a website or web app that works across devices and is easy to use and update.", details: ["Web interfaces built with React", "Content management and application connections", "Page speed improvements"], deliverables: ["Pages that work across screen sizes", "Page titles and structure for search engines", "Hosting and launch setup"], image: marketingImage, imageAlt: "Creative team discussing a web project", },
  { slug: "mobile-app-development", icon: Smartphone, title: "Mobile App Development", description: "Give customers or staff an iPhone and Android app for the tasks they need to complete on the go.", details: ["React Native apps", "Screens designed for phone use", "App release support"], deliverables: ["iPhone and Android app", "Consistent screens and interface elements", "App builds prepared for release"], image: mobileImage, imageAlt: "Person using a mobile application", },
  { slug: "ecommerce-solutions", icon: ShoppingCart, title: "E-commerce Solutions", description: "Bring products, checkout, payments and order management together in an online store.", details: ["Online store development", "Payments and connections to your tools", "Sales and order reports"], deliverables: ["Product catalogue", "Checkout flow", "Connections to stock and order tools"], image: ecommerceImage, imageAlt: "Small business owner packing an online order", },
  { slug: "business-automation", icon: Workflow, title: "Business Automation", description: "Move data between your tools, send updates and route approvals without repeating the same manual steps.", details: ["A clear map of the current task", "Automation rules", "Updates and steps that need a person"], deliverables: ["An agreed automation plan", "Connected tools and automated steps", "A plan for checking that the automation works"], image: toolingImage, imageAlt: "Professional team reviewing operations together", },
  { slug: "ai-chatbot-development", icon: Bot, title: "AI & Chatbot Development", description: "Answer repeat questions, capture enquiries and help staff find approved information, with help from a person when needed.", details: ["Answers based on approved business information", "Questions to understand customer enquiries", "Steps for passing a conversation to your team"], deliverables: ["Planned questions and replies", "Chat interface", "A process for keeping answers up to date"], image: communityImage, imageAlt: "Team collaborating on an AI-enabled workflow", },
  { slug: "cloud-devops", icon: CloudCog, title: "Cloud & DevOps", description: "Set up hosting, automated releases and monitoring so your software is easier to deploy and maintain.", details: ["A plan for where your software runs", "Automated checks and software releases", "System checks and separate test and live setups"], deliverables: ["An automated release process", "A plan for test and live setups", "Instructions for running and maintaining the software"], image: cafeImage, imageAlt: "Modern operations environment", },
  { slug: "maintenance-support", icon: Headphones, title: "Maintenance & Product Support", description: "Keep software useful after launch with bug fixes, updates, performance checks and planned improvements.", details: ["Bug fixes and upgrades", "Performance reviews", "Small, planned feature improvements"], deliverables: ["A prioritised list of fixes and improvements", "Planned software updates", "Checks that the software is running as expected"], image: webImage, imageAlt: "Developer workspace used for product maintenance", },
];

export const differentiators = [
  { number: "01", icon: ShieldCheck, title: "Built for the real world", text: "We start with the tasks your team needs to complete and the systems they already use. We agree on what to build around the work your team needs to do." },
  { number: "02", icon: Layers3, title: "One team, end to end", text: "Planning, design and development share the same requirements, so decisions stay connected from the first discussion to launch." },
  { number: "03", icon: Gauge, title: "Progress you can see", text: "Review working software at agreed milestones. See what is ready, what comes next, and where a decision is needed." },
];

export const process = [
  { number: "01", icon: Compass, title: "Understand", text: "Tell us what your team does today, where work gets stuck, and what needs to improve. We agree on priorities and a build plan.", outcomes: ["What to build first", "What users need", "How the software will be built"] },
  { number: "02", icon: PenTool, title: "Design", text: "Review the proposed screens, workflow and technical approach. Agree on the solution before development begins.", outcomes: ["Clickable screen designs", "Consistent colors, fonts and layouts", "A plan for how the software fits together"] },
  { number: "03", icon: Rocket, title: "Build & launch", text: "Review working features as we build. We test the key workflows, prepare the release and help your team get started.", outcomes: ["Working software releases", "Testing the main tasks", "Launch support"] },
];

export const technologyGroups = [
  { title: "Frontend", description: "The screens people use on the web and on mobile. We choose these tools for your devices, daily tasks and future updates.", items: [{ name: "React", icon: Code2 }, { name: "Next.js", icon: Layers3 }, { name: "TypeScript", icon: Code2 }, { name: "Tailwind CSS", icon: Sparkles }, { name: "React Native", icon: Smartphone }, { name: "Vue.js", icon: Code2 }] },
  { title: "Backend", description: "The services behind logins, business rules and integrations. We choose these tools for the tasks your software needs to handle.", items: [{ name: "Node.js", icon: ServerCog }, { name: "Express", icon: Boxes }, { name: "NestJS", icon: ServerCog }, { name: "REST & GraphQL", icon: Workflow }, { name: "Python", icon: Code2 }, { name: "Django", icon: ServerCog }] },
  { title: "Database", description: "Where your records are saved and found. We choose a database for the type and amount of information you need to keep.", items: [{ name: "PostgreSQL", icon: Database }, { name: "MongoDB", icon: Database }, { name: "Redis", icon: Activity }, { name: "Firebase", icon: CloudCog }, { name: "MySQL", icon: Database }, { name: "SQLite", icon: Database }] },
  { title: "DevOps & Hosting", description: "Where your software runs and how updates reach users. We choose tools that make releases and system checks easier.", items: [{ name: "AWS", icon: CloudCog }, { name: "Vercel", icon: Globe2 }, { name: "Docker", icon: Boxes }, { name: "GitHub Actions", icon: Workflow }, { name: "Cloudflare", icon: ShieldCheck }, { name: "Kubernetes", icon: CloudCog }] },
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
  "ui-ux-product-design": { coverage: [Workflow, PanelsTopLeft, MousePointer2], deliverables: [MapPinned, PanelsTopLeft, Boxes], steps: ["Identify the users, their tasks and the points where the current experience causes confusion.", "Review the steps users take, page layouts and a clickable design before the final screens.", "Refine the screens and reusable interface elements, then prepare the designs for the developers."] },
  "web-development": { coverage: [Code2, Plug, Gauge], deliverables: [PanelsTopLeft, Search, Cloud], steps: ["Clarify the pages, audience, content and systems the website needs to connect to.", "Review page structure, responsive designs and how your team will update content.", "Build the pages, test links and layouts, and prepare deployment and future updates."] },
  "mobile-app-development": { coverage: [Smartphone, Smartphone, Send], deliverables: [Smartphone, PanelsTopLeft, PackageCheck], steps: ["Identify which tasks people need to complete on their phones and which devices they use.", "Review mobile flows, screens and the integrations the app needs.", "Build and test the app, prepare release-ready builds and agree the release requirements."] },
  "ecommerce-solutions": { coverage: [ShoppingCart, CreditCard, ChartNoAxesCombined], deliverables: [Package, ShoppingCart, Plug], steps: ["Map the catalogue, customer journey, payments and order-handling process.", "Review the storefront, checkout and connections to stock and order tools.", "Build and test browsing, checkout and order flows before preparing the store for launch."] },
  "business-automation": { coverage: [Workflow, Settings2, MessageSquare], deliverables: [ClipboardList, Plug, Activity], steps: ["Map the manual task, its trigger, the data involved and where a person must approve.", "Agree the rules, connected systems, what happens when something goes wrong or a person needs to step in.", "Build the workflow, test normal and failure paths, and document monitoring and ownership."] },
  "ai-chatbot-development": { coverage: [Bot, ListFilter, UserRoundCheck], deliverables: [MessageSquare, Bot, BookOpen], steps: ["Identify the questions the assistant should answer, the information it can use and when your team needs to help.", "Review the planned questions and replies, the information sources and what the assistant should leave to your team.", "Build and test the assistant against agreed examples, including questions that need a person."] },
  "cloud-devops": { coverage: [Cloud, GitBranch, Activity], deliverables: [GitBranch, Cloud, BookOpen], steps: ["Review the application, hosting needs, environments and current release process.", "Agree deployment steps, who needs access and who checks the system.", "Set up and test the release pipeline, then write down how to use the test and live setups and check the system."] },
  "maintenance-support": { coverage: [Wrench, Gauge, RefreshCw], deliverables: [ClipboardList, GitBranch, Activity], steps: ["Review the existing product, known issues and the improvements that matter most.", "Agree a prioritised list of work, progress reviews and the checks needed for each change.", "Implement and test agreed changes, check how the software is running and plan the next updates."] },
};

export const serviceQuestions: Record<string, { question: string; answer: string }> = {
  "custom-software-development": { question: "When is custom software useful?", answer: "When separate tools or spreadsheets make daily work difficult, we can plan software around your records, approvals and reports. We first check which tasks need to change." },
  "ui-ux-product-design": { question: "Can we try the design before development?", answer: "We can create clickable screen designs so you can review the main steps before development. We agree on which screens and tasks to include." },
  "web-development": { question: "Can my team update the website content?", answer: "We can plan a way for your team to update agreed content. Tell us which pages and information you need to change regularly." },
  "mobile-app-development": { question: "Can you build for both iPhone and Android?", answer: "We can plan an app for iPhone and Android. We discuss the devices, features and release requirements before agreeing on the work." },
  "ecommerce-solutions": { question: "Can the store connect to payments and stock records?", answer: "We can plan connections between your store, payment provider and stock tools. The available options depend on the systems you use." },
  "business-automation": { question: "Which tasks can be automated?", answer: "Repeated tasks with clear rules are a useful place to start, such as moving records between tools, sending updates or requesting approval. We also plan the steps that still need a person." },
  "ai-chatbot-development": { question: "What happens when the chatbot cannot answer?", answer: "We can plan a way to pass the question and enquiry details to your team. We agree on approved information and when the assistant should ask a person to help." },
  "cloud-devops": { question: "Can you help with hosting and software updates?", answer: "We can plan hosting, test and live setups, automated releases and system checks around your application. Access and ongoing responsibilities are agreed before setup." },
  "maintenance-support": { question: "Can you improve an existing application?", answer: "We can review the application and its known problems, then agree on fixes and improvements. The work depends on access to the code, the tools it uses and its current condition." },
};
