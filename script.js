// Altera a cor do título aleatoriamente a cada 1 segundo
window.addEventListener('load', function() {
    var titulo = document.getElementById('titulo');
    setInterval(function() {
      var cores = ['#ff0000', '#C41616', '#862121'];
      var corAleatoria = cores[Math.floor(Math.random() * cores.length)];
      titulo.style.color = corAleatoria;
    }, 1000);
  });
  