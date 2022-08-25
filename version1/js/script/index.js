alumnos = [
    {
        name: 'Usuario 1',
        age: 5
    },
    {
        name: 'Usuario 2',
        age: 38
    },
    {
        name: 'Usuario 3',
        age: 20
    },
    {
        name: 'Usuario 3',
        age: 40
    },
]

let mostrarAlumnos = () => {
    alumnos.forEach((element, index) => {
        let texth1 = document.createElement("tr");
        texth1.innerHTML = `
        <td scope="row">${index+1}</td>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>
            <button type="button" class="btn btn-primary" onclick="editarRegistro()">
                Editar
            </button>
            <button type="button" class="btn btn-danger" onclick="eliminarRegistro()">
                Eliminar
            </button>
        </td>`; 
        document.getElementsByTagName("tbody")[0].appendChild(texth1);
    });

}

let eliminarRegistro = () =>{
    console.log('Eliminar');
}

let editarRegistro = () =>{
    console.log('editarRegistro');
}

mostrarAlumnos();
