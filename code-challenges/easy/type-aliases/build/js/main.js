// Write a function that changes theme
const changeTheme = (themeOption) => {
    if (themeOption === "light") {
        return "Light theme selected";
    }
    else {
        return "Dark theme selected";
    }
};
console.log(changeTheme("dark"));
const checkout = (method) => {
    if (method === "Cash") {
        return ("Cash payment");
    }
    else if (method === "Card") {
        return ("Card payment");
    }
    else if (method === "Transfer") {
        return ("Transfer payment");
    }
};
console.log(checkout("Card"));
export {};
//# sourceMappingURL=main.js.map