let name = document.getElementById('name');
let email = document.getElementById('email');
let telefone = document.getElementById('telefone');
let senha = document.getElementById('senha');

let form = document.querySelector("form");

form.onsubmit = (event) => {
  event.preventDefault();
 Chamada.envia(name.value, email.value,telefone.value, senha.value)
 location.href = './mostrar.html'
};

function s(){
Chamada.consultar()
}