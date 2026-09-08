
const siteCheck = document.querySelector(".page-header")

export function header(){
    if (siteCheck){
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
                <section class="menu-section"><a href="index.html">Frontpage</a></section>
                <hr class="menu-seperator">
                <section class="menu-section">
                    <a href="ren-fujimori.html">Fujimori Ren</a>
                    <a href="hokuna.html">Hokuna</a>
                </section>
            </div>
        </nav>
        <section class="page-hero">
            <h1>Jujutsu Kaisen FanWiki</h1>
        </section>
    
            `
        )
    }
}

