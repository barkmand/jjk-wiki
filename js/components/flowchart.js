const siteCheck = document.querySelector(".homepage-main");

import { fetchInfoboxData } from "./infobox.js";
const data = await fetchInfoboxData();

export function flowchart() {
  if (siteCheck) {
    //#region CONSTS

    const flowchartBtns = document.querySelectorAll(".flowchart-btn");
    const flowchartMenus = document.querySelectorAll(".flowchart-menu");

    const flowchartBtn1 = document.querySelectorAll(".flowchart-btn1");
    const flowchartBtn2 = document.querySelectorAll(".flowchart-btn2");
    const flowchartBtn3 = document.querySelectorAll(".flowchart-btn3");
    const flowchartBtn4 = document.querySelectorAll(".flowchart-btn4");

    const flowchartMenu1 = document.querySelector(".flowchart-menu1");
    const flowchartMenu2 = document.querySelector(".flowchart-menu2");
    const flowchartMenu3 = document.querySelector(".flowchart-menu3");
    const flowchartMenu4 = document.querySelector(".flowchart-menu4");

    //#endregion CONSTS END

    //#region GENERAL TOGGLES

    function removeActiveElements() {
      flowchartBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      flowchartMenus.forEach((menu) => {
        menu.classList.remove("active");
      });
    }

    flowchartBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        removeActiveElements();
        flowchartBtns[index].classList.add("active");
      });
    });

    //#endregion GENERAL TOGGLES END

    //#region SPECIFIC TOGGLES

    flowchartBtn1.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        flowchartMenu1.classList.add("active");

        let categoryCheckResult;

        if (btn.getAttribute("data-set") == "good") {
          categoryCheckResult = data.filter(
            (element) =>
              element.category == "character" && element.subcategory == "good",
          );
        }
        if (btn.getAttribute("data-set") == "bad") {
          categoryCheckResult = data.filter(
            (element) =>
              element.category == "character" && element.subcategory == "bad",
          );
        }
        if (btn.getAttribute("data-set") == "tool") {
          categoryCheckResult = data.filter((element) => element.category == "character" && element.subcategory == "tool")
        }

        flowchartMenu1.innerHTML = categoryCheckResult.map((element) => {
            return `<a href="${element.href}?id=${element.id}">${element.title}</a>`;
          })
          .join("");
      });
    });

    flowchartBtn2.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        flowchartMenu2.classList.add("active");

        let categoryCheckResult;

        if (btn.getAttribute("data-set") == "season1") {
          categoryCheckResult = data.filter((element) => element.category == "battle" && element.subcategory == "season1",
          );
        }
        if (btn.getAttribute("data-set") == "season2") {
          categoryCheckResult = data.filter((element) => element.category == "battle" && element.subcategory == "season2",
          );
        }
        if (btn.getAttribute("data-set") == "season3") {
          categoryCheckResult = data.filter((element) => element.category == "battle" && element.subcategory == "season3")
        }
        if (btn.getAttribute("data-set") == "season4") {
          categoryCheckResult = data.filter((element) => element.category == "battle" && element.subcategory == "season4")
        }
        if (btn.getAttribute("data-set") == "season5") {
          categoryCheckResult = data.filter((element) => element.category == "battle" && element.subcategory == "season5")
        }

        flowchartMenu2.innerHTML = categoryCheckResult.map((element) => {
            return `<a href="${element.href}?id=${element.id}">${element.title}</a>`;
          })
          .join("");
      });
    });

    flowchartBtn3.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        flowchartMenu3.classList.add("active");

        let categoryCheckResult;

        if (btn.getAttribute("data-set") == "pre") {
          categoryCheckResult = data.filter(
            (element) =>
              element.category == "event" && element.subcategory == "pre",
          );
        }
        if (btn.getAttribute("data-set") == "mid") {
          categoryCheckResult = data.filter(
            (element) =>
              element.category == "event" && element.subcategory == "mid",
          );
        }
        if (btn.getAttribute("data-set") == "post") {
          categoryCheckResult = data.filter((element) => element.category == "event" && element.subcategory == "post")
        }

        flowchartMenu3.innerHTML = categoryCheckResult.map((element) => {
            return `<a href="${element.href}?id=${element.id}">${element.title}</a>`;
          })
          .join("");
      });
    });

    flowchartBtn4.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        flowchartMenu4.classList.add("active");

        let categoryCheckResult;

        if (btn.getAttribute("data-set") == "terminology") {
          categoryCheckResult = data.filter(
            (element) =>
              element.category == "world" && element.subcategory == "terminology",
          );
        }
        

        flowchartMenu4.innerHTML = categoryCheckResult.map((element) => {
            return `<a href="${element.href}?id=${element.id}">${element.title}</a>`;
          })
          .join("");
      });
    });

    //#endregion SPECIFIC TOGGLES END
  }
}
