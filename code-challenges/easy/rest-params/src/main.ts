// Accept unlimited numbers
const sum = (...sum: number[]) => {
    return sum.reduce((prev, curr) => prev + curr);
}

console.log(sum(1,2, 3, 4, 5, 6, 7, 8, 9, 10));
