"use strict"

let img = document.querySelector(".imagen");
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let imagenes = ["lobo.jpg", "murcielago.jpg", "mapache.jpg", "tigre.jpg", "zorro.jpg"];
let imagen = document.querySelector(".imagen");
let i = 0;


imagen.setAttribute("src", `${imagenes[0]}`);

next.addEventListener("click", ()=>{
	if (i == imagenes.length - 1) {
		i = 0;
		imagen.setAttribute("src", `${imagenes[i]}`);
	}else{
		i = i + 1;
		imagen.setAttribute("src", `${imagenes[i]}`);
	}
})

previous.addEventListener("click", ()=>{
	if (i == 0) {
		i = imagenes.length - 1;
		imagen.setAttribute("src", `${imagenes[i]}`);
	}else{
		i = i - 1;
		imagen.setAttribute("src", `${imagenes[i]}`);
	}
})