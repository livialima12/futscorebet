class SideMenuView{

    constructor(){
        //Select from html - Sidebar menu
        this.openMenu = document.querySelector(".menu-icon");
        this.close = document.querySelector(".close-menu-icon");
        this.sidebarMenu = document.querySelector(".sidebar-menu");
        this.content = document.querySelector(".content");
    }

//Related to the sidebar menu
    OpenMenu(){
        this.sidebarMenu.classList.add('active-menu');
        this.content.classList.add('overlay');
        this.openMenu.style.visibility = "hidden";
        this.close.style.visibility = "visible"
    }

    closeMenu(){
        this.sidebarMenu.classList.remove('active-menu');
        this.content.classList.remove('overlay');
        this.openMenu.style.visibility = "visible";
        this.close.style.visibility = "hidden";
    }
    
}




