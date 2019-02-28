class InfoView{

    constructor(){
    }
    
    load(info){
        let div = document.querySelector(".info-bolao .card");
        let templateInfo = this.template(info.info);
        div.innerHTML = templateInfo;
    }

    template(info){
        return `
            <h3 class="bolao-title">${info.name}</h3>
            <div class="info-div">
                <p class="description">Campeonato</p>
                <p class="get-info">${info.tournament}</p>
            </div>

            <div class="info-div">
                <p class="description">Tipo do Bolão</p>
                <p class="get-info">${info.type}</p>
            </div>

            <div class="info-div">
                <p class="description">Valor de participação</p>
                <p class="get-info">R$${info.subscription}</p>
            </div>

            <div class="info-div">
                <p class="description">Valor de premiação</p>
                <p class="get-info">R$${info.awards}</p>
            </div>

            <div class="info-div">
                <p class="description">Número de Participantes</p>
                <p class="get-info">${info.participants}</p>
            </div>

            <div class="info-div">
                <p class="description">Data de Início</p>
                <p class="get-info">${info.date}</p>
            </div>

            <div class="how-to">
                <p>Como funciona</p>
                <p>- Acertou quem vai vencer a partida? Ganha +3 pontos!</p>
                <p>- Acertou que vai dar empate? Ganha +3 pontos!</p>
                <p>- Acertou o placar? Parabéns! Ganha +5 pontos!</p>
            </div>

            <button class="botao">Participar</button>
            
    `}

    loadParticipants(participants){
        let div = document.querySelector(".participantes-bolao .card");
        let templateParticipants = this.templateParticipants(participants);
        div.innerHTML = templateParticipants

    }

    templateParticipants(participants){

        this.arrayParticipants = [];
        let i;
        
        for (i = 0; i < participants.length; i++) {
            let participantsTemplate = `
                <p class="info-div">${participants[i].id}</p>
            `
            this.arrayParticipants.push(participantsTemplate);
        }
        let arrayParticipants = this.arrayParticipants.join("");
        return arrayParticipants;
    }
    
}
