function gerarQRCode() {
    const carregando = document.querySelector('#carregando');
    const gerouQR = document.querySelector('#gerouQR');
    const textoUsuario = document.querySelector('#texto').value;
    const imagemQRCode = document.querySelector('#imagemQRCode');

    carregando.classList.remove("d-none");
    gerouQR.classList.add("d-none");

    const APIQRCode = `https://chart.googleapis.com/chart?cht=qr&chs=380x380&chl=${textoUsuario}`;
    imagemQRCode.src = APIQRCode;

    imagemQRCode.onload = () => {
        gerouQR.classList.remove("d-none");
        carregando.classList.add("d-none");
    };
}


async function baixarQRcode() {
  // Obtém a class HTML div
  const imagemQRCode = document.querySelector('#imagemQRCode').src;

  const getImg = await fetch(imagemQRCode);
  const blobImg = await getImg.blob();

  const url = window.URL.createObjectURL(blobImg);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'qr_code.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
