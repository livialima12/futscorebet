class LoginController{

    //pega os dados passados pelo usuário através de view e manda para o model verificar se estão corretos
    //pega o retorno de model e passa pra view

    constructor(){

        this.view = new LoginView();
        this.model = new Login();

    }


    login(event){

        event.preventDefault();

        this.loginId = document.querySelector("#email");
        this.senhaId = document.querySelector("#password");

        this.model.validaLogin(this.loginId, this.senhaId);



    }

    esqueciASenha(){

        this.view.toogleForgotLogin();
        
    }

    cadastro(){

    }
}