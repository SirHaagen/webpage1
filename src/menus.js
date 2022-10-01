
addEventListener("DOMContentLoaded", ()=>{

  const btnMenu= document.querySelector(".navbar");
  const menu= document.querySelector(".menu");
  const submenuBtns= document.querySelectorAll(".submenu_btn"); //Pueden existir varios submenús
  const upButton= document.querySelector(".up_button");
  let desplegar= 0;

  //!----------------------MENU

  btnMenu.addEventListener("click",()=> menu.classList.toggle("mostrar"))

  submenuBtns.forEach(subBoton=>{
    subBoton.addEventListener("click", ()=>{
      let subMenu= subBoton.nextElementSibling; //Selecciono el siguiente elemento (submenu)
      height= subMenu.scrollHeight; //Obtengo la altura del submenu
      if(desplegar !== 0) desplegar= subMenu.style.height= 0;
      else desplegar= subMenu.style.height= height+"px";
    })
  })

  //!----------------------GO TOP BUTTON

  const getPixels= ()=> document.documentElement.scrollTop || document.body.scrollTop;

  const scrollButton= ()=>{
    if(getPixels() > 300) upButton.classList.replace("button_hide","button_show"); 
    else upButton.classList.replace("button_show","button_hide");
  }

  window.addEventListener("scroll", scrollButton);

})
