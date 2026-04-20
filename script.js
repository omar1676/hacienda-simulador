let salario = document.querySelector("#salarioBruto");
let boton = document.querySelector("#btnCalcular");
let resultado = document.querySelector("#resultado");
let montoNeto = document.querySelector("#montoNeto");
let porcentaje = document.querySelector("#porcentaje");

boton.addEventListener("click", function () {
    let bruto = Number(salario.value);
    let retencion;
    let netoAnual;
    let netoMensual;

    if (bruto <= 0) {
        alert("Escribe un salario válido");
    } else {
        if (bruto > 30000) {
            retencion = 20;
        } else {
            retencion = 15;
        }

        netoAnual = bruto - (bruto * retencion / 100);
        netoMensual = netoAnual / 12;

        montoNeto.textContent = netoMensual.toFixed(2);
        porcentaje.textContent = retencion;

        resultado.classList.remove("oculto");

        if (netoMensual > 2000) {
            montoNeto.style.color = "green";
        } else {
            montoNeto.style.color = "red";
        }
    }
});