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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiPHN0ZGluPiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZnVuY3Rpb24gc2V0VGhlbWUoKSB7XG4gICAgY29uc3QgaXNEYXJrTW9kZSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcztcbiAgICBjb25zdCBjdXJyZW50SG91ciA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBpc05pZ2h0VGltZSA9IGN1cnJlbnRIb3VyIDwgNiB8fCBjdXJyZW50SG91ciA+PSAxODtcbiAgXG4gICAgaWYgKGlzRGFya01vZGUgfHwgaXNOaWdodFRpbWUpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0Jyk7XG4gICAgfVxuICB9XG4gIFxuICBzZXRUaGVtZSgpO1xuICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLmFkZExpc3RlbmVyKHNldFRoZW1lKTtcbjtcbmNvbnN0IHNjcm9sbFNwZWVkID0gMzA7IC8vIHBpeGVscyBwZXIgc3RlcFxuY29uc3Qgc2Nyb2xsSW50ZXJ2YWxNcyA9IDE2OyAvLyBhcHByb3ggNjAgZnJhbWVzIHBlciBzZWNvbmQgKH5zbW9vdGgpXG5jb25zdCBrZXlzUHJlc3NlZCA9IG5ldyBTZXQoKTtcblxuZnVuY3Rpb24gc2Nyb2xsVGljaygpIHtcbiAgaWYgKGtleXNQcmVzc2VkLmhhcygnaicpKSB7XG4gICAgd2luZG93LnNjcm9sbEJ5KDAsIHNjcm9sbFNwZWVkKTsgLy8gaW5zdGFudCBzY3JvbGxcbiAgfVxuICBpZiAoa2V5c1ByZXNzZWQuaGFzKCdrJykpIHtcbiAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgLXNjcm9sbFNwZWVkKTsgLy8gaW5zdGFudCBzY3JvbGxcbiAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gIGlmICgoZS5rZXkgPT09ICdqJyB8fCBlLmtleSA9PT0gJ2snKSAmJiAhZS5jdHJsS2V5KSB7XG4gICAga2V5c1ByZXNzZWQuYWRkKGUua2V5KTtcbiAgfVxuXG4gIGlmIChlLmtleSA9PT0gJ2InKSB7XG4gICAgY29uc3QgcHJldkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldiAucHJldmlvdXMtcG9zdCcpO1xuICAgIGlmIChwcmV2TGluaykgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwcmV2TGluay5ocmVmO1xuICB9XG4gIGlmIChlLmtleSA9PT0gJ24nKSB7XG4gICAgY29uc3QgbmV4dExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dCAubmV4dC1wb3N0Jyk7XG4gICAgaWYgKG5leHRMaW5rKSB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5leHRMaW5rLmhyZWY7XG4gIH1cblxuIC8vIEdvIEJhY2sgUGFnZTogSFxuICBpZiAoZS5rZXkgPT09ICdoJyAmJiAhZS5jdHJsS2V5KSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG4gIC8vIEdvIEZvcndhcmQgUGFnZTogTFxuICBpZiAoZS5rZXkgPT09ICdsJyAmJiAhZS5jdHJsS2V5KSB7XG4gICAgd2luZG93Lmhpc3RvcnkuZm9yd2FyZCgpO1xuICB9XG5cblxuXG4gIGlmIChlLmtleSA9PT0gJ2QnKSB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrLW1vZGUnKTtcbiAgfVxuXG4gIGlmIChlLmtleSA9PT0gJ2cnKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7IFxuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAga2V5c1ByZXNzZWQuZGVsZXRlKGUua2V5KTtcbn0pO1xuXG5zZXRJbnRlcnZhbChzY3JvbGxUaWNrLCBzY3JvbGxJbnRlcnZhbE1zKTtcblxuXG5cbjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHRoZW1lVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lVG9nZ2xlJyk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5cbiAgICAvLyBMb2FkIHRoZSBzYXZlZCB0aGVtZSBmcm9tIGxvY2FsU3RvcmFnZSBvciBkZWZhdWx0IHRvIGxpZ2h0IG1vZGVcbiAgICBjb25zdCBjdXJyZW50VGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSB8fCAnbGlnaHQnO1xuICAgIGlmIChjdXJyZW50VGhlbWUgPT09ICdkYXJrJykge1xuICAgICAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2RhcmstbW9kZScpO1xuICAgIH1cblxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB0b2dnbGUgZGFyayBtb2RlXG4gICAgdGhlbWVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChib2R5LmNsYXNzTGlzdC5jb250YWlucygnZGFyay1tb2RlJykpIHtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGFyay1tb2RlJyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyay1tb2RlJyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxufSk7XG5cblxuXG5cblxuO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCB0aGVtZVRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZVRvZ2dsZScpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuXG4gICAgLy8gQ2hlY2sgZm9yIHNhdmVkIHRoZW1lIHByZWZlcmVuY2Ugb3IgZGVmYXVsdCB0byBsaWdodCBtb2RlXG4gICAgY29uc3QgY3VycmVudFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgfHwgJ2xpZ2h0JztcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoYCR7Y3VycmVudFRoZW1lfS1tb2RlYCk7XG5cbiAgICB0aGVtZVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWxsbywgd29ybGQhXCIpO1xuXG4gICAgICAgIGlmIChib2R5LmNsYXNzTGlzdC5jb250YWlucygnbGlnaHQtbW9kZScpKSB7XG4gICAgICAgICAgICBib2R5LmNsYXNzTGlzdC5yZXBsYWNlKCdsaWdodC1tb2RlJywgJ2RhcmstbW9kZScpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2RhcmsnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlcGxhY2UoJ2RhcmstbW9kZScsICdsaWdodC1tb2RlJyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7Il0sCiAgIm1hcHBpbmdzIjogIjs7QUFBQSxXQUFTLFdBQVc7QUFDaEIsVUFBTSxhQUFhLE9BQU8sV0FBVyw4QkFBOEIsRUFBRTtBQUNyRSxVQUFNLGVBQWMsb0JBQUksS0FBSyxHQUFFLFNBQVM7QUFDeEMsVUFBTSxjQUFjLGNBQWMsS0FBSyxlQUFlO0FBRXRELFFBQUksY0FBYyxhQUFh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
