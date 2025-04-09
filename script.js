const answer = document.getElementById('answer');
const teclado = document.getElementById('teclado');
// Selecciona solo los divs que no contienen otros divs
const divsNumeros = teclado.querySelectorAll('div:not(:has(div))');
const resutaldo = document.getElementById('resultado');

divsNumeros.forEach(div => {
  div.addEventListener('click', () => {
    if (answer.textContent === '0') {
      answer.textContent = '';
    }


    if (div.textContent.trim() === '=') {
      const resultadoFinal = igualA(answer.textContent.trim());
      answer.textContent = resultadoFinal;
    } else {
      answer.textContent += div.textContent.trim();
    }
    if (div.textContent.trim() === 'C'){
      answer.textContent = '0'
    }
  });
});

function igualA(answer) {
  let resultado = 0;
  let operador = '';
  let numero = '';
  let operadores = ['+', '-', 'x', '/'];

  for (let i = 0; i < answer.length; i++) {
    let valor = answer[i];

    if (operadores.includes(valor)) {
      let num = parseFloat(numero);
      numero = '';

      if (operador === '') {
        resultado = num;
      } else {
        resultado = operar(resultado, num, operador);
      }

      operador = valor;
    } else {
      numero += valor;
    }
  }

  // Último número
  if (numero !== '') {
    let num = parseFloat(numero);
    resultado = operar(resultado, num, operador);
  }

  return resultado;
}

function operar(a, b, operador) {
  switch (operador) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case 'x':
      return a * b;
    case '/':
      return b !== 0 ? a / b : 'Error (div 0)';
    default:
      return b;
  }
}
