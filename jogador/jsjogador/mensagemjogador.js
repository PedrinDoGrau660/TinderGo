const contatosDiv = document.getElementById('contatos');
    const chatDiv = document.getElementById('chat');
    const chatHeader = document.getElementById('chatHeader');
    const mensagensDiv = document.getElementById('mensagens');

    let contatoAtual = null;
    const indiceResposta = {};

    const mensagensIniciais = {
      "Mariana": "Oi! Como você está? 😄",
      "Lucas": "E aí! Tudo certo? 😎",
      "Camila": "Olá! Que bom te ver aqui 😊",
      "Rafael": "Oi! Bora conversar? 👋",
      "Gabriel": "E aí! Preparado pra falar? 😏",
      "Pedro": "Oi! Que bom que você veio 😎",
      "Thiago": "Oi! Animado pra conversar? 😁"
    };

    const respostasAutom = {
      "Mariana": ["Vi seus últimos jogos, tá evoluindo rápido!", "Estou procurando alguem como você para meu clube, estaria interresado?", "Ok, me avise qualquer coisa", "Outra hora conversamos mais estou atrasada"],
      "Lucas": ["Gosto do seu posicionamento em campo!", "Alguem como você seria útil", "A honra é minha em achar um joia igual você nesse app", "Não fique assim, vou sair a uma reunião e já levo seu nome pro treinador"],
      "Camila": ["Seu passe curto tá muito bom!", "Que incrível!", "Sério mesmo?", "Hahaha adorei!", "Interessante!"],
      "Rafael": ["A finalização pode melhorar, mas tá evoluindo!", "Nossa, que louco!", "Haha, gostei!", "Sério mesmo?", "Pode explicar melhor?"],
      "Gabriel": ["Gostei do seu senso de equipe!", "Haha, legal!", "Nossa, incrível!", "Que interessante!", "Verdade, né?"],
      "Pedro": ["A resistência física tá ótima!", "Haha, que engraçado!", "Sério? Me conta mais!", "Nossa, incrível!", "Interessante!"],
      "Thiago": ["Tem potencial para se destacar em campeonatos!", "Hahaha adorei!", "Sério mesmo?", "Que legal!", "Pode explicar melhor?"]
    };

    function abrirConversa(nome) {
      contatoAtual = nome;

      chatHeader.innerHTML = `
        <button id="btnVoltar" title="Voltar para contatos"><i class="fas fa-arrow-left"></i></button>
        <a href="olheiro.html?nome=${encodeURIComponent(nome)}">${nome}</a>
      `;
      document.getElementById('btnVoltar').addEventListener('click', voltarParaContatos);

      mensagensDiv.innerHTML = `<div class="mensagem">${mensagensIniciais[nome]}</div>`;
      ajustarLayout();
    }

    function enviarMensagem() {
      const input = document.getElementById('inputMensagem');
      const texto = input.value.trim();
      if (!texto || !contatoAtual) return;

      const msg = document.createElement('div');
      msg.className = 'mensagem eu';
      msg.innerText = texto;
      mensagensDiv.appendChild(msg);
      input.value = '';
      mensagensDiv.scrollTop = mensagensDiv.scrollHeight;

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
      }, 1000);
    }

    function voltarParaContatos() {
      contatoAtual = null;
      chatHeader.innerHTML = 'Selecione um contato';
      mensagensDiv.innerHTML = '';
      ajustarLayout();
    }

    function ajustarLayout() {
      const largura = window.innerWidth;
      if (largura > 768) {
        contatosDiv.classList.remove('escondido');
        chatDiv.classList.remove('escondido');
        if (!contatoAtual) {
          chatHeader.innerHTML = 'Selecione um contato';
          mensagensDiv.innerHTML = '';
        }
      } else {
        if (contatoAtual) {
          contatosDiv.classList.add('escondido');
          chatDiv.classList.remove('escondido');
        } else {
          contatosDiv.classList.remove('escondido');
          chatDiv.classList.add('escondido');
        }
      }
    }

    window.addEventListener('resize', ajustarLayout);
    window.addEventListener('load', ajustarLayout);
