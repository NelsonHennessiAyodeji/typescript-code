import type User from "../types/user"

type PublicUser = Pick<User, "id" | "name" | "role">;
type RegisterUser = Omit<User, "id" | "createdAt" | "status">;

export function getPublicUser (user: User): PublicUser {
    let publicUser: PublicUser = {...user};
    return publicUser;
}

// export function 
