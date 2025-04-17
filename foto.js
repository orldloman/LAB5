const albumView = document.getElementById('album-view');
const modalView = document.getElementById('modal-view');

PHOTO_LIST.forEach(photoSrc => {
  const img = document.createElement('img');
  img.src = photoSrc;
  img.addEventListener('click', () => showModal(photoSrc));
  albumView.appendChild(img);
});

function showModal(src) {
  const modalImg = document.createElement('img');
  modalImg.src = src;
  modalView.innerHTML = ''; // Limpiamos por si ya había una imagen
  modalView.appendChild(modalImg);

  modalView.style.display = 'flex'; // Aquí lo mostramos
  modalView.style.top = window.pageYOffset + 'px';
  document.body.classList.add('no-scroll');
}

// Cierra el modal al hacer clic en él
modalView.addEventListener('click', () => {
  modalView.style.display = 'none';
  modalView.innerHTML = '';
  document.body.classList.remove('no-scroll');
});
