class Usuario {
	constructor(nombre, apellido) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.libros = []; // objeto de libros
		this.mascotas = []; //array de objetos mascota.
	}
	getFullName = () => {
		// método que retorna el nombre y apellido, utilizando templates literales.
		return `${this.nombre} ${this.apellido}`;
	};
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota)
    }
    countMascota(){
        return this.mascotas.length
    }
	addBook(titulo, autor){
        const libroInf = {nombreLibro: titulo, nombreAutor: autor}
        this.libros.push(libroInf)
    }
	getBookNames = () => {
		// método que retorna los nombres de los libros.
		return this.libros.map(libro => libro.nombreLibro);
	};
}

const ricky = new Usuario("Ricardo","Fort")

console.log("el usuario se llama: ", ricky.getFullName());
ricky.addMascota("Perro Chocolate");
ricky.addMascota("Tigre Marroc");
console.log("el usuario tiene: ", ricky.countMascota(), " mascotas");
ricky.addBook("Los secretos de la mente millonaria", "T. Harv Eker");
ricky.addBook("Padre Rico, Padre Pobre", "Robert Kiyosaki");
console.log("El usuario tiene estos "+ricky.libros.length +" libros: ", ricky.getBookNames());