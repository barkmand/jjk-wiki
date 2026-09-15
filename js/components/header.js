const siteCheck = document.querySelector(".page-header");

import { fetchInfoboxData } from "./infobox.js";
const data = await fetchInfoboxData();

export function header() {
  if (siteCheck) {
    /* ${data
    .map((element) => {
      return `<a href="${element.href}?id=${element.id}">${element.title}</a>`;
      })
      .join("")}
      <!-- NEED TO MAKE IT ONLY INPUT ELEMENTS WITH A "category" VALUE OF "character"--> */

    siteCheck.insertAdjacentHTML(
      "beforeend",
      `
        <nav class="page-nav">
            <a href="index.html"><img src="assets/images/Jujutsu_Kaisen_logo_in_Japan.png" class="nav-icon"></a>
            <div class="burger-button">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <div class="burger-menu">
                <section class="menu-section">
                    <a href="index.html">Frontpage</a>
                </section>
                <hr class="menu-seperator">
                <section class="menu-section">
                    <p class="menu-section-btn">Characters</p>
                    <div class="menu-section-container" data-set="character"></div>
                </section>
                <hr class="menu-seperator">
                <section class="menu-section">
                    <p class="menu-section-btn">Battles</p>
                    <div class="menu-section-container" data-set="battle"></div>
                </section>
                <hr class="menu-seperator">
                <section class="menu-section">
                    <p class="menu-section-btn">Other Events</p>
                    <div class="menu-section-container" data-set="event"></div>
                </section>
                <hr class="menu-seperator">
                <section class="menu-section">
                    <p class="menu-section-btn">World</p>
                    <div class="menu-section-container" data-set="world"></div>
                </section>
            </div>
        </nav>
        <section class="page-hero">
        <h1>Jujutsu Kaisen FanWiki</h1>
        </section>
        
        `,
    );
  }
  const linkContainers = document.querySelectorAll(".menu-section-container");
  
  linkContainers.forEach((container) => {
    let categoryCheckResult;
  
    if (container.getAttribute("data-set") == "character") {
      categoryCheckResult = data.filter(
        (element) => element.category == "character",
      );
    }
    if (container.getAttribute("data-set") == "battle") {
      categoryCheckResult = data.filter(
        (element) => element.category == "battle",
      );
    }
    if (container.getAttribute("data-set") == "event") {
      categoryCheckResult = data.filter((element) => element.category == "event");
    }
    if (container.getAttribute("data-set") == "world") {
      categoryCheckResult = data.filter((element) => element.category == "world");
      console.log(categoryCheckResult);
    }
  
    container.innerHTML = categoryCheckResult
      .map((element) => {
        return `<a href="${element.href}?id=${element.id}">${element.title}</a>`;
      })
      .join("");
  
      console.log(categoryCheckResult);
    });
    
}
