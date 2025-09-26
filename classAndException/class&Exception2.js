class TotalAmountInBag {
  price;
  minDiscount;
  constructor(initialAmount) {
    this.price = initialAmount;
    this.minDiscount = 5;
  }
  calculateFinalPrice(productAmount, productDiscount) {
    try {
      if (this.price <= 0) {
        throw new Error("Price should be greater than zero");
      } else if (productDiscount <= this.minDiscount) {
        throw new Error(
          `The discount should be greater than ${this.minDiscount}%`
        );
      } else if (this.price < productAmount)
        throw new Error(
          "You Bag do not have sufficent money to purchase the iteam"
        );
      else {
        let discountAmount = productAmount * (productDiscount / 100);
        console.log("The discount amount is:", discountAmount);
        let productTotalAmount = productAmount - discountAmount;
        console.log(
          "The total amount of the product after discount is:",
          productTotalAmount
        );
        let totalAmountInBag = this.price - productTotalAmount;
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}
let product = new TotalAmountInBag(10000);
product.calculateFinalPrice(50000, 10);
product.calculateFinalPrice(2000, 4);
