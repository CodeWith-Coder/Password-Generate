const passwordBox = document.getElementById("Password");
const length = 12;

const upperCase = "ABCDEFGHIJLLMNOPQRSTWXYZ"
const lowerCase = "abcdefghijklmnopqrstwxyz"
const number = "0123456789";
const symbol = "~!@#$%^&*()_+?><|}{`\][/.,";

const allchar = upperCase + lowerCase + number + symbol;
function createPassword(){
    let Password = " ";
    Password += upperCase[Math.floor(Math.random() * upperCase.length)];
    Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    Password += number[Math.floor(Math.random() * number.length)];
    Password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length>Password.length){
        Password += allchar[Math.floor(Math.random() * allchar.length)];
        // Password +=  upperCase + lowerCase + number + symbol;
    }
    passwordBox.value = Password;
}

function copypassword(){
    passwordBox.select();
    document.execCommand("copy");
}