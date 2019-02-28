class LoginView{

    constructor(){

        this.loginId = document.querySelector("#email");
        this.senhaId = document.querySelector("#password");

        this.formLogin = document.querySelector(".login");
        this.formForgot = document.querySelector(".forgot");

    }

    toogleForgotLogin(){
        this.formLogin.classList.toggle("hide");
        this.formForgot.classList.toggle("hide");
    }

    login(){
        console.log(this.loginId);
        console.log(this.senhaId);
    }

    //recebe os inputs do usuário e manda para o controller
    //recebe os dados de continuidade do controller e passa adiante para criação da próxima página (no caso, chama a dashboard passando as informações do usuário)
}