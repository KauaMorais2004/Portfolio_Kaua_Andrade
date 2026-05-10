
const formulario = document.getElementById("formulariocontato");// Selecionamos o formulario através do ID dele, o "formulariocontato"

// Colocamos a função do botão que faz o envio
formulario.addEventListener("submit", function(event){

    
    event.preventDefault();// Como não estamos trabalhando com banco de dados ou algo do tipo, impedimos o envio do formulario

    // Valores digitados são coletados
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

   
    if(nome === "" || email === "" || mensagem === ""){ // Verifica se todos os campos foram preenchidos

        alert("Por favor, preencha todos os campos.");

        return;
    }

    // Valida o email
    if(email.indexOf("@") === -1 || email.indexOf(".") === -1){

        alert("Digite um e-mail válido.");

        return;
    }

    // Mensagem de sucesso caso o formulario seja preenchido e enviado
    alert("Mensagem enviada com sucesso!");

    // Reseta os campos
    formulario.reset();

});