function calcular()
{
    var num = Number(document.getElementById("numb").value)
    var r = document.getElementById("r")
    var seq = [1,1]

    if (num > 0)
    {
        if(num === 1)
        {
            r.innerHTML += "1"
        } 
        else 
        {
            for(var i = 1; i<num; i++)
            {
                seq.push(seq[i]+seq[i-1])
            }
            for(var k = 0; k<seq.length; k++)
            {
                if(k === seq.length-1)
                {
                    r.innerHTML += `${seq[k]}`
                } 
                else 
                {
                    r.innerHTML += `${seq[k]}, `
                }
            }
        }

    } 
    else 
    {
        window.alert("ERRO! Digite um numero maior do que 0!")
    }
}