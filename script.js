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

let operadores = ['+', '-', 'x', '/'];
function igualA(answer) {
  let tokens = [];
  for (let i = 0; i < answer.length; i++) {
    tokens.push(operadores.includes(answer[i]) ? answer[i] : parseFloat(answer[i]));
  }
  console.log(tokens);

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'number' && typeof tokens[i + 1] === 'number') {
      // los conviertes a string, los concatenas y vuelves a parsear
      let combinado = parseFloat('' + tokens[i] + tokens[i + 1]);
      tokens[i] = combinado;

      tokens.splice(i + 1, 1);
      // retrocedes un paso para detectar caso de más de dos dígitos
      i--;
    }
  }
  console.log(tokens);

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === 'x' || tokens[i] === '/') {
      let operacion = tokens[i];
      let a = tokens[i - 1];
      let b = tokens[i + 1];
      let resultado = operacion === 'x' ? a * b : a / b;

      // Reemplazar los 3 elementos: [a, operador, b] por el resultado
      tokens.splice(i - 1, 3, resultado);
      i--; // Retrocedemos para revisar de nuevo en caso de operaciones seguidas
    }
  }
  console.log(tokens)
  // Paso 3: Resolver sumas y restas
  let total = tokens[0];
  for (let i = 1; i < tokens.length; i += 2) {
    let operacion = tokens[i];
    let numero = tokens[i + 1];
    if (operacion === '+') total += numero;
    if (operacion === '-') total -= numero;
  }

  return total;
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
