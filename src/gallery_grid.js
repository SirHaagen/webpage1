
addEventListener("DOMContentLoaded", ()=>{

  const container = document.querySelector(".gallery_grid");

  for(let cantidad=0; cantidad <= 9; cantidad++){
    fetch("https://picsum.photos/500")
    .then(response => response.blob())
    .then(result => {     
      cantidad++; 
      const image= document.createElement("img");
      image.src= URL.createObjectURL(result); //Injecting the URL to the src attribute
      image.setAttribute("loading","lazy");
      container.appendChild(image);
    });
  }
})


