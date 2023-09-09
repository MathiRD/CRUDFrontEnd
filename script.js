let pessoas = [];
let proximoID = 1;

document.getElementById("cadastrar-btn").addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const cidade = document.getElementById("cidade").value;

  const pessoa = { id: proximoID++, nome, idade, cidade };
  pessoas.push(pessoa);

  document.getElementById("nome").value = "";
  document.getElementById("idade").value = "";
  document.getElementById("cidade").value = "";
});

document.getElementById("atualizar-btn").addEventListener("click", () => {
  const id = Number(prompt("Digite o ID da pessoa para atualizar:"));
  const pessoa = pessoas.find(p => p.id === id);

  if (pessoa) {
    const novosDados = {};
    novosDados.idade = prompt("Digite a nova idade da pessoa:") || pessoa.idade;
    novosDados.cidade = prompt("Digite a nova cidade da pessoa:") || pessoa.cidade;

    Object.assign(pessoa, novosDados);
  } else {
    alert("Pessoa não encontrada.");
  }
});

document.getElementById("deletar-btn").addEventListener("click", () => {
  const id = Number(prompt("Digite o ID da pessoa para deletar:"));
  const pessoaIndex = pessoas.findIndex(p => p.id === id);

  if (pessoaIndex !== -1) {
    pessoas.splice(pessoaIndex, 1);

    for (let i = 0; i < pessoas.length; i++) {
      pessoas[i].id = i + 1;
    }

    alert("Pessoa deletada com sucesso.");
  } else {
    alert("Pessoa não encontrada.");
  }
});

document.getElementById("listar-btn").addEventListener("click", () => {
  const output = document.getElementById("output");
  output.innerHTML = "<h2>Pessoas Cadastradas:</h2>";

  for (const pessoa of pessoas) {
    output.innerHTML += `<p>ID: ${pessoa.id}, Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}</p>`;
  }
});