function calcular()
{
    var num = Number.parseInt(document.getElementById("txtn").value)
    var res = document.getElementById("res")
    
    if (num % 2 == 0)
    {
        res.innerHTML = "O número digitado é par!"
    }
    else
    {
        res.innerHTML = "O número digitado é ímpar!"
    }
}