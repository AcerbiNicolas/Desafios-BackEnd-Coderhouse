class Usuario {
	constructor(nombre, apellido, libros, mascotas) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.libros = libros; // objeto de libros
		this.mascotas = mascotas; //array de objetos mascota.
	}
	getFullName = () => {
		// método que retorna el nombre y apellido, utilizando templates literales.
		return `${this.nombre} ${this.apellido}`;
	};
	addMascotas = nombreMascota => {
		// método que agrega una mascota al array de mascotas.
		this.mascotas.push(nombreMascota);
	};
	countMascotas = () => {
		// método que cuenta la cantidad de mascotas.
		return this.mascotas.length;
	};
	addBook = (nombreLibro, autorLibro) => {
		// método que agrega un objeto libro al array de libros.
		this.libros.push({
			nombreLibro: nombreLibro,
			autorLibro: autorLibro
		});
	};
	getBooks = () => {
		// método que retorna los libros.
		
		return this.libros.map(libro => libro);
	};
	getBookNames = () => {
		// método que retorna los nombres de los libros.
		return this.libros.map(libro => libro.nombreLibro);
	};
}

const ricky = new Usuario( // usuario de Ricardo Fort
	"Ricardo",
	"Fort",
	[
		{ nombreLibro: "Padre rico, padre pobre", autorLibro: "Robert Kiyosaki" },
		{ nombreLibro: "Piensa y hazte rico", autorLibro: "Napoleon Hill" }
	],
	["Tigre Marroc"] // mascota
);

console.log("el usuario se llama: ", ricky.getFullName());
ricky.addMascotas("Perro Chocolate");
console.log("el usuario tiene: ", ricky.countMascotas(), " mascotas");
ricky.addBook("Los secretos de la mente millonaria", "T. Harv Eker");
console.log("El usuario tiene estos "+ricky.libros.length +" libros: ", ricky.getBooks());