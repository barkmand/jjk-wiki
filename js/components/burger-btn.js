
export function burgerBtn(){
    const burgerBtn = document.querySelector(".burger-button")
    const bars = document.querySelectorAll(".bar")
    const burgerMenu = document.querySelector(".burger-menu")

    if(!burgerBtn){
        return
    }
    
    burgerBtn.addEventListener("click", () => {
        bars.forEach ((bar) => {
            bar.classList.toggle("active")
        })
        burgerMenu.classList.toggle("active")
        
    })
    window.addEventListener("scroll", () => {
        bars.forEach ((bar) => {
            bar.classList.remove("active")
        })
        burgerMenu.classList.remove("active")
    })
        
}
