const cards = document.querySelectorAll('.card-item');

  cards.forEach(card => {
    // Para trocar a posição ao passar o mouse (hover) ou ao clicar
<<<<<<< HEAD
    card.addEventListener('mouseenter', () => {
=======
    card.addEventListener('click', () => {
>>>>>>> develop
      // Se o card onde passou o rato não for o central
      if (!card.classList.contains('card-pos-3')) {
        mudarParaCentro(card);
      }
    });
  });

  function mudarParaCentro(cardSelecionado) {
    const posicoes = ['card-pos-1', 'card-pos-2', 'card-pos-3', 'card-pos-4', 'card-pos-5'];
    
    // Descobre a posição do card selecionado
    let posAtual = 0;
    posicoes.forEach((pos, index) => {
      if (cardSelecionado.classList.contains(pos)) {
        posAtual = index + 1; // 1, 2, 3, 4 ou 5
      }
    });

    // Se já for o card 3 (centro), não precisa rodar
    if (posAtual === 3) return;

    // Calcula a diferença para mover a fila
    const deslocamento = 3 - posAtual; 

    cards.forEach(card => {
      // Identifica a classe de posição atual deste card
      let classeAtualIndex = -1;
      posicoes.forEach((pos, idx) => {
        if (card.classList.contains(pos)) {
          classeAtualIndex = idx;
        }
      });

      // Remova a classe antiga
      card.classList.remove(...posicoes);

      // Nova posição com loop circular
      let novaIndex = (classeAtualIndex + deslocamento) % posicoes.length;
      if (novaIndex < 0) novaIndex += posicoes.length;

      // Adiciona a nova classe de posição
      card.classList.add(posicoes[novaIndex]);
    });
  }