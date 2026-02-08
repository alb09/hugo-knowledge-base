(() => {
  // <stdin>
  function setTheme() {
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentHour = (/* @__PURE__ */ new Date()).getHours();
    const isNightTime = currentHour < 6 || currentHour >= 18;
    if (isDarkMode || isNightTime) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }
  setTheme();
  window.matchMedia("(prefers-color-scheme: dark)").addListener(setTheme);
  var scrollSpeed = 30;
  var scrollIntervalMs = 16;
  var keysPressed = /* @__PURE__ */ new Set();
  function scrollTick() {
    if (keysPressed.has("j")) {
      window.scrollBy(0, scrollSpeed);
    }
    if (keysPressed.has("k")) {
      window.scrollBy(0, -scrollSpeed);
    }
  }
  document.addEventListener("keydown", (e) => {
    if ((e.key === "j" || e.key === "k") && !e.ctrlKey) {
      keysPressed.add(e.key);
    }
    if (e.key === "b") {
      const prevLink = document.querySelector(".prev .previous-post");
      if (prevLink) window.location.href = prevLink.href;
    }
    if (e.key === "n") {
      const nextLink = document.querySelector(".next .next-post");
      if (nextLink) window.location.href = nextLink.href;
    }
    if (e.key === "h" && !e.ctrlKey) {
      window.history.back();
    }
    if (e.key === "l" && !e.ctrlKey) {
      window.history.forward();
    }
    if (e.key === "d") {
      document.body.classList.toggle("dark-mode");
    } else if (e.key === "s") {
      document.body.classList.toggle("dark-mode");
    }
    if (e.key === "g") {
      window.location.href = "/";
    }
  });
  document.addEventListener("keyup", (e) => {
    keysPressed.delete(e.key);
  });
  setInterval(scrollTick, scrollIntervalMs);
  document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    const currentTheme = localStorage.getItem("theme") || "light";
    if (currentTheme === "dark") {
      body.classList.add("dark-mode");
    }
    themeToggle.addEventListener("click", () => {
      if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      } else {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    const currentTheme = localStorage.getItem("theme") || "light";
    body.classList.add(`${currentTheme}-mode`);
    themeToggle.addEventListener("click", () => {
      console.log("Hello, world!");
      if (body.classList.contains("light-mode")) {
        body.classList.replace("light-mode", "dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        body.classList.replace("dark-mode", "light-mode");
        localStorage.setItem("theme", "light");
      }
    });
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZnVuY3Rpb24gc2V0VGhlbWUoKSB7XG4gICAgY29uc3QgaXNEYXJrTW9kZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcbiAgICBjb25zdCBjdXJyZW50SG91ciA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBpc05pZ2h0VGltZSA9IGN1cnJlbnRIb3VyIDwgNiB8fCBjdXJyZW50SG91ciA+PSAxODtcbiAgXG4gICAgaWYgKGlzRGFya01vZGUgfHwgaXNOaWdodFRpbWUpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgfVxuICB9XG4gIFxuICBzZXRUaGVtZSgpO1xuICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLmFkZExpc3RlbmVyKHNldFRoZW1lKTtcbjtcbmNvbnN0IHNjcm9sbFNwZWVkID0gMzA7IC8vIHBpeGVscyBwZXIgc3RlcFxuY29uc3Qgc2Nyb2xsSW50ZXJ2YWxNcyA9IDE2OyAvLyBhcHByb3ggNjAgZnJhbWVzIHBlciBzZWNvbmQgKH5zbW9vdGgpXG5jb25zdCBrZXlzUHJlc3NlZCA9IG5ldyBTZXQoKTtcblxuZnVuY3Rpb24gc2Nyb2xsVGljaygpIHtcbiAgaWYgKGtleXNQcmVzc2VkLmhhcygnaicpKSB7XG4gICAgd2luZG93LnNjcm9sbEJ5KDAsIHNjcm9sbFNwZWVkKTsgLy8gaW5zdGFudCBzY3JvbGxcbiAgfVxuICBpZiAoa2V5c1ByZXNzZWQuaGFzKCdrJykpIHtcbiAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgLXNjcm9sbFNwZWVkKTsgLy8gaW5zdGFudCBzY3JvbGxcbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gIGlmICgoZS5rZXkgPT09ICdqJyB8fCBlLmtleSA9PT0gJ2snKSAmJiAhZS5jdHJsS2V5KSB7XG4gICAga2V5c1ByZXNzZWQuYWRkKGUua2V5KTtcbiAgfVxuXG4gIGlmIChlLmtleSA9PT0gJ2InKSB7XG4gICAgY29uc3QgcHJldkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldiAucHJldmlvdXMtcG9zdCcpO1xuICAgIGlmIChwcmV2TGluaykgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwcmV2TGluay5ocmVmO1xuICB9XG4gIGlmIChlLmtleSA9PT0gJ24nKSB7XG4gICAgY29uc3QgbmV4dExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dCAubmV4dC1wb3N0Jyk7XG4gICAgaWYgKG5leHRMaW5rKSB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5leHRMaW5rLmhyZWY7XG4gIH1cblxuIC8vIEdvIEJhY2sgUGFnZTogSFxuICBpZiAoZS5rZXkgPT09ICdoJyAmJiAhZS5jdHJsS2V5KSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG4gIC8vIEdvIEZvcndhcmQgUGFnZTogTFxuICBpZiAoZS5rZXkgPT09ICdsJyAmJiAhZS5jdHJsS2V5KSB7XG4gICAgd2luZG93Lmhpc3RvcnkuZm9yd2FyZCgpO1xuICB9XG5cblxuXG4gIGlmIChlLmtleSA9PT0gJ2QnKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrLW1vZGUnKTtcbiAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ3MnKSB7XHRcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmstbW9kZScpO1xuICB9XG5cdFxuICBpZiAoZS5rZXkgPT09ICdnJykge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nOyBcbiAgfVxufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gIGtleXNQcmVzc2VkLmRlbGV0ZShlLmtleSk7XG59KTtcblxuc2V0SW50ZXJ2YWwoc2Nyb2xsVGljaywgc2Nyb2xsSW50ZXJ2YWxNcyk7XG5cblxuXG47XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCB0aGVtZVRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZVRvZ2dsZScpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gICAgLy8gTG9hZCB0aGUgc2F2ZWQgdGhlbWUgZnJvbSBsb2NhbFN0b3JhZ2Ugb3IgZGVmYXVsdCB0byBsaWdodCBtb2RlXG4gICAgY29uc3QgY3VycmVudFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgfHwgJ2xpZ2h0JztcbiAgICBpZiAoY3VycmVudFRoZW1lID09PSAnZGFyaycpIHtcbiAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrLW1vZGUnKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gdG9nZ2xlIGRhcmsgbW9kZVxuICAgIHRoZW1lVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2RhcmstbW9kZScpKSB7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmstbW9kZScpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2RhcmsnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbn0pO1xuXG5cblxuXG5cbjtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgdGhlbWVUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGhlbWVUb2dnbGUnKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcblxuICAgIC8vIENoZWNrIGZvciBzYXZlZCB0aGVtZSBwcmVmZXJlbmNlIG9yIGRlZmF1bHQgdG8gbGlnaHQgbW9kZVxuICAgIGNvbnN0IGN1cnJlbnRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpIHx8ICdsaWdodCc7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKGAke2N1cnJlbnRUaGVtZX0tbW9kZWApO1xuXG4gICAgdGhlbWVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGVsbG8sIHdvcmxkIVwiKTtcblxuICAgICAgICBpZiAoYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2xpZ2h0LW1vZGUnKSkge1xuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QucmVwbGFjZSgnbGlnaHQtbW9kZScsICdkYXJrLW1vZGUnKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZXBsYWNlKCdkYXJrLW1vZGUnLCAnbGlnaHQtbW9kZScpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7O0FBQUEsV0FBUyxXQUFXO0FBQ2hCLFVBQU0sYUFBYSxPQUFPLFdBQVcsOEJBQThCLEVBQUU7QUFD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
