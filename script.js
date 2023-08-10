'use strict';

const upperCase = Array.from({length: 26}, (_, i) => String.fromCharCode(i + 65));
const lowerCase = Array.from({length: 26}, (_, i) => String.fromCharCode(i + 97));
const numbers = Array.from({length: 10}, (_, i) => i.toString());
const symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];
const allCharacters = [upperCase, lowerCase, numbers, symbols];

function getRandomValue(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

function generatePassword() {
  const passwordLength = parseInt(document.getElementById('passwordLength').value) || 8;

  if (passwordLength < 8 || passwordLength > 128) {
    document.getElementById('error').textContent = 'Password must be between 8 and 128 characters';
    return '';
  } else {
    document.getElementById('error').textContent = '';
    
    let password = [];
    allCharacters.forEach(characterSet => {
      password.push(getRandomValue(characterSet));
    });
    for (let i = password.length; i < passwordLength; i++) {
      const randomCharacterSet = getRandomValue(allCharacters);
      password.push(getRandomValue(randomCharacterSet));
    }
    return password.sort(() => Math.random() - 0.5).join('');
  };
};

document.getElementById('copyButton').addEventListener('click', () => {
  navigator.clipboard.writeText(document.getElementById('output').textContent);

  // Change the button's icon to a tick/check mark
  const iconElement = document.querySelector('#copyButton i');
  iconElement.className = "fas fa-check";

  // Set a timeout to revert the icon back to its original state after 3 seconds
  setTimeout(() => {
      iconElement.className = "fas fa-copy";
  }, 2000);
});


function writePassword() {
  const passwordLength = parseInt(document.getElementById('passwordLength').value);

  if (!isNaN(passwordLength) && passwordLength > 0) {
    document.getElementById('output').textContent = generatePassword();
  } else {
    document.getElementById('output').textContent = '';
  };
};


// Set a default password length when the page loads
document.getElementById('passwordLength').value = 8;