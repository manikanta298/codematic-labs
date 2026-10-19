import type { LucideIcon } from "lucide-react";
import { GradientIcon } from "./gradient-icon";
export function SemanticIcon({ icon: Icon, badge = false, className = "" }: { icon: LucideIcon; badge?: boolean; className?: string }) {
  return badge
    ? <span className={`semantic-badge ${className}`} aria-hidden="true"><GradientIcon icon={Icon} /></span>
    : <GradientIcon icon={Icon} className={className} />;
}
