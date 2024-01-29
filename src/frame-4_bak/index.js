
const sendButton = document.querySelector("#send");
const form = document.querySelector("form");
const messageInput = document.querySelector("#text-to-send");
const textToShow = document.getElementById('text-to-show');


window.addEventListener("message", (event) => {
  textToShow.innerHTML = event.data;
});

sendButton.onclick = (event) => {
  const data = new FormData(form);
  for (const entry of data) {
    window.parent.frames[`frame${entry[1]}`].postMessage(messageInput.value, '');
  }
};
