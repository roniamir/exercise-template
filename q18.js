let out = "";

function run() {
    const arr =JSON.parse(document.getElementById("input1").value);
    const num =Number(document.getElementById("input2").value);
    const output = document.getElementById("output");
    
    function binary_Search(arr, num){
        return arr.indexOf(num);
    }
    output.innerText = binary_Search(arr, num);
}