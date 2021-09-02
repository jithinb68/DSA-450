let arr = [5, 3, 9, 2, 6, 5, 10, 1, 4, 22, 8, 3, 99, 1737, 12, 14]

bubbleSort = (arr) => {
    for(let j=0; j < arr.length; j++) {
        let isSwapped = false;
        for(let i=0; i <= arr.length - j - 1; i++) {
            if(arr[i] > arr[i+1]) {
               [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
               isSwapped = true;
            }
        }
        if(!isSwapped){
            break;
        }
    }
    return arr;
}

let resultArr = bubbleSort(arr);
console.log(resultArr);