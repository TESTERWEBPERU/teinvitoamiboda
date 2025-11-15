const contenedor = document.querySelector('.contenedor-corazones');
function random(min, max) { return Math.random() * (max - min) + min; }
function crearCorazon() {
  const corazon = document.createElement('img');
  corazon.className = 'corazon-float';
  corazon.src = 'NOMBRE_ICONO_CORAZON.png'; // PNG/SVG de corazón transparente
  corazon.style.left = random(2, 97) + 'vw';
  corazon.style.top = (window.scrollY + window.innerHeight - 40) + 'px';
  corazon.style.width = corazon.style.height = random(22, 38) + 'px';
  corazon.style.animationDuration = random(7,12) + 's';
  corazon.style.opacity = random(0.55, 0.85);
  contenedor.appendChild(corazon);
  setTimeout(() => corazon.remove(), 14000);
}
setInterval(crearCorazon, 850);
