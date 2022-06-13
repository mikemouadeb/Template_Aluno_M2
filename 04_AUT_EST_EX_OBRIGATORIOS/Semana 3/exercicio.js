function calcular()
{
    var v0 = document.getElementById("txtv0").value
    var altura = document.getElementById("altura")
    var hmax = v0*v0 / 20
    altura.innerHTML = `A altura maxima é igual a ${hmax}.`
    var tempo = document.getElementById("tempo")
    var t = v0 / 10
    tempo.innerHTML = `O tempo total é de ${t}.`
}



