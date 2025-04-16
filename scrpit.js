const entnum = document.querySelector("#button-fucntion-one");
let numOne = 2 * 5;
let numTwo = 1; 
let sum = 11;
function chackifimright () {
    let pupm = prompt("Enter a Number");
    if (pupm == sum) {
        alert("You Are Right");
    } else {
        alert("You Are Wrong");
    }
    console.log(pupm);
}
entnum.addEventListener("click", chackifimright);