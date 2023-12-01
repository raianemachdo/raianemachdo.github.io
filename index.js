function mudarCor(invertido) {
    var minhaImagem = document.getElementById('minhaImagem');
    
    // Inverte as cores se "invertido" for verdadeiro, caso contrário, restaura para a cor original
    minhaImagem.style.filter = invertido ? 'invert(100%)' : 'invert(0%)';
}

  // Função para mudar a imagem de fundo
  function mudarImagemDeFundo() {
    document.body.style.backgroundImage = "url('C:\Users\Raiane\Documents\Documentos\Site Raiane Machado-4°info\Capa..png')";
}

// Chame a função quando a página carregar ou em algum evento específico
window.onload = mudarImagemDeFundo;