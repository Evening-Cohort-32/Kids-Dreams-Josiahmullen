import { getChildren, getCelebrities } from "./database.js"

const kids = getChildren()
const celebrities = getCelebrities()

const findCelebrityMatch = (kidObject, celebrityArray) => {
    for (const celebrity of celebrityArray) {
        if (celebrity.id === kidObject.celebrityId) {
            return celebrity
        }
    }

    return null
}

export const Pairings = () => {
    let html = ""
    html = "<ul>"

    for (const kid of kids) {
        const kidsStar = findCelebrityMatch(kid, celebrities)
        const starName = kidsStar ? kidsStar.name : "a celebrity"
        const starSport = kidsStar ? kidsStar.sport : "their sport"

        html += `
            <li>
                ${kid.name} will be making memories with ${starName}, a ${starSport} star, by ${kid.wish}
            </li>
        `
    }

    html += "</ul>"

    return html
}

