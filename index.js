import { romanize, deromanize } from "./node_modules/romans/romans.js";

const numtoroman = document.querySelector("#numtoroman");
const romanconvert = document.querySelector("#romanconvert");
const romantonum = document.querySelector("#romantonum");
const numberconvert = document.querySelector("#numberconvert");

numtoroman.addEventListener("keyup", e => {
    try {
        // console.log(typeof parseInt(e.target.value));
        const torom = romanize(parseInt(e.target.value));
        // console.log(torom);
        romanconvert.innerHTML = `Roman: ${torom}`;
    }
    catch(err) {
        romanconvert.innerHTML = err.message;
    }    
})

romantonum.addEventListener("keyup", e => {
    try {
        const tonum = deromanize(e.target.value.toUpperCase());
        numberconvert.innerHTML = `Arabic: ${tonum}`;
    }
    catch(err) {
        numberconvert.innerHTML = err.message;
    }
    
})