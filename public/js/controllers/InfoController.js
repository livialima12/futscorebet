class InfoController{

    constructor(){
        
        this.infoModel = new Info();
        this.view = new InfoView();
        
        this.status = sessionStorage.getItem("status");
        
        this.carregaPaginaInfo();
        this.cancelaInscricao();
        this.removeBotaoInscricao();
        this.confirmaInscricao();

    }
    
    carregaPaginaInfo(){
        let infoBolaoString  = sessionStorage.getItem("infoArrayBolao");
        this.info = JSON.parse(infoBolaoString);
        
        let userString = sessionStorage.getItem("userInfo");
        this.user = JSON.parse(userString);
        
        let infoString = sessionStorage.getItem("info");
        this.boloesInfo = JSON.parse(infoString);
        
        //Carrega models
        this.infoModel.carregaObjetoInfo(this.info);
        if (this.status == "mine"){
            const tab = document.querySelector(".secondTab");
            tab.innerHTML = "Ranking"
            this.ranking = new RankingController();
    
        } else {
            this.infoModel.carregaParticipants(this.info.participants);
        }
    }
    
    removeBotaoInscricao(){
        if(this.status == "mine"){
            this.botao.remove();
        }
    }
    
    cancelaInscricao(){
        
        this.participants = 0;
        this.arrayParticipantes = [];
        this.arrayIDs = [];
        this.botao = document.querySelector(".botao");
        
        for (let i = 0; i < this.boloesInfo.soon.length; i++) {

            this.i = i;

            this.boloesInfo.soon.forEach(bolao => {    
                this.participantes = bolao.participants;
                let id;
                
                for(id in this.participantes){
                    this.arrayParticipantes.push(this.participantes[id]);
                    this.arrayIDs.push(id)
                }
                
                for (let index = 0; index <= this.arrayParticipantes.length; index++) {
                    
                    this.participante = this.arrayParticipantes[index];
                    console.log(this.participante)
                    this.arrayID = this.arrayIDs[index];
                    
                    //cancela inscrição
                    if (this.participante.id == this.user.id){
                        if(this.status == "open"){
                            this.botao.textContent = this.botao.textContent.replace('Participar', "Cancelar Inscrição")
                            
                            this.botao.addEventListener("click", () => {
                                let b = i;
                                let p = this.arrayIDs[index];
                                
                                let database = firebase.database();
                                
                                let deleta = database.ref('boloes/soon/' + b + '/participants/' + p).remove().then(x => {
                                    let numberOfParticipantes = database.ref('boloes/soon/' + b + '/info/participants');

                                    numberOfParticipantes.once('value').then(numero => {
                                        let numeroAtualizado = numero.val() - 1;

                                        let numeroDeParticipantes = {
                                            participants: numeroAtualizado
                                        }
                                        database.ref('boloes/soon/' + b + '/info/').update(numeroDeParticipantes)
                                        
                                    }).then(x => this.view.atualizaView())
                                })
                            })
                        }   
                    }
                }
            });
        }
    }

    confirmaInscricao(){

        let b = this.i;
        const matches = new MatchesSubscription();
        
        let participant = this.user
        let atualizaView = this.view.atualizaView;
        
        if (this.participante.id != this.user.id){
            
            let botao = document.querySelector(".botao");
            botao.addEventListener("click", function(){
                
                let matchesInfo = matches.getUserMatches(b, participant.id);
                let receiveUserObject = sessionStorage.getItem('userObject');
                let userObject = JSON.parse(receiveUserObject)

                
                let database = firebase.database();
                let inscrever = database.ref('boloes/soon/' + b + '/participants/').push(
                    userObject
                ).then(x => {
                    let numberOfParticipantes = database.ref('boloes/soon/' + b + '/info/participants');

                    numberOfParticipantes.once('value').then(numero => {
                        let numeroAtualizado = numero.val() + 1;

                        let numeroDeParticipantes = {
                            participants: numeroAtualizado
                        }
                        database.ref('boloes/soon/' + b + '/info/').update(numeroDeParticipantes)
                        
                    })
                    .then(x => atualizaView())
                })
            })

        }
    }
}