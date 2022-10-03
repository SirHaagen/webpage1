
//!-----------------------------------Including an html file into another html file
let includes = document.getElementsByTagName('include');

for(var i=0; i<includes.length; i++){
    let include = includes[i];
    load_file(includes[i].attributes.src.value, function(text){
        include.insertAdjacentHTML('afterend', text);
        include.remove();
    });
}
function load_file(filename, callback) {
    fetch(filename).then(response => response.text()).then(text => callback(text));
}



//!-----------------------------------Main modal and LocalStorage
const contenedorModal= document.querySelector(".contenedor_modal");
const modalName= document.querySelector(".modal_name");
const getName= document.querySelector(".getName");
const modalError= document.querySelector(".modal_error");
const userName= document.querySelector(".user_name");


const verifier= ()=>{
    if(modalName.value.length <= 1) modalError.textContent= "Incorrect name, please try again";   
    else{
        localStorage.setItem("Nombre", `${modalName.value}`);
        hideModal()
    } 
}
const hideModal= ()=>{
    contenedorModal.style.animation= "hide_modal 1s linear";
    setTimeout(()=>contenedorModal.style.display= "none",800);
    document.querySelector('.scrollable').removeEventListener('wheel', preventScroll, {passive: false});
    document.body.removeAttribute("style");
    userName.textContent= localStorage.getItem("Nombre");
} 

function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}

const initialVerification= ()=>{
    if(localStorage.getItem("Nombre")=== "" || localStorage.getItem("Nombre")=== null){
        document.querySelector('.scrollable').addEventListener('wheel', preventScroll, {passive: false});
        contenedorModal.style.display= "";
    } 
    else{
        contenedorModal.style.display= "none";
        document.body.removeAttribute("style");
        getName.removeEventListener("click", verifier);         //Delete the click event
        userName.textContent= localStorage.getItem("Nombre");
    } 
}

initialVerification();
getName.addEventListener("click", verifier);



//!-----------------------------------LIGHT/DARK MODE
const webContent= document.querySelector(".content");
const lightMode= document.querySelector(".light");
const darkMode= document.querySelector(".dark");

lightMode.addEventListener("click", ()=>{
    lightMode.setAttribute("hidden", "true");
    darkMode.removeAttribute("hidden");
    webContent.classList.replace("light_mode", "dark_mode");
})

darkMode.addEventListener("click", ()=>{
    darkMode.setAttribute("hidden", "true");
    lightMode.removeAttribute("hidden");
    webContent.classList.replace("dark_mode", "light_mode");
})