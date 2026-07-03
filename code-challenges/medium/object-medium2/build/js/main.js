const bankAccount = {
    owner: "Ade",
    balance: 2000,
    accountNumber: 2415416278,
};
// Deposit
const deposit = (amount) => {
    if (amount > 0) {
        bankAccount.balance += amount;
    }
    else {
        console.log("Cannot deposit an amount smaller than 1");
    }
    console.log("Credit of " + amount + " added to account");
};
// Withdraw
const withdraw = (amount) => {
    if (amount <= bankAccount.balance) {
        bankAccount.balance -= amount;
        console.log("Debit of " + amount + " remove from account");
    }
    else if (amount <= 0) {
        console.log("Cannot withdraw nothing");
    }
    else {
        console.log("Cannot Withdraw what is not there boss");
    }
};
// Check Balance
const checkBalance = () => {
    console.log(`Account Balance: ${bankAccount.balance}`);
};
checkBalance();
deposit(5000);
checkBalance();
withdraw(1000);
checkBalance();
export {};
//# sourceMappingURL=main.js.map