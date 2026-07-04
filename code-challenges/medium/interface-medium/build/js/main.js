const user1 = {
    id: 101,
    username: "Ben12",
    email: "@something",
    role: "user",
    isActive: true,
};
const user2 = {
    id: 101,
    username: "Davey504",
    email: "@something",
    role: "admin",
    isActive: true,
};
const users = [user1, user2];
// Print active members
for (let i = 0; i < users.length; i++) {
    if (users[i]?.isActive) {
        console.log(users[i]);
    }
}
export {};
//# sourceMappingURL=main.js.map