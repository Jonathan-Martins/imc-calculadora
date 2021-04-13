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
    this.view.configureResetButton(this.onResetPressed.bind(this));
  }

  onCalcPressed() {
    try {
      const peso = this.view.getPeso();
      const altura = this.view.getAltura();

      if (peso === 0 && altura === 0) {
        setInterval(() => {
          this.view.switchClasses();
        }, 5000);
        return;
      }

      if (peso === 0 || altura === 0) {
        setInterval(() => {
          this.view.switchClasses();
        }, 5000);
        return;
      }

      const imc = this.calcIMC(peso, altura);
      this.view.renderResult(imc);
    } catch (error) {
      console.log("valores inválidos: ", error);
    }
  }

  onResetPressed() {
    this.view.clearResult();
  }

  calcIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
  }
}

export default Controller;
