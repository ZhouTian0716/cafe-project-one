// theme
const root = document.documentElement;
const themeBtn = document.querySelector(".c-theme");

function getCurrentTheme() {
  // This is getting the system default theme first
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  localStorage.getItem("theme")
    ? (theme = localStorage.getItem("theme"))
    : null;
  return theme;
}

function loadTheme(theme) {
  const root = document.querySelector(":root");
  if (theme === "light") {
    lightMode();
  } else {
    darkMode();
  }
  // This is at root level
  root.setAttribute("color-scheme", `${theme}`);
}

// animate icon on change theme
const animateIcon = (el) => {
  el.classList.add("c-theme--is-animating");
  setTimeout(() => {
    el.classList.remove("c-theme--is-animating");
  }, 300);
};

// themes
const lightMode = () => {
  themeBtn.classList.remove("c-theme--active");
  animateIcon(themeBtn);
};

const darkMode = () => {
  themeBtn.classList.add("c-theme--active");
  animateIcon(themeBtn);
};

// assign theme function to theme buttons
themeBtn.addEventListener("click", () => {
  let theme = getCurrentTheme();
  if (theme === "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }
  localStorage.setItem("theme", `${theme}`);
  loadTheme(theme);
});

window.addEventListener("DOMContentLoaded", () => {
  loadTheme(getCurrentTheme());
});
