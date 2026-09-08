const pageCheck = document.querySelector(".hokuna");

export async function fetchInfoboxData() {
  try {
    const response = await fetch("./js/data/infobox.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching or parsing data", error);
  }
}

const data = await fetchInfoboxData();

const search = location.search
        const subjectID = new URLSearchParams(search).get("id")

        const subject = data.find(subject => subject.id == subjectID)
        console.log(subject)

export async function infobox() {
  const infobox = document.querySelector(".infobox");
    

  if (infobox) {
    infobox.insertAdjacentHTML(
      "beforeend",
      `
                <h2>${subject.title}</h2>
                    <img src="${subject.imgSource}" class="infobox-img">
                    <div class="infobox-bottom">
                    <section class="infobox-info">
                        <p class="info-left">Kanji</p>
                        <p class="info-right">${subject.kanji}</p>
                    </section>
                    <section class="infobox-info">
                        <p class="info-left">Aliases</p>
                        <p class="info-right">${subject.aliases.map((item) => {
                            return `<span>${item}</span>`
                        }).join("")
                    }</p>
                    </section>
                    <section class="infobox-info">
                        <p class="info-left">Grade</p>
                        <p class="info-right">${subject.grade}</p>
                    </section>
                    <section class="infobox-info">
                        <p class="info-left">Species</p>
                        <p class="info-right">${subject.species}</p>
                    </section>
                    <section class="infobox-info">
                        <p class="info-left">Occupation</p>
                        <p class="info-right">${subject.occupation}</p>
                    </section>
                    <section class="infobox-info">
                        <p class="info-left">Relatives</p>
                        <p class="info-right">${subject.relatives.map((item) => {
                            return `<span>${item}</span>`
                        }).join("")
                    }</p>
                    </section>
                    <section class="infobox-info">
                        <p class="info-left">Age</p>
                        <p class="info-right">${subject.age}</p>
                    </section>
                    <section class="infobox-info">
                        <p class="info-left">Gender</p>
                        <p class="info-right info-right-gender">${subject.gender}</p>
                    </section>
                    </div>
                `,
    );
  }
}
