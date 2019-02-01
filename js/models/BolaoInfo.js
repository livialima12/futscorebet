class BolaoInfo{
    constructor(name, tournament, type, subscription, awards, date, participants, id){
        
        this.name = name;
        this.tournament = tournament;
        this.type = type;
        this.subscription = subscription;
        this.awards = awards;
        this.participants = participants;
        this.id = id;

        this._date = DateHelper.textoParaData(date);
        this.date = DateHelper.dateToText(this._date);
    }
    
    cardObject(){
        var card = new Object();
        card.name = this.name;
        card.tournament = this.tournament;
        card.type = this.type;
        card.subscription = this.subscription;
        card.awards = this.awards;
        card.participants = this.participants;
        card.id = this.id;
        card.date = this.date;

        return card;
    }

}