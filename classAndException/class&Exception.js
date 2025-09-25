class ATM {
  balance;
  minbalance;
  constructor(initalbalance) {
    this.balance = initalbalance;
    this.minbalance = 2000;
  }
  withdraw(amount) {
    try {
      if (amount <= 0)
        throw new Error("The Amount Should be Greater Than Zero");
      else if (this.balance < amount) throw new Error("Insufficient Balance");
      else if (this.balance - amount <= this.minbalance)
        throw new Error(
          "You Can Not Withdraw The Amount More than Minimum balance"
        );
      else {
        this.balance -= amount;
        console.log(
          "Transaction Completed Successfully . Remainiing Balance is:",
          this.balance
        );
      }
    } catch (e) {
      console.log(e.message);
    }
  }
}
let customerAccount = new ATM(10000);
customerAccount.withdraw(2000);
customerAccount.withdraw(10000);
