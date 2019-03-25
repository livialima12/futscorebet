class ListaBolao{

    constructor(recebeInfo){
        if(recebeInfo != undefined){
            var soon = this.obterSoon(recebeInfo.soon);
            var mine = this.obterMine(recebeInfo.inProgress);

            var infoArray = JSON.stringify(recebeInfo);
            sessionStorage.setItem("info", infoArray);

        }
    }
    
    obterSoon(soon){
        
        let a = sessionStorage.getItem("userInfo");
        let userInfo = JSON.parse(a)
        
        
        this.cardsSoon = [];
        
        soon.map(bolao => {
            
            let cardConst = new BolaoInfo(bolao.info.name, bolao.info.tournament, bolao.info.type, bolao.info.subscription, bolao.info.awards, bolao.info.date, bolao.participants, bolao.id);
            let card = cardConst.cardObject();
            this.cardsSoon.push(card);
            
            let divOpen = document.querySelector("#open");
            let cardView = new CardView(divOpen);
            cardView.load(this.cardsSoon);
            
            // if(bolao.id == userInfo.id){
                //Tem que habilitar como sendo meu bolao e desabilitar as inscrições
            // }
        });
    }
        
    obterMine(mine){
            
        let a = sessionStorage.getItem("userInfo");
        let userInfo = JSON.parse(a);
            
        this.cardsMine = [];
            
        mine.map(bolao => {
            bolao.participants.map(user => {
                    
                if (user.id == userInfo.id){
                    let cardConst = new BolaoInfo(bolao.info.name, bolao.info.tournament, bolao.info.type, bolao.info.subscription, bolao.info.awards, bolao.info.date, bolao.participants, bolao.id);
                    let card = cardConst.cardObject();
                    this.cardsMine.push(card);
                    let divOpen = document.querySelector("#mine");
                    let cardView = new CardView(divOpen);
                    cardView.load(this.cardsMine);
                        
                }
            });
        });            
    }
        
    
}