const passwordBox = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");

const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPRSTUVYZ";
const lowerCase = "abcdefghıjklmnoprstuvyz";
const number = "0123456789";
const symbol = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`;

const all = upperCase + lowerCase + number + symbol;

function createPassword(){
     let password = "";
     password += upperCase[Math.floor(Math.random() * upperCase.length)];
     password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
     password += number[Math.floor(Math.random() * number.length)];
     password += symbol[Math.floor(Math.random() * symbol.length)];

     while(lenght > password.length){
          password += all[Math.floor(Math.random() * all.length)];
     }
     passwordBox.value = password;
}

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordBox.value)
      .then(() => alert("Password copied!"))
      .catch(err => console.error("Failed to copy:", err));
  });
 