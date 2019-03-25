class RankingView{
    constructor(){}

    load(usersInfoPoints){
        let div = document.querySelector(".participantes-bolao .card");
        let templateUsersInfoPoints = this.template(usersInfoPoints);
        div.innerHTML = templateUsersInfoPoints
    }

    template(usersInfoPoints){
        this.arrayUsersInfoPoints = [`
        <h3 class="bolao-title">Ranking</h3>
        <div class="info-div">
            <p>Participante</p>
            <p>Pontos</p>
        </div>
        `];

        for(var index in usersInfoPoints){
            let rankingTemplate = `
            <div class="info-div">
                <p class="description">${usersInfoPoints[index].id}</p>
                <p class="get-info">${usersInfoPoints[index].points}</p>
            </div>
            `;
            this.arrayUsersInfoPoints.push(rankingTemplate)
        }
        const arrayInfoPoins = this.arrayUsersInfoPoints.join("")
        return arrayInfoPoins;
    }

}