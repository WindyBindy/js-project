(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-footer-open]'),
    closeModalBtn: document.querySelector('[data-modal-footer-close]'),
    modal: document.querySelector('[data-modal-footer]'),
  };


  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', backdropClose)

function backdropClose(event){
  console.log(event.target);
  console.log(event.currentTarget);
if(event.target === event.currentTarget){
  refs.modal.style.display = "none"
}
}

  document.addEventListener('keydown', (event) => {
    event.preventDefault()
    if (event.key === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
      toggleModal();
    }
  });


  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
