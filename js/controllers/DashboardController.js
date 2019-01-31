class DashboardController{

    constructor(){
        this.carregaCards();
        
    }
    
    carregaCards(){
        this.bolaoCreate = new ListaBolao();
        this.bolaoCreate.obterInProgress();
        this.bolaoCreate.obterMine();
        this.carregaPaginaInfo();
    }
    
    carregaPaginaInfo(){
        
        var tabs = document.getElementsByClassName("tabs");
        
        
        for (var i = 0 ; i < tabs.length; i++) {
            
            tabs[i].addEventListener('click' , e => {
                this.cardID = e.target.id;
                
                if(this.cardID === "mine" || this.cardID === "open"){
                    return;
                }else{
                    this.cards = this.bolaoCreate.getAllCards();
                    var infoCardID = "?para1=" + this.cardID;
                    window.location.href = "info-bolao.html" + infoCardID;   
                }
                
            }); 
        };
    }

    static carregaInfo(){
        console.log(this.cardID);
        console.log(this.cards);

    }

}