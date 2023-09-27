
let contactos = JSON.parse( localStorage.getItem("contactos") ) || [];
// Estos son las referencias a mis inputs
const NOMBRE = document.getElementById("NOMBRE");
const APELLIDO = document.getElementById("APELLIDO");
const TELEFONO = document.getElementById("TELEFONO");
const ANOTACIONES = document.getElementById("ANOTACIONES");

// Estas son las referencias a mis botones
const btnBORRAR = document.getElementById("btnBORRAR");
const btnEDITAR = document.getElementById("btnEDITAR");
const btnINGRESAR = document.getElementById("btnINGRESAR")

const divPeliculas = document.getElementById("divPeliculas");
const alertSinPeliculas = document.getElementById("alertSinPeliculas");

let indexEditar = null;


class DIRECTORIO {
    constructor(NOMBRE, APELLIDO, TELEFONO, ANOTACIONES) {
        this.NOMBRE = NOMBRE;
        this.APELLIDO = APELLIDO;
        this.TELEFONO = TELEFONO;
        this.ANOTACIONES = ANOTACIONES;
    }
}

function guardarContacto() {
    let NOMBRE = NOMBRE.value;
    let APELLIDO = APELLIDO.value;
    let TELEFONO = TELEFONO.value;
    let ANOTACIONES = ANOTACIONES.value;

    let guardarContacto = new DIRECTORIO(
        NOMBRE,
        APELLIDO,
        TELEFONO,
        ANOTACIONES,
    );
    

    if (indexEditar === null) {
        console.log("Agregar pelicula");
        guardarContacto.push(DIRECTORIO);
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

function mostrarDIRETORIO() {
    console.log("Deberia mostrar peliculas....");
}


btnINGRESAR.addEventListener("click", guardarContacto);
btnBORRAR.addEventListener("click", borrarTodo);

mostrarPeliculas();