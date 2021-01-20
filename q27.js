const arr = [{name: "Roni", age: 22, Hobie: "Dance"},{name: "Sahar", age: 48, Hobie: "Tennis"},{name: "Oz", age: 22, Hobie: "Riding horses"}];

function property_value(array, prop_key){
    let newArr = [];
    for( let i = 0 ; i < array.length ; i++){
        console.log(array[i][prop_key]);
        if(array[i].hasOwnProperty(prop_key)){
            newArr.push(array[i][prop_key]);
            console.log(newArr);
        }
    }
    return newArr;
}

let chosenPropArr = property_value(arr, 'name');
console.log(chosenPropArr);