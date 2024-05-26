// Declaração de variáveis
let totalBytes = 0;

// Listener para o evento onBeforeRequest da API de Rede
chrome.webRequest.onBeforeRequest.addListener(
  function(detalhes) {
    // Atualiza a variável totalBytes com o tamanho da solicitação
    totalBytes += detalhes.requestBody.size;
  },
  { urls: [""] },
  ["blocking"]
);

// Função para obter o consumo total de dados em MB
function getTotalDataMB() {
  return (totalBytes / 1024 / 1024).toFixed(2);
}

// Função para enviar o consumo total de dados para o script popup.js
chrome.runtime.sendMessage({ type: "updateData", data: getTotalDataMB() });
