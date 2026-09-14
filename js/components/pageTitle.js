const pageCheck = document.querySelector(".page-main")

import { fetchInfoboxData } from "./infobox.js"
const data = await fetchInfoboxData();

export function pageTitle(){

    if(!pageCheck){
        return
    }

    const search = location.search
        const subjectID = new URLSearchParams(search).get("id")

        const subject = data.find(subject => subject.id == subjectID)
        
    const title = document.querySelector("title")

    title.innerText = `${subject.title} - JJK FanWiki`
}