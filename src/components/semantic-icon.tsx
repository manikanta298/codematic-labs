import type { LucideIcon } from "lucide-react";
export function SemanticIcon({ icon: Icon, badge = false, className = "" }: { icon: LucideIcon; badge?: boolean; className?: string }) {
  return badge
    ? <span className={`semantic-badge ${className}`} aria-hidden="true"><Icon size={22} strokeWidth={1.65} /></span>
    : <Icon className={`semantic-icon ${className}`} size={22} strokeWidth={1.65} aria-hidden="true" />;
}
