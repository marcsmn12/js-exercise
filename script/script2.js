// Question 2: Create a BankAccount class that has:
// constructor(ownerName, initialBalance)
// deposit(amount)
// withdraw(amount)
// transferTo(anotherAccount, amount) → transfers if enough balance
// getSummary() → returns:
// "John's balance is $400"

// Bonus:
// Store as an array of strings: ["Deposited $200", "Withdrew $50"]
// Add printHistory() method

// Example:
// const acc1 = new BankAccount("John", 500);
// const acc2 = new BankAccount("Sara", 300);
// acc1.transferTo(acc2, 200);
// acc1.getSummary(); // John's balance is $300
// acc2.getSummary(); // Sara's balance is $500
// acc1.printHistory();

class BankAccount {
  constructor(ownerName, initialBalance) {
    this.ownerName = ownerName;
    this.balance = initialBalance;
    this.history = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.history.push(`Deposit $${amount}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      this.history.push(`Withdraw $${amount}`);
    } else {
      console.log("Not enough balance to withdraw.");
    }
  }

  transferTo(anotherAccount, amount) {
    if (amount <= this.balance) {
      this.withdraw(amount);
      anotherAccount.deposit(amount);
      this.history.push(
        `transferred $${amount} to ${anotherAccount.ownerName}`
      );
    } else {
      console.log("Transfer failed: Insufficient balance.");
    }
  }

  getSummary() {
    return `${this.ownerName}'s balance is $${this.balance}`;
  }

  printHistory() {
    console.log(`${this.ownerName}'s transaction history:`);
    this.history.forEach(function (entry) {
      console.log(entry);
    });
  }
}
const acc1 = new BankAccount("John", 500);
const acc2 = new BankAccount("Sara", 300);

acc1.transferTo(acc2, 200);

console.log(acc1.getSummary());
console.log(acc2.getSummary());

acc1.printHistory();
// O(1) time complexity
