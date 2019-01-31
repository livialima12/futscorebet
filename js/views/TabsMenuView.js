class TabsMenuView{

    constructor(){
        
        this.tabcontent = document.querySelectorAll(".tabs");
        
    }

    hidePage(){
        this.tabcontent.forEach(tab => tab.classList.add("hide"));  
    }
    openPage(pageName){
        document.querySelector(pageName).classList.remove("hide");
    }

    

}
