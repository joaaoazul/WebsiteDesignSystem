document.addEventListener('DOMContentLoaded', function() {
    const cardOverlay = document.getElementById('card-overlay');
    const cardContent = cardOverlay.querySelector('.card-content');
    const cardClose = cardOverlay.querySelector('.card-close');
  
    function openCard(e) {
      const box = e.currentTarget;
      cardContent.innerText = box.getAttribute('data-explanation') || 'Sem explicação disponível.';
      cardOverlay.style.top = '50%';
      cardOverlay.style.left = '50%';
      cardOverlay.style.transform = 'translate(-50%, -50%)';
      cardOverlay.classList.add('active');
    }
  
    function closeCard() {
      cardOverlay.classList.remove('active');
    }
  
    document.querySelectorAll('.interactive-box').forEach(box => {
      box.addEventListener('click', openCard);
    });
  
    cardClose.addEventListener('click', closeCard);
  
    cardOverlay.addEventListener('click', (e) => {
      if (e.target === cardOverlay) {
        closeCard();
      }
    });
  });
  