// variables Declaration

let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let display = "";

buttons = Array.from(buttons);

// Main

buttons.forEach(button => {
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            display = eval(display);
            input.value = display;
        } else if(e.target.innerHTML == "AC"){
            display = "";
            input.value = display;
        } else if(e.target.innerHTML == "DEL"){
            display = display.substring(0, display.length - 1);
            input.value = display;
        } else{
            display = display + e.target.innerHTML;
            input.value = display;
        }
    })
})



