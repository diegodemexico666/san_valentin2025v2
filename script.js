document.getElementById('yes-button').addEventListener('click', () => {
    document.body.innerHTML = '<h1>Te quiero mucho, nos vemos el 14 ❤️</h1>';
  });
  
  document.getElementById('no-button').addEventListener('mouseover', () => {
    const noButton = document.getElementById('no-button');
    const randomX = Math.random() * 300 - 150;  // Movimiento horizontal aleatorio
    const randomY = Math.random() * 300 - 150;  // Movimiento vertical aleatorio
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    noButton.style.transition = 'transform 0.2s';
  });
  