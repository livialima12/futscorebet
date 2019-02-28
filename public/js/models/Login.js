class Login{
    
    //recebe os dados passados por view atraves do controller
    //valida os dados
    
    constructor(){
        this.auth = firebase.auth();
        let database = firebase.database();    
        this.users = database.ref().child('users');
        
    }
    
    validaLogin(loginId, senhaId){
        
        this.loginId = loginId.value;
        this.senhaId = senhaId.value;        
        
        firebase.auth().onAuthStateChanged( user => {
            if (user) {
                firebase.auth().signInWithEmailAndPassword(this.loginId,this.senhaId)
                .then(
                    info => {
                        this.getUserInfo(info.user.email);
                        
                    }
                )
                .catch(function(error){
                    alert(error.message)
            });
            }
        });
    }

    getUserInfo(userEmail){
        this.users.on('value', function(users){
            users.forEach(user => {
                if(user.val().email == userEmail){
                    let userInfo = new UserInfo(user.val());
                    
                }
            });
        });
    }

    criaUsuario(user, password){

        
        let userValue = user.value;
        let passwordValue = password.value;

        var cadastro = this.auth.createUserWithEmailAndPassword(userValue,passwordValue);
        cadastro.then(function(){
            //pega dados de cadastro e envia para JSON
        })
        .catch(function(error){
            //tratativa do erro em mensagem para o usuário
        });

    }

    logout(){
        this.auth.signOut()
            .then(function(){
                //direciona para página de logout
            })
    }

}
