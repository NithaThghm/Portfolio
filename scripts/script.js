//Afficher le menu déroulant au clic du burger menu

const navContainer = document.querySelector(".navContainer");
const menuButton = document.querySelector('.menu-button');
const navTitle = document.querySelectorAll('.nav-title');

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

//console.log(navTitle);

navTitle.forEach(element => {

    element.addEventListener("click", ()=>{

        //console.log(element.innerHTML);
        
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
});



/* __ Fonction pour copier mon adresse mail dans le clipboard */

const copyIcon = document.querySelector('.contact-copy-icon');

copyIcon.addEventListener("click", ()=>{
    //console.log(document.querySelector('.contact-email').innerHTML);
    navigator.clipboard.writeText(document.querySelector('.contact-email').innerHTML);
})

/* __ Fonction pour afficher le memoji au hover de mon prénom */

const welcomeName = document.querySelector('.welcome-name');
const welcomeEmoji = document.querySelector('.welcome-emoji');
const welcomeMemoji = document.querySelector('.welcome-memoji');

welcomeName.addEventListener("mouseenter", ()=>{
    //console.log("Name enered");
    welcomeEmoji.classList.toggle('welcome-emoji-display');
    welcomeMemoji.classList.toggle('welcome-memoji-display');
})
welcomeName.addEventListener("mouseleave", ()=>{
    //console.log("Name left");
    welcomeEmoji.classList.toggle('welcome-emoji-display');
    welcomeMemoji.classList.toggle('welcome-memoji-display');
})




// const screen990 = window.matchMedia("(min-width: 990px)")

// if(screen990.matches && navContainer.classList.contains(".activeJS")){
//     console.log('ok');
// }