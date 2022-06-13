function calcular()
{
    var valor = document.getElementById("val").value
    var nota_cem = valor / 100 
    var sobra_nota_cem = valor % 100
    var nota_cinquenta = sobra_nota_cem / 50
    var sobra_nota_cinquenta = sobra_nota_cem % 50
    var nota_vinte = sobra_nota_cinquenta / 20
    var sobra_nota_vinte = sobra_nota_cinquenta % 20
    var nota_dez = sobra_nota_vinte / 10
    var sobra_nota_dez = sobra_nota_vinte % 10
    var nota_cinco = sobra_nota_dez / 5
    var sobra_nota_cinco = sobra_nota_dez % 5
    var nota_um = sobra_nota_cinco / 1
    var sobra_nota_um = sobra_nota_cinco % 1  


    document.getElementById("res").innerHTML = `${nota_cem} notas de 100. ${nota_cinquenta} notas de 50. ${nota_vinte} notas de 20. ${nota_dez} notas de dez. ${nota_cinco} notas de 5. ${nota_um} notas de um.`


}
