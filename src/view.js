class View {
  constructor() {
    this.inputPeso = document.querySelector("[data-tipo='peso']");
    this.inputAltura = document.querySelector("[data-tipo='altura']");
    this.btnCalcular = document.querySelector("[data-tipo='botao-calcular']");
    this.btnReset = document.querySelector("[data-tipo='botao-reset']");
    this.outputResp = document.querySelector("[data-tipo='resultado']");
    this.outputSpan = document.createElement("span");
  }

  getPeso() {
    const peso = this.inputPeso.value;

    if (!peso) {
      this.inputPeso.classList.remove("card__input");
      this.inputPeso.classList.add("card__input--invalido");
    }

    return Number(peso);
  }

  getAltura() {
    const altura = this.inputAltura.value;

    if (!altura) {
      this.inputAltura.classList.remove("card__input");
      this.inputAltura.classList.add("card__input--invalido");
    }

    return Number(altura);
  }

  clearInputs() {
    this.inputAltura.value = "";
    this.inputPeso.value = "";
  }

  renderResult(imc) {
    this.classifyResult(imc);
    this.clearInputs();
    this.outputResp.value = imc;
    this.ableButton();
    this.switchClasses();
  }

  disableButton() {
    this.btnReset.setAttribute("disabled", "disabled");
    this.btnReset.style.animation = "button-desappear 1s ease-in-out forwards";
  }

  ableButton() {
    this.btnReset.removeAttribute("disabled");
    this.btnReset.style.animation = "button-appear 1s linear forwards 2s";
  }

  classifyResult(imc) {
    if (imc < 18.5) {
      this.outputSpan.classList.add("result__message--underweight");
      this.outputSpan.innerHTML = "Abaixo do peso.";
      this.outputResp.parentElement.appendChild(this.outputSpan);
      return;
    }

    if (imc < 25) {
      this.outputSpan.classList.add("result__message--normal");
      this.outputSpan.innerHTML = "Peso normal";
      this.outputResp.parentElement.appendChild(this.outputSpan);
      return;
    }

    if (imc < 30) {
      this.outputSpan.classList.add("result__message--overweight");
      this.outputSpan.innerHTML = "Acima do peso.";
      this.outputResp.parentElement.appendChild(this.outputSpan);
      return;
    }

    if (imc >= 30) {
      this.outputSpan.classList.add("result__message--obesity");
      this.outputSpan.innerHTML = "Obesidade.";
      this.outputResp.parentElement.appendChild(this.outputSpan);
      return;
    }
  }

  clearResult() {
    this.outputResp.value = "";
    this.outputSpan.innerHTML = "";
    this.disableButton();
  }

  switchClasses() {
    this.inputAltura.classList.remove("card__input--invalido");
    this.inputAltura.classList.add("card__input");
    this.inputPeso.classList.remove("card__input--invalido");
    this.inputPeso.classList.add("card__input");
  }

  onCalcClick(command) {
    return () => {
      command();
    };
  }

  configureCalcButton(command) {
    this.btnCalcular.addEventListener("click", this.onCalcClick(command));
  }

  onResetClick(command) {
    return () => {
      command();
    };
  }

  configureResetButton(command) {
    this.btnReset.addEventListener("click", this.onResetClick(command));
  }
}

export default View;
