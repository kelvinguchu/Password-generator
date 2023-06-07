//Declare arrays to store the values that will make up the password. 
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];

function generatePassword() {
  let password = '';
  let passwordLength = parseInt(document.getElementById('passwordLength').value);

  // Check if password length is valid
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    document.getElementById('error').textContent = 'Password must be between 8 and 128 characters';
  } else {
    document.getElementById('error').textContent = '';

    // Generate password
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
    
    // Return the generated password
    return password;
  }
}

function writePassword() {
  // Generate a password using the generatePassword() function
  let password = generatePassword();

  // Write the generated password to the 'output' element in the HTML
  document.getElementById('output').innerHTML = password;
}

// Call the writePassword() function to generate and display the password
writePassword();

