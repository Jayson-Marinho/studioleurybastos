
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("btnContato");

  botao.addEventListener("click", contato);
});

function contato() {
  window.open(
    'https://api.whatsapp.com/message/XVVFG32M2CH6D1?autoload=1&app_absent=0',
    '_blank'
  );
}

/* alert("Entre em contato pelo WhatsApp: (91) 99999-9999"); Número fictício */