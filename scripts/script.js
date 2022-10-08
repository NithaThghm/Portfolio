//Afficher le menu déroulant au clid du burger menu

const navContainer = document.querySelector(".navContainer");
const burgerButton = document.querySelector('.burgerButton');

burgerButton.addEventListener("click", ()=>{
    navContainer.classList.toggle("showMenu");
    
})


// const screen990 = window.matchMedia("(min-width: 990px)")

// if(screen990.matches && navContainer.classList.contains(".activeJS")){
//     console.log('ok');
// }