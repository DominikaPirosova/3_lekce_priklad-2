/* Dva spôsoby zapisovania*/

const nazov = "Knižka"
const autor = "Dominika Pirošová"
const cena = 450
const naSklade = true

const kniha = {
    nazov: "Knižka",
    autor: "Dominika Pirošová",
    cena: 450,
    naSklade: true,
}

document.body.innerHTML += "<p>Kniha: " + nazov + ", autor: " + autor + "</p>"
document.body.innerHTML += "<p>Kniha: " + kniha.nazov + ", autor: " + kniha.autor + "</p>"