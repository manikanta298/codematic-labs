import { Pause, Play } from "lucide-react";
export function MotionControl({ paused, onToggle, controls }: { paused: boolean; onToggle: () => void; controls: string }) {
  const Icon = paused ? Play : Pause;
  return <button type="button" className="motion-control" onClick={onToggle} aria-controls={controls} aria-pressed={paused}><Icon size={15} strokeWidth={1.75} aria-hidden="true" /><span>{paused ? "Resume" : "Pause"} animation</span></button>;
}
