const nums: number[] = [11, 2, 15, 7];
const target: number = 9;

const twoSum = (array: number[], targetNumber: number): (number[]) =>  {
    let sumArray: number[] = [];
    for (let i: number = 0; i < array.length; i++) {
        for (let j: number = i + 1; j < array.length; j++) {
            if (summation(array[i]!, array[j]!) === targetNumber) {
                sumArray.push(i);
                sumArray.push(j);
            }
        }
    }
    return sumArray;
}

const summation = (num1: number, num2: number): number => {
    return num1 + num2;
}

console.log(twoSum(nums, target));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
