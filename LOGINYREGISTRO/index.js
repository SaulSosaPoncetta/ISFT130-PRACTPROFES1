/* activo la clase focus del input */
const inputs = document.querySelectorAll(".input-box input");
var inputBox = document.querySelector(".input-box");

inputs.forEach(input => {
    input.addEventListener("focus", function() {
        const inputBox = this.closest('.input-box');
        if(inputBox) {
            inputBox.classList.add("focus");
        }
    });

    input.addEventListener("blur", () => {
        const inputBox = this.closest('.input-box');
        if(inputBox) {
            inputBox.classList.remove("focus");
        }
    });
});

/* cambio de registro a login y viceversa*/
var linkTextLogin = document.getElementById("linkTextLogin");
var linkTextRegister = document.getElementById("linkTextRegister");
var formLogin = document.querySelector(".container__form-login");
var formRegister = document.querySelector(".container__form-register");

linkTextLogin.addEventListener("click", function() {
    formLogin.classList.add('inactive');
    formRegister.classList.remove('inactive');

});

linkTextRegister.addEventListener("click", function(){
    formLogin.classList.remove('inactive');
    formRegister.classList.add('inactive');
});