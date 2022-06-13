function calcular() 
{
    var valfoco = document.getElementById("valfoco").value
    var seq = document.getElementById("num1").value
    var resul = document.getElementById("res")

    var array = seq.split(",") //split de acordo com a vírgula.
    var ordem = array.sort() //manipulação de array: Deixar em ordem.

    ordem.indexOf(valfoco) // a posicao que ta (0,1,2)
    resul.innerHTML = `Em ordem crescente ${ordem}, e o valor foco está na posição ${ordem.indexOf(valfoco) + 1}`

    



    
}

