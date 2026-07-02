function generatePassword(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let result = "";

  for (let i = 0; i < length; i++) {
    // Pick a random index from the characters string
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

// Assign result to the password variable
const password = generatePassword(12);

// Log the final output
console.log("Generated password: " + password);