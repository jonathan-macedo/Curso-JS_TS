/**
 * Calculo do IMC
 * peso / altura * 2
*/

function main() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('#resultado');
  
  function calculoIMC(evento) {
    evento.preventDefault();

    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    // console.log(peso, altura);
    if (Number.isNaN(peso.value) || Number.isNaN(altura.value)) {
      resultado.style.color = '#790000';
      resultado.style.background = '#ff1a1a';
      resultado.innerHTML += 'Valor é inválido';
    }
  }

  form.addEventListener('submit', calculoIMC)
}


main();