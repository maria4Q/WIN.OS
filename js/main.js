//ETIQUETAS DE INDEX

//DEL DOCUMENTO OBTEN EL ELEMENTO MEDIANTE SU ID
//ALMACENAR LA INFORMACIÓN EN VARIABLES.
var menu = document.getElementById('menu');
var icon_menu = document.getElementById('icon_menu');

var ventana = document.getElementById('ventana');
var icon_carpeta = document.getElementById('icon_carpeta');

var icon_cerrar = document.getElementById('icon_cerrar'); 
var icon_cerrar_menu = document.getElementById('icon_cerrar_menu');

//FUNCIÓN ----- TRABAJAR CON EL DOM
function activar(){
    menu.classList.add("activar");
}
function activar2(){
    ventana.classList.add("activar");
}
function desactivar(){
    ventana.classList.add("desactivar");
    
}
function activar2(){
    ventana.classList.add("activar");
}
function desactivar2(){
    menu.classList.add("desactivar")
}


//EVENTO
icon_menu.addEventListener('click', activar);
icon_carpeta.addEventListener('click', activar2);
icon_cerrar.addEventListener('click', desactivar);
icon_cerrar_menu.addEventListener('click', desactivar2)



