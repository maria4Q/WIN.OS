//ETIQUETAS DE INDEX

//DEL DOCUMENTO OBTEN EL ELEMENTO MEDIANTE SU ID
//ALMACENAR LA INFORMACIÓN EN VARIABLES.
var menu = document.getElementById('menu');
var icon = document.getElementById('icon');

//FUNCIÓN ----- TRABAJAR CON EL DOM
function activar(){
    menu.classList.add('menu');
}

//EVENTO
icon.addEventListener('click', activar);
