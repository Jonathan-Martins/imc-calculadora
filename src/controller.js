class Controller {
  constructor({ view }) {
    this.view = view;
  }

  static initialize(deps) {
    const instance = new Controller(deps);
    return instance._init();
  }

  _init() {
    this.view.configureCalcButton(this.onCalcPressed.bind(this));
  }

  onCalcPressed() {
    try {
      const peso = this.view.getPeso();
      const altura = this.view.getAltura();
      const imc = this.calcIMC(peso, altura);
      this.view.renderResult(imc);
    } catch (error) {
      console.log("valores inválidos: ", error);
    }
  }

  calcIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
  }
}

export default Controller;
