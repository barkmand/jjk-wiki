


export function flowchart(){
    const flowchartBtn1 = document.querySelectorAll(".flowchart-btn1")
    const flowchartBtn2 = document.querySelectorAll(".flowchart-btn2")
    const flowchartBtn3 = document.querySelectorAll(".flowchart-btn3")
    const flowchartBtn4 = document.querySelectorAll(".flowchart-btn4")
    const flowchartMenu1 = document.querySelector(".flowchart-menu1")
    const flowchartMenu2 = document.querySelector(".flowchart-menu2")
    const flowchartMenu3 = document.querySelector(".flowchart-menu3")
    const flowchartMenu4 = document.querySelector(".flowchart-menu4")

    flowchartBtn1.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            flowchartMenu1.innerHTML = index
            flowchartMenu1.classList.add("active")
        })
    })
}