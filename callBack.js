function processingorder(orderno, callback) {
  console.log(`Your Order Has Been Placed, order no: ${orderno}. Please wait.`);
  setTimeout(() => {
    console.log("Please be patient.");
  }, 1000);
  console.log("Your order is being prepared.");
  setTimeout(callback, 2000);
}
function orderprocessing() {
  console.log("We are almost finished processing your order.");
}
processingorder(123, orderprocessing);
