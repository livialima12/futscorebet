class MatchesSubscription {
    constructor(){
    }

    getUserMatches(idBolao, userId){
        const database = firebase.database();
        const b = idBolao;
        const userMatches = database.ref('boloes/soon/' + b + '/matchesToHunch/').once('value')
            .then(
                snapshop => {
                    let usersInfo = snapshop.val();
                    this.setUserMatches(usersInfo, userId);
            })
    }

    setUserMatches(usersInfo,userID){

        let cadastro = {
            id: userID,
            matchesToHunch: usersInfo,
            points: 0
        }
        sessionStorage.setItem('userObject', JSON.stringify(cadastro))
    }
}