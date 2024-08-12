const elements = document.querySelectorAll('.item');

elements.forEach((element) => {
  element.addEventListener('click', () => {
removeOpen();
    // element.classList.add('open');
    element.classList.toggle('open');
  });
});

function removeOpen() {
elements.forEach((element) => {
element.classList.remove('open');
});
}
