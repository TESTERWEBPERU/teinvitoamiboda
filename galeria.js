const imagenesGaleria = [
  'FOTO_1.jpg', 'FOTO_2.jpg', 'FOTO_3.jpg'
];
let indiceActual = 0;
function mostrarImagen(indIce) {
  const imgPrincipal = document.getElementById('galeria-imagen');
  if (imagenesGaleria[indIce]) {
    imgPrincipal.src = imagenesGaleria[indIce];
    indiceActual = indIce;
  }
}
function cambiarImagen(indIce) { mostrarImagen(indIce); }
document.querySelector('.galeria-anterior').onclick = () => {
  let previo = indiceActual === 0 ? imagenesGaleria.length-1 : indiceActual-1;
  mostrarImagen(previo);
};
document.querySelector('.galeria-siguiente').onclick = () => {
  let siguiente = indiceActual === imagenesGaleria.length-1 ? 0 : indiceActual+1;
  mostrarImagen(siguiente);
};
window.onload = () => { mostrarImagen(0); }
