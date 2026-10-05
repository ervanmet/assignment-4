import home from "./pages/home.js";
import about from "./pages/about.js";
import { showToast } from "./utility.js";

const pages = {
  home,
  about,
};

export function loadPage(pageID) {
  const app = document.getElementById("app");

  if (pages[pageID]) {
    app.innerHTML = pages[pageID]();
  } else {
    app.innerHTML = pages.home();
  }

  if (pageID === "home") {
    setupHomeButtons();
  }
}

function setupHomeButtons() {
  const successBtn = document.getElementById("successBtn");
  const errorBtn = document.getElementById("errorBtn");
  const infoBtn = document.getElementById("infoBtn");
  const loadingBtn = document.getElementById("loadingBtn");

  successBtn.addEventListener("click", () => {
    showToast("Success! Your action was completed.", "success");
  });

  errorBtn.addEventListener("click", () => {
    showToast("Something went wrong.", "error");
  });

  infoBtn.addEventListener("click", () => {
    showToast("Here is some information for you.", "info");
  });

  loadingBtn.addEventListener("click", () => {
    showToast("Loading, please wait...", "loading");
  });
}
