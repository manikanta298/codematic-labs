import { GradientArtwork, type GradientIconKind } from "./gradient-icon";
export type LoopIconKind = GradientIconKind;
export function LoopIllustration({ kind }: { kind: LoopIconKind }) {
  return <GradientArtwork kind={kind} className="loop-illustration" />;
}
