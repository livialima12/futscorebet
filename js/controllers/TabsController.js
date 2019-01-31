class TabsController{

    constructor(){        
        //tabsmenu
        this.tabMenu = new TabsMenuView();
    }
     
    openTab(pageName){
        this.tabMenu.hidePage();
        this.tabMenu.openPage(pageName);
    }

    carregaCards(){
        this.bolaoCreate.obterInProgress();
        this.bolaoCreate.obterMine();
    }

}