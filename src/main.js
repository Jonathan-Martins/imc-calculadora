function main() {
    const formElement = document.querySelector('form')

    function calcularIMC(peso, altura) {
        let imc = peso / (altura * altura)
        return imc.toFixed(2)
    }

    function getCategoria(imc) {
        const categorias = [
            'Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade Grau II',
            'Obesidade grau III'
        ]

        if (imc >= 39.99) {
            return categorias[5]
        }

        if (imc >= 34.9) {
            return categorias[4]
        }

        if (imc >= 29.9) {
            return categorias[3]
        }

        if (imc >= 24.9) {
            return categorias[2]
        }

        if (imc >= 18.5) {
            return categorias[1]
        }

        if (imc < 18.5) {
            return categorias[0]
        }
    }
    
    formElement.addEventListener('submit', (e) => {
        e.preventDefault()
        const inputPeso = formElement.querySelector('input.peso')
        const inputAltura = formElement.querySelector('input.altura')
        const peso = Number(inputPeso.value)
        const altura = Number(inputAltura.value)
        const IMC = calcularIMC(peso, altura)
        const categoria = getCategoria(IMC)
        console.log(`${IMC}: ${categoria}`)
    })
}

main()

/*
const inputPeso = document.querySelector(".container section input.peso")
const inputAltura = document.querySelector(".container section input.altura")
const btnCalcular = document.querySelector(".container section button")
const outputResp = document.querySelector(".container section.resultado output")

function calcularIMC(peso, altura) {
    try {
        if (!peso && !altura) {
            return alert("Por favor, preencha todos os campos")
        }
        
        if (!peso) {
            return alert("Por favor, preencha o campo peso")
        }

        if (!altura) {
            return alert("Por favor, preencha o campo altura")
        }        

        let imc =  peso / (altura * altura)
        return imc
    } catch (err) {
        alert("Por favor, informe valores válidos")
    }
    
}

btnCalcular.addEventListener("click", () => {
    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);
    let imc = calcularIMC(peso, altura)
    
    if (!imc) {
        return 
    }

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
*/