class InfoView{

    constructor(){

        this.div = document.getElementsByClassName("card");

    }

    load(info){
        let templateInfo = this.template(info);
        this.div.innerHTML = templateInfo;
    }

    template(info){
        return `
            <h3>${info.name}</h3>
            <div class="info-div">
                <p>Campeonato</p>
                <p>${info.tournament}</p>
            </div>

            <div class="info-div">
                <p>Tipo do Bolão</p>
                <p>${info.type}</p>
            </div>

            <div class="info-div">
                <p>Valor de participação</p>
                <p>R$${info.subscription}</p>
            </div>

            <div class="info-div">
                <p>Valor de premiação</p>
                <p>R$${info.awards}</p>
            </div>

            <div class="info-div">
                <p>Número de Participantes</p>
                <p>${info.participants}</p>
            </div>

            <div class="info-div">
                <p>Data de Início</p>
                <p>${info.date}</p>
            </div>

            <div class="how-to">
                <p>Como funciona</p>
                <p>- Acertou quem vai vencer a partida? Ganha +3 pontos!</p>
                <p>- Acertou que vai dar empate? Ganha +3 pontos!</p>
                <p>- Acertou o placar? Parabéns! Ganha +5 pontos!</p>
            </div>

            <button>Participar</button>
            
    `}
    
}