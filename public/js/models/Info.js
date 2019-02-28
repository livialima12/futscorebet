class Info{
    constructor(){
        this.template = new InfoView;
    }
    
    
    carregaObjetoInfo(target){
        this.template.load(target);
    }

    carregaParticipants(participants){
        this.template.loadParticipants(participants);
    }

}