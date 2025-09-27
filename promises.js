class ATM {
  balance;
  constructor(initialBalance) {
    this.balance = initialBalance;
  }
  withdraw(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.balance < amount) {
          reject({ msg: "Your balance is too low." });
        } else {
          this.balance -= amount;
          resolve({ msg: "Transaction Successful", balance: this.balance });
        }
      }, 0);
    });
  }
}
let TransactionAmount = new ATM(10000);
let statusObj = TransactionAmount.withdraw(2000);
statusObj
  .then((successMsg) => {
    console.log(successMsg);
  })
  .catch((failureMsg) => {
    console.log(failureMsg);
  })
  .finally(() => {
    console.log(
      "Your current transaction is complete. If you would like to do another transaction, please insert the card."
    );
  });
