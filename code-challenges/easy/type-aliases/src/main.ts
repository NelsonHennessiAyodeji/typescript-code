// Restricting values
type theme = "light" | "dark";

// Write a function that changes theme
const changeTheme = (themeOption: theme) => {
    if (themeOption === "light") {
        return "Light theme selected";
    } else {
        return "Dark theme selected";
    }
}

console.log(changeTheme("dark"));


// 2
type PaymentMethod = "Cash" | "Card" | "Transfer";

const checkout = (method: PaymentMethod) => {
    if (method === "Cash") {
        return ("Cash payment");
    } else if (method === "Card") {
        return ("Card payment");
    } else if (method === "Transfer") {
        return ("Transfer payment");
    }
}

console.log(checkout("Card"));
