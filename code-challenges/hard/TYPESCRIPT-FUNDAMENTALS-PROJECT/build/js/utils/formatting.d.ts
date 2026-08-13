import type User from "../types/user";
type PublicUser = Pick<User, "id" | "name" | "role">;
export declare function getPublicUser(user: User): PublicUser;
export {};
//# sourceMappingURL=formatting.d.ts.map