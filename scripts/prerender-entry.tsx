import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { SiteContents } from "../src/App";
export { getRouteMetadata, publicPaths, siteOrigin } from "../src/lib/route-metadata";
export function render(path: string) {
  return renderToString(<StaticRouter location={path}><SiteContents /></StaticRouter>);
}
