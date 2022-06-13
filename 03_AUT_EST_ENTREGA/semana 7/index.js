function pegarDados() {
    fetch('http://localhost:3000/')
        .then(response => response.json())
        .then(data => data.forEach(element => {
            const nome = `<p>Nome: ${element.nome} </p>`
            const idade = `<p>Idade: ${element.idade} </p>`
            const contato = `<p> ${element.contato} </p>`
            const email = `<p> ${element.email} </p>`
            const endereco = `<p> ${element.endereco} </p>`
            document.getElementById('nome').innerHTML += nome;
            document.getElementById('idade').innerHTML += idade;
            document.getElementById('contato').innerHTML += contato;
            document.getElementById('email').innerHTML += email;
            document.getElementById('endereco').innerHTML += endereco;
        })
    );
}