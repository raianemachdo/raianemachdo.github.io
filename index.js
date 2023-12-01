function mudarCor(invertido) {
    var minhaImagem = document.getElementById('minhaImagem');
    
    // Inverte as cores se "invertido" for verdadeiro, caso contrário, restaura para a cor original
    minhaImagem.style.filter = invertido ? 'invert(100%)' : 'invert(0%)';
}