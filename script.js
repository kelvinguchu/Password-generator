const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];

function generatePassword() {
    let password = '';
    let passwordLength = parseInt(document.getElementById('passwordLength').value);
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      document.getElementById('error').textContent = 'Password must be between 8 and 128 characters';
    } else {
      document.getElementById('error').textContent = '';
      for (let i = 0; i < passwordLength; i++) {
        let randomCharacter = '';
        
        // Generate a random number between 0 and 3 to determine the character type
        let characterType = Math.floor(Math.random() * 4);
  
        // Select a random character from the corresponding character type array
        switch (characterType) {
          case 0:
            randomCharacter = upperCase[Math.floor(Math.random() * upperCase.length)];
            break;
          case 1:
            randomCharacter = lowerCase[Math.floor(Math.random() * lowerCase.length)];
            break;
          case 2:
            randomCharacter = numbers[Math.floor(Math.random() * numbers.length)];
            break;
          case 3:
            randomCharacter = symbols[Math.floor(Math.random() * symbols.length)];
            break;
        }
  
        password += randomCharacter;
      }
      return password;
    }
  }  

function writePassword() {
  let password = generatePassword();
  document.getElementById('output').innerHTML = password;
}

writePassword();
