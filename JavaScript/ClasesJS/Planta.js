class Planta{

    constructor(nombre, tipo, clima, altura, cuidados){
        this.nombre = nombre;
        this.tipo = tipo;
        this.clima = clima;
        this.altura = altura;
        this.cuidados = cuidados;
    }

    
    MostrarInformacion(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Clima: ${this.clima}`);
        console.log(`Altura: ${this.altura}`);
    }

    ActualizarAltura(nuevaAltura){
        this.altura = nuevaAltura;
    }

    Cuidados(){
        console.log(`Hola! soy una planta: ${this.nombre} y estos son mis cuidados: ${this.cuidados}`);
    }


    
}