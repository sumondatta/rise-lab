/* Preserve original single-page bookmarks without redirecting Home sections. */
(function () {
  const pages = {"news": "news.html", "grants": "grants.html", "publications": "publications.html", "lab": "lab.html", "gallery": "photos.html", "teaching": "teaching.html", "tool": "oasis.html", "join": "join.html", "sponsors": "grants.html#sponsors", "cv-download": "#cv"};
  const target = pages[window.location.hash.slice(1)];
  if (!target) return;
  const destination = new URL(target, window.location.href);
  destination.search = window.location.search;
  window.location.replace(destination.href);
})();
