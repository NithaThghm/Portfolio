//Afficher le menu déroulant au clid du burger menu

const navContainer = document.querySelector(".navContainer");
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener("click", ()=>{

    if(navContainer.classList.contains("showMenu")){
        navContainer.classList.toggle("showMenu");
        menuButton.classList.toggle("menu-open");
        
    }else{
        navContainer.classList.toggle("showMenu");
        menuButton.classList.toggle("menu-open");
    }
     
})


// const screen990 = window.matchMedia("(min-width: 990px)")

// if(screen990.matches && navContainer.classList.contains(".activeJS")){
//     console.log('ok');
// }