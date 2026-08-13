import type User from "../types/user";

type UserObjType = {[key: number]: User};

export default class UserManager {
    private users: UserObjType = {};
    private static instance: UserManager = new UserManager();
    private constructor(){}

    public getUser(userId: number): (User | undefined) {
        const prod = this.users[userId];
        return prod;
    }

    public addUser(user: User): void {
        const prod = this.getUser(user.id);
       if (!prod) this.users[user.id] = user;
       else {console.log("User already exists.");}
    }

    public removeUser(userId: number): void {
        const prod = this.getUser(userId);
        if (prod) delete this.users[userId];
        else {console.log("User not found.");}
    }

    public getAllUsers(): User[] {
        let prodList: User[] = [];
        for (const key in this.users) {
            prodList.push(this.users[key]!);
        }
        return prodList;
    }

    public updateUser(id: number, updates: Partial<User>): void {
        let prod = this.getUser(id);
        if (prod) prod = {...prod, ...updates};
        else {console.log("User not found.");}
    }

    public countUsers(): number {
        let count: number = 0;
        for (const key in this.users) {
            count++;
        }
        return count;
    }

    public static getInstance(): UserManager {
        return this.instance;
    }
}
