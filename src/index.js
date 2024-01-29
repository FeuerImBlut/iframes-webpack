import "/style.css";

let iframes = Array.from(document.querySelectorAll("iframe"));

const receiveMessageHandler = (ev) => {
  const foundsIframeIndex = iframes.findIndex((el, index) => {
    return el.contentWindow === ev.source;
  });
  if (foundsIframeIndex === -1) return
  iframes.splice(foundsIframeIndex, 1);

  if (!iframes.length) {
    document.querySelector(".load-info").classList.remove("hidden");
  }
};

window.addEventListener("message", receiveMessageHandler, false);

[1, 2, 3, 4].forEach((num) => {
  setTimeout(() => {
    const iframe = document.querySelector(`iframe[name='frame${num}']`);
    iframe.src = `./frames/frame-${num}/index.html`;
  }, num * 1000);
});
