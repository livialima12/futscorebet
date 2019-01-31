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

    name() {
        return this.name;
    }

    tournament(){
        return this.tournament;
    }

    type() {
        return this.type;
    }

    subscription() {
        return this.subscription;
    }
    
    awards() {
        return this.prize;
    }

    date() {
        return this.date;
    }

    participants(){
        return this.participants;
    }

    id(){
        return this.id;
    }

}