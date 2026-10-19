import type { ReactNode } from "react";

// Custom artwork scoped to the two Home page icon loops.
const artwork = {
  food: <><path className="loop-art-back" d="M8 14a6 6 0 1 1 1-11 8 8 0 0 1 14 0 6 6 0 1 1 1 11v15H8V14Z"/><path className="loop-art-front" d="M8 22h16v7H8Z"/><path className="loop-art-shine" d="M12 15v5m8-5v5"/></>,
  code: <><rect className="loop-art-back" x="4" y="5" width="24" height="20" rx="4"/><path className="loop-art-line" d="m12 13-4 4 4 4m8-8 4 4-4 4m-3-10-2 16"/><path className="loop-art-shine" d="M8 9h7"/></>,
  design: <><rect className="loop-art-back" x="4" y="8" width="21" height="21" rx="5"/><path className="loop-art-front" d="m11 20 2-7L24 2l6 6-11 11-8 1Z"/><path className="loop-art-line" d="m21 5 6 6M9 25h11"/></>,
  web: <><circle className="loop-art-back" cx="16" cy="16" r="12"/><ellipse className="loop-art-line" cx="16" cy="16" rx="5" ry="12"/><path className="loop-art-line" d="M4 16h24M7 9h18M7 23h18"/></>,
  mobile: <><rect className="loop-art-back" x="8" y="2" width="17" height="28" rx="4"/><rect className="loop-art-front" x="11" y="7" width="11" height="16" rx="2"/><path className="loop-art-shine" d="M14 5h5m-4 22h3"/></>,
  shop: <><path className="loop-art-back" d="M5 12h22l-2 17H7L5 12Z"/><path className="loop-art-line" d="M11 13V8a5 5 0 0 1 10 0v5"/><path className="loop-art-front" d="m11 20 4 4 7-8"/></>,
  workflow: <><path className="loop-art-line" d="M9 9h14v14H9Z"/><rect className="loop-art-back" x="2" y="2" width="13" height="11" rx="3"/><rect className="loop-art-front" x="17" y="18" width="13" height="11" rx="3"/><path className="loop-art-line" d="m20 5 4 4-4 4M12 19l-4 4 4 4"/></>,
  bot: <><path className="loop-art-line" d="M16 6V2M3 16H1m30 0h-2"/><rect className="loop-art-back" x="4" y="7" width="24" height="22" rx="7"/><rect className="loop-art-front" x="8" y="12" width="16" height="9" rx="4"/><path className="loop-art-shine" d="M12 16v1m8-1v1m-8 8h8"/></>,
  cloud: <><path className="loop-art-back" d="M8 24a7 7 0 0 1-1-14 10 10 0 0 1 19 1 7 7 0 0 1-1 13H8Z"/><path className="loop-art-front" d="m16 14-5 5h3v8h4v-8h3l-5-5Z"/><path className="loop-art-shine" d="M10 9a7 7 0 0 1 10-2"/></>,
  health: <><rect className="loop-art-back" x="3" y="7" width="26" height="23" rx="5"/><path className="loop-art-line" d="M10 7V3h12v4"/><path className="loop-art-front" d="M13 12h6v5h5v6h-5v5h-6v-5H8v-6h5v-5Z"/></>,
  wallet: <><rect className="loop-art-back" x="3" y="6" width="25" height="23" rx="5"/><path className="loop-art-line" d="m6 6 17-4v4"/><rect className="loop-art-front" x="18" y="14" width="13" height="10" rx="3"/><circle className="loop-art-shine" cx="23" cy="19" r="1"/><path className="loop-art-shine" d="M7 11h10"/></>,
  truck: <><rect className="loop-art-back" x="2" y="6" width="18" height="19" rx="3"/><path className="loop-art-front" d="M20 12h6l4 7v6H20V12Z"/><path className="loop-art-shine" d="M23 15h2l2 4h-4v-4Z"/><circle className="loop-art-front" cx="8" cy="26" r="4"/><circle className="loop-art-front" cx="25" cy="26" r="4"/></>,
  team: <><circle className="loop-art-back" cx="11" cy="9" r="6"/><circle className="loop-art-front" cx="24" cy="11" r="5"/><path className="loop-art-back" d="M1 29v-4a10 10 0 0 1 20 0v4H1Z"/><path className="loop-art-front" d="M21 29v-4c0-3-1-6-3-8 6-3 13 1 13 8v4H21Z"/></>,
  tools: <><path className="loop-art-back" d="M28 3a9 9 0 0 1-11 13L7 29a4 4 0 0 1-6-5l13-10A9 9 0 0 1 25 2l-6 6 5 5 6-6-2-4Z"/><circle className="loop-art-front" cx="6" cy="25" r="2"/></>,
} satisfies Record<string, ReactNode>;

export type LoopIconKind = keyof typeof artwork;
export function LoopIllustration({ kind }: { kind: LoopIconKind }) {
  return <svg className="loop-illustration" viewBox="0 0 36 36" width={44} height={44} fill="none" aria-hidden="true" focusable="false" data-loop-icon={kind}><g transform="translate(2 2)" strokeLinecap="round" strokeLinejoin="round">{artwork[kind]}</g></svg>;
}
