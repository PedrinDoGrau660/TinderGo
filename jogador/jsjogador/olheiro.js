 const olheiros = {
      "Mariana": {
        nome: "Mariana Souza",
        rating: 4.5,
        foto: "img/mulher1.jpg",
        clube: "Shaktar Dos Lek's",
        regioes: ["Rio de Janeiro", "Espírito Santo"],
        descobertos: ["Lucas Almeida", "Ana Paula"],
        totalAvaliacoes: 7,
        comentarios: [
          { nota: 5.0, texto: "Ótima capacidade de encontrar talentos locais." },
          { nota: 4.0, texto: "Sempre muito atenta aos detalhes." }
        ]
      },
      "Lucas": {
        nome: "Lucas Pereira",
        rating: 4.3,
        foto: "img/veio.jpg",
        clube: "Inter de Limão",
        regioes: ["São Paulo", "Minas Gerais"],
        descobertos: ["Pedro Henrique", "Carla Mota"],
        totalAvaliacoes: 6,
        comentarios: [
          { nota: 4.5, texto: "Muito profissional e dedicado." },
          { nota: 4.0, texto: "Consegue identificar jogadores promissores." }
        ]
      },
      "Camila": {
        nome: "Camila Ramos",
        rating: 4.8,
        foto: "img/mulher.jpg",
        clube: "Baile de Monique",
        regioes: ["Bahia", "Pernambuco"],
        descobertos: ["Fernando Souza", "Lucas Silva"],
        totalAvaliacoes: 9,
        comentarios: [
          { nota: 5.0, texto: "Tem um ótimo olhar para jogadores jovens." },
          { nota: 4.7, texto: "Recomendo para clubes que buscam talento." }
        ]
      },
      "Rafael": {
        nome: "Rafael Lima",
        rating: 4.1,
        foto: "img/homen4.jpg",
        clube: "Barcemlona",
        regioes: ["Paraná", "Santa Catarina"],
        descobertos: ["Gabriel Costa", "Paulo Henrique"],
        totalAvaliacoes: 5,
        comentarios: [
          { nota: 4.0, texto: "Bom trabalho em campo." }
        ]
      },
      "Gabriel": {
        nome: "Gabriel Santos",
        rating: 3.9,
        foto: "img/homen3.jpg",
        clube: "Atlético Maneiro",
        regioes: ["Rio Grande do Sul", "Mato Grosso"],
        descobertos: ["Marcos Vinicius"],
        totalAvaliacoes: 4,
        comentarios: [
          { nota: 3.8, texto: "Ainda em desenvolvimento, mas promissor." }
        ]
      },
      "Pedro": {
        nome: "Pedro Alves",
        rating: 4.6,
        foto: "img/homen2.jpg",
        clube: "Paysanduba",
        regioes: ["Ceará", "Piauí"],
        descobertos: ["João Paulo", "Felipe Ramos"],
        totalAvaliacoes: 8,
        comentarios: [
          { nota: 4.7, texto: "Ótimo relacionamento com clubes locais." },
          { nota: 4.5, texto: "Excelente visão para jovens promissores." }
        ]
      },
      "Thiago": {
        nome: "Thiago Fernandes",
        rating: 4.4,
        foto: "img/homen1.jpg",
        clube: "Fiasco da Grama",
        regioes: ["Distrito Federal", "Goiás"],
        descobertos: ["Lucas Fernandes", "Renata Silva"],
        totalAvaliacoes: 6,
        comentarios: [
          { nota: 4.5, texto: "Profissional dedicado e muito confiável." },
          { nota: 4.3, texto: "Sempre atento às mudanças do mercado." }
        ]
      }
    };


    const params = new URLSearchParams(window.location.search);
    const nome = params.get("nome");

    const fotoEl = document.getElementById("foto");
    const nomeEl = document.getElementById("nomeOlheiro");
    const clubeEl = document.getElementById("clube");
    const regioesEl = document.getElementById("regioes");
    const descobertosEl = document.getElementById("descobertos");
    const ratingContainer = document.getElementById("rating");
    const listaComentarios = document.getElementById("lista-comentarios");
    const form = document.getElementById("avaliacao-form");
    const notaInput = document.getElementById("nota");
    const comentarioInput = document.getElementById("comentario");

    function atualizarPerfil(olheiro) {
      fotoEl.src = olheiro.foto;
      nomeEl.textContent = olheiro.nome;
      clubeEl.textContent = olheiro.clube;
      regioesEl.textContent = olheiro.regioes.join(", ");
      descobertosEl.textContent = olheiro.descobertos.join(", ");

      const rating = olheiro.rating;
      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 >= 0.5;

      let starsHTML = "";
      for (let i = 0; i < fullStars; i++) starsHTML += '<i class="fas fa-star"></i>';
      if (halfStar) starsHTML += '<i class="fas fa-star-half-alt"></i>';
      while (starsHTML.split("fa-star").length - 1 < 5) starsHTML += '<i class="far fa-star"></i>';

      ratingContainer.innerHTML = starsHTML + `<span>${rating.toFixed(1)}</span>`;

      renderizarComentarios(olheiro.comentarios);
    }

    function renderizarComentarios(comentarios) {
      if (comentarios.length === 0) {
        listaComentarios.innerHTML = "<p>Nenhum comentário ainda.</p>";
        return;
      }
      listaComentarios.innerHTML = comentarios.map(c => `
          <div class="comentario">
              <strong>Avaliação: ${c.nota.toFixed(1)} / 5</strong>
              <p>${c.texto}</p>
          </div>
      `).join("");
    }

    if (olheiros[nome]) {
      const olheiro = olheiros[nome];
      atualizarPerfil(olheiro);

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nota = parseFloat(notaInput.value);
        const texto = comentarioInput.value.trim();

        if (nota < 0 || nota > 5) {
          alert("A avaliação deve ser entre 0 e 5.");
          return;
        }

        // Atualiza rating médio
        olheiro.rating = ((olheiro.rating * olheiro.totalAvaliacoes) + nota) / (olheiro.totalAvaliacoes + 1);
        olheiro.totalAvaliacoes++;

        if (texto.length > 0) {
          olheiro.comentarios.push({ nota, texto });
        }

        atualizarPerfil(olheiro);
        form.reset();
      });
    } else {
      document.querySelector(".profile-card").innerHTML = "<p>Olheiro não encontrado.</p>";
      ratingContainer.innerHTML = "";
      form.style.display = "none";
      document.getElementById("comentarios").style.display = "none";
    }