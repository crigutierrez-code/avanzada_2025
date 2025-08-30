console.log("Hola Mundo desde inicio.js");
console.error("Esto es un error de prueba");
console.warn("Esto es una advertencia de prueba");
console.info("Esto es un; mensaje informativo de prueba");
console.debug("Esto es un mensaje de depuración de prueba");
/**Comentario 
 * en
 * bloques
 */
//Comentario en linea
let nombre = "Juan";
var apellido;
apellido = "Pérez";
let nombreCompleto = `${nombre} ${apellido}`;
//nombreCompleto= nombre + " " + apellido;
alert(nombreCompleto)
let edad = 30;
let boolean = true; //boolean
let sueldo = 1234.5; //number
let a = null; //object
let b; //undefined
let numeros=[1,2,3,4,5,6,7,8,9,10,11,12]; //array
let frutas=new Array(3); //array
frutas[0]="Manzana";
frutas[1]="Pera";
frutas[2]="Naranja";
let surtido=["Manzana",1,23.5,true,[1,2,3]]; //array
let persona={
    nombre:"Juan",
    apellido:"Pérez",
    edad:30,
    direccion:{
        calle:"Calle Falsa",
        numero:123
    },
    nombresHijos:["Ana","Luis","Pedro"]
}//object
console.log(frutas[1]);
console.log(persona.direccion.calle);
console.log(persona.nombresHijos[0],persona.direccion);
console.log("Ciclos repetitivos");
let i
for(i=0;i<=numeros.length;i++){
    var par=(i%2==0);
    if(par){
        console.log(i+" es par");
    }else{
            console.log(i+" es impar");
        }
}

for(let i in numeros){
    console.log(numeros[i]);
}

