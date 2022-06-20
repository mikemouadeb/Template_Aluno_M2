function calcular()
{
    var num = document.getElementById("txtn").value
    var res = document.getElementById("res")
    var soma = 0

    for (var index = 0; index < num.length; index++) 
    {
        soma += Number(num[index])
    }
    res.innerHTML = `A soma dos números é ${soma}`
}