const listaDeContactos = [
    "John Lennon",
    "Paul McCartney",
    "Ringo Star",
    "George Harrison",
]

function nuevoContacto(nombreCompleto) {
    listaDeContactos.push(nombreCompleto);
    
}



function eliminarContacto (borrarNombre) {
    const contacto = listaDeContactos.indexOf(borrarNombre); 
    if (contacto !== -1) {
        listaDeContactos.splice(contacto, 1);
    }
}

function imprimirLista () {
    for (let i = 0; i < listaDeContactos.length; i++) {
        console.log(listaDeContactos[i]);
}}; 


nuevoContacto ("Yoko Ono"); 
eliminarContacto ("Paul McCartney"); 
imprimirLista ();