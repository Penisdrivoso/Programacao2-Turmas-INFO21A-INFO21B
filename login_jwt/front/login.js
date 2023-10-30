const URL_LOGAR = "https://localhost:3000/auth/user/"

var botaoCadastrar = document.getElementById("botaoLogar")
botaoCadastrar.addEventListener("click",()=>{
    var email = document.getElementById("campoEmail").value
    var senha = document.getElementById("campoSenha").value

    enviaPOST( email, senha )
})

function enviaPOST( email, password ){
    var header = {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            email, password,
        })
    }
    fetch(URL_LOGAR,header)
    .then(function(response){
        if (!response.ok && response.status === 422) {
            return response.json();            
        }else if(response.ok && response.status == 200 ) {
            window.location.href = "index.html"
        }
        throw new Error('Erro na requisição');
    }).then(function(data){
        console.log(data);
        var mensagemErro = document.getElementById("mensagemErro")
        mensagemErro.innerText = data.msg
        mensagemErro.style.display = "block"
    }).catch(function(error){
        console.log(error)
    })
}