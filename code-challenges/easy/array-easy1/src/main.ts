let favouriteFoods: string[] = ["Pizza 🍕", "Ice Cream 🍦", "Cookies 🍪", "Spaghetti 🍝", "Chicken 🍗"];

console.log("Original Array: ");
console.log(favouriteFoods.toString());

// Print first Item
const printFirstItem = () => {
    console.log(favouriteFoods[0]);
}

//Print last item
const printLastItem = () => {
    console.log(favouriteFoods[favouriteFoods.length - 1]);
}

// Replace the thrid item
const replacedThirdItem = (food: string) => {
    favouriteFoods[2] = food;
    console.log(favouriteFoods[2]);
}

// Add a food to the end
const addFoodToTheEnd = (newFood: string) => {
    favouriteFoods.push(newFood);
    console.log(favouriteFoods.toString());
}

// Remove food from the beginning
const removeFoodFromBeginning = () => {
    favouriteFoods.shift();
    console.log(favouriteFoods.toString());
}

printFirstItem();
printLastItem();
replacedThirdItem("Fries 🍟");
addFoodToTheEnd("Bacon 🥓");
removeFoodFromBeginning()