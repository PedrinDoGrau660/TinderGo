const jogadores = {
  Josue: {
    nome: "Josue",
    rating: 4.2,
    foto: "img/Homen1.jpg",
    position: "Atacante",
    idade: 23,
    altura: 180,
    peso: 75,
    teams: ["Atlético Maneiro"],
    habilidades: "Velocidade, Finalização",
    gols: 15,
    assistencias: 7,
    partidas: 20,
    cartoes: 2,
    totalAvaliacoes: 3,
    comentarios: [
      { nota: 4.0, texto: "Explosão de velocidade impressionante, mas precisa trabalhar finalização de perna esquerda." },
      { nota: 4.5, texto: "Bom no 1x1, quebra linhas facilmente." },
      { nota: 4.0, texto: "Inteligente para se posicionar na última linha da defesa." }
    ],
    mapaCalor: "img/mapacalor/atacante.png",
    atributos: "img/atributos/atacante.png"
  },
  Bruno: {
    nome: "Bruno",
    rating: 3.9,
    foto: "img/Homen2.jpg",
    position: "Meio-campista",
    idade: 25,
    altura: 175,
    peso: 70,
    teams: ["Shaktar Dos Lek's"],
    habilidades: "Passe, Visão de Jogo",
    gols: 5,
    assistencias: 10,
    partidas: 22,
    cartoes: 1,
    totalAvaliacoes: 2,
    comentarios: [
      { nota: 3.8, texto: "Boa leitura de jogo, mas precisa acelerar a transição ofensiva." },
      { nota: 4.0, texto: "Passe vertical de qualidade, raramente erra de curta distância." }
    ],
    mapaCalor: "img/mapacalor/meiocampo.png",
    atributos: "img/atributos/midfild.png"
  },
  Davi: {
    nome: "Davi",
    rating: 4.5,
    foto: "img/homen3.jpg",
    position: "Zagueiro",
    idade: 26,
    altura: 185,
    peso: 80,
    teams: ["Paysanduba"],
    habilidades: "Marcações, Desarmes",
    gols: 3,
    assistencias: 2,
    partidas: 25,
    cartoes: 4,
    totalAvaliacoes: 4,
    comentarios: [
      { nota: 4.5, texto: "Excelente tempo de bola e força física." },
      { nota: 4.5, texto: "Ganha a maioria das disputas aéreas, mas pode melhorar a saída curta." },
      { nota: 4.5, texto: "Mantém a calma mesmo sob pressão do adversário." }
    ],
    mapaCalor: "img/mapacalor/defesa.png",
    atributos: "img/atributos/defensor.png"
  },
  Diego: {
    nome: "Diego",
    rating: 4.7,
    foto: "img/goleiro.jpg",
    position: "Goleiro",
    idade: 28,
    altura: 182,
    peso: 78,
    teams: ["Inter de Limão"],
    habilidades: "Reflexos, Posicionamento",
    gols: 0,
    assistencias: 1,
    partidas: 30,
    cartoes: 0,
    totalAvaliacoes: 5,
    comentarios: [
      { nota: 4.7, texto: "Reflexo rápido e ótimo posicionamento em bolas cruzadas." },
      { nota: 4.7, texto: "Saída pelo chão ainda pode evoluir." },
      { nota: 4.7, texto: "Comanda bem a defesa, passa segurança ao time." }
    ],
    mapaCalor: "img/mapacalor/goleiro.png",
    atributos: "img/atributos/goleiro.png"
  },
  Miguel: {
    nome: "Miguel",
    rating: 4.0,
    foto: "img/homen4.jpg",
    position: "Atacante",
    idade: 22,
    altura: 178,
    peso: 73,
    teams: ["Baile de Monique"],
    habilidades: "Potência, Finalização",
    gols: 12,
    assistencias: 5,
    partidas: 18,
    cartoes: 1,
    totalAvaliacoes: 2,
    comentarios: [
      { nota: 4.0, texto: "Potência física acima da média, segura bem os zagueiros." },
      { nota: 4.0, texto: "Precisa melhorar tomada de decisão no último terço." },
      { nota: 4.0, texto: "Tem boa presença de área, sabe atacar o espaço." }
    ],
    mapaCalor: "img/mapacalor/atacante.png",
    atributos: "img/atributos/atacante.png"
  },
  Fernanda: {
    nome: "Fernanda",
    rating: 4.3,
    foto: "img/mulher2.jpg",
    position: "Meio-campista",
    idade: 24,
    altura: 170,
    peso: 65,
    teams: ["Barcemlona"],
    habilidades: "Distribuição, Controle de Bola",
    gols: 6,
    assistencias: 8,
    partidas: 21,
    cartoes: 1,
    totalAvaliacoes: 3,
    comentarios: [
      { nota: 4.3, texto: "Controle de bola refinado e passes inteligentes." },
      { nota: 4.3, texto: "Excelente na distribuição de jogo, mas pode aumentar intensidade defensiva." },
      { nota: 4.3, texto: "Boa liderança dentro de campo." }
    ],
    mapaCalor: "img/mapacalor/meiocampo.png",
    atributos: "img/atributos/midfild.png"
  },
  Gabi: {
    nome: "Gabi",
    rating: 4.1,
    foto: "img/mulher1.jpg",
    position: "Zagueira",
    idade: 23,
    altura: 172,
    peso: 68,
    teams: ["Marrentos FC"],
    habilidades: "Marcações, Antecipação",
    gols: 2,
    assistencias: 3,
    partidas: 19,
    cartoes: 2,
    totalAvaliacoes: 2,
    comentarios: [
      { nota: 4.1, texto: "Muito firme na marcação individual." },
      { nota: 4.1, texto: "Boa leitura para antecipar jogadas." },
      { nota: 4.1, texto: "Poderia arriscar mais lançamentos longos para iniciar contra-ataques." }
    ],
    mapaCalor: "img/mapacalor/defesa.png",
    atributos: "img/atributos/defensor.png"
  },
  Carla: {
    nome: "Carla",
    rating: 4.6,
    foto: "img/carla.jpg",
    position: "Zagueira",
    idade: 27,
    altura: 175,
    peso: 70,
    teams: ["Cartola Fc"],
    habilidades: "Posicionamento, Cobertura",
    gols: 1,
    assistencias: 2,
    partidas: 20,
    cartoes: 1,
    totalAvaliacoes: 1,
    comentarios: [
      { nota: 4.6, texto: "Posicionamento excelente e calma sob pressão." },
      { nota: 4.6, texto: "Muito eficiente em coberturas defensivas." },
      { nota: 4.6, texto: "Boa comunicação com o setor defensivo." }
    ],
    mapaCalor: "img/mapacalor/defesa.png",
    atributos: "img/atributos/defensor.png"
  },
  };





    const params = new URLSearchParams(window.location.search);
    const nome = params.get("nome");

    const fotoEl = document.getElementById("foto");
    const positionEl = document.getElementById("position");
    const playerNameEl = document.getElementById("playerName");
    const teamsEl = document.getElementById("teams");
    const scoreEl = document.getElementById("score");
    const ratingContainer = document.getElementById("rating");
    const listaComentarios = document.getElementById("lista-comentarios");
    const form = document.getElementById("avaliacao-form");
    const notaInput = document.getElementById("nota");
    const comentarioInput = document.getElementById("comentario");
    const mapaCalorEl = document.getElementById("mapaCalor");
    const atributosEl = document.getElementById("atributosImg");
    

    function atualizarPerfil(jogador) {
  fotoEl.src = jogador.foto;
  positionEl.textContent = jogador.position;
  playerNameEl.textContent = nome;
  teamsEl.textContent = jogador.teams.join(", ");

  // Atualiza imagens
  mapaCalorEl.src = jogador.mapaCalor;
  atributosEl.src = jogador.atributos;

  const rating = jogador.rating;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  let starsHTML = "";
  for (let i = 0; i < fullStars; i++) starsHTML += '<i class="fas fa-star"></i>';
  if (halfStar) starsHTML += '<i class="fas fa-star-half-alt"></i>';
  while (starsHTML.split("fa-star").length - 1 < 5) starsHTML += '<i class="far fa-star"></i>';

  ratingContainer.innerHTML = starsHTML + ` <span>${rating.toFixed(1)}</span>`;

  jogador.score = Math.round(rating * 20);
  scoreEl.textContent = jogador.score;

  // Exibir detalhes adicionais
  const detalhesExtras = `
    <div class="info-item"><h3>Idade</h3><p>${jogador.idade} anos</p></div>
    <div class="info-item"><h3>Altura</h3><p>${jogador.altura} cm</p></div>
    <div class="info-item"><h3>Peso</h3><p>${jogador.peso} kg</p></div>
    <div class="info-item"><h3>Habilidades</h3><p>${jogador.habilidades}</p></div>
    <div class="info-item"><h3>Gols</h3><p>${jogador.gols}</p></div>
    <div class="info-item"><h3>Assistências</h3><p>${jogador.assistencias}</p></div>
    <div class="info-item"><h3>Partidas</h3><p>${jogador.partidas}</p></div>
    <div class="info-item"><h3>Cartões</h3><p>${jogador.cartoes}</p></div>
    <button class="login100-form-btn" type="button"  onclick=" window.location.href = 'mensagens.html'">Voltar</button>
  `;

  // Adiciona detalhes extras no grid
  const infoGrid = document.querySelector(".info-grid");
  infoGrid.innerHTML = `
    <div class="info-item">
      <h3>Times</h3>
      <p>${jogador.teams.join(", ")}</p>
    </div>
    <div class="info-item">
      <h3>Pontuação</h3>
      <p>${jogador.score}</p>
    </div>
    ${detalhesExtras}
  `;

  renderizarComentarios(jogador.comentarios);
}
    function renderizarComentarios(comentarios) {
  if (comentarios.length === 0) {
    listaComentarios.innerHTML = "<p>Nenhum comentário ainda.</p>";
    return;
  }

  listaComentarios.innerHTML = comentarios.map(c => {
    if (typeof c === "string") {
      return `<div class="comentario"><p>${c}</p></div>`;
    }
    return `
      <div class="comentario">
        <strong>Avaliação: ${c.nota.toFixed(1)} / 5</strong>
        <p>${c.texto}</p>
      </div>
    `;
  }).join("");
}


    if (jogadores[nome]) {
      const jogador = jogadores[nome];
      atualizarPerfil(jogador);

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nota = parseFloat(notaInput.value);
        const texto = comentarioInput.value.trim();

        if (nota < 0 || nota > 5) {
          alert("A avaliação deve ser entre 0 e 5.");
          return;
        }

        jogador.rating = ((jogador.rating * jogador.totalAvaliacoes) + nota) / (jogador.totalAvaliacoes + 1);
        jogador.totalAvaliacoes++;

        if (texto.length > 0) {
          jogador.comentarios.push({ nota, texto });
        }

        atualizarPerfil(jogador);
        form.reset();
      });
    } else {
      document.querySelector(".profile-main").innerHTML = "<p>Jogador não encontrado.</p>";
      ratingContainer.innerHTML = "";
      form.style.display = "none";
      document.getElementById("comentarios").style.display = "none";
    }