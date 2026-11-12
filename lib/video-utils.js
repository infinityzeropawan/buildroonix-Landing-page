/**
 * Converts YouTube watch / share / shorts / embed URLs into privacy-enhanced embed URLs,
 * or detects direct MP4/WebM video links.
 */
export function parseVideoSource(rawUrl) {
  const url = String(rawUrl || "").trim();
  if (!url) return null;

  // Direct MP4 / WebM
  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) {
    return { type: "video", src: url };
  }

  // YouTube formats: watch?v=ID, youtu.be/ID, youtube.com/shorts/ID, youtube.com/embed/ID
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/i
  );
  if (ytMatch && ytMatch[1]) {
    return {
      type: "youtube",
      id: ytMatch[1],
      src: `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?rel=0`,
    };
  }

  // Generic iframe fallback for Loom / Vimeo / Drive preview links
  return { type: "iframe", src: url };
}

