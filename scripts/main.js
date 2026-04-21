import { Pairings } from "./Pairings.js"
import { Celebrities } from "./CelebrityList.js"
import { Kids } from "./Kids.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
    <h1>Make a Memory for Kids</h1>
    <article class="details">
        <section class="detail--column list details__kids">
            <h2>Kids</h2>
            ${Kids()}
        </section>
        <section class="detail--column details__celebrities">
            <h2>Celebrities</h2>
            ${Celebrities()}
        </section>
    </article>

    <article class="assignments">
        <h2>Pairings</h2>
        ${Pairings()}
    </article>
`

mainContainer.innerHTML = applicationHTML

// show a child's wish when their name is clicked (event delegation)
document.addEventListener("click", (event) => {
    const target = event.target

    if (target.dataset && target.dataset.type === "child") {
        const wish = target.dataset.wish
        window.alert(wish)
    }
})

// show a celebrity's sport when their name is clicked
document.addEventListener("click", (event) => {
    const target = event.target

    if (target.dataset && target.dataset.type === "celebrity") {
        const sport = target.dataset.sport
        window.alert(sport)
    }
})

