const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

window.addEventListener('load', init, false);

function init() {
  let name = document.getElementById('inputName');
  let email = document.getElementById('inputEmail');
  let message = document.getElementById('txtMessage');
  let alert = document.getElementById('alertMsg');
  let sendBtn = document.getElementById('btnSend');

  let subEmail = document.getElementById('subscriptionEmail');
  let subBtn = document.getElementById('subscriptionBtn');
  let subAlert = document.getElementById('subAlert');

  sendBtn.onclick = function () {
    name = inputName.value;
    email = inputEmail.value;
    message = txtMessage.value;

    if (name === '' && email === '' && message === '') {
      alert.textContent = 'Debe llenar todos los campos';
      alert.classList.add('alertaRoja');
      alert.classList.remove('alertaVerde');
    } else if (name === '') {
      alert.textContent = 'El campo nombre esta vacío';
      alert.classList.add('alertaRoja');
      alert.classList.remove('alertaVerde');
    } else if (email === '') {
      alert.textContent = 'El campo email esta vacío';
      alert.classList.add('alertaRoja');
      alert.classList.remove('alertaVerde');
    } else if (emailRegex.test(email) === false) {
      alert.textContent = 'Email invalido';
      alert.classList.add('alertaRoja');
      alert.classList.remove('alertaVerde');
    } else if (message === '') {
      alert.textContent = 'El campo mensaje esta vacío';
      alert.classList.add('alertaRoja');
      alert.classList.remove('alertaVerde');
    } else {
      alert.textContent = 'Mensaje enviado';
      alert.classList.add('alertaVerde');
      alert.classList.remove('alertaRoja');

      emailjs.sendForm('service_jahqnxk', 'template_nh2b6o9', '#contactForm', '0jrVFsnut1H3Yw0FR');

      clean();
    }
  };

  subBtn.onclick = function () {
    subEmail = subscriptionEmail.value;
    if (email === '') {
      subAlert.textContent = 'El campo email esta vacio';
      subAlert.classList.add('alertaRoja');
      subAlert.classList.remove('alertaVerde');
    // } else if (emailRegex.test(email) === false) {
    //   subAlert.textContent = 'Email invalido';
    //   subAlert.classList.add('alertaRoja');
    //   subAlert.classList.remove('alertaVerde');
    } else {
      subAlert.textContent = 'Su registro fue exitoso';
      subAlert.classList.add('alertaRoja');
      subAlert.classList.remove('alertaVerde');

      emailjs.sendForm('service_jahqnxk', 'template_t88yabt', '#subForm', '0jrVFsnut1H3Yw0FR');
    }
  };

  function clean() {
    inputName.value = '';
    inputEmail.value = '';
    txtMessage.value = '';
  }
}
