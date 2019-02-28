class TabsMenuView{

    constructor(){
        
        this.tabcontent = document.querySelectorAll(".tabs");
        
    }

    hidePage(){
        this.tabcontent.forEach(tab => tab.classList.add("hide")); 
        this.tabcontent.forEach(tab => tab.classList.remove("flex"));
    }
    
    openPage(pageName){
        document.querySelector(pageName).classList.remove("hide");
        document.querySelector(pageName).classList.add("flex");
    }

    

}
