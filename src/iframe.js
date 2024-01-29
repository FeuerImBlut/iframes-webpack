window.addEventListener("message", (event) => {
  textToShow.innerHTML = event.data;
});

window.addEventListener('load', (event) => {
  document.querySelector('.hidden').classList.remove('hidden');
  window.parent.postMessage('I am loaded', 'http://localhost:4200/');
})