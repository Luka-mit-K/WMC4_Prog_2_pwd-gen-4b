"use strict";


//2 ZIP-Files abgeben:
//projekt mit erweiterten passwort
//kommandozeilenparameter projekt

//Kommentar mit github repo und npm eintrag (https://www.npmjs.com/; Schreiben, dass es ein Schulprojekt ist)

function passwordGenerator(passwordLength, useSpecialCharacters) {
    let avalibleSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    if (useSpecialCharacters) {
        avalibleSymbols += "!§$%&/()=?#+*-";
    }

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * avalibleSymbols.length);
        generatedPassword += avalibleSymbols[randomNumber];
    }

    return generatedPassword;
}

const password = passwordGenerator(8, true);
console.log(password);

module.exports = passwordGenerator;

//pnpm