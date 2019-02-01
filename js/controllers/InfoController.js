class InfoController{

    constructor(){
        
        this.info = new Info();
        this.view = new InfoView();
        this.carregaPaginaInfo();
        
    }
    

    carregaPaginaInfo(){
        var x  = sessionStorage.getItem("info");
        var info = JSON.parse(x);

        this.info.carregaObjetoInfo(info);
        
    }


}