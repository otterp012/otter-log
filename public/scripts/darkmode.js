// if (
//   localStorage.getItem("theme") === "dark" ||
//   (!("theme" in localStorage) &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches)
// ) {
//   document.documentElement.classList.add("dark");
// } else {
//   document.documentElement.classList.remove("dark");
// }

// console.log("??");

(function initTheme() {
  var theme = localStorage.getItem("theme") || "dark";
  if (theme === "dark") {
    document.querySelector("html").classList.add("dark");
  }
})();
