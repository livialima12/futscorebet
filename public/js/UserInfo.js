class UserInfo{

    constructor(object){ //Recebe o objeto do json
        this.object = object;
        this.getUserInfo();
    }

    getUserInfo(){
        this.setUserInfo(this.object);
    }

    setUserInfo(objeto){
        
        let userInfo = new Object();
        userInfo.name = objeto.name;        
        userInfo.id = objeto.id;
        userInfo.phone = objeto.phone;
        userInfo.boloes = objeto.boloes;
        userInfo.email = objeto.email;

        let userString = JSON.stringify(userInfo);
        sessionStorage.setItem("userInfo", userString);
        window.location = "dashboard.html";
    }    
}

