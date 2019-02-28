class InfoController{

    constructor(){
        
        this.infoModel = new Info();
        this.view = new InfoView();


        

        this.carregaPaginaInfo();
        this.desistirParticipacao();
        this.realizarInscricao();


        
        
    }

    
    
    carregaPaginaInfo(){
        var x  = sessionStorage.getItem("infoArrayBolao");
        this.info = JSON.parse(x);
        this.infoModel.carregaObjetoInfo(this.info);
        this.infoModel.carregaParticipants(this.info.participants)
    }
    
    desistirParticipacao(){
        this.x = sessionStorage.getItem("userInfo");
        this.user = JSON.parse(this.x);
        let botao = document.querySelector(".botao");
        
        for (let i = 0; i < this.info.participants.length; i++) {
            
            let participant = this.info.participants[i];
            if (participant.id == this.user.id){
                
                let status = sessionStorage.getItem("status");

                if(status == "open"){
                    botao.textContent = botao.textContent.replace('Participar', "Cancelar Inscrição")

                    botao.addEventListener("click", function(){
                        console.log("Desistir")
    
                        // let database = firebase.database();
                        // let x = database.ref('boloes/soon/' + i).remove();
                    })
                }

                if(status == "mine"){
                    botao.remove();
                }

                
            }   
        }
    }

    realizarInscricao(){

        let botao = document.querySelector(".botao");
        
        let a = sessionStorage.getItem("info");
        let boloesInfo = JSON.parse(a)

        for (let i = 0; i < boloesInfo.soon.length; i++) {

            
            let participant = this.info.participants.id;
            console.log(participant)
            console.log(i)
            
            let userID = this.user.id
            if (participant.id != userID){
                
                botao.addEventListener("click", function(){
                    
                    let a = 1
                    console.log("Entrei");
        
                    let database = firebase.database();

                    let x = database.ref('boloes/soon/' + i + '/participants/').push(
                        {id: participant}
                    );
                    
                    console.log("Passei")

                })
                
            }   
        }

2
    }
}