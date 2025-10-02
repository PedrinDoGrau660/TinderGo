 function enviarVideo(event) {
      event.preventDefault();
      const videoInput = document.getElementById('videoInput');
      const description = document.getElementById('description').value;

      if (!videoInput.files.length) {
        alert("Por favor, selecione um vídeo.");
        return;
      }

      const videoFile = videoInput.files[0];
      const videoURL = URL.createObjectURL(videoFile);

      // Salva no localStorage
      localStorage.setItem('videoURL', videoURL);
      localStorage.setItem('videoDescription', description);

      // Redireciona para página de vídeos
      window.location.href = "MeusVideo.html";
    }