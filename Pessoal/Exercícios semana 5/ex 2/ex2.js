function calcular() {
    let notasCem = 0;
    let notasCinquenta = 0;
    let notasVinte = 0;
    let notasDez = 0;
    let notasCinco = 0;
    let notasDois = 0;
    let notasUm = 0;
    let display = document.getElementById('resultado');
    let amount = document.getElementById('amount').value;

    while ((amount / 100 >= 1)) {
        amount = amount - 100;
        notasCem++;
    }

    while ((amount / 50 >= 1)) {
        amount = amount - 50;
        notasCinquenta++;
    }

    while ((amount / 20 >= 1)) {
        amount = amount - 20;
        notasVinte++;
    }

    while ((amount / 10 >= 1)) {
        amount = amount - 10;
        notasDez++;
    }
    
    while ((amount / 5 >= 1)) {
        amount = amount - 5;
        notasCinco++;
    }

    while ((amount / 2 >= 1)) {
        amount = amount - 2;
        notasDois++;
    }
    
    while ((amount / 1 >= 1)) {
        amount = amount - 1;
        notasUm++;
    }

    display.innerHTML += `<h1> Notas de 100: ${notasCem}</h1>`;
    display.innerHTML += `<h1> Notas de 50: ${notasCinquenta}</h1>`;
    display.innerHTML += `<h1> Notas de 20: ${notasVinte}</h1>`;
    display.innerHTML += `<h1> Notas de 10: ${notasDez}</h1>`;
    display.innerHTML += `<h1> Notas de 5: ${notasCinco}</h1>`;
    display.innerHTML += `<h1> Notas de 2: ${notasDois}</h1>`;
    display.innerHTML += `<h1> Notas de 1: ${notasUm}</h1>`;
}