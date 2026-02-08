function setTheme() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const currentHour = new Date().getHours();
    const isNightTime = currentHour < 6 || currentHour >= 18;
  
    if (isDarkMode || isNightTime) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
  
  setTheme();
  window.matchMedia('(prefers-color-scheme: dark)').addListener(setTheme);