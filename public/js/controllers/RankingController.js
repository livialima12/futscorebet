class RankingController {

    constructor(){
        this.ranking = new Ranking();
        this.view = new RankingView();
        this.getInfo();
    }

    getInfo(){
        const infoBolaoString  = sessionStorage.getItem("infoArrayBolao");
        this.info = JSON.parse(infoBolaoString);
        
        const id = this.info.id;
        const database = firebase.database();
        const bolaoID = database.ref('boloes/inProgress').on("value", boloes => {
            const userInfoPoints = []
            boloes.forEach(bolao => {
                if (bolao.val().id == id){
                    const participants = bolao.val().participants;
                    participants.forEach(participant => {
                        userInfoPoints.push(participant)
                    })
                };   
            })
            this.ranking.sort(userInfoPoints)
        })
    }

}