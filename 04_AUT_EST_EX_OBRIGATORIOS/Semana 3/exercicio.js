var hmax = 0;
var inic = 0;
var tempo = 0;
var grav = 10;

let form = document.getElementById("form")

const preventFormRefresh = (event) => event.preventDefault();
form.addEventListener('submit', preventFormRefresh)

function formulario() {
    inic = document.getElementById('velinicial').value;
    tempo = inic / grav;
    hmax = (inic * inic) / (2 * grav);

    console.log(tempo);
    console.log(hmax);
}