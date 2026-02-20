const prompt = require("prompt-sync")();

let word = prompt("anna sana");



let reversed = word.split("").reverse().join("");



if (word === reversed) {
    console.log("Sana on palindromi.");
} 

else {
    console.log("Sana ei ole palindromi.");
}