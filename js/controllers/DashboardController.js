class DashboardController{

    constructor(){
        this.bolaoCreate = new ListaBolao();
        this.info = new Info();
        this.carregaCards();
        this.carregaPaginaInfo();
        
    }
    
    carregaCards(){
        this.bolaoCreate.obterInProgress();
        this.bolaoCreate.obterMine();
        
    }
    
    carregaPaginaInfo(){
        
        var tabs = document.getElementsByClassName("tabs");
        
        for (var i = 0 ; i < tabs.length; i++) {
            
            tabs[i].addEventListener('click' , e => {
                this.cardID = e.target.id;
                
                if(this.cardID === "mine" || this.cardID === "open"){
                    return;
                }else{
                    this.carregaInfo().map( info => {                    
                        if(this.cardID == info.id){
                            var infoArray = JSON.stringify(info);
                            console.log(infoArray);
                            sessionStorage.setItem("info", infoArray);
                            window.location = "info-bolao.html";
                        }
                    });
                }
            }); 
        };
    }
    
    carregaInfo(){
        var mine = this.bolaoCreate.mine();
        var progress = this.bolaoCreate.inProgress();
        var all = mine.concat(progress);
        return all;
    }

}