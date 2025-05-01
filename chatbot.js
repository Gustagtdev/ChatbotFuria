const chatBox = document.getElementById('chat');
const input = document.getElementById('user-input');

function sendMessage() {
  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage(userMessage, 'user');
  input.value = '';

  setTimeout(() => {
    const botReply = getBotReply(userMessage.toLowerCase());
    appendMessage(botReply, 'bot');
  }, 500);
}

function appendMessage(message, sender) {
  const msg = document.createElement('p');
  msg.textContent = message;
  msg.className = sender;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(message) {
  if (message.includes('próximo jogo') || message.includes('quando joga')) {
    return 'O próximo jogo da FURIA será no sábado, às 18h, contra a NAVI!';
  }
  if (message.includes('lineup') || message.includes('jogadores')) {
    return 'A lineup atual da FURIA é: arT, KSCERATO, yuurih, chelo e FalleN.';
  }
  if (message.includes('último resultado')) {
    return 'A FURIA venceu a MIBR por 2x1 no último confronto!';
  }
  if (message.includes('produtos') || message.includes('loja')) {
    return 'Você pode comprar produtos oficiais da FURIA em: https://www.furia.gg/';
  }
  return 'Desculpe, não entendi. Pergunte algo sobre o time, lineup ou próximos jogos!';
}


input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') sendMessage();
});
