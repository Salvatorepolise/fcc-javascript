let email = "apple.pie@example.com";

function maskEmail(email) {

  const atIndex = email.indexOf("@");
  
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const maskedUsername = 
    username[0] + 
    "*".repeat(username.length - 2) + 
    username[username.length - 1];
  
  return maskedUsername + domain;
}

console.log(maskEmail(email));