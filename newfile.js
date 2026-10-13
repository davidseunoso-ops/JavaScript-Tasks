const prompt = require("prompt-sync")();

let name = prompt("What is your name? ");
let age = prompt("How old are you? ");
let complexion = prompt("What is your complexion? ");
let school = prompt("What is the name of your school? ");
let hobbies = prompt("What are your hobbies? ");


console.log(`My name is ${name}.`, `I am ${age}years old.`, `I am ${complexion} in complexion.`, `The name of my school is ${school}.`, `I like ${hobbies}.`);




