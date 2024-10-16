// Função para realizar a requisição POST
async function fazerRequisicao() {
   try {
      const response = await fetch(
         "https://forge.withub.ai/api/triggers/5257a02d-c19b-4969-ab81-2206de86082c/execute/67085c9166ea0cd60838a5d1",
         {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({}), // O body está vazio conforme o exemplo do seu curl
         }
      );

      const data = await response.json(); // Obtém a resposta em JSON
      document.getElementById("resultado").textContent = JSON.stringify(
         data,
         null,
         2
      ); // Exibe o resultado formatado
   } catch (error) {
      document.getElementById("resultado").textContent =
         "Erro ao realizar a requisição: " + error;
   }
}

// Chama a função para fazer a requisição ao carregar a página
fazerRequisicao();
