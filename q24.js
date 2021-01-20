const arr = [4, 0, true, false, -9,"", NaN, null,  1, undefined, 2];
let newArr = [];
function removeFalsyValuse(arr){
    for( let i = 0 ; i < arr.length ; i++ ){
        if((!arr[i]) || arr[i] === NaN ){  
            continue;
        }
        newArr.push(arr[i]);
    }

}

removeFalsyValuse(arr);
console.log(newArr);