let numArray = [];


function getValues() {
    event.preventDefault();
    let numero = document.getElementById('numero').value;
    numArray.push(Number(numero));
    document.getElementById('numero').value = '';
    console.log(numArray);
}


function calcular() {
    event.preventDefault();
    numArray.sort((a,b) => a-b);
    let valorFoco = document.getElementById('valorFoco').value;
    findValorFoco(Number(valorFoco));
}


function findValorFoco(valorFoco) {
    let valorFocoIndex = "valor não encontrado";
    for (let index = 0; index < numArray.length; index++) {
        if (numArray[index] == valorFoco) {
            valorFocoIndex = index;
            break;
        }
    }
    let display = document.getElementById('display');
    display.innerHTML += `<h1> ${numArray} </h1>`
    display.innerHTML += `<h1> O valor foco se encontra na posição ${valorFocoIndex} </h1>`
}