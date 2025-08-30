function multiplicar(num1, num2) {
    return num1 * num2;
}
console.log("La multiplicacion da: " + multiplicar(4, 5));

function suma(num1, num2) {
    console.log("La suma da: " + (num1 + num2));
}
suma(10, 20);

const sumas = function (num1, num2) {
    console.log("La suma da: " + sumas(10, 20));
    return num1 + num2;
}

const dividir = (num1, num2) => {
    return num1 / num2;
}
console.log("La division da: " + dividir(10, 2));

const dividir2 = (num1, num2) => num1 / num2;
console.log("La division da: " + dividir2(20, 2));

sumar2 = (suma1, suma2 = 10) => {
    return suma1 + suma2;
}
console.log("La suma va a dar: " + sumar2(20));

const sumarTres = (...args) => {
    /*let res1 = 0;
    for (let num of args) {
        res1 += num;
    }
    return res1;*/
    return args;
};

console.log(sumarTres());
console.log(sumarTres(2));
console.log(sumarTres(2, 3));
console.log(sumarTres(4, 5, 6));
console.log(sumarTres(4, 5, 6, 7));
console.log(sumarTres(4, 5, "a", true));

const operaciones = (ejecutar) => {
    return ejecutar();
}

console.log(operaciones(() => 2 + 8));
console.log(operaciones(() => {
    return 5 + 6;
}));

console.log(function () ){
    return 8 / 2;
};

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    toString() {
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}`;
    }
}


