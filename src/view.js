class View {
  constructor() {
    this.inputPeso = document.querySelector("[data-tipo='peso']");
    this.inputAltura = document.querySelector("[data-tipo='altura']");
    this.btnCalcular = document.querySelector("[data-tipo='botao']");
    this.outputResp = document.querySelector("[data-tipo='resultado']");
  }

  getPeso() {
    const peso = this.inputPeso.value;

    if (!peso) {
      this.inputPeso.classList.remove("card__input");
      this.inputPeso.classList.add("card__input--invalido");
      throw new Error("Valor não informado.");
    }

    return Number(peso);
  }

  getAltura() {
    const altura = this.inputAltura.value;

    if (!altura) {
      this.inputAltura.classList.remove("card__input");
      this.inputAltura.classList.add("card__input--invalido");
      throw new Error("Valor não informado.");
    }

    return Number(altura);
  }

  renderResult(imc) {
    this.classifyResult(imc);
    this.inputAltura.value = "";
    this.inputPeso.value = "";
    this.outputResp.value = imc;
  }

  classifyResult(imc) {
    const span = document.createElement("span");

    if (imc < 18.5) {
      span.classList.add("result__message--underweight");
      span.innerHTML = "Abaixo do peso.";
      this.outputResp.parentElement.appendChild(span);
      return;
    }

    if (imc < 25) {
      span.classList.add("result__message--normal");
      span.innerHTML = "Peso normal";
      this.outputResp.parentElement.appendChild(span);
      return;
    }

    if (imc < 30) {
      span.classList.add("result__message--overweight");
      span.innerHTML = "Acima do peso.";
      this.outputResp.parentElement.appendChild(span);
      return;
    }

    if (imc >= 30) {
      span.classList.add("result__message--obesity");
      span.innerHTML = "Obesidade.";
      this.outputResp.parentElement.appendChild(span);
      return;
    }
  }

  onCalcClick(command) {
    return () => {
      command();
    };
  }

  configureCalcButton(command) {
    this.btnCalcular.addEventListener("click", this.onCalcClick(command));
  }
}

export default View;

/*fonte: http://tabnet.datasus.gov.br/cgi-win/SISVAN/CNV/notas_sisvan.html*/
