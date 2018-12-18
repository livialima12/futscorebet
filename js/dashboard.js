var botao = document.querySelector(".sidebar-icon");
var menuLateral = document.querySelector(".sidebar-menu");
var content = document.querySelector(".content");

botao.addEventListener("click", function(){

    if(menuLateral.style.display == "none"){
        menuLateral.style.display = "block";
        content.style.width = "80%";
    }
    else if(menuLateral.style.display == "block"){
        menuLateral.style.display = "none";
        content.style.width = "100%";
    }
    
})
