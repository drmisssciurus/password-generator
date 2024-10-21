const userSelect = document.getElementById("password-length"),
      numbers = document.getElementById("numbers"),
      lowercaseCharacters = document.getElementById("lowercase-characters"),
      uppercaseCharacters = document.getElementById("uppercase-characters"),
      symbolsCharacters = document.getElementById("symbols-characters"),
      buttonPassGenerate = document.getElementById("button"),
      excludeSimilarCharacters = document.getElementById("similar-characters"),
      clipboardButton = document.querySelector(".new-password-copy"),
      newPassword = document.getElementById("new-password");


      
//obj

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Utils functions

function getRandomLower(excludeSimilar = false) {
    const lowers = excludeSimilar ? 'abcdefghjkmnpqrstuvwxyz' : 'abcdefghijklmnopqrstuvwxyz';
    return lowers[Math.floor(Math.random() * lowers.length)];
}

function getRandomUpper(excludeSimilar = false) {
    const uppers = excludeSimilar ? 'ABCDEFGHJKMNPQRSTUVWXYZ' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return uppers[Math.floor(Math.random() * uppers.length)];
}

function getRandomNumber(excludeSimilar = false) {
    const numbers = excludeSimilar ? '23456789' : '0123456789';
    return numbers[Math.floor(Math.random() * numbers.length)];
}

//function for sybmols

function getRandomSymbol() {
    const symbols = "!@#$%^&*()_+[]{}|;:',.<>?/~`-=";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Generate event listen

buttonPassGenerate.addEventListener('click', () => {
    const passwordLength = +userSelect.value;

    const hasNumber = numbers.checked;
    const hasLower = lowercaseCharacters.checked;
    const hasUpper = uppercaseCharacters.checked;
    const hasSymbols = symbolsCharacters.checked;
    // use value for input but for div u should use innerText or innerHTML
    newPassword.value = generatePassword(hasNumber, hasLower, hasUpper, hasSymbols, passwordLength);
});

// Copy password to clipboard

clipboardButton.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = newPassword.value;

    if(!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!');
});


// Generate password function

const generatePassword = (number, lower, upper, symbol, length) => {
    //1. Init passw var
    let generatedPassword = '';
    const typesCount = number + lower + upper + symbol;
    
    const typesArr = [{ number }, { lower }, { upper }, { symbol }]
    .filter(
        item => Object.values(item)[0]
    );

    //2. Filter out unchecked types

    if(typesCount === 0) {
        return '';
    }

    const excludeSimilar = excludeSimilarCharacters.checked;

    //3. Loop ower lenght call generator funk for each type

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatedPassword += randomFunc[funcName](excludeSimilar);
        });
    }

    //to slice it if u need short password
    // generatedPassword.slice(0, length);

    //4.  return new passw
    return generatedPassword;
}

console.log('Hello There! My name is Alina! Here is my Password Generator app where I learn how to write vanilla JS and work with objects and arrays. If you are interested in giving me a job, feel free to contact me: https://www.linkedin.com/in/alina-levintas/ \nMay The Force be with you!');
