const inputPeso = document.querySelector(".container section input.peso")
const inputAltura = document.querySelector(".container section input.altura")
const btnCalcular = document.querySelector(".container section button")
const outputResp = document.querySelector(".container section.resultado output")

function calcularIMC(peso, altura) {
    let imc =  peso / (altura * altura)
    return imc
}

btnCalcular.addEventListener("click", () => {
    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);
    let imc = calcularIMC(peso, altura)
    if (imc <= 17) {
        outputResp.innerHTML = ` ${imc.toFixed(2)}. Muito baixo do peso.`
    } else if (imc > 17 && imc < 18.49) {
        outputResp.innerHTML = ` ${imc.toFixed(2)}. Abaixo do peso.`
    } else if (imc >= 18.5 && imc < 24.99) {
        outputResp.innerHTML = ` ${imc.toFixed(2)}. Peso normal.`
    } else if (imc >= 25 && imc < 29.99) {
        outputResp.innerHTML = ` ${imc.toFixed(2)}. Acima do peso`
    } else if (imc >= 30 && imc < 34.99) {
        outputResp.innerHTML = ` ${imc.toFixed(2)}. Obesidade I`
    } else if (imc >= 35 && imc < 39.99) {
        outputResp.innerHTML = ` ${imc.toFixed(2)}. Obesidade II(severa)`
    } else {
        outputResp.innerHTML = ` ${imc.toFixed(2)}. `
    }
    
})
