
const siteCheck = document.querySelector(".footer")

export function footer(){
    if (siteCheck){
        siteCheck.insertAdjacentHTML(
            "beforeend", 
            `
        <div class="footer-pins1">
            <div class="pin"></div>
            <div class="pin"></div>
        </div>
        <div class="footer-pins2">
            <div class="pin"></div>
            <div class="pin"></div>
        </div>
                <nav class="footer-nav">
                    <a href="index.html" class="to-homepage-btn"><i class="fa-solid fa-house"></i></a>
                    <p class="footer-text"><span class="authors">Authors:</span><span>Bjarke</span><span>Willow</span><span>David</span></p>    
                    <a href="#" class="to-top-btn"><i class="fa-solid fa-circle-up"></i></a>
                </nav>
            `
        )
    }
}

