class CardView{

    constructor(element){
        this.element = element;
    }
    
    load(cards){
        var receivecards = cards.map(card => this.template(card));
        this.element.innerHTML = receivecards;
    }

    template(card){    
        return `
        <div class="card" id="${card.id}">
            <h3 class="bolao-title">${card.name}</h3>
            <div class="icone">
                <i class="fas fa-bullseye"></i><p class="especificacoes">${card.type}</p>
            </div>
            <div class="money">
                <p class="pricing" id="entry">Inscrição - R$${card.subscription}</p>
                <p class="pricing" id="prize">Premiação - R$${card.awards}</p>
            </div>
            <p class="begin">Inscrições até ${card.date}</p>
        </div>
        
    `}
}