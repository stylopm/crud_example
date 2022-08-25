alumnos = [
    {
        name: 'Usuario 1',
        age: 37
    },
    {
        name: 'Usuario 2',
        age: 38
    },
    {
        name: 'Usuario 3',
        age: 39
    },
    {
        name: 'Usuario 4',
        age: 40
    },
]

let mostrarAlumnos = (alumnosRecibidos) => {
    document.getElementsByTagName("tbody")[0].innerHTML = '';
    alumnosRecibidos.forEach((element, index) => {
        let texth1 = document.createElement("tr");
        texth1.innerHTML = `
        <td scope="row">${index+1}</td>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>
            <button type="button" class="btn btn-primary" onclick="rellenarFormulario(${index})">
                Editar
            </button>
            <button type="button" class="btn btn-danger" onclick="eliminarRegistro(${index})">
                Eliminar
            </button>
        </td>`;
        document.getElementsByTagName("tbody")[0].appendChild(texth1);
    });
}

let eliminarRegistro = (parIndex) => {
    alumnos = alumnos.filter((alumno, index) => index !== parIndex);
    mostrarAlumnos(alumnos);
}

let rellenarFormulario = (parIndex) => {
    document.getElementById('position').value = parIndex;
    document.getElementById('nameUser').value = alumnos[parIndex].name;
    document.getElementById('age').value = alumnos[parIndex].age;
}

let actualizarRegistro = () => {
    let position = document.getElementById('position').value;
    let nameUser = document.getElementById('nameUser').value;
    let age = document.getElementById('age').value;

    if (position == '' || isNaN(position)) {
        alert('Debe seleccionar un registro');
        return false;
    }
    alumnos[position] = {
        name: nameUser,
        age: age
    }
    document.getElementById('position').value = '';
    document.getElementById('nameUser').value = '';
    document.getElementById('age').value = '';
    mostrarAlumnos(alumnos);
}

let agregarRegistro = () => {
    const nuevoAlumno = {
        name: document.getElementById('nameUser').value,
        age: document.getElementById('age').value
    }
    document.getElementById('nameUser').value = '';
    document.getElementById('age').value = '';
    alumnos.push(nuevoAlumno);
    mostrarAlumnos(alumnos);
}

mostrarAlumnos(alumnos);
