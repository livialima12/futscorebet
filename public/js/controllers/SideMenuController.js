class SideMenuController{

    constructor(){
        //sidebarmenu
        this.sideMenu = new SideMenuView();
    }
    
    openSidebarMenu(){        
        this.sideMenu.OpenMenu();
    }

    closeSidebarMenu(){
        this.sideMenu.closeMenu();
    }
}