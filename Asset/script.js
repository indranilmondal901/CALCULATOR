let string = ""; 
const display = document.querySelector("#display");
let btnArray = document.querySelectorAll(".btn");


for (let i = 0; i < btnArray.length; i++) {
    btnArray[i].addEventListener("click", function (x) {
        console.log(x);
        if (x.target.innerText == "=") {
            string = eval(string);
            display.value = string;
        } else if (x.target.innerText == "C") {
            string = "";
            display.value = string;
        } else {
            string += x.target.innerText; 
            display.value = string;
        }
    })
}
