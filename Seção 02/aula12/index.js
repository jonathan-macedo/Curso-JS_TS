function main() {
  const form = document.querySelector('form');
  const resultado = document.querySelector('div');

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');
    
    let cadastroFormulario = {
      "Nome": nome.value,
      "Sobrnome": sobrenome.value,
      "Peso": peso.value,
      "Altura": altura.value
    };

    pessoas.push(cadastroFormulario);
    console.log(pessoas);
    resultado.innerHTML += `<p>${cadastroFormulario.Nome} ${cadastroFormulario.Sobrnome} ${cadastroFormulario.Peso} ${cadastroFormulario.Altura}<br></p>`
  }
  form.addEventListener('submit', recebeEventoForm)
}

main();