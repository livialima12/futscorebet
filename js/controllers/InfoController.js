class InfoController{

    constructor(){
        this.carregaPaginaInfo();
        this.info = DashboardController.carregaInfo()
    }
    
    getCardsInfo(){

    }

    carregaPaginaInfo(){

        //recebe as informações da dashboard
        var recebendoCardID = decodeURIComponent(window.location.search);
        recebendoCardID = recebendoCardID.substring(1);
        
        //converte para chamar model
        var separandoInfoCardID = recebendoCardID.split("=");
        var cardID = separandoInfoCardID[1];
        
        //recebe os cards
        var cards = decodeURIComponent(window.location.search);
        

        console.log(cards);



        //chama model
        this.info = new Info();
        // this.info.carregaInfo(cardID, cards);
        
    }


}