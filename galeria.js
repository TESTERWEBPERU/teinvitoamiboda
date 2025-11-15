const imagenesGaleria = Array.from({length: 19}, (_,i)=>`f${i+1}.jpg`);
let indiceActual = 0;
let thumbOffset = 0; // Para el slider de thumbs

const mostrarImagen = (indIce) => {
  const imgPrincipal = document.getElementById('galeria-imagen');
  if (imagenesGaleria[indIce]) {
    imgPrincipal.src = imagenesGaleria[indIce];
    indiceActual = indIce;
    document.querySelectorAll('#galeria-thumbs img').forEach((thumb, i) => {
      thumb.classList.toggle('active', i+thumbOffset === indiceActual);
    });
  }
};
const renderThumbnails = () => {
  const thumbsDiv = document.getElementById('galeria-thumbs');
  thumbsDiv.innerHTML = '';
  for(let t=0; t<4; t++) {
    const idx = t + thumbOffset;
    if(imagenesGaleria[idx]) {
      const thumb = document.createElement('img');
      thumb.src = imagenesGaleria[idx];
      thumb.onclick = () => mostrarImagen(idx);
      if(idx === indiceActual) thumb.classList.add('active');
      thumbsDiv.appendChild(thumb);
    }
  }
};
document.querySelector('.galeria-anterior').onclick = () => {
  let prev = indiceActual === 0 ? imagenesGaleria.length-1 : indiceActual-1;
  mostrarImagen(prev);
  if(prev < thumbOffset) thumbOffset = prev;
  if(prev >= thumbOffset+4) thumbOffset = prev-3;
  renderThumbnails();
};
document.querySelector('.galeria-siguiente').onclick = () => {
  let next = indiceActual === imagenesGaleria.length-1 ? 0 : indiceActual+1;
  mostrarImagen(next);
  if(next < thumbOffset) thumbOffset = next;
  if(next >= thumbOffset+4) thumbOffset = next-3;
  renderThumbnails();
};
document.querySelector('.thumb-anterior').onclick = ()=>{
  if(thumbOffset > 0) { thumbOffset--; renderThumbnails(); }
};
document.querySelector('.thumb-siguiente').onclick = ()=>{
  if(thumbOffset < imagenesGaleria.length-4) { thumbOffset++; renderThumbnails(); }
};
window.onload = () => {
  mostrarImagen(0);
  renderThumbnails();
};
