export declare enum UserRole {
    Customer = 0,
    Admin = 1,
    Seller = 2
}
export declare enum UserStatus {
    Active = 0,
    Inactive = 1,
    Suspended = 2,
    Banned = 3
}
export default interface User {
    id: number;
    name: string;
    email: string;
    role: UserRole;
    status: UserStatus;
    createdAt: string;
}
//# sourceMappingURL=user.d.ts.map