class ListaBolao{


    constructor(){
        this.import = new Import();
        this.retorno = this.import.retornoImport();

        
    }
    

    obterInProgress(){
        
        this.retorno.then(result => {
            let a = result[0].listBoloes.inProgress; //gera uma array com os objetos (cada objeto é um bolão)
            this.cardsProgress = [];
            a.forEach(b => { //para cada array acessa os objetos (bolões) e entra dentro da info do objeto "b.info"
                let info = b.info;
                let id = b.id;
                let cardConst = new BolaoInfo(info.name, info.tournament, info.type, info.subscription, info.awards, info.date, info.participants, id);
                let card = cardConst.cardObject();
                this.cardsProgress.push(card);
                
            });


            let divOpen = document.querySelector("#open");
            let cardView = new CardView(divOpen);
            cardView.load(this.cardsProgress);
            


        });
        
    }

    obterMine(){

        var x = this.retorno.then(result => {
            let a = result[0].listBoloes.mineBolao; //gera uma array com os objetos (cada objeto é um bolão)
            this.cardsMine = [];
            a.forEach(b => { //para cada array acessa os objetos (bolões) e entra dentro da info do objeto "b.info"
                let info = b.info;
                let id = b.id;
                let cardConst = new BolaoInfo(info.name, info.tournament, info.type, info.subscription, info.awards, info.date, info.participants, id);
                let card = cardConst.cardObject();
                this.cardsMine.push(card);
            });

            let divOpen = document.querySelector("#mine");
            let cardView = new CardView(divOpen);
            cardView.load(this.cardsMine);
            
            
        }); 
        
    }

    inProgress(){
        return this.cardsProgress;
    }
    mine(){
        return this.cardsMine;
    }

}