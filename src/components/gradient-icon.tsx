import type { LucideIcon } from "lucide-react";
import { useId, type ReactNode, type CSSProperties } from "react";

// One custom gradient illustration family; Lucide references are semantic keys only.
const artwork = {
  logistics: <><path className="vi-back" d="m6 3 10-3 10 5v15l-10 5-10-5V3Z"/><path className="vi-front" d="m16 10 10-5v15l-10 5V10Z"/><path className="vi-line" d="m6 3 10 7m-5-9 10 6v5"/><path className="vi-line" strokeDasharray="2 3" d="M4 17H2v13h25"/><circle className="vi-front" cx="4" cy="17" r="3"/><path className="vi-back" d="M24 23a5 5 0 0 1 10 0c0 4-5 9-5 9s-5-5-5-9Z"/><circle className="vi-front" cx="29" cy="23" r="1.5"/></>,
  hospital: <><path className="vi-back" d="M7 9h18v22H7V9Z"/><path className="vi-front" d="M1 17h6v14H1Zm24 0h6v14h-6Z"/><rect className="vi-front" x="10" y="1" width="12" height="12" rx="3"/><path className="vi-shine" d="M16 4v6m-3-3h6M11 17h2m6 0h2m-10 5h2m6 0h2"/><path className="vi-line" d="M14 31v-6h4v6"/></>,
  pos: <><rect className="vi-back" x="2" y="3" width="22" height="16" rx="3"/><path className="vi-front" d="M10 19h6v6h-6Zm-6 6h18v5H4Z"/><path className="vi-shine" d="M7 9h8m-8 4h4"/><path className="vi-front" d="M22 11h9v18l-3-2-3 2-3-2V11Z"/><path className="vi-line" d="M25 15h3m-3 4h3m-3 4h2"/></>,
  food: <><path className="vi-back" d="M8 14a6 6 0 1 1 1-11 8 8 0 0 1 14 0 6 6 0 1 1 1 11v15H8V14Z"/><path className="vi-front" d="M8 22h16v7H8Z"/><path className="vi-shine" d="M12 15v5m8-5v5"/></>,
  code: <><rect className="vi-back" x="4" y="5" width="24" height="20" rx="4"/><path className="vi-line" d="m12 13-4 4 4 4m8-8 4 4-4 4m-3-10-2 16"/><path className="vi-shine" d="M8 9h7"/></>,
  design: <><rect className="vi-back" x="4" y="8" width="21" height="21" rx="5"/><path className="vi-front" d="m11 20 2-7L24 2l6 6-11 11-8 1Z"/><path className="vi-line" d="m21 5 6 6M9 25h11"/></>,
  web: <><circle className="vi-back" cx="16" cy="16" r="12"/><ellipse className="vi-line" cx="16" cy="16" rx="5" ry="12"/><path className="vi-line" d="M4 16h24M7 9h18M7 23h18"/></>,
  mobile: <><rect className="vi-back" x="8" y="2" width="17" height="28" rx="4"/><rect className="vi-front" x="11" y="7" width="11" height="16" rx="2"/><path className="vi-shine" d="M14 5h5m-4 22h3"/></>,
  shop: <><path className="vi-back" d="M5 12h22l-2 17H7L5 12Z"/><path className="vi-line" d="M11 13V8a5 5 0 0 1 10 0v5"/><path className="vi-front" d="m11 20 4 4 7-8"/></>,
  workflow: <><path className="vi-line" d="M9 9h14v14H9Z"/><rect className="vi-back" x="2" y="2" width="13" height="11" rx="3"/><rect className="vi-front" x="17" y="18" width="13" height="11" rx="3"/><path className="vi-line" d="m20 5 4 4-4 4M12 19l-4 4 4 4"/></>,
  bot: <><path className="vi-line" d="M16 6V2M3 16H1m30 0h-2"/><rect className="vi-back" x="4" y="7" width="24" height="22" rx="7"/><rect className="vi-front" x="8" y="12" width="16" height="9" rx="4"/><path className="vi-shine" d="M12 16v1m8-1v1m-8 8h8"/></>,
  cloud: <><path className="vi-back" d="M8 24a7 7 0 0 1-1-14 10 10 0 0 1 19 1 7 7 0 0 1-1 13H8Z"/><path className="vi-front" d="m16 14-5 5h3v8h4v-8h3l-5-5Z"/><path className="vi-shine" d="M10 9a7 7 0 0 1 10-2"/></>,
  support: <><path className="vi-line" d="M5 17v-3a11 11 0 0 1 22 0v9c0 4-4 6-9 6"/><rect className="vi-back" x="2" y="14" width="8" height="11" rx="3"/><rect className="vi-front" x="22" y="14" width="8" height="11" rx="3"/><rect className="vi-front" x="12" y="26" width="8" height="5" rx="2"/></>,
  receipt: <><path className="vi-back" d="M7 2h18v28l-4-3-5 3-5-3-4 3V2Z"/><path className="vi-shine" d="M11 8h10m-10 5h10m-10 5h4"/><circle className="vi-front" cx="23" cy="22" r="6"/><path className="vi-shine" d="m20 22 2 2 4-4"/></>,
  box: <><path className="vi-back" d="m16 2 13 7v15l-13 7L3 24V9l13-7Z"/><path className="vi-front" d="m16 16 13-7v15l-13 7V16Z"/><path className="vi-line" d="m3 9 13 7L29 9M10 5l13 7v6"/><path className="vi-shine" d="m7 21 5 3"/></>,
  health: <><rect className="vi-back" x="3" y="7" width="26" height="23" rx="5"/><path className="vi-line" d="M10 7V3h12v4"/><path className="vi-front" d="M13 12h6v5h5v6h-5v5h-6v-5H8v-6h5v-5Z"/></>,
  wallet: <><rect className="vi-back" x="3" y="6" width="25" height="23" rx="5"/><path className="vi-line" d="m6 6 17-4v4"/><rect className="vi-front" x="18" y="14" width="13" height="10" rx="3"/><circle className="vi-shine" cx="23" cy="19" r="1"/><path className="vi-shine" d="M7 11h10"/></>,
  gem: <><path className="vi-back" d="m8 3-6 9 14 18 14-18-6-9H8Z"/><path className="vi-front" d="m16 3-6 9 6 18 6-18-6-9Z"/><path className="vi-line" d="M2 12h28M8 3l2 9m14-9-2 9"/></>,
  tasks: <><rect className="vi-back" x="5" y="5" width="22" height="25" rx="4"/><rect className="vi-front" x="10" y="2" width="12" height="7" rx="2"/><path className="vi-shine" d="m9 15 2 2 3-4m-5 11 2 2 3-4m4-6h5m-5 9h5"/></>,
  truck: <><rect className="vi-back" x="2" y="6" width="18" height="19" rx="3"/><path className="vi-front" d="M20 12h6l4 7v6H20V12Z"/><path className="vi-shine" d="M23 15h2l2 4h-4v-4Z"/><circle className="vi-front" cx="8" cy="26" r="4"/><circle className="vi-front" cx="25" cy="26" r="4"/></>,
  team: <><circle className="vi-back" cx="11" cy="9" r="6"/><circle className="vi-front" cx="24" cy="11" r="5"/><path className="vi-back" d="M1 29v-4a10 10 0 0 1 20 0v4H1Z"/><path className="vi-front" d="M21 29v-4c0-3-1-6-3-8 6-3 13 1 13 8v4H21Z"/></>,
  compass: <><circle className="vi-back" cx="16" cy="16" r="13"/><path className="vi-front" d="m22 9-3 11-10 4 4-11 9-4Z"/><path className="vi-shine" d="m13 13 6 7M16 3v3m0 20v3M3 16h3m20 0h3"/></>,
  launch: <><path className="vi-back" d="M10 22C9 10 17 3 29 2c0 12-7 20-19 20Z"/><circle className="vi-front" cx="22" cy="9" r="4"/><path className="vi-front" d="m10 12-7 5 7 1m10 3-5 8-1-7M8 24l-6 6 2-7"/></>,
  shield: <><path className="vi-back" d="M16 2 29 7v9c0 7-6 12-13 15C9 28 3 23 3 16V7l13-5Z"/><path className="vi-front" d="M16 6v20c5-3 9-6 9-11V10l-9-4Z"/><path className="vi-shine" d="m9 16 5 5 9-10"/></>,
  chart: <><rect className="vi-back" x="3" y="3" width="26" height="26" rx="5"/><path className="vi-front" d="M8 20h4v5H8Zm6-6h4v11h-4Zm6-7h4v18h-4Z"/><path className="vi-shine" d="M8 15 14 9l4 1 5-5"/></>,
  database: <><path className="vi-back" d="M4 8h24v17c0 7-24 7-24 0V8Z"/><ellipse className="vi-front" cx="16" cy="8" rx="12" ry="6"/><path className="vi-line" d="M4 16c0 7 24 7 24 0M4 23c0 7 24 7 24 0"/><path className="vi-shine" d="M9 8h7"/></>,
  screen: <><rect className="vi-back" x="2" y="3" width="28" height="23" rx="4"/><path className="vi-front" d="M5 10h22v12H5Z"/><path className="vi-line" d="M12 26v4m8-4v4m-11 0h14M12 10v12"/><path className="vi-shine" d="M6 7h1m3 0h1"/></>,
  document: <><path className="vi-back" d="M6 2h14l7 7v21H6V2Z"/><path className="vi-front" d="M20 2v8h7"/><path className="vi-shine" d="M11 15h11m-11 5h11m-11 5h6"/></>,
  chat: <><path className="vi-back" d="M3 4h26v19H14l-9 7v-7H3V4Z"/><path className="vi-front" d="M7 8h18v11H7Z"/><path className="vi-shine" d="M11 13h1m4 0h1m4 0h1"/></>,
  calendar: <><rect className="vi-back" x="3" y="5" width="26" height="25" rx="4"/><path className="vi-front" d="M3 10V9a4 4 0 0 1 4-4h18a4 4 0 0 1 4 4v3H3v-2Z"/><path className="vi-line" d="M10 2v6m12-6v6"/><path className="vi-shine" d="M9 18h3m7 0h3M9 24h3m7 0h3"/></>,
  target: <><circle className="vi-back" cx="15" cy="17" r="13"/><circle className="vi-front" cx="15" cy="17" r="8"/><circle className="vi-back" cx="15" cy="17" r="3"/><path className="vi-shine" d="m15 17 12-12m-5 0h5v5"/></>,
  search: <><circle className="vi-back" cx="13" cy="13" r="11"/><path className="vi-front" d="m21 19 10 10-3 3-10-10 3-3Z"/><path className="vi-shine" d="M7 13a6 6 0 0 1 6-6"/></>,
  pin: <><path className="vi-back" d="M16 31S4 19 4 12a12 12 0 0 1 24 0c0 7-12 19-12 19Z"/><circle className="vi-front" cx="16" cy="12" r="6"/><path className="vi-shine" d="M13 12a3 3 0 0 1 3-3"/></>,
  light: <><path className="vi-back" d="M10 23c0-5-5-6-5-12a11 11 0 0 1 22 0c0 6-5 7-5 12H10Z"/><path className="vi-front" d="M10 23h12v5H10Zm3 5h6v3h-6Z"/><path className="vi-shine" d="M11 10a5 5 0 0 1 5-5m0 18v-8m-4-2 4 3 4-3"/></>,
  tools: <><path className="vi-back" d="M28 3a9 9 0 0 1-11 13L7 29a4 4 0 0 1-6-5l13-10A9 9 0 0 1 25 2l-6 6 5 5 6-6-2-4Z"/><circle className="vi-front" cx="6" cy="25" r="2"/></>,
  check: <><circle className="vi-back" cx="16" cy="16" r="13"/><path className="vi-shine" d="m9 16 5 5L24 10"/></>,
  alert: <><path className="vi-back" d="M13 3a3 3 0 0 1 6 0l12 23a3 3 0 0 1-3 4H4a3 3 0 0 1-3-4L13 3Z"/><path className="vi-shine" d="M16 10v9m0 5v1"/></>,
  mail: <><rect className="vi-back" x="2" y="5" width="28" height="23" rx="4"/><path className="vi-front" d="m3 7 13 11L29 7"/><path className="vi-line" d="m3 26 9-9m17 9-9-9"/></>,
} satisfies Record<string, ReactNode>;

type Kind = keyof typeof artwork;
const families: Record<Kind, string> = {
  logistics: "Route",
  hospital: "Hospital", pos: "MonitorCheck",
  food: "ChefHat UtensilsCrossed",
  code: "CodeXml Code2", design: "Sparkles PenTool PencilRuler MousePointer2", web: "Globe Globe2 Earth",
  mobile: "Smartphone", shop: "ShoppingCart ShoppingBag", workflow: "Workflow GitBranch Plug Layers Layers3 Settings2 RefreshCw",
  bot: "Bot", cloud: "Cloud CloudCog", support: "Headphones", receipt: "ReceiptText ScanLine",
  box: "Boxes Package PackagePlus PackageSearch PackageCheck", health: "Stethoscope HeartPulse Activity",
  wallet: "WalletCards CreditCard Coins", gem: "Gem", tasks: "KanbanSquare SquareKanban Kanban ClipboardList ListChecks ListFilter ListPlus Flag",
  truck: "Truck Send", team: "Users UserPlus UserRoundCheck", compass: "Compass", launch: "Rocket",
  shield: "ShieldCheck", chart: "Gauge LineChart ChartLine ChartNoAxesCombined FileChartColumnIncreasing",
  database: "Database Server ServerCog", screen: "PanelsTopLeft LayoutDashboard Table2",
  document: "BookOpen FileCheck2 FileCheckCorner FilePlus2 FilePlusCorner Download Tags BriefcaseBusiness", chat: "MessageSquare MessageSquareReply MessageSquareText",
  calendar: "CalendarDays CalendarClock Timer History", target: "Target", search: "Search",
  pin: "MapPin MapPinned", light: "Lightbulb", tools: "Wrench", check: "Check CheckCheck CircleCheck",
  alert: "CircleAlert", mail: "Mail",
};
const kindByName = Object.fromEntries(Object.entries(families).flatMap(([kind, names]) => names.split(" ").map(name => [name, kind as Kind])));

const palettes = {
  ocean: ["#60e5ed", "#168cf4", "#c6fbff"],
  violet: ["#e3a7ff", "#7754ed", "#f6e8ff"],
  rose: ["#ffb2d3", "#ed4a88", "#fff0f7"],
  amber: ["#ffe491", "#f28b37", "#fff6d9"],
  mint: ["#b3f8d5", "#20b8a3", "#e8fff4"],
  blue: ["#a4c8ff", "#4f6fe8", "#edf5ff"],
} as const;
const paletteByKind: Partial<Record<Kind, keyof typeof palettes>> = {
  logistics: "ocean",
  hospital: "rose", pos: "blue",
  food: "amber", shop: "violet", health: "rose", wallet: "mint", team: "blue", truck: "ocean",
  code: "blue", design: "violet", web: "ocean", mobile: "rose", workflow: "mint", bot: "violet",
  cloud: "blue", tools: "amber", gem: "violet", receipt: "amber", tasks: "mint", compass: "ocean",
  launch: "rose", shield: "mint", chart: "blue", database: "violet", screen: "blue", document: "ocean",
  chat: "rose", calendar: "amber", target: "rose", search: "ocean", pin: "mint", light: "amber", box: "amber",
};
export type GradientIconKind = Kind;
export function GradientArtwork({ kind, className = "" }: { kind: Kind; className?: string }) {
  const id = `gradient-icon-${useId().replace(/:/g, "")}`;
  const [light, deep, shine] = palettes[paletteByKind[kind] || "ocean"];
  const style = { "--art-body": `url(#${id}-body)`, "--art-front": `url(#${id}-front)`, "--art-line": light, "--art-shine": shine } as CSSProperties;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width={28} height={28} className={`gradient-icon semantic-icon ${className}`} data-gradient-icon={kind} fill="none" style={style} aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id={`${id}-body`} x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse"><stop stopColor={light}/><stop offset="1" stopColor={deep}/></linearGradient>
      <linearGradient id={`${id}-front`} x1="26" y1="4" x2="8" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor={shine}/><stop offset="1" stopColor={light}/></linearGradient>
    </defs>
    <g transform="translate(2 2)" strokeLinecap="round" strokeLinejoin="round">{artwork[kind]}</g>
  </svg>;
}
export function GradientIcon({ icon, className = "" }: { icon: LucideIcon; className?: string }) {
  const kind = kindByName[icon.displayName || ""] || "screen";
  return <GradientArtwork kind={kind} className={className} />;
}
