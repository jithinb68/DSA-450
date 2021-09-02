let arr = [5, 3, 9, 2, 6, 5, 10, 1, 4, 22, 8, 3, 99, 1737, 12, 14]

bubbleSort = (arr) => {
    for(let i=0; i <= arr.length - 2; i++) {
        if(arr[i] > arr[i+1]) {
           [arr[i+1]] = [arr[i]];
        }
    }
    return arr;
}

let resultArr = bubbleSort(arr);
console.log(resultArr);