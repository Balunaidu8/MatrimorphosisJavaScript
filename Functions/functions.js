function validateUser(username, password) {
  if (username == "balu" && password == "balunaidu") return "Login Sucessfully";
  else return "Incorrect password or Username";
}
console.log(validateUser("balu", "balunaidu"));
console.log(validateUser("puppy", "  "));
