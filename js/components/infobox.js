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

export async function infobox() {
  const infobox = document.querySelector(".infobox");
    let i = 0

  if (infobox) {
    infobox.insertAdjacentHTML(
      "beforeend",
      `
                <h2>${data[i].title}</h2>
                    <img src="${data[i].imgSource}" class="infobox-img">
                    <div class="infobox-bottom">
                    <section class="infobox-info">
                        <p class="info-left">Kanji</p>
                        <p class="info-right">${data[i].kanji}</p>
                    </section>
                    <section class="infobox-info">
                        <p class="info-left">Aliases</p>
                        <p class="info-right">${`<span></span>`}</p>
                    </section>
                    <section class="infobox-info">
                        <p class="info-left">Grade</p>
                        <p class="info-right">${data[i].grade}</p>
                    </section>
                    <section class="infobox-info">
                        <p class="info-left">Species</p>
                        <p class="info-right">${data[i].species}</p>
                    </section>
                    <section class="infobox-info">
                        <p class="info-left">Occupation</p>
                        <p class="info-right">${data[i].occupation}</p>
                    </section>
                    <section class="infobox-info">
                        <p class="info-left">Relatives</p>
                        <p class="info-right">${`<span></span>`}</p>
                    </section>
                    <section class="infobox-info">
                        <p class="info-left">Age</p>
                        <p class="info-right">${data[i].age}</p>
                    </section>
                    <section class="infobox-info">
                        <p class="info-left">Gender</p>
                        <p class="info-right info-right-gender">${data[i].gender}</p>
                    </section>
                    </div>
                `,
    );
  }
}
