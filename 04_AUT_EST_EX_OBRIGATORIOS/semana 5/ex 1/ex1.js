function calcular() {
    event.preventDefault();;
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let operador = document.getElementById('operador').value;
    let resultado = 0;
    switch (operador) {
        case '+':
            resultado = Number(num1) + Number(num2);
            break;
        case '-':
            resultado = Number(num1) - Number(num2);
            break;
        case '*':
            resultado = Number(num1) * Number(num2);
            break;
        case '/':
            resultado = Number(num1) / Number(num2);
            break;
        case '//':
            resultado = Math.floor(Number(num1)/Number(num2));
            break; 
        case '%':
            resultado = Number(num1) % Number(num2);
            break;        
    }
    document.getElementById('resultado').innerHTML = resultado;
}