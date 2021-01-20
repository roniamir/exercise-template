let arr1 = [1, 5, 8];
const arr2 = [31, 42, 5, 2, 8, 70];
function union(arr1, arr2){
    let isExist = false;
    for( let i = 0 ; i < arr2.length ; i++ ){
        for( let j = 0 ; j < arr1.length ; j++ ){
            if(arr2[i] === arr1[j]){
                isExist =true;
                break;
            }
        }
        if(!isExist){
            arr1.push(arr2[i]);
        }
        isExist = false;
    }
}

union(arr1, arr2);
console.log(arr1);