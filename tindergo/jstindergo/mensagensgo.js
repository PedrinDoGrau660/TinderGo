const contatosDiv = document.getElementById('contatos');
const chatDiv = document.getElementById('chat');
const chatHeader = document.getElementById('chatHeader');
const mensagensDiv = document.getElementById('mensagens');
const inputMensagem = document.getElementById('inputMensagem');

let contatoAtual = null;
let historicoMensagens = {};
let indiceResposta = {};

const respostasAutom = {
  Josue: ["Oi! Tudo sim, e contigo?", "Fico feliz que tenha gostado!", "Sim, com certeza, adoraria participar!", "Perfeito, fico no aguardo então!"],
  Bruno: ["Oi! Tudo ótimo por aqui.", "Obrigado, me esforcei bastante!", "Com certeza, seria uma ótima oportunidade!", "Beleza, obrigado por avisar!"],
  Davi: ["Oi, tudo certo sim!", "Que bom que gostou, significa muito!", "Sim, quero muito participar!", "Ok, aguardarei então!"],
  Diego: ["Oi! Tudo tranquilo, e você?", "Fico feliz que tenha gostado do meu perfil!", "Claro, estou interessado!", "Perfeito, fico esperando então!"],
  Miguel: ["Oi! Tudo bem por aqui.", "Muito obrigado, me esforcei bastante!", "Sim, quero muito participar da peneira!", "Ótimo, obrigado por avisar!"],
  Fernanda: ["Oi! Tudo ótimo!", "Que bom que gostou do meu perfil!", "Sim, adoraria participar!", "Perfeito, fico no aguardo do clube!"],
  Gabi: ["Oi! Tudo certo sim!", "Fico muito feliz com isso!", "Com certeza, quero participar!", "Beleza, aguardarei então!"]
};

const mensagensIniciais = {
  Josue: "Oi Josue! Vi seu perfil e queria conversar um pouco.",
  Bruno: "Olá Bruno! Gostei do seu desempenho, podemos conversar?",
  Davi: "Oi Davi! Tudo bem? Vi seu perfil de jogador.",
  Diego: "E aí Diego! Gostei do seu perfil, tudo certo?",
  Miguel: "Olá Miguel! Vi que você está jogando bem!",
  Fernanda: "Oi Fernanda! Seu perfil é incrível, parabéns!",
  Gabi: "Oi Gabi! Adorei ver seu desempenho, tudo bem?"
};

function abrirConversa(nome) {
  contatoAtual = nome;

  // cabeçalho do chat
  chatHeader.innerHTML = '';
  const btnVoltar = document.createElement('button');
  btnVoltar.id = 'btnVoltar';
  btnVoltar.title = 'Voltar para contatos';
  btnVoltar.innerHTML = '<i class="fas fa-arrow-left"></i>';
  btnVoltar.addEventListener('click', voltarParaContatos);
  chatHeader.appendChild(btnVoltar);

  const linkNome = document.createElement('a');
  linkNome.href = `perfil.html?nome=${encodeURIComponent(nome)}`;
  linkNome.innerText = nome;
  linkNome.target = '_self';
  chatHeader.appendChild(linkNome);

  mensagensDiv.innerHTML = '';
  if (historicoMensagens[nome] && historicoMensagens[nome].length > 0) {
    historicoMensagens[nome].forEach(msg => {
      const div = document.createElement('div');
      div.className = msg.startsWith("Eu:") ? 'mensagem eu' : 'mensagem';
      div.innerText = msg.replace("Eu: ", "");
      mensagensDiv.appendChild(div);
    });
  } else {
    mensagensDiv.innerHTML = `<div class="mensagem">${mensagensIniciais[nome]}</div>`;
    historicoMensagens[nome] = [mensagensIniciais[nome]];
  }

  mensagensDiv.scrollTop = mensagensDiv.scrollHeight;
  ajustarLayout();
}

function enviarMensagem() {
  const texto = inputMensagem.value.trim();
  if (!texto || !contatoAtual) return;

  const msg = document.createElement('div');
  msg.className = 'mensagem eu';
  msg.innerText = texto;
  mensagensDiv.appendChild(msg);
  mensagensDiv.scrollTop = mensagensDiv.scrollHeight;

  if (!historicoMensagens[contatoAtual]) historicoMensagens[contatoAtual] = [];
  historicoMensagens[contatoAtual].push(`Eu: ${texto}`);

  inputMensagem.value = '';

  setTimeout(() => {
    const respostas = respostasAutom[contatoAtual] || [];
    let i = indiceResposta[contatoAtual] || 0;
    const resposta = respostas[i];
    indiceResposta[contatoAtual] = (i + 1) % respostas.length;

    const msgResp = document.createElement('div');
    msgResp.className = 'mensagem';
    msgResp.innerText = resposta;
    mensagensDiv.appendChild(msgResp);
    mensagensDiv.scrollTop = mensagensDiv.scrollHeight;

    historicoMensagens[contatoAtual].push(resposta);
  }, 800);
}

function voltarParaContatos() {
  contatoAtual = null;
  chatHeader.innerHTML = 'Selecione um contato';
  mensagensDiv.innerHTML = '';
  ajustarLayout();
}

// 🌐 Responsividade aprimorada
function ajustarLayout() {
  const largura = window.innerWidth;

  if (largura > 768) {
    // Desktop → mostrar tudo
    contatosDiv.classList.remove('escondido');
    chatDiv.classList.remove('escondido');
  } else {
    // Mobile → mostrar só um de cada vez
    if (contatoAtual) {
      contatosDiv.classList.add('escondido');
      chatDiv.classList.remove('escondido');
    } else {
      contatosDiv.classList.remove('escondido');
      chatDiv.classList.add('escondido');
    }
  }
}

// Detectar clique em contatos na tela pequena
document.querySelectorAll('.contato').forEach(contato => {
  contato.addEventListener('click', () => {
    const nome = contato.dataset.nome || contato.innerText.trim();
    abrirConversa(nome);
  });
});

window.addEventListener('resize', ajustarLayout);
window.addEventListener('load', ajustarLayout);

// limpar histórico ao sair
window.addEventListener('beforeunload', () => {
  historicoMensagens = {};
  indiceResposta = {};
});
