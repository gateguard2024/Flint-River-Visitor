// Multi-gate support: each gate's QR code carries a ?gate=<key> tag
// (e.g. ?gate=1). We capture it on landing and remember it for the session so
// it survives navigation into the directory, then send it with the call. The
// server maps the key to that gate's Brivo door ID.

const KEY = 'gate';

// Only allow simple keys so it maps cleanly to BRIVO_DOOR_ID_<key>.
function clean(v: string | null): string {
  return (v || '').replace(/[^A-Za-z0-9_]/g, '').slice(0, 16);
}

// Call on page mount: if the URL has ?gate=, remember it.
export function captureGateFromUrl(): void {
  if (typeof window === 'undefined') return;
  try {
    const g = clean(new URLSearchParams(window.location.search).get(KEY));
    if (g) sessionStorage.setItem(KEY, g);
  } catch {
    /* sessionStorage unavailable; ignore */
  }
}

// Read the remembered gate (or '' if none / single-gate property).
export function getGate(): string {
  if (typeof window === 'undefined') return '';
  try {
    return clean(sessionStorage.getItem(KEY));
  } catch {
    return '';
  }
}
