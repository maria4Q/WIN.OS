//ETIQUETAS DE INDEX

//DEL DOCUMENTO OBTEN EL ELEMENTO MEDIANTE SU ID
//ALMACENAR LA INFORMACIÓN EN VARIABLES.
var menu = document.getElementById('menu');
var icon_menu = document.getElementById('icon_menu');

//FUNCIÓN ----- TRABAJAR CON EL DOM
function activar(){
    menu.classList.add("activar");
}

//EVENTO
icon_menu.addEventListener('click', activar);
