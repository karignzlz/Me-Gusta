//asignar variables y selecionar elementos
let botonMeGusta = document.querySelectorAll(".btnLike");
let contarMeGusta = document.querySelectorAll(".like");

//selecciona cada botón
botonMeGusta.forEach(function(boton, index) { //index es la posicion del botón
    let count = 0;
    boton.addEventListener("click", function() { //asigna evento al botón
    count++;
    //sincroniza el contador con el botón correspondiente
    contarMeGusta[index].textContent = count + " like(s)"; //actualiza el contador
    });
});
