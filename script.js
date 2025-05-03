const logo = document.getElementById('logo');
const video = document.getElementById('video');

if (logo && video) {
  logo.addEventListener('mouseenter', function () {
    smoothSpeedChange(2); // Acelera el video al pasar el mou
  });

  logo.addEventListener('mouseleave', function () {
    smoothSpeedChange(1); // Restaura la velocidad normal
  });

  function smoothSpeedChange(tarjetSpeed) {
    let currentSpeed = video.playbackRate;
    let step = (tarjetSpeed - currentSpeed) / 50; // esto determina cuan rapido es la velocidad
  
    function updateSpeed() {
      currentSpeed += step;


      // ajustamos la velocidad gradualmente 
      if(Math.abs(currentSpeed - targetSpeed) < 0.01) {
        video.playbackRate = tarjetSpeed;
        } else {
        video.playbackRate = currentSpeed;
        resquestAnimationFrame(updateSpeed); // Llama nuevamente para el siguiente frame
      }
    }
    
    updateSpeed(); // comienza la animacion de cambio de velocidad

  }

}
