//asignar variables y selecionar elementos
let botonMeGusta = document.querySelectorAll(".btnLike");
let contarMeGusta = document.querySelectorAll(".like");

//seleciona cada boton
botonMeGusta.forEach(function(boton, index) { //index es la posicion del boton
    let count = 0;
    boton.addEventListener("click", function() { //adigna evento al boton
    count++;
    //sincroniza el contador con el boton correspondiente
    contarMeGusta[index].textContent = count + " like(s)"; //actuliza el contador
    });
});
