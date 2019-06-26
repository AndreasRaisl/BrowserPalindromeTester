let Phrase = require("mhartl-palindrome");



function palindromeTester()
{
    let userInput = prompt("Give me your string please: ");
    let phrase = new Phrase(userInput);
    if (phrase.palindrome()) alert(`"${phrase.content}" is a palindrome`);
    else alert(`"${phrase.content}" is not a palindrome`);

}

let button = document.querySelector("#palindromeTester");
button.addEventListener("click", function() {
  palindromeTester();
});
