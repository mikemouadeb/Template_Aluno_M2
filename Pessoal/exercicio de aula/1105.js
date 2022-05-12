
function teobaldo()
{
    var nota_dez = 0
    var nota_cinco = 0
    var nota_um = 0
    var total = document.getElementById("qualquer").value
    
    nota_dez = parseInt (total/10)
    total= total - (10 * nota_dez)
    
    nota_cinco = parseInt (total/5)
    total = total - (5 * nota_cinco)

    console.log("Total de notas de um "+total)
    console.log("Total de notas de cinco"+total)
}

