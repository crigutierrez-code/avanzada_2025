// Variables
const form = document.forms["multiplicaForm"];
const result = document.getElementById("resultado");
const modal = document.getElementById("modalLogs");
const cerrarModal = document.getElementById("cerrarModal");
const tbody = document.querySelector("#tablita tbody");

// Métodos
const multiplicaForm = (factorA, factorB) => factorA * factorB;

const showResult = (num) => {
  result.textContent = "El resultado es: " + num;
};

const savelog = ({ factorA, factorB, resultado }) => {
  const log = {
    fecha: new Date().toLocaleString(),
    operacion: `${factorA} x ${factorB} = ${resultado}`
  };
  const key = `operacion_${localStorage.length + 1}`;
  localStorage.setItem(key, JSON.stringify(log));
};

const mostrarTabla = () => {
  tbody.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("operacion_")) {
      const log = JSON.parse(localStorage.getItem(key));
      const row = document.createElement("tr");
      row.innerHTML = `<td>${log.fecha}</td><td>${log.operacion}</td>`;
      tbody.appendChild(row);
    }
  }
  modal.style.display = "block";
};

// Eventos
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const factorA = Number(form["factor1"].value);
  const factorB = Number(form["factor2"].value);
  const res = multiplicaForm(factorA, factorB);

  showResult(res);
  savelog({ factorA, factorB, resultado: res });
  form.reset();
});

cerrarModal.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (evt) => {
  if (evt.target === modal) {
    modal.style.display = "none";
  }
};
