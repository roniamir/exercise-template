const arr = [1, 90, 53, 3, 90, 2, 17, 1];
for( let i = 0 ; i < arr.length-1 ; i++){
    for( let j = i+1 ; j < arr.length ; j++ ){
        if(arr[i] === arr[j]){
            console.log("Duplicate item: " + arr[i] + " , in places number " + i + " and " + j);
        }
    }
}