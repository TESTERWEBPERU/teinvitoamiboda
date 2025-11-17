const imagenesGaleria = Array.from({length: 19}, (_,i)=>`f${i+1}.jpg`);
let indiceActual = 0;
let thumbOffset = 0;

const mostrarImagen = (indIce) => {
  const imgPrincipal = document.getElementById('galeria-imagen');
  if (imagenesGaleria[indIce]) {
    imgPrincipal.src = imagenesGaleria[indIce];
    imgPrincipal.setAttribute('data-indice', indIce);
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
  document.addEventListener('keydown', e=>{
    if(document.getElementById('lightbox').classList.contains('active') && (e.key==="Escape"||e.key==="Esc")) cerrarLightbox();
    if(document.getElementById('lightbox').classList.contains('active')) {
      if(e.key==="ArrowRight") avanzarLightbox(1);
      if(e.key==="ArrowLeft") avanzarLightbox(-1);
    }
  });
};

function abrirLightbox() {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  lb.classList.add('active');
  lbImg.src = imagenesGaleria[indiceActual];
}
function cerrarLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}
function avanzarLightbox(dir) {
  let nuevo = indiceActual + dir;
  if(nuevo < 0) nuevo = imagenesGaleria.length-1;
  if(nuevo >= imagenesGaleria.length) nuevo=0;
  mostrarImagen(nuevo);
  document.getElementById('lightbox-img').src = imagenesGaleria[nuevo];
}
document.getElementById('lightbox-img').onclick = e => e.stopPropagation();

