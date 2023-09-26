console.log("Entro index.js");

let peliculas = JSON.parse( localStorage.getItem("peliculas") ) || [];
// Estos son las referencias a mis inputs
const inputTitulo = document.getElementById("inputTitulo");
const inputEstreno = document.getElementById("inputEstreno");
const inputGenero = document.getElementById("inputGenero");
const inputImagen = document.getElementById("inputImagen");
const inputSinopsis = document.getElementById("inputSinopsis");

// Estas son las referencias a mis botones
const btnAgregar = document.getElementById("btnAgregar");
const btnBorrarTodo = document.getElementById("btnBorrarTodo");

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