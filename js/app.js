
function init() {
    const hamburger = document.querySelector(".hamburger");
const sidebarCloseButton = document.querySelector(".close-button");
const sidebarContainer = document.querySelector(".sidebar-container");
 
const openSidebar = () => {
    sidebarContainer.classList.add("show-sidebar");
};
const closeSidebar = () => {
    sidebarContainer.classList.remove("show-sidebar")
};

hamburger.addEventListener("click", openSidebar);
sidebarCloseButton.addEventListener("click", closeSidebar);

}
init();


   

   /* const navRelatedcode = document.querySelector(".nav-container");
    window.addEventListener("scroll",function() {
        const scrollNumber = window.scrollY;
        const targetNumber = window.innerWidth >= 992? 70 : 50;
        if(scrollNumber >= targetNumber){
            navbarContainer.classList.add("sticky-nav");
        }else{
            navbarContainer.classList.remove("sticky-nav")
        }
    });*/

    const navbarcontainer=document.querySelector(".nav-container");

    const pawan=()=>{
        const scrollNumber=window.scrollY;
        const targetNumber=window.innerWidth >= 992? 70 :50;
        if(scrollNumber>=targetNumber){
            navbarcontainer.classList.add("sticky-nav")
        }
        else{
            navbarcontainer.classList.remove("sticky-nav")
        }
    }
    window.addEventListener("scroll",pawan)



 