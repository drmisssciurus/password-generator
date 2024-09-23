const userSelect = document.getElementById("password-length"),
      numbers = document.getElementById("numbers"),
      lowercaseCharacters = document.getElementById("lowercase-characters"),
      uppercaseCharacters = document.getElementById("uppercase-characters"),
      buttonPassMade = document.getElementById("button"),
      newPassword = document.getElementById("new-password");

//obj

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber
};

// Utils functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//function for sybmols

// function getRandomSymbol() {
//     const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/~`-=";
//     return symbols[Math.floor(Math.random() * symbols.length)]
// }


// button listener


buttonPassMade.addEventListener('click', () => {
    const passwordLength = +userSelect.value;

    const hasNumber = numbers.checked;
    const hasLower = lowercaseCharacters.checked;
    const hasUpper = uppercaseCharacters.checked;


    console.log(hasNumber, hasLower, hasUpper, passwordLength);
    
});
