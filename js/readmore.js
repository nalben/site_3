const readmoreBlocks = document.querySelectorAll('.readmore__content');

readmoreBlocks.forEach(block => {
  const content = block.querySelector('p');
  const toggle = block.querySelector('h5');

  toggle.addEventListener('click', () => {
    block.classList.toggle('open');
    toggle.textContent = block.classList.contains('open') ? 'Скрыть' : 'Читать больше';
  });
});
