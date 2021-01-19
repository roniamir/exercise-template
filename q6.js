
function run() {
    const input1 = document.getElementById("input1").value;
    const output = document.getElementById("output");
    

    const numLength = input1.length;
  //  const numString = num.toString();
    let newStr = input1[0];

    for(let i = 1 ; i < numLength ; i++){
        if( (input1[i-1]%2 === 0) && (input1[i]%2 === 0) ){
            newStr += "-" + input1[i];
        }
        else {
            newStr += input1[i];
        }
    }


    output.innerText = newStr;
}