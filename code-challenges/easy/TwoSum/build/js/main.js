const nums = [11, 2, 15, 7];
const target = 9;
const twoSum = (array, targetNumber) => {
    let sumArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (summation(array[i], array[j]) === targetNumber) {
                sumArray.push(i);
                sumArray.push(j);
            }
        }
    }
    return sumArray;
};
const summation = (num1, num2) => {
    return num1 + num2;
};
console.log(twoSum(nums, target));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
export {};
//# sourceMappingURL=main.js.map