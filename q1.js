
function run() {
    const input = document.getElementById("input1").value;
    const output = document.getElementById("output");
    const theInput = JSON.parse(input);
    let out = "";

    if(theInput.constructor === Array){
        out = "is array";
    } else{
        out = "is not array";
}

    output.innerText = out;
}