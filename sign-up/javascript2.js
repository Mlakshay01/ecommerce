let passEyeOne = document.getElementById("password-eye-1");
let passEyeTwo = document.getElementById("password-eye-2");
let monkeyOne = document.getElementById("monkey-1");
let monkeyTwo = document.getElementById("monkey-2");
let pass = document.getElementById("password");
let rePass = document.getElementById("re-password");

passEyeOne.addEventListener("click",func);

passEyeTwo.addEventListener("click",func2);

function func(){
    if(pass.type === "password"){
        pass.type = "text";
        monkeyOne.src = "eye1.png";
    }
    else{
        pass.type = "password";
        monkeyOne.src = "eye2.png";
    }
}

function func2(){
    if(rePass.type === "password"){
        rePass.type = "text";
        monkeyTwo.src = "eye1.png";
    }
    else{
        rePass.type = "password";
        monkeyTwo.src = "eye2.png";
    }
}