function calcular()
{
    var nome1 = document.getElementById("txt1").value
    var nome2 = document.getElementById("txt2").value
    var nome3 = document.getElementById("txt3").value
    var nomes = [nome1 , nome2 , nome3]
    nomes.sort()
    document.getElementById("res").innerHTML = `${nomes}`
}   