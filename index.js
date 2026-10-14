"use strict";

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

// const password = passwordGenerator(8, true);
// console.log(password);

module.exports = passwordGenerator;