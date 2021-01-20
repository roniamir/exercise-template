const input1 = [4, -3, 0, 42, 9, 7];
let copyArr = input1;
let fixedArr = [];
let minNum = Math.min.apply(Math, copyArr);
console.log(minNum);

function maxNumFinder(arr){
    let maxNum = Math.max.apply(Math, copyArr); 
    console.log(maxNum);
    
    arr[arr.indexOf(maxNum)] = minNum;
    console.log(copyArr);
    return maxNum;
}

function fixedArray(arr){
    if (!Array.isArray(arr)){
        return "Not an array";
    }
    for(let j = 0 ; j < arr.length ; j++){
            fixedArr.unshift(maxNumFinder(arr));
    }
    return fixedArr;
}
console.log(fixedArray(copyArr));
