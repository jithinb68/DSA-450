// Iteration
// Result - Loop runs Array.length times. Brute force

let initialArr = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

reverseArray = (initialArr) => {
    let reverseArray = [];
    arrlength = initialArr.length;
    for(let i= arrlength - 1; i >= 0; i--) {
        reverseArray.push(initialArr[i]);
    }
    return reverseArray;
}

let result = reverseArray(initialArr);
console.log(result);  