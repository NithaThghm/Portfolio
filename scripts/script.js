//Afficher le menu déroulant au clid du burger menu

const navContainer = document.querySelector(".navContainer");
const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener("click", ()=>{

    if(navContainer.classList.contains("showMenu")){
        navContainer.classList.toggle("showMenu");
        menuButton.classList.toggle("menu-open");
        menuButton.classList.toggle("menu-close");
        
    }else{
        navContainer.classList.toggle("showMenu");
        menuButton.classList.toggle("menu-open");
        if(menuButton.classList.toggle("menu-close")){
            menuButton.classList.toggle("menu-close");
        }
    }
     
})


// const screen990 = window.matchMedia("(min-width: 990px)")

// if(screen990.matches && navContainer.classList.contains(".activeJS")){
//     console.log('ok');
// }