//ETIQUETAS DE INDEX

//DEL DOCUMENTO OBTEN EL ELEMENTO MEDIANTE SU ID
//ALMACENAR LA INFORMACIÓN EN VARIABLES.
var menu = document.getElementById('menu');
var icon_menu = document.getElementById('icon_menu');

var ventana = document.getElementById('ventana');
var icon_carpeta = document.getElementById('icon_carpeta');

/*var cerrar = document.getElementById('cerrar');*/
var menu2 = document.getElementById('menu');
var icon_cerrar = document.getElementById('icon_cerrar')

//FUNCIÓN ----- TRABAJAR CON EL DOM
function activar(){
    menu.classList.add("activar");
}
function activar2(){
    ventana.classList.add("activar");
}
function desactivar(){
    menu2.classList.remove("desactivar");
}


//EVENTO
icon_menu.addEventListener('click', activar);
icon_carpeta.addEventListener('click', activar2);
icon_cerrar.addEventListener('click', desactivar);


