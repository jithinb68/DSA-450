// Recursion
// Result - Loop runs Array.length / 2 times

let initialArr = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

reverseArray = (arr, start, end) => {
    if(start>end) return arr
    [arr[start], arr[end]] = [arr[end], arr[start]];
    reverseArray(arr, start + 1, end - 1)
}

let result = reverseArray(initialArr, 0, initialArr.length - 1);
console.log(result);