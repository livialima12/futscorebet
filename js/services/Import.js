class Import{

    constructor(){
        this._http = new HttpService();
    }

    obterBoloes(){
        return Promise.all([this._http.get("https://api.myjson.com/bins/iqzyo")])
        .then(b => {            
            let bolao = (Object.keys(b).map(i => b[i]))
            return bolao;
        })
        .catch(erro => {throw new Error(erro)})
    }

    
    retornoImport(){
        let y = this.obterBoloes();
        return y;
    }



}