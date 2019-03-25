class MatchesSubscription {
    constructor(){
    }

    getUserMatches(idBolao, userId){
        const database = firebase.database();
        const b = idBolao;
        const userMatches = database.ref('boloes/soon/' + b + '/matchesToHunch').once('value').then(snapshot => {
            console.log(snapshot.val())
            this.usersInfo = snapshot.val()
        }).then(
            this.setUserMatches(this.usersInfo, userId)
        )
        .catch(
            erro=>{
                console.log(erro)
            }
        )
    }

    setUserMatches(usersInfo,userID){

        let cadastro = {
            id: userID,
            matchesToHunch: usersInfo,
            points: 0
        }
        console.log(cadastro)
        sessionStorage.setItem('userObject', JSON.stringify(cadastro))
    }
}