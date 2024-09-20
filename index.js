class Persona {
    constructor(nombre, edad, tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
}
class Estudiante extends Persona {
    constructor(nombre, edad, carrera) {
        super(nombre, edad, 'Estudiante');
        this.carrera = carrera;
    }

    presentar() {
        return `hola soy ${this.nombre} estudiante de ${this.carrera}`;
    }
}
class Docente extends Persona {
    constructor(nombre, edad, materia) {
        super(nombre, edad, 'Docente');
        this.materia = materia;
    }

    presentar() {
        return `hola soy ${this.nombre} docente de ${this.materia}`;
    }
}
class Administrativo extends Persona {
    constructor(nombre, edad, puesto) {
        super(nombre, edad, 'Administrativo');
        this.puesto = puesto;
    }
    presentar() {
        return `hola soy ${this.nombre} administrativo en el puesto de ${this.puesto}`;
    }
}
function mostrarInfogeneral(persona) {
    console.log(persona.presentar());
}
const estudiante = new Estudiante('juan', 20, 'ingeniería');
const docente = new Docente('maría', 35, 'matemáticas');
const administrativo = new Administrativo('pedro', 40, 'secretario');
mostrarInfogeneral(estudiante); 
mostrarInfogeneral(docente);    
mostrarInfogeneral(administrativo);  
