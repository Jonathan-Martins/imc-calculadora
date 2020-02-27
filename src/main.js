function main() {
    const formElement = document.querySelector('form')
    const outputElement = document.querySelector('output')

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

    function setResult(msg) {
        outputElement.innerHTML = ''
        const p = document.createElement('p')
        p.innerHTML = msg
        p.classList.add('resp')
        outputElement.appendChild(p)
    }
    
    formElement.addEventListener('submit', (e) => {
        e.preventDefault()
        const inputPeso = formElement.querySelector('input.peso')
        const inputAltura = formElement.querySelector('input.altura')
        const peso = Number(inputPeso.value)
        const altura = Number(inputAltura.value)
        const IMC = calcularIMC(peso, altura)
        const categoria = getCategoria(IMC)
        const msg = `Seu IMC é ${IMC}, portanto: ${categoria}`
        setResult(msg)
    })
}

main()

