import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { getRouteMetadata, siteOrigin } from "../lib/route-metadata";

export function RouteEffects() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const first = useRef(true);
  const positions = useRef(new Map<string, { x: number; y: number }>());
  const [announcement, setAnnouncement] = useState("");
  useEffect(() => {
    const previous = history.scrollRestoration;
    history.scrollRestoration = "manual";
    return () => { history.scrollRestoration = previous; };
  }, []);
  useEffect(() => {
    const meta = getRouteMetadata(location.pathname);
    document.title = meta.title;
    const update = (selector: string, attr: string, value: string) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        const match = selector.match(/\[(name|property)="([^"]+)"\]/);
        if (match) element.setAttribute(match[1]!, match[2]!);
        document.head.appendChild(element);
      }
      element.setAttribute(attr, value);
    };
    update('meta[name="description"]', "content", meta.description);
    update('meta[name="robots"]', "content", meta.noindex ? "noindex, follow" : "index, follow");
    for (const [key, value] of Object.entries({ title: meta.title, description: meta.description, url: siteOrigin + meta.path, type: meta.type || "website", image: siteOrigin + "/social-preview.jpg" })) update(`meta[property="og:${key}"]`, "content", value);
    for (const [key, value] of Object.entries({ card: "summary_large_image", title: meta.title, description: meta.description, image: siteOrigin + "/social-preview.jpg" })) update(`meta[name="twitter:${key}"]`, "content", value);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (meta.noindex) canonical?.remove();
    else {
      if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
      canonical.href = siteOrigin + meta.path;
    }
    setAnnouncement(meta.title);
  }, [location.pathname]);
  useLayoutEffect(() => {
    const initial = first.current;
    first.current = false;
    const frame = requestAnimationFrame(() => {
      let hashTarget: HTMLElement | null = null;
      if (location.hash) {
        try { hashTarget = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch { /* Ignore malformed hashes. */ }
      }
      const saved = positions.current.get(location.key);
      if (hashTarget) hashTarget.scrollIntoView({ behavior: "instant", block: "start" });
      else if (navigationType === "POP" && saved) window.scrollTo({ left: saved.x, top: saved.y, behavior: "instant" });
      else if (!initial) window.scrollTo({ left: 0, top: 0, behavior: "instant" });
      if (!initial) {
        const target = hashTarget || document.querySelector<HTMLElement>("main h1") || document.querySelector<HTMLElement>("main");
        target?.setAttribute("tabindex", "-1");
        target?.focus({ preventScroll: true });
      }
    });
    return () => {
      cancelAnimationFrame(frame);
      positions.current.set(location.key, { x: window.scrollX, y: window.scrollY });
    };
  }, [location.key, location.hash, navigationType]);
  return <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{announcement}</p>;
}
