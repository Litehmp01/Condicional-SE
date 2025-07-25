let form = document.getElementById("form");


form.addEventListener("submit", function(event) {
    event.preventDefault();

    
   let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
    let erro = document.getElementById("erro")

    let emailCerto = "admin";
    let senhacerta = "1234";

    if (usuario == emailCerto && senha == senhacerta) {
        window.location.href = "sucesso.html";
    }
   
    else{
    erro.innerHTML = "Usuario ou senhas incorretas. Tente novamente</p>";
    }
});