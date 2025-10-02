const profiles = [
      { name: "Vitor Brilhante", age: 17, bio: "Atacante veloz e habilidoso.", video: "videos/video1.mp4" },
      { name: "Gabriel", age: 22, bio: "Defensor forte e inteligente.", video: "videos/video2.mp4" },
      { name: "Pedro", age: 19, bio: "Goleiro com reflexos incríveis.", video: "videos/video3.mp4" },
      { name: "Rafael", age: 20, bio: "Meio-campista com ótimo passe.", video: "videos/video4.mp4" },
      { name: "Thiago", age: 16, bio: "Jovem promessa da lateral direita.", video: "videos/video5.mp4" },
      { name: "Arlindo", age: 54, bio: "Volante técnico e incansável.", video: "videos/video6.mp4" },
      { name: "Bruno", age: 25, bio: "Atacante de muita finalização.", video: "videos/video7.mp4" }
    ];

    let currentIndex = 0;

    function loadProfile(index) {
      document.getElementById("name").textContent = profiles[index].name;
      document.getElementById("age").textContent = profiles[index].age;
      document.getElementById("bio").textContent = profiles[index].bio;
      document.getElementById("video").src = profiles[index].video;
    }

    function animateAndNext(button, type) {
  const feedback = document.getElementById("feedback-icon");
  const icon = feedback.querySelector("i");
  const rejectionAnim = document.getElementById("rejection-animation");

  // Define o ícone de feedback
  icon.className = type === "like" ? "fas fa-heart" : "fas fa-times";
  feedback.classList.add("show");

  // Se for dislike, mostra animação
  if (type === "dislike") {
    rejectionAnim.src = "animations/vasco.gif"; // substitua pelo caminho correto do vídeo
    rejectionAnim.style.display = "block";
  }

  setTimeout(() => {
    // Esconde feedback e animação
    feedback.classList.remove("show");
    rejectionAnim.style.display = "none";
    rejectionAnim.src = ""; // limpa o src para resetar o vídeo
    button.classList.remove("animate");

    // Vai para o próximo perfil
    nextProfile();
  }, 800); // tempo suficiente para a animação rodar
}

// Eventos dos botões
document.getElementById("btn-no").addEventListener("click", () => {
  const button = document.getElementById("btn-no");
  button.classList.add("animate");
  animateAndNext(button, "dislike");
});

document.getElementById("btn-yes").addEventListener("click", () => {
  const button = document.getElementById("btn-yes");
  button.classList.add("animate");
  animateAndNext(button, "like");
});

    function nextProfile() {
      currentIndex++;
      if (currentIndex >= profiles.length) {
        alert("Acabaram os perfis!");
        currentIndex = 0;
      }
      loadProfile(currentIndex);
    }

    loadProfile(currentIndex);