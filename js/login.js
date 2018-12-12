popup();

function popup(){
    var buttonForgotPassword = document.querySelector("#button-forgot");
    var buttonLogin = document.querySelector("#button-login");
    var formLogin = document.querySelector(".login");
    var formForgot = document.querySelector(".forgot");
    
    buttonForgotPassword.addEventListener("click", function(){
        formLogin.classList.toggle("hide");
        formForgot.classList.toggle("hide");
    })
    
    buttonLogin.addEventListener("click", function(){
        formLogin.classList.toggle("hide");
        formForgot.classList.toggle("hide");
    
    })
}
