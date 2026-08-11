// Bank Vault
class BankVault {
    static money = 0;
    static vaultCode = "2EYT6";
    constructor() { }
    deposit(amount) {
        if (amount < 1) {
            console.log("Deposit must be a valid amount");
            return;
        }
        BankVault.money += amount;
        console.log(amount + " has been deposited to the vault");
    }
    withdraw(amount, vaultCode) {
        this.verifyCode(vaultCode);
        if (BankVault.money < amount) {
            console.log("The amount you are trying to withdraw is greater than the amount stored, please check your balance and try again");
            return;
        }
        else {
            BankVault.money -= amount;
            console.log(amount + " has been withdrawn from the vault");
        }
    }
    static checkBalance() {
        console.log("Current Balance: " + this.money);
    }
    verifyCode(vaultCode) {
        if (vaultCode !== BankVault.vaultCode) {
            throw new Error("Vault code is incorrect, please try again");
        }
    }
}
const Dan = new BankVault();
const Jay = new BankVault();
// Dan.deposit(20000);
// Dan.withdraw(10000, "2EYT6");
// Jay.deposit(10000);
// BankVault.checkBalance();
////////////////////////////////////////////////////////////////////////////////////////////////////
// Logger Service
class Logger {
    logs = [];
    static instance = new Logger();
    constructor() { }
    log(log) {
        this.logs.push(log);
    }
    showLogs() {
        this.logs.forEach(log => console.log(log));
    }
    clearLogs() {
        this.logs = [];
    }
    static getInstance() {
        return Logger.instance;
    }
}
const logger = Logger.getInstance();
// logger.log("Hello");
// logger.log("Hllo");
// logger.log("Hello");
// logger.log("Hllo");
// logger.showLogs();
////////////////////////////////////////////////////////////////////////////////////////////////////
// Logger Service
class Database {
    connected = false;
    databaseName = "";
    static instance = new Database();
    // private static instance: Logger = new Logger();
    constructor() { }
    connect(dbName) {
        if (this.databaseName === dbName)
            return "Already connected";
        this.databaseName = dbName;
        this.connected = true;
        return "Connected to " + dbName;
    }
    disconnect() {
        if (this.databaseName) {
            this.databaseName = "";
            this.connected = false;
            return "Disconnected";
        }
        return "Was not connected to anything";
    }
    isConnected() {
        return this.connected;
    }
    static getInstance() {
        return Database.instance;
    }
}
const DB = Database.getInstance();
const D = Database.getInstance();
const B = Database.getInstance();
console.log(DB.connect("school_db"));
console.log(DB.connect("school_db"));
console.log(D.connect("school_db"));
console.log(B.disconnect());
console.log(DB.connect("school_db"));
console.log(DB.isConnected());
export {};
//# sourceMappingURL=main.js.map