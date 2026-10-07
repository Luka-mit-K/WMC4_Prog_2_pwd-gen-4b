"use strict";


//2 ZIP-Files abgeben:
//projekt mit erweiterten passwort
//kommandozeilenparameter projekt

//Kommentar mit github repo und npm eintrag (https://www.npmjs.com/; Schreiben, dass es ein Schulprojekt ist)

function passwordGenerator() {
    const avalibleSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!§$%&/()=?#+*-";
    const length = 8;
    
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * avalibleSymbols.length);
        generatedPassword += avalibleSymbols[randomNumber];
    }

    return generatedPassword;
}

const password = passwordGenerator();
console.log(password);

module.exports = generatedPassword;

//pnpm