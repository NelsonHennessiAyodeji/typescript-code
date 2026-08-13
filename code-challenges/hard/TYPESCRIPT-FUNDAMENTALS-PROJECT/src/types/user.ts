export enum UserRole {
    Customer,
    Admin,
    Seller,
}

export enum UserStatus { 
    Active,
    Inactive,
    Suspended,
    Banned,
}

export default interface User {
    id: number;
    name: string;
    email: string;
    role: UserRole;
    status: UserStatus;
    createdAt: string;
}


