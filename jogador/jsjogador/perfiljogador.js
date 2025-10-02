function renderForm(dados = {}) {
  document.getElementById("app").innerHTML = `
    <div class="form-container">
       <a href="pagina.html" class="back-arrow" title="Voltar">&#8592;</a>
      <h1>Crie seu Perfil de Jogador</h1>

      <label>Nome:</label>
      <input type="text" id="nome" value="${dados.nome || ''}">

      <label>Posição:</label>
      <input type="text" id="posicao" value="${dados.posicao || ''}">

      <label>Idade:</label>
      <input type="number" id="idade" value="${dados.idade || ''}">

      <label>Altura (cm):</label>
      <input type="number" id="altura" value="${dados.altura || ''}">

      <label>Peso (kg):</label>
      <input type="number" id="peso" value="${dados.peso || ''}">

      <label>Times (separar por vírgula):</label>
      <input type="text" id="times" value="${dados.times ? dados.times.join(', ') : ''}">

      <label>Habilidades principais:</label>
      <input type="text" id="habilidades" value="${dados.habilidades || ''}">

      <label>Gols:</label>
      <input type="number" id="gols" value="${dados.gols || ''}">

      <label>Assistências:</label>
      <input type="number" id="assistencias" value="${dados.assistencias || ''}">

      <label>Partidas:</label>
      <input type="number" id="partidas" value="${dados.partidas || ''}">

      <label>Cartões:</label>
      <input type="number" id="cartoes" value="${dados.cartoes || ''}">

      <label>Foto:</label>
      <input type="file" id="foto">

      <label>Mapa de Calor:</label>
      <input type="file" id="mapa">

      <label>Atributos:</label>
      <input type="file" id="atributos">

      <button onclick="salvarPerfil()">Salvar</button>
    </div>
  `;
}

function renderPerfil(dados) {
  document.getElementById("app").innerHTML = `
    <div class="profile-container">
       <a href="pagina.html" class="back-arrow" title="Voltar">&#8592;</a>
      <div class="header">
        <img src="${dados.foto}" alt="Foto" width="120" style="border-radius:8px">
        <div>
          <h1>${dados.nome}</h1>
          <p>${dados.posicao} | ${dados.idade || '-'} anos</p>
          <p>Altura: ${dados.altura || '-'}cm | Peso: ${dados.peso || '-'}kg</p>
        </div>
      </div>

      <div class="stats-grid">
        <div><strong>Rating:</strong> ${dados.rating || 0} ⭐</div>
        <div><strong>Gols:</strong> ${dados.gols || 0}</div>
        <div><strong>Assistências:</strong> ${dados.assistencias || 0}</div>
        <div><strong>Partidas:</strong> ${dados.partidas || 0}</div>
        <div><strong>Cartões:</strong> ${dados.cartoes || 0}</div>
      </div>

      <div class="info-grid">
        <div>
          <h3>Times</h3>
          <p>${dados.times.join(", ")}</p>
        </div>
        <div>
          <h3>Habilidades principais</h3>
          <p>${dados.habilidades || '-'}</p>
        </div>
      </div>

      <div class="side-panel">
        <div class="side-card">
          <h4>Atributos</h4>
          <img src="${dados.atributos}" alt="Atributos">
        </div>
        <div class="side-card">
          <h4>Mapa de Calor</h4>
          <img src="${dados.mapa}" alt="Mapa de calor">
        </div>
      </div>

      <button onclick="editarPerfil()">Editar Perfil</button>
      <button onclick="apagarPerfil()" style="background:red">Apagar Perfil</button>
    </div>
  `;
}

function salvarPerfil() {
  const fileToBase64 = (file) => new Promise(resolve => {
    if (!file) return resolve('');
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });

  const fotoFile = document.getElementById("foto").files[0];
  const mapaFile = document.getElementById("mapa").files[0];
  const atributosFile = document.getElementById("atributos").files[0];

  Promise.all([fileToBase64(fotoFile), fileToBase64(mapaFile), fileToBase64(atributosFile)])
  .then(([foto, mapa, atributos]) => {
    const dados = {
  nome: document.getElementById("nome").value,
  posicao: document.getElementById("posicao").value,
  idade: document.getElementById("idade").value,
  altura: document.getElementById("altura").value,
  peso: document.getElementById("peso").value,
  times: document.getElementById("times").value.split(",").map(t => t.trim()),
  habilidades: document.getElementById("habilidades").value,
  rating: 0, // <- aqui
  gols: parseInt(document.getElementById("gols").value) || 0,
  assistencias: parseInt(document.getElementById("assistencias").value) || 0,
  partidas: parseInt(document.getElementById("partidas").value) || 0,
  cartoes: parseInt(document.getElementById("cartoes").value) || 0,
  foto,
  mapa,
  atributos
};

    sessionStorage.setItem("perfilJogador", JSON.stringify(dados));
    renderPerfil(dados);
  });
}

function editarPerfil() {
  const dados = JSON.parse(sessionStorage.getItem("perfilJogador"));
  if (dados) renderForm(dados);
}

function apagarPerfil() {
  sessionStorage.removeItem("perfilJogador");
  renderForm();
}

const salvo = sessionStorage.getItem("perfilJogador");
if (salvo) renderPerfil(JSON.parse(salvo));
else renderForm();