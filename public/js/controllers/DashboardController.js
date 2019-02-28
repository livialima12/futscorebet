class DashboardController{

    constructor(){
        this.bolaoCreate = new ListaBolao();
        this.info = new Info();
        this.carregaCards();
        this.carregaPaginaInfo();
    }
    
    carregaCards(){
        this.import = new Import();
    }
    
    carregaPaginaInfo(){
        
        var tabs = document.getElementsByClassName("tabs");
        
        for (var i = 0 ; i < tabs.length; i++) {
            
            tabs[i].addEventListener('click' , e => {
                this.cardID = e.target.id;
                
                if(this.cardID === "mine" || this.cardID === "open"){
                    return;
                }else{
                    var info = sessionStorage.getItem("info");
                    var infoObject = JSON.parse(info);
                    var infoInProgress = infoObject.inProgress
                    var infoSoon = infoObject.soon
                    var infos = infoInProgress.concat(infoSoon)

                    console.log(infos)
                    
                    var i;

                    for (i = 0; i < infos.length; i++) {
                        const element = infos[i];
                        if(this.cardID == element.id){
                            var status = e.target.parentElement.id;
                            sessionStorage.setItem("status", status)
                            var infoArrayBolao = JSON.stringify(element);
                            sessionStorage.setItem("infoArrayBolao", infoArrayBolao);
                            window.location = "info-bolao.html";
                        }
                    }
                }
            }); 
        };
    }
}