async function initScanner() {
  const capture = document.createElement("video");
  const capture_preview = document.querySelector("canvas#window_capture_preview");
  const capture_preview_context = capture_preview.getContext("2d");

  navigator.mediaDevices.getUserMedia({video: true}).then((capture_source) => {
    capture.src = capture_source;
    capture.ready = true;
    capture_preview.requestAnimationFrame(updateScanner);
  });
  
}

async function updateScanner() {
  capture_preview_context.drawImage(capture, 0, 0);
  await detectBarcode;
  capture_preview.requestAnimationFrame(updateScanner);
}
async function detectBarcode() {

}

window.onload = initScanner;