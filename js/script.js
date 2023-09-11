let qrImg = document.querySelector(".img-qr"),
  qrText = document.querySelector(".text-qr"),
  qrGenerator = document.querySelector(".btn-qr"),
  qrDownload = document.querySelector(".btn-download");

// Função para gerar o QR Code
function generateQRCode() {
  if (qrText.value.length > 0) {
    let URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    qrImg.src = URL;
    qrImg.classList.add("active");
    // Verifica se o valor inserido é uma URL
    if (isValidURL(qrText.value)) {
      // Se for uma URL, define o nome do arquivo para um valor genérico
      qrDownload.download = "qrcode.png";
    } else {
      // Se não for uma URL, usa o valor inserido como o nome do arquivo
      qrDownload.download = `${qrText.value}qrcode.png`;
    }
  } else {
    showError();
  }
}

// Função para mostrar um erro
function showError() {
  qrText.classList.add("error");
  setTimeout(() => {
    qrText.classList.remove("error");
  }, 600);
}

// Função para verificar se uma string é uma URL válida
function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;  
  }
}

qrGenerator.addEventListener("click", generateQRCode);
