window.addEventListener('scroll', function () {
  const navbar = document.getElementById('mainNav');

  // Se rolar mais de 50px para baixo, adiciona a classe com cor de fundo
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    // Quando voltar para o topo, remove a classe
    navbar.classList.remove('navbar-scrolled');
  }
});