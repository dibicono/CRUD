console.log("Entro index.js");

let contactos = JSON.parse( localStorage.getItem("contactos") ) || [];
// Estos son las referencias a mis inputs
const NOMBRE = document.getElementById("NOMBRE");
const APELLIDO = document.getElementById("APELLIDO");
const CELULAR = document.getElementById("CELULAR");
const ANOTACIONES = document.getElementById("ANOTACIONES");


// Estas son las referencias a mis botones
const btnBORRAR = document.getElementById("btnBORRAR");
const btnEDITAR = document.getElementById("btnEDITAR");

const divPeliculas = document.getElementById("divPeliculas");
const alertSinPeliculas = document.getElementById("alertSinPeliculas");

let indexEditar = null;


class Pelicula {
    constructor(titulo, estreno, genero, imagen, sinopsis) {
        this.titulo = titulo;
        this.estreno = estreno;
        this.genero = genero;
        this.imagen = imagen;
        this.sinopsis = sinopsis;
    }
}


function guardarPelicula() {
    let titulo = inputTitulo.value;
    let estreno = inputEstreno.value;
    let genero = inputGenero.value;
    let imagen = inputImagen.value;
    let sinopsis = inputSinopsis.value;

    let pelicula = new Pelicula(
        titulo,
        estreno,
        genero,
        imagen,
        sinopsis
    );
    console.log(pelicula);

    if (indexEditar === null) {
        console.log("Agregar pelicula");
        peliculas.push(pelicula);
    } else {
        console.log("Editar pelicula");
    }
    console.log("Entro funcion guardar pelicula");
    mostrarPeliculas();
}

function borrarTodo() {
    console.log("Entro a brorar todo");
    mostrarPeliculas();
}

function mostrarPeliculas() {
    console.log("Deberia mostrar peliculas....");
}


btnAgregar.addEventListener("click", guardarPelicula);
btnBorrarTodo.addEventListener("click", borrarTodo);

mostrarPeliculas();