function openModal() {
    document.getElementById("photoModal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("photoModal").style.display = "none";
  }

  // Fecha ao clicar fora do modal
  window.onclick = function (event) {
    const modal = document.getElementById("photoModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }