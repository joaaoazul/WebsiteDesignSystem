document.addEventListener('DOMContentLoaded', function() {
    const cardOverlay = document.getElementById('card-overlay');
    const cardContent = cardOverlay.querySelector('.card-content');
    const cardClose = cardOverlay.querySelector('.card-close');
  
    function openCard(e) {
      const box = e.currentTarget;
      // Atualiza o conteúdo do cartão com a explicação
      cardContent.innerText = box.getAttribute('data-explanation') || 'Sem explicação disponível.';
      // Exibe o overlay centralizado
      cardOverlay.style.top = '50%';
      cardOverlay.style.left = '50%';
      cardOverlay.style.transform = 'translate(-50%, -50%)';
      cardOverlay.classList.add('active');
    }
  
    function closeCard() {
      cardOverlay.classList.remove('active');
    }
  
    // Adiciona os eventos de clique nos elementos interativos
    document.querySelectorAll('.interactive-box').forEach(box => {
      box.addEventListener('click', openCard);
    });
  
    // Fecha o cartão ao clicar no botão de fechar
    cardClose.addEventListener('click', closeCard);
  
    // Fecha o cartão ao clicar fora do conteúdo (no overlay)
    cardOverlay.addEventListener('click', (e) => {
      if (e.target === cardOverlay) {
        closeCard();
      }
    });
  });
  