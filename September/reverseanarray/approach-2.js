// Iteration
// Result - Loop runs Array.length / 2 times

let initialArr = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

reverseArray = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    while(start < end ) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end --;
    }
    return arr;
}

let result = reverseArray(initialArr);
console.log(result); 