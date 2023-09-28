const listaDeContactos = []

function nuevoContacto(id, nombres, apellidos, telefono, ciudad, direccion) {
    const nombreCompleto = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        ciudad: ciudad,
        direccion: direccion,

    }; 

    listaDeContactos.push(nombreCompleto);
    
}


function eliminarContacto (id) {
    const indice = listaDeContactos.findIndex(contacto => contacto.id === id)
    if (indice !== -1) {
        listaDeContactos.splice(indice, 1);
    }
};

function imprimirLista () {
    listaDeContactos.forEach( Contacto => {
        console.log(`id: ${Contacto.id}`);
        console.log(`nombres: ${Contacto.nombres}`);
        console.log(`apellidos: ${Contacto.apellidos}`);
        console.log(`telefono: ${Contacto.telefono}`);
        console.log(`ciudad: ${Contacto.ciudad}`);
        console.log(`dirreccion: ${Contacto.direccion}`);
    });

}; 


nuevoContacto (1, "John", "Lennon", 77701842032, "Nueva York", "West 72nd Street",); 
nuevoContacto (2, "Paul", "McCartney", 1828458129, "Los Angeles", "St John's Wood", ); 
nuevoContacto (3, "George", "Harrison", "1901934781", "Liverpool", "957 Lancashire",);
nuevoContacto (4, "Ringo", "Starr", "736192641", "Los Angeles", "Beverly Hills",);

eliminarContacto(4);
imprimirLista ();

