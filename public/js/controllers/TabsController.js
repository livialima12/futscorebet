class TabsController{

    constructor(){        
        //tabsmenu
        this.tabMenu = new TabsMenuView();
    }
     
    openTab(pageName){
        this.tabMenu.hidePage();
        this.tabMenu.openPage(pageName);
    }

}