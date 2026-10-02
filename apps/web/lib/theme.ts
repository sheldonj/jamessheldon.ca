export const THEME_KEY = "theme";

// Runs in <head> before paint so a saved dark preference doesn't flash light first.
export const themeScript = `try{if(localStorage.getItem("${THEME_KEY}")==="dark")document.documentElement.classList.add("dark")}catch(e){}`;
