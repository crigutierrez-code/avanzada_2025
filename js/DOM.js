/** 
* esto se hace cuando el script está en el head
document.addEventListener("DOMContentLoaded", () => {
const titulo = document.getElementById("titulo-principal");
titulo.textContent = "Hola mundo desde el DOM";
})
*/
const titulo = document.getElementById("titulo-principal");
titulo.textContent = "Hola mundo desde el DOM";

const sumar = (num1, num2) => alert(num1 + num2);

const sumarBtn = document.getElementById("sumar-btn");
sumarBtn.addEventListener("click", () => {
    sumar(5, 9);
});

const form = document.forms["sumarform"];
form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const num1 = Number(form["num-1"].value);
    const num2 = Number(form["num-2"].value);
    const modal= document.getElementById("error-msg");
    if (num1 > 0 && num2 > 0) {
        //alert(num1 + num2);
        modal.classList.remove("show");
        ralizarSuma(num1, num2);
        form.reset();
    }else {
        modal.classList.add("show");
    }



});

const ralizarSuma = (num1, num2) => {
    const resultado = num1 + num2;

    const historial = document.getElementById("historial");

    const div = document.createElement("div");
    div.textContent = `${num1} + ${num2} = `;

    const strong = document.createElement("strong");
    strong.textContent = resultado;

    div.appendChild(strong);
    historial.appendChild(div);

};

