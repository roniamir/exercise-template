
function run() {
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    function firstArrayElement(arr, n){
        if(arr == null || arr == undefined){
            return "no array";
        } 
        if( n < 0){
            return [];
        } else if(n == null || n == undefined){
                return arr[0];
            }
        return arr.slice(0 , n);
    } 
    const firstInput = JSON.parse(input1);
    const secondInput = JSON.parse(input2);
    let out = "";
    out += firstArrayElement(firstInput, secondInput);
    

    output.innerText = out;
}