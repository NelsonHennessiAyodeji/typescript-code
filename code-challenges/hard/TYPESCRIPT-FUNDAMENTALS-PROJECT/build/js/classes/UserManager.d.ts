import type User from "../types/user";
export default class UserManager {
    private users;
    private static instance;
    private constructor();
    getUser(userId: number): (User | undefined);
    addUser(user: User): void;
    removeUser(userId: number): void;
    getAllUsers(): User[];
    updateUser(id: number, updates: Partial<User>): void;
    countUsers(): number;
    static getInstance(): UserManager;
}
//# sourceMappingURL=UserManager.d.ts.map