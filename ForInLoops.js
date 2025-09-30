let default_design = {
  colour: "Blue",
  size: 20,
  height: 6,
};
let user_preference = {
  colour: "red",
  height: 18,
};
console.log("default design :", default_design);
for (let key in default_design) {
  default_design[key] = user_preference[key];
}
console.log("after adding user prefences design is :", default_design);
