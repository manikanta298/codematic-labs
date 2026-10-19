import type { LucideIcon } from "lucide-react";
import { VirtualIcon } from "./virtual-icon";
export function SemanticIcon({ icon: Icon, badge = false, className = "" }: { icon: LucideIcon; badge?: boolean; className?: string }) {
  return badge
    ? <span className={`semantic-badge ${className}`} aria-hidden="true"><VirtualIcon icon={Icon} /></span>
    : <VirtualIcon icon={Icon} className={className} />;
}
