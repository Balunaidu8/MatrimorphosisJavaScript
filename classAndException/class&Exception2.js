class TotalAmountInBag {
  price;
  minDiscount;
  constructor(initialAmount) {
    this.price = initialAmount;
    this.minDiscount = 5;
  }
  calculateFinalPrice(discount) {
    try {
      if (this.price <= 0) {
        throw new Error("Price should be greater than zero");
      } else if (discount <= this.minDiscount) {
        throw new Error(
          `The discount should be greater than ${this.minDiscount}%`
        );
      } else {
        let discountAmount = this.price * (discount / 100);
        console.log("The discount amount is:", discountAmount);
        let totalAmount = this.price - discountAmount;
        console.log(
          "The total amount of the product after discount is:",
          totalAmount
        );
      }
    } catch (e) {
      console.error(e.message);
    }
  }
}
let product = new TotalAmountInBag(10000);
product.calculateFinalPrice(10);
product.calculateFinalPrice(4);
