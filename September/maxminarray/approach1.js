// Iteration
// Result - Loop runs Array.length times. Brute force

let initialArr = [11, 244, 3, 45, 59, 456, 766, 84, 94 , 110];

maxMinArray = (arr) => {
    let max = arr[0];
    let min = arr[0];
    for (const item of arr) {
        if(item > max) max = item;
        if(item < min) min = item;
    }
    return [min, max];
}

let [min, max] = maxMinArray(initialArr);
console.log(min);
console.log(max);  