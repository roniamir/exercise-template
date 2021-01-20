
let arr = [];
let out = "";

function run() {
    const input = document.getElementById("input1").value;
    const output = document.getElementById("output");
    const theInput = input //Number(input);
    arr.push(theInput);
    out = "Element " + (arr.length-1) + " = " + arr[arr.length-1];
    output.innerText = out;
}