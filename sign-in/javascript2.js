let passeye = document.getElementById("password-eye");
let eye = document.getElementById("eye2");
let pass = document.getElementById("password");

passeye.addEventListener("click", func);

function func(){
    if(pass.type === "password"){
        eye.src = "eye1.png";
        pass.type = "text";

    }
    else{
        eye.src = "eye2.png";
        pass.type = "password";
    }
}

