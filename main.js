let Phrase = require("mhartl-palindrome");

let userInput = prompt("Give me your string please: ");
let phrase = new Phrase(userInput);
console.log(phrase.content);

if (phrase.palindrome()) alert(`"${phrase.content}" is a palindrome`);
else alert(`"${phrase.content}" is not a palindrome`);