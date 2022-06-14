function confirmar()
{
    var quant = document.getElementById("txtnum").value
    var select = document.getElementById("select").value
    var res= document.getElementById("res")

    if (select == "diurno") 
        {
            var resul = quant * 200
            res.innerHTML += `<p>${resul}</p>`
        }
    else if (select == "diurno" && quant>=50)
        {
            var resul = (quant * 120)
            res.innerHTML += `<p>${resul}</p>`
        }
    else if (select == "noturno")
        {
            var resul = (quant * 100)
            res.innerHTML += `<p>${resul}</p>`
        }
    else if (select == "noturno" && quant>=50)
        {
            var resul = (quant * 80)
            res.innerHTML += `<p>${resul}</p>`
        }
    else 
        {
            res.innerHTML = "ERRO!"
        }
}