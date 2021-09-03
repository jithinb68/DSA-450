let initialArr = [11, 244, 3, 45, 59, 456, 766, 84, 94 , 110];

findNthSmallestElem =  (arr, n) => {
   let sortedArray = arr.sort((a, b) => a - b);
    return sortedArray[n - 1]
}

let result = findNthSmallestElem(initialArr, 5)
console.log(result);
