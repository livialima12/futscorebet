class Info{
    constructor(){
        this.template = new InfoView;
    }
   
    carregaInfo(cardID, infoCards) {
        
        infoCards.forEach(card => {
            if(card.id == cardID){
                this.template.load(card);
            }
        });
    }   

}