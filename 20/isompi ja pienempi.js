const prompt = require("prompt-sync")();

let num1 = Number(prompt("Anna ensimmäinen luku: "));


let num2 = Number(prompt("Anna toinen luku: "));



if (num1 > num2) {
    console.log("Suurempi luku on: " + num1);
} 

else if (num2 > num1) {
    console.log("Suurempi luku on: " + num2);
} 

else {
    console.log("Luvut ovat yhtä suuret.");
}