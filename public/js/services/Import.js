class Import{

    constructor(){
        
        let database = firebase.database();    
        this.boloes = database.ref().child('boloes');
        
        this.importaBoloes();
        
    }
    
    importaBoloes(){
        this.boloes.once('value').then(snapshot => {
            var boloesInfo = snapshot.val()
            if (boloesInfo != null){
                this.retornoImport(boloesInfo)
            }
        });
    }
    
    retornoImport(boloesInfo){
        this.listaBolao = new ListaBolao(boloesInfo);
    }

}