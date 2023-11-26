function botaoCadastro() {
    var nome = input_nome.value
    var email = input_email.value
    var senha = input_senha.value
    var conf_senha = input_confsenha.value
    var decada = select_decada.value
  
    validacao.innerHTML = "";
  
    if (nome == "" || email == "" || senha == "" || conf_senha == "" || decada == "Selecione uma década") {
      alert(`Preencha todos os campos!`)
    }
    else if (email.endsWith(`.com`) == false) {
      validacao.innerHTML += `Email incorreto! <br>`
    }
    else if (senha.length < 8) {
      validacao.innerHTML += `A senha deve conter no mínimo 8 caracteres.<br>`
    }
    else if (conf_senha != senha) {
      validacao.innerHTML += `As senhas não conferem.<br>`
    }
    else {
      alert(`Cadastro realizado com sucesso`);
  
      // Enviando o valor da nova input
      fetch("http://localhost:3333/usuarios/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          nomeServer: nome,
          emailServer: email,
          senhaServer: senha,
          decadaServer: decada
        }),
      })
        .then(function (resposta) {
          console.log("resposta: ", resposta);
  
          if (resposta.ok) {
            cardErro.style.display = "block";
  
            mensagem_erro.innerHTML =
              "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
  
            setTimeout(() => {
              window.location = "login.html";
            }, "2000");
  
            limparFormulario();
            finalizarAguardar();
          } else {
            throw "Houve um erro ao tentar realizar o cadastro!";
          }
        })
        .catch(function (resposta) {
          console.log(`#ERRO: ${resposta}`);
          finalizarAguardar();
        });
  
      return false;
    }
  }
  
  // function listar() {
  //   fetch("/empresas/listar", {
  //     method: "GET",
  //   })
  //     .then(function (resposta) {
  //       resposta.json().then((empresas) => {
  //         empresas.forEach((empresa) => {
  //           listaEmpresas.innerHTML += `<option value='${empresa.id}'>${empresa.cnpj}</option>`;
  //         });
  //       });
  //     })
  //     .catch(function (resposta) {
  //       console.log(`#ERRO: ${resposta}`);
  //     });
  // }
  
  function sumirMensagem() {
    cardErro.style.display = "none";
  }
  