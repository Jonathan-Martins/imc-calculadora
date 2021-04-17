import { compareImc } from "./imc.js";

class View {
  constructor() {
    this.inputPeso = document.querySelector("[data-tipo='peso']");
    this.inputAltura = document.querySelector("[data-tipo='altura']");
    this.btnCalcular = document.querySelector("[data-tipo='botao-calcular']");
    this.btnReset = document.querySelector("[data-tipo='botao-reset']");
    this.outputResp = document.querySelector("[data-tipo='resultado']");
    this.outputSpan = document.createElement("span");
    this.outputSpan.classList.add("result__message");
  }

  getPeso() {
    const peso = this.inputPeso.value;

    if (!peso) {
      this.inputPeso.classList.add("card__input--invalido");
      this.inputPeso.style.setProperty("--green", "--red");
    }

    return Number(peso);
  }

  getAltura() {
    const altura = this.inputAltura.value;

    if (!altura) {
      this.inputAltura.classList.add("card__input--invalido");
      this.inputAltura.style.setProperty("--green", "--red");
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
    compareImc(imc, this.outputSpan, this.outputResp);
  }

  clearResult() {
    this.outputResp.value = "";
    this.outputSpan.innerHTML = "";
    const modClass = this.getClass();
    this.outputSpan.classList.remove(modClass);
    this.disableButton();
  }

  switchClasses() {
    this.inputAltura.classList.remove("card__input--invalido");
    this.inputAltura.style.removeProperty("--green");
    this.inputPeso.classList.remove("card__input--invalido");
    this.inputPeso.style.removeProperty("--green");
  }

  getClass() {
    const re = /[--]/;
    const cssClasses = this.outputSpan.classList;
    const [modClass] = Array.from(cssClasses).filter((cssClass) =>
      cssClass.match(re)
    );

    //console.log(modClass);
    return modClass;
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
