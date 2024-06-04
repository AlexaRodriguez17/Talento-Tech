const objetoJSON=`[
    {
        "nombre": "Juan",
        "edad": 30,
        "esEstudiante": true
        
    }
]`
console.log(typeof objetoJSON);

const cadenaJSON = JSON.stringify(objetoJSON);
console.log("Objeto convertido a cadena JSON:", cadenaJSON);
const nuevoObjeto= JSON.parse(cadenaJSON)
console.log("Cadena JSON convertida a objeto:", nuevoObjeto)

const estudiantes = [
    { 
        "nombre": "Ana", 
        "edad": 20, 
        "esEstudiante": true 
    },
    {
        "nombre": "Luis", 
        "edad": 25, 
        "esEstudiante": false 
    },
    { 
        "nombre": "Carlos", 
        "edad": 22, 
        "esEstudiante": true 
    }
];
    
const estudiantesFiltrados = estudiantes.filter(estudiante => estudiante.esEstudiante);
console.log("Estudiantes filtrados:", estudiantesFiltrados);

const nuevoEstudiante = [
    {
        "nombre": "María", "edad": 23, "esEstudiante": true 
    },
    {
        "nombre": "Jose", "edad": 19, "esEstudiante": true
    }
]
estudiantes.push(nuevoEstudiante);
console.log("Nuevo listado de estudiantes:", estudiantes);

const estudiantesFiltrados2 = estudiantes.filter(estudiantes => estudiantes.edad>21);
console.log("Estudiantes filtrados >21:", estudiantesFiltrados2);

const cadenaJSON2 = JSON.stringify(estudiantes);
console.log("Objeto convertido a cadena JSON:", cadenaJSON2);
const nuevoObject= JSON.parse(cadenaJSON2)
console.log("Cadena JSON convertida a objeto:", nuevoObject)