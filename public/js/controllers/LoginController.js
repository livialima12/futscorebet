class LoginController{

    constructor(){
        this.view = new LoginView();
        this.model = new Login();
        this.checkExistentLogin();
    }

    checkExistentLogin(){
        var user = sessionStorage.getItem("userInfo");
        if(user != null){
            window.location = "dashboard.html";
        }
    }

    login(event){
        event.preventDefault();
        console.log("Entrei no login")
        this.loginId = document.querySelector("#email");
        this.senhaId = document.querySelector("#password");
        this.model.validaLogin(this.loginId, this.senhaId);
    }

    esqueciASenha(){
        this.view.toogleForgotLogin();
    }

}