class Fertilizante{
    constructor(tipo, cantidad, precio, marca, plantaRecomendada){
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.precio = precio;
        this.marca = marca;
        this.plantaRecomendada = plantaRecomendada;
    }

    MostrarInformacion(){
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Cantidad: ${this.cantidad}`);
        console.log(`Precio: ${this.precio}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Planta recomendada: ${this.plantaRecomendada}`);
    }

    CambiarPrecio(nuevoPrecio){
        this.precio = nuevoPrecio;
    }

    Recomendacion(){
        console.log(`Hola! soy un fertilizante de tipo ${this.tipo} y te recomiendo usarme en la planta: ${this.plantaRecomendada}`);
    }
}       