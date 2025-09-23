let discount = (amount, discountPercentage) =>
  amount * (discountPercentage / 100);
let amount = 1000;
let discountAmount = discount(amount, 10);
console.log("discount amount =", discountAmount);
let totalAmount = amount - discountAmount;
console.log("Total Amount =", totalAmount);
