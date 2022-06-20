import { romanize, deromanize } from "./node_modules/romans/romans.js";

const numtoroman = document.querySelector("#numtoroman");
const romanconvert = document.querySelector("#romanconvert");
const romantonum = document.querySelector("#romantonum");
const numberconvert = document.querySelector("#numberconvert");

numtoroman.addEventListener("keyup", e => {
    // console.log(typeof parseInt(e.target.value));
    const torom = romanize(parseInt(e.target.value));
    // console.log(torom);
    romanconvert.innerHTML = `Roman: ${torom}`;
})

romantonum.addEventListener("keyup", e => {
    const tonum = deromanize(e.target.value.toUpperCase());
    numberconvert.innerHTML = `Arabic: ${tonum}`;
})