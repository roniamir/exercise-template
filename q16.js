/*
אם השנה מתחלקת באופן שווה ב-4, עברו לשלב 2. אחרת, עבור לשלב 5.
אם השנה מתחלקת באופן שווה ב-100, עברו לשלב 3. אחרת, עבור לשלב 4.
אם השנה מתחלקת באופן שווה ב-400, עברו לשלב 4. אחרת, עבור לשלב 5.
השנה הינה שנה מעוברת (יש במהלכה 366 ימים).
השנה הינה לא שנה מעוברת (יש ברשותה 365 ימים).
*/

let out = "";

function run() {
    const rangeStart = Number(document.getElementById("input1").value);
    const rangeStop = Number(document.getElementById("input2").value);
    const output = document.getElementById("output");
    const isLeapYear = false;
    for( let i = rangeStart ; i <= rangeStop ; i++){
        if( i % 4 === 0 && i % 100 !== 0){
            out += i + ", ";
        } else if( i % 100 === 0 && i % 400 === 0){
            out += i + ", ";
        }
    }
    out += " are leap years."
    output.innerText = out;
}