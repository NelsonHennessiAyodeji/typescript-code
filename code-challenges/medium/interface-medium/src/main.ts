interface User {
    id: number;
    username: string;
    email: string;
    role: string;
    isActive: boolean;
}

const user1: User = {
    id: 101,
    username: "Ben12",
    email: "@something",
    role: "user",
    isActive: true,
}

const user2: User = {
    id: 101,
    username: "Davey504",
    email: "@something",
    role: "admin",
    isActive: true,
}

const users: User[] = [user1, user2];

// Print active members
for (let i: number = 0; i < users.length; i++) {
    if (users[i]?.isActive) {
        console.log(users[i]);        
    }
}