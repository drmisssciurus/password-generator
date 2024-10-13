const userSelect = document.getElementById("password-length"),
      numbers = document.getElementById("numbers"),
      lowercaseCharacters = document.getElementById("lowercase-characters"),
      uppercaseCharacters = document.getElementById("uppercase-characters"),
      buttonPassGenerate = document.getElementById("button"),
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

// Generate event listen

buttonPassGenerate.addEventListener('click', () => {
    const passwordLength = +userSelect.value;

    const hasNumber = numbers.checked;
    const hasLower = lowercaseCharacters.checked;
    const hasUpper = uppercaseCharacters.checked;
    // use value for input but for div u should use innerText or innerHTML
    newPassword.value = generatePassword(hasNumber, hasLower, hasUpper, passwordLength);
});

// Generate password function

const generatePassword = (number, lower, upper, length) => {
    //1. Init passw var
    let generatedPassword = '';
    const typesCount = number + lower + upper;

    // console.log('typesCount: ', typesCount);
    
    const typesArr = [{ number }, { lower }, { upper }]
    .filter(
        item => Object.values(item)[0]
    );

    // console.log('typesArr: ', typesArr);

    //2. Filter out unchecked types

    if(typesCount === 0) {
        return '';
    }

    //3. Loop ower lenght call generator funk for each type

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            // console.log('funcName: ', funcName);

            generatedPassword += randomFunc[funcName]();
        });
    }

    //to slice it if u need short password
    // generatedPassword.slice(0, length);

    //4.  return new passw
    return generatedPassword;
}