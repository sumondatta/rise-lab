/* Add or edit news links in index.html. */
function initializeNews(section) {
  if (!section) return;
  const visibleLimit = 10;
  const list = section.querySelector('#news-list');
  const archive = section.querySelector('#news-archive');
  const older = section.querySelector('#news-older');
  const status = section.querySelector('#news-status');
  const count = section.querySelector('#news-older-count');
  const posts = Array.from(section.querySelectorAll('.news-item'));
  // ISO calendar dates avoid timezone-dependent ordering; sort is stable for ties.
  posts.sort((a, b) => b.dataset.date.localeCompare(a.dataset.date));
  posts.forEach((post, index) => (index < visibleLimit ? list : older).append(post));
  archive.hidden = posts.length <= visibleLimit;
  const olderCount = Math.max(0, posts.length - visibleLimit);
  count.textContent = olderCount ? ` (${olderCount} older ${olderCount === 1 ? 'update' : 'updates'})` : '';
  function updateStatus() {
    if (!posts.length) {
      status.textContent = '';
      return;
    }
    if (posts.length <= visibleLimit) {
      status.textContent = '';
      return;
    }
    const shown = archive.open ? posts.length : visibleLimit;
    status.textContent = shown === posts.length
      ? `Showing all ${posts.length} ${posts.length === 1 ? 'update' : 'updates'}.`
      : `Showing ${shown} of ${posts.length} updates.`;
  }
  archive.addEventListener('toggle', updateStatus);
  updateStatus();
}
initializeNews(document.getElementById('news'));
