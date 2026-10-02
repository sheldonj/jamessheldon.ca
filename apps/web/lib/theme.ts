export const THEME_KEY = "theme";

export const THEME_COLORS = { light: "#ffffff", dark: "#0e1116" } as const;

// Runs in <head> before paint so a saved dark preference doesn't flash light first.
// It also owns the theme-color meta (browser UI colour); React doesn't render that
// tag, so hydration never re-adds a light copy over a dark page.
export const themeScript = `try{var d=localStorage.getItem("${THEME_KEY}")==="dark";if(d)document.documentElement.classList.add("dark");var m=document.createElement("meta");m.name="theme-color";m.content=d?"${THEME_COLORS.dark}":"${THEME_COLORS.light}";document.head.appendChild(m)}catch(e){}`;
