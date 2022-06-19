import { romanize } from "./node_modules/romans/romans.js";

const numtoroman = document.querySelector("#numtoroman");
const romanconvert = document.querySelector("#romanconvert");

numtoroman.addEventListener("change", e => {
    // console.log(typeof parseInt(e.target.value));
    const torom = romanize(parseInt(e.target.value));
    // console.log(torom);
    romanconvert.innerHTML = `Roman: ${torom}`;
})