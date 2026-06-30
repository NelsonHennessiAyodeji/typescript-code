const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Largest number
const largetNumber = () => {
    let largeNumber: number = numbers[0] ?? 0;
    for (let i: number = 0; i < numbers.length; i++) {
        // Incas of anything, it never equals one and give me an infinite loop, hence the (numbers.length + 1)
        if (largeNumber <= (numbers[i] ?? (numbers.length + 1))) { 
            largeNumber = numbers[i] ?? 0;
        }
    }
    return largeNumber;
}


// Smallest number
const smallestNumber = () => {
    let smallestNumber: number = numbers[0] ?? 0;
    for (let i: number = 0; i < numbers.length; i++) {
        if (smallestNumber >= (numbers[i] ?? (numbers.length + 1))) {
            smallestNumber = numbers[i] ?? 0
        }
    }
    return smallestNumber;
}

// Total sum of Array
const totalSum = () => {
    let sum: number = 0;
    for (let i:number = 0; i < numbers.length; i++) {
        sum += numbers[i] ?? 0;
    }
    return sum;
}

// Avearge
const average = () => {
    let average: number = 0;
    for (let i: number = 0; i < numbers.length; i++) {
        average += numbers[i] ?? 0;
    }
    average = average / 2;
    return average;
}


console.log(largetNumber());
console.log(smallestNumber());
console.log(totalSum());
console.log(average());
