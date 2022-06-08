api="http://127.0.0.1:3071"

function GetUsers()
{
    var login = $("#login").val();
    var senha = parseInt($("#senha").val());

    $.get(`http://127.0.0.1:3071/users?login="${login}"&senha=${senha}`,function(resultado))
    {

    }
}
