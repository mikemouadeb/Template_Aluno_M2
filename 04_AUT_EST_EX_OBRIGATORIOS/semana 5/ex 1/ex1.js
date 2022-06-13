function adicionar()
{
    var numero1 = Number(document.getElementById("num1").value)
    var numero2 = Number(document.getElementById("num2").value)
    var resultado = document.getElementById("res")
    var opera = numero1 + numero2
    res.innerHTML = `A soma entre ${numero1} e ${numero2} é igual a ${opera}`
}

function subtrair()
{
    var numero1 = Number(document.getElementById("num1").value)
    var numero2 = Number(document.getElementById("num2").value)
    var resultado = document.getElementById("res")
    var opera = numero1 - numero2
    res.innerHTML = `A subtração entre ${numero1} e ${numero2} é igual a ${opera}`
}

function multiplicar()
{
    var numero1 = Number(document.getElementById("num1").value)
    var numero2 = Number(document.getElementById("num2").value)
    var resultado = document.getElementById("res")
    var opera = numero1 * numero2
    res.innerHTML = `A multiplicação entre ${numero1} e ${numero2} é igual a ${opera}`
}

function dividir()
{
    var numero1 = Number(document.getElementById("num1").value)
    var numero2 = Number(document.getElementById("num2").value)
    var resultado = document.getElementById("res")
    var opera = numero1 / numero2
    res.innerHTML = `A divisão entre ${numero1} e ${numero2} é igual a ${opera}`
}

function calcular()
{
    var numero1 = Number(document.getElementById("num1").value)
    var numero2 = Number(document.getElementById("num2").value)
    var resultado = document.getElementById("res")
    var opera = numero1 % numero2
    res.innerHTML = `O resto da divisão entre ${numero1} e ${numero2} é igual a ${opera}`
}