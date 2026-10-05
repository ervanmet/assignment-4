javascript;
import { loadPage } from "./model.js";

function getPage() {
  let pageID = window.location.hash.substring(1);

  if (!pageID) {
    pageID = "home";
  }

  loadPage(pageID);
}

getPage();

window.addEventListener("hashchange", getPage);
