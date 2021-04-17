export function compareImc(imc, outputSpan, outputResp) {
  if (imc < 18.5) {
    outputSpan.classList.add("result__message--underweight");
    outputSpan.innerHTML = "Abaixo do peso.";
    outputResp.parentElement.appendChild(outputSpan);
    return;
  }

  if (imc < 25) {
    outputSpan.classList.add("result__message--normal");
    outputSpan.innerHTML = "Peso normal";
    outputResp.parentElement.appendChild(outputSpan);
    return;
  }

  if (imc < 30) {
    outputSpan.classList.add("result__message--overweight");
    outputSpan.innerHTML = "Acima do peso.";
    outputResp.parentElement.appendChild(outputSpan);
    return;
  }

  if (imc >= 30) {
    outputSpan.classList.add("result__message--obesity");
    outputSpan.innerHTML = "Obesidade.";
    outputResp.parentElement.appendChild(outputSpan);
    return;
  }
}
