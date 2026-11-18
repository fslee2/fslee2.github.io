const copy = document.querySelector('[data-copy-citation]');
if (copy) {
  copy.hidden = false;
  copy.addEventListener('click', async () => {
    const citation = document.querySelector('#citation pre');
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText(citation.textContent);
      status.textContent = 'Citation copied.';
    } catch {
      const selection = getSelection();
      selection.selectAllChildren(citation);
      status.textContent = 'Citation selected. Use your browser’s Copy command.';
    }
  });
}
document.addEventListener('play', event => {
  if (!(event.target instanceof HTMLVideoElement)) return;
  for (const video of document.querySelectorAll('video')) {
    if (video !== event.target && !video.paused) video.pause();
  }
}, true);
