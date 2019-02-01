class Info{
    constructor(){
        this.template = new InfoView;
    }
    
    
    
    carregaObjetoInfo(target){
        this.template.load(target);
    }

}