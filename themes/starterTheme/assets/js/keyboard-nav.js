document.addEventListener('keydown', function(e) {
  // Previous post with Ctrl+B
  if (e.ctrlKey && e.key === 'b') {
    const prevLink = document.querySelector('.prev .previous-post');
    if (prevLink) {
      window.location.href = prevLink.href;
    }
  }
  // Next post with Ctrl+N
  if (e.ctrlKey && e.key === 'n') {
    const nextLink = document.querySelector('.next .next-post');
    if (nextLink) {
      window.location.href = nextLink.href;
    }
  }

  // Scroll Down: J
  if (e.key === 'j' && !e.ctrlKey) {
    window.scrollBy(0, 60);
  }
  // Scroll Up: K
  if (e.key === 'k' && !e.ctrlKey) {
    window.scrollBy(0, -60);
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

