const product1 = {
    id: 101,
    name: "Milk",
    price: 20,
    quantity: 30,
    category: "fresh"
}

const product2 = {
    id: 102,
    name: "Soda",
    price: 50,
    quantity: 10,
    category: "drink"
}

const product3 = {
    id: 103,
    name: "cucumber",
    price: 5,
    quantity: 50,
    category: "fresh"
}

let inventory = [product1, product2, product3];

// Add Product
const addProduct = (name: string, price: number, quantity: number, category: string) => {
    let id = 100 + (inventory.length + 1);
    inventory.push({id, name, price, quantity, category});
}

// Remove Product
const removeProduct = (id: number) => {
    let idIndex: number = -1;
    for (let i: number = 0; i < inventory.length; i++) {
        if ((inventory[i]?.id ?? 0) === id) {
            idIndex = i;
        }
    }

    if (idIndex !== -1) {
        inventory.splice(idIndex, 1);
    } else {
        console.log("Product does not exist");        
    }
}

// Search Item by Name
const searchItemByName = (itemName: string) => {
    let idIndex: number = -1;
    for (let i: number = 0; i < inventory.length; i++) {
        if ((inventory[i]?.name.toLowerCase()) === itemName.toLowerCase()) {
            idIndex = i;
        }
    }

    if (idIndex !== -1) {
        console.log(inventory[idIndex]);
    } else {
        console.log("Product does not exist");        
    }
}

// Search Item by Category
const searchItemByCategory = (itemCategory: string) => {
    let idIndex: number[] = [];
    for (let i: number = 0; i < inventory.length; i++) {
        if ((inventory[i]?.category.toLowerCase()) === (itemCategory.toLowerCase())) {
            idIndex.push(i);
        }
    }

    if (idIndex.length > 0) {
        for (let i: number = 0; i < idIndex.length; i++) {
            console.log(inventory[(idIndex[i] ?? 0)]);
        }
    } else {
        console.log("Category does not exist");        
    }
}

// Total inventory value
const getInventoryValue = () => {
    let totalValue: number = 0;
    for (let i: number = 0; i < inventory.length; i++) {
        totalValue += ((inventory[i]?.price ?? 0) * (inventory[i]?.quantity ?? 0));
    }

    console.log(totalValue);
}

console.log(inventory);
addProduct("Lolipop", 2, 50, "candy");
console.log(inventory);
removeProduct(101);
console.log(inventory);
searchItemByName("lolipop")
searchItemByCategory("drink")
getInventoryValue()

// Why are the inventories looking like they have thesame values in real time even after messing with the
// values later on. When I print the first one, I should get the current instance or valus of the first
// log, instead I get the updated versions down to the last removeProduct() call right from the 
// very fist logging of the invetory.