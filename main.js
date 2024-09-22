const userSelect = document.getElementById("password-length"),
      buttonPassMade = document.getElementById("button"),
      numbers = document.getElementById("numbers"),
      lowercaseCharacters = document.getElementById("lowercase-characters"),
      uppercaseharacters = document.getElementById("uppercase-characters"),
      newPassword = document.getElementById("new-password");


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(typeof +userSelect.value); //!!!!!


//function for sybmols

// function getRandomSymbol() {
//     const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/~`-=";
//     return symbols[Math.floor(Math.random() * symbols.length)]
// }

const passwordLength = userSelect.value;
buttonPassMade.addEventListener('click', ()=> {
    console.log(Math.floor(Math.random() * 20));
});
