 // Carregar jogador do localStorage
  
    // Funções de curtidas e comentários
    function curtir(btn) {
      const countSpan = btn.querySelector('.like-count');
      let count = parseInt(countSpan.textContent);
      if (btn.dataset.liked === "true") { count--; btn.dataset.liked = "false"; }
      else { count++; btn.dataset.liked = "true"; }
      countSpan.textContent = count;
    }

    function descurtir(btn) {
      const countSpan = btn.querySelector('.dislike-count');
      let count = parseInt(countSpan.textContent);
      if (btn.dataset.disliked === "true") { count--; btn.dataset.disliked = "false"; }
      else { count++; btn.dataset.disliked = "true"; }
      countSpan.textContent = count;
    }

    function mostrarComentarios(btn) {
      const section = btn.closest('.video-info').querySelector('.comment-section');
      section.style.display = section.style.display === 'block' ? 'none' : 'block';
    }

    function compartilhar() { alert("Link copiado para compartilhar!"); }

    function getValueOrDefault(id, defaultValue) {
      const el = document.getElementById(id);
      return el ? el.value.trim() || defaultValue : defaultValue;
    }

    

    // Puxar vídeo salvo
    const videoURL = localStorage.getItem('videoURL');
    const description = localStorage.getItem('videoDescription');
    if (videoURL && description) {
      document.getElementById('videosContainer').innerHTML = `
        <div class="video-card">
          <video controls>
            <source src="${videoURL}" type="video/mp4">
            Seu navegador não suporta vídeo.
          </video>
          <div class="video-info">
            <div class="video-title">${description}</div>
            <div class="video-meta">Postado em 08 de Agosto de 2025 · 0 views · 0 comentários · 0 curtidas</div>
            <div class="video-actions">
              <button class="btn-icon" onclick="curtir(this)">
                👍 <span class="like-count">0</span>
              </button>
              <button class="btn-icon" onclick="descurtir(this)">
                👎 <span class="dislike-count">0</span>
              </button>
              <button class="btn-icon" onclick="mostrarComentarios(this)">
                💬 Comentários
              </button>
              <button class="btn-icon" onclick="compartilhar()">
                📤 Compartilhar
              </button>
            </div>
            <div class="comment-section">
              <p class="no-comments">Nenhum comentário ainda.</p>
            </div>
          </div>
        </div>
      `;
    }