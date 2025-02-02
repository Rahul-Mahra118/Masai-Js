function generatePassword(length, includeNumbers, includeSpecialChars) {
    let getPassword = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?";

    let charset = letters; 

    if (includeNumbers) {
        charset += numbers;
    }

    if (includeSpecialChars) {
        charset += specialChars; 
    }
    const charsetLength = charset.length;
    for (let i = 0; i < length; i++) {
        const getIndex = Math.floor(Math.random() * charsetLength); 
        getPassword += charset[getIndex];
    }

    return getPassword;
}
const passwordLength = 12; 
const includeNumbers = true; 
const includeSpecialChars = true; 

const password = generatePassword(passwordLength, includeNumbers, includeSpecialChars);
console.log(password);
