// Iteration
// Result - Loop runs Array.length times. Brute force

let initialArr = [11, 244, 3, 45, 59, 456, 766, 84, 94 , 110];

function maxMinArray(arr) {
    let max = arr[0];
    let min = arr[0];
    let i = arr.length;
    
    while (i--) {
      min = arr[i] < min ? arr[i] : min;
      max = arr[i] > max ? arr[i] : max;
    }
    return { min, max };
}

let { min, max } = maxMinArray(initialArr);
console.log(min);
console.log(max);  

