export default class UserManager {
    users = {};
    static instance = new UserManager();
    constructor() { }
    getUser(userId) {
        const prod = this.users[userId];
        return prod;
    }
    addUser(user) {
        const prod = this.getUser(user.id);
        if (!prod)
            this.users[user.id] = user;
        else {
            console.log("User already exists.");
        }
    }
    removeUser(userId) {
        const prod = this.getUser(userId);
        if (prod)
            delete this.users[userId];
        else {
            console.log("User not found.");
        }
    }
    getAllUsers() {
        let prodList = [];
        for (const key in this.users) {
            prodList.push(this.users[key]);
        }
        return prodList;
    }
    updateUser(id, updates) {
        let prod = this.getUser(id);
        if (prod)
            prod = { ...prod, ...updates };
        else {
            console.log("User not found.");
        }
    }
    countUsers() {
        let count = 0;
        for (const key in this.users) {
            count++;
        }
        return count;
    }
    static getInstance() {
        return this.instance;
    }
}
//# sourceMappingURL=UserManager.js.map