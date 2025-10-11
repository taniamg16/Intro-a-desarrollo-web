class Maceta{
    constructor(color, material, ancho, alto, profundidad, precio, recomendacionPlanta){
        this.color = color;
        this.material = material;
        this.ancho = ancho;
        this.alto = alto;
        this.profundidad = profundidad;
        this.precio = precio;
        this.recomendacionPlanta = recomendacionPlanta;
    }

    MostrarInformacion(){
        console.log(`Color: ${this.color}`);
        console.log(`Material: ${this.material}`);
        console.log(`Ancho: ${this.ancho}`);
        console.log(`Profundidad: ${this.profundidad}`);
        console.log(`Precio: ${this.precio}`);
        console.log(`Recomendacion de planta: ${this.recomendacionPlanta}`);
    }

    CalcularVolumen(){
        return this.ancho * this.profundidad * this.alto;
    }

    CambiarPrecio(nuevoPrecio){
        this.precio = nuevoPrecio;
    }

    Recomendacion(){
        console.log(`Hola! soy una maceta ${this.color} de ${this.material} y te recomiendo plantar: ${this.recomendacionPlanta}`);
    }

}