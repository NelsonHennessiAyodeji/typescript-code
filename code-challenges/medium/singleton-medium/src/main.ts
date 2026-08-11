// Bank Vault
class BankVault {
    private static money: number = 0;
    private static readonly vaultCode: string = "2EYT6"

    constructor() {}

    public deposit(amount: number): void {
        if (amount < 1) {
            console.log("Deposit must be a valid amount");
            return;
        }
        BankVault.money+= amount;
        console.log(amount + " has been deposited to the vault");
    }

    public withdraw(amount: number, vaultCode: string): void {
        this.verifyCode(vaultCode);
        if (BankVault.money < amount) {
            console.log
            ("The amount you are trying to withdraw is greater than the amount stored, please check your balance and try again");
            return;
        } else {
            BankVault.money -= amount;
            console.log(amount + " has been withdrawn from the vault");
        }
    }

    public static checkBalance(): void {
        console.log("Current Balance: " + this.money);
    }

    public verifyCode(vaultCode: string): void {
        if (vaultCode !== BankVault.vaultCode) {
            throw new Error("Vault code is incorrect, please try again");
        }
    }
}

const Dan: BankVault = new BankVault();
const Jay: BankVault = new BankVault();

// Dan.deposit(20000);
// Dan.withdraw(10000, "2EYT6");
// Jay.deposit(10000);
// BankVault.checkBalance();



////////////////////////////////////////////////////////////////////////////////////////////////////
// Logger Service
class Logger {
    private logs: string[] = [];
    private static instance: Logger = new Logger();
    private constructor(){}

    public log(log: string): void {
        this.logs.push(log);
    }

    public showLogs(): void {
        this.logs.forEach(log => console.log(log));
    }

    public clearLogs(): void {
        this.logs = [];
    }

    public static getInstance(): Logger {
        return Logger.instance;
    }
}

const logger: Logger = Logger.getInstance();
// logger.log("Hello");
// logger.log("Hllo");
// logger.log("Hello");
// logger.log("Hllo");
// logger.showLogs();



////////////////////////////////////////////////////////////////////////////////////////////////////
// Logger Service
class Database {
    private connected: boolean = false;
    private databaseName: string = "";
    private static instance: Database = new Database();
    // private static instance: Logger = new Logger();
    private constructor(){}

    public connect(dbName: string): string {
        if (this.databaseName === dbName) return "Already connected";
        this.databaseName = dbName;
        this.connected = true;
        return "Connected to " + dbName;
    }

    public disconnect(): string {
        if (this.databaseName) {
            this.databaseName = "";
            this.connected = false;
            return "Disconnected"
        }
        return "Was not connected to anything";
    }

    public isConnected(): boolean {
        return this.connected;
    }

    public static getInstance(): Database {
        return Database.instance;
    }
}

const DB: Database = Database.getInstance();
const D: Database = Database.getInstance();
const B: Database = Database.getInstance();
console.log(DB.connect("school_db"));
console.log(DB.connect("school_db"));
console.log(D.connect("school_db"));
console.log(B.disconnect());
console.log(DB.connect("school_db"));
console.log(DB.isConnected());
