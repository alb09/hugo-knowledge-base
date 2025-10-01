const scrollSpeed = 30; // pixels per step
const scrollIntervalMs = 16; // approx 60 frames per second (~smooth)
const keysPressed = new Set();

function scrollTick() {
  if (keysPressed.has('j')) {
    window.scrollBy(0, scrollSpeed); // instant scroll
  }
  if (keysPressed.has('k')) {
    window.scrollBy(0, -scrollSpeed); // instant scroll
  }
}

document.addEventListener('keydown', e => {
  if ((e.key === 'j' || e.key === 'k') && !e.ctrlKey) {
    keysPressed.add(e.key);
  }

  if (e.ctrlKey && e.key === 'b') {
    const prevLink = document.querySelector('.prev .previous-post');
    if (prevLink) window.location.href = prevLink.href;
  }
  if (e.ctrlKey && e.key === 'm') {
    const nextLink = document.querySelector('.next .next-post');
    if (nextLink) window.location.href = nextLink.href;
  }

 // Go Back Page: H
  if (e.key === 'h' && !e.ctrlKey) {
    window.history.back();
  }
  // Go Forward Page: L
  if (e.key === 'l' && !e.ctrlKey) {
    window.history.forward();
  }
  // Search: /
  if (e.key === '/' && !e.ctrlKey) {
    e.preventDefault();
    document.getElementById('searchInput').focus(); // Ensure you have a search input with this id
  }
});

document.addEventListener('keyup', e => {
  keysPressed.delete(e.key);
});

setInterval(scrollTick, scrollIntervalMs);


