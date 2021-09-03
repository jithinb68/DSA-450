let initialArr = [11, 244, 3, 45, 59, 456, 766, 84, 94 , 110];

findNthSmallestElem =  (arr, n) => {
   let sortedArray = arr.sort((a, b) => {
        if(a > b) {
            return 1;
        } else if(a < b) {
            return -1;
        }
    });
    return sortedArray[n - 1]
}

let result = findNthSmallestElem(initialArr, 5)
console.log(result);
