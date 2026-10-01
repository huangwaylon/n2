// The local site's URL for a tool route: "ch/1" or "" (N2, at the site root), "n1:ch/3", "q1:l/1/read", "q2:" (a book's
// home). query goes before the hash (a cache-busting "?t=…" for Safari).
export const BASE = process.env.N2_BASE || "http://localhost:8765/";
export function routeUrl(route, query = "") {
  const m = /^(n\d|q\d):(.*)$/.exec(route);
  return `${BASE}${m && m[1] !== "n2" ? m[1] + "/" : ""}${query}#/${m ? m[2] : route}`;
}
