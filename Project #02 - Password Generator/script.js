const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '012356789';
const symbols = '!@#$%^&*()_+-=*?~{}[]\\|.<>"';

const lengthPs = document.getElementById('length');
const lowercasePs = document.getElementById('lowercase');
const numbersPs = document.getElementById('numbers');
const symbolsPs = document.getElementById('symbols');
const uppercasePs = document.getElementById('uppercase');
const generateBtn = document.getElementById('generate');
const passwordPs = document.getElementById('password');

generateBtn.addEventListener('click', function(){


    const length = lengthPs.value;
    let characters = '';
    let password = '';

    if(lowercasePs.checked) {
        characters += uppercaseLetters
    }

    if(symbolsPs.checked) {
        characters += symbols
    }

    if(numbersPs.checked) {
        characters += numbers
    }

    if(lowercasePs.checked) {
        characters += lowercaseLetters
    }

    for(let i = 0; i < length; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    passwordPs.value = password;

});