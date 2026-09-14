
const siteCheck = document.querySelector(".homepage-main")

import { fetchInfoboxData } from "./infobox.js"
const data = await fetchInfoboxData();

export function flowchart(){

    if (siteCheck){

        //#region CONSTS

        const flowchartBtns = document.querySelectorAll(".flowchart-btn")
        const flowchartMenus = document.querySelectorAll(".flowchart-menu")
    
        const flowchartBtn1 = document.querySelectorAll(".flowchart-btn1")
        const flowchartBtn2 = document.querySelectorAll(".flowchart-btn2")
        const flowchartBtn3 = document.querySelectorAll(".flowchart-btn3")
        const flowchartBtn4 = document.querySelectorAll(".flowchart-btn4")
    
        const flowchartMenu1 = document.querySelector(".flowchart-menu1")
        const flowchartMenu2 = document.querySelector(".flowchart-menu2")
        const flowchartMenu3 = document.querySelector(".flowchart-menu3")
        const flowchartMenu4 = document.querySelector(".flowchart-menu4")
    
        //#endregion CONSTS END
    
        //#region GENERAL TOGGLES
    
        function removeActiveElements(){
            flowchartBtns.forEach((btn) => {
                btn.classList.remove("active")
            })
            flowchartMenus.forEach((menu) => {
                menu.classList.remove("active")
            })
        }
        
    
        flowchartBtns.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                removeActiveElements()
                flowchartBtns[index].classList.add("active")
            })
        })

        //#endregion GENERAL TOGGLES END
    
        //#region SPECIFIC TOGGLES

        flowchartBtn1.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                flowchartMenu1.classList.add("active")
                flowchartMenu1.innerHTML = data.map((element) => {
                        return`<a href="${element.href}?id=${element.id}">${element.title}</a>`
                    }).join("")
                /* NEED TO MAKE IT ONLY INPUT ELEMENTS WITH A "category" VALUE OF "character" */
            })
        })
    
        flowchartBtn2.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                flowchartMenu2.classList.add("active")
                flowchartMenu2.innerHTML = data.map((element) => {
                        return`<a href="${element.href}?id=${element.id}">${element.title}</a>`
                    }).join("")
                /* NEED TO MAKE IT ONLY INPUT ELEMENTS WITH A "category" VALUE OF "battle" */
            })
        })
    
        flowchartBtn3.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                flowchartMenu3.classList.add("active")
                flowchartMenu3.innerHTML = data.map((element) => {
                        return`<a href="${element.href}?id=${element.id}">${element.title}</a>`
                    }).join("")
                /* NEED TO MAKE IT ONLY INPUT ELEMENTS WITH A "category" VALUE OF "other" */
            })
        })
    
        flowchartBtn4.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                flowchartMenu4.classList.add("active")
                flowchartMenu4.innerHTML = data.map((element) => {
                        return`<a href="${element.href}?id=${element.id}">${element.title}</a>`
                    }).join("")
                /* NEED TO MAKE IT ONLY INPUT ELEMENTS WITH A "category" VALUE OF "world" */
            })
        })
        
        //#endregion SPECIFIC TOGGLES END

    }


    

}


