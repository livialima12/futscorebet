class ListaBolao{


    constructor(){
        this.import = new Import();
        this.retorno = this.import.retornoImport();
        
    }
    

    obterInProgress(){
        
        this.retorno.then(result => {
            let a = result[0].listBoloes.inProgress; //gera uma array com os objetos (cada objeto é um bolão)
            var cards = [];
            a.forEach(b => { //para cada array acessa os objetos (bolões) e entra dentro da info do objeto "b.info"
                let info = b.info;
                let id = b.id;
                let card = new BolaoInfo(info.name, info.tournament, info.type, info.subscription, info.awards, info.date, info.participants, id);
                cards.push(card);
            });

            let divOpen = document.querySelector("#open");
            let cardView = new CardView(divOpen);
            cardView.load(cards);
            this.getCardsInProgress(cards);
            
        });
        
    }

    obterMine(){

        var x = this.retorno.then(result => {
            let a = result[0].listBoloes.mineBolao; //gera uma array com os objetos (cada objeto é um bolão)
            let cards = [];
            a.forEach(b => { //para cada array acessa os objetos (bolões) e entra dentro da info do objeto "b.info"
                let info = b.info;
                let id = b.id;
                let card = new BolaoInfo(info.name, info.tournament, info.type, info.subscription, info.awards, info.date, info.participants, id);
                cards.push(card);
            });

            let divOpen = document.querySelector("#mine");
            let cardView = new CardView(divOpen);
            cardView.load(cards);
            this.cards = cards;

            
        }); 
        
    }

    getCardsInProgress(cards){
        this.cardsInProgress = cards;        
    }

    getCardsMine(cards){
        this.cardsMine = cards;
        
    }

   
    getAllCards(){
        var iP = this.cardsInProgress;
        var mI = this.cardsMine;

        var cards = iP.concat(mI);

        return cards        
    }

}