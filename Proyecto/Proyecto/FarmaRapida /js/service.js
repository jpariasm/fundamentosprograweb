const LANG = {
  es: {
    logo: 'FarmaRapida',
    app: 'Buscador',
    logout: 'Salir',
    dropdown: 'Idioma',
    'dropdown-es': 'Español',
    'dropdown-en': 'Ingles',
    gallery: 'Galeria',
    ubication: 'Ubicacion',
    contact: 'Contacto',
    history: 'Historia',
    mission: 'Mision',
    vision: 'Vision',
  },
  en: {
    logo: 'FarmaRapida',
    app: 'Search',
    logout: 'Logout',
    dropdown: 'Language',
    'dropdown-es': 'Spanish',
    'dropdown-en': 'English',
    gallery: 'Gallery',
    ubication: 'Ubication',
    contact: 'Contact us',
    history: 'Historia',
    mission: 'Mission',
    vision: 'Vision',
  },
};

const PROV = [
  {
    name: 'Alajuela',
    cant: [
      { name: '-', address: '' },
      { name: 'Central', address: 'Plaza Real Local 20' },
      { name: 'Grecia', address: '50 Norte de la terminal de buses TUAN' },
      { name: 'SanRamon', address: 'Plaza Comercial local 5' },
    ],
  },
  {
    name: 'Cartago',
    cant: [
      { name: '-', address: '' },
      { name: 'Central', address: 'Proximamente' },
    ],
  },
  {
    name: 'Guanacaste',
    cant: [
      { name: '-', address: '' },
      { name: 'Central', address: 'Proximamente' },
    ],
  },
  {
    name: 'Heredia',
    cant: [
      { name: '-', address: '' },
      { name: 'Central', address: 'Mall Oxigeno local 40' },
    ],
  },
  {
    name: 'Limon',
    cant: [
      { name: '-', address: '' },
      { name: 'Central', address: 'Proximamente' },
    ],
  },
  {
    name: 'SanJose',
    cant: [
      { name: '-', address: '' },
      { name: 'Central', address: 'Proximamente' },
    ],
  },
];

let CURRENT_CANT = [];

function redirect(redirectPage) {
  window.location.href = redirectPage;
}

function login() {
  const username = document.getElementById('in-txt-user').value;
  const password = document.getElementById('in-txt-pass').value;
  if (username === 'cenfo' && password === '123') {
    window.location.href = 'landing.html';
  }
}

function changeLang(lang) {
  document.getElementById('logo').innerHTML = LANG[lang].logo;
  document.getElementById('app').innerHTML = LANG[lang].app;
  document.getElementById('logout').innerHTML = LANG[lang].logout;
  document.getElementById('dropdown').innerHTML = LANG[lang].dropdown;
  document.getElementById('gallery').innerHTML = LANG[lang].gallery;
  document.getElementById('nav-ubication').innerHTML = LANG[lang].ubication;
  document.getElementById('nav-contact').innerHTML = LANG[lang].contact;
  document.getElementById('history').innerHTML = LANG[lang].history;
}

function selectProvince() {
  const select = document.getElementById('prov');
  const option = select.options[select.selectedIndex].value;

  //Clean up previous selection
  cantSelect.length = 0;
  addressPlaceholder.innerHTML = '';

  if (PROV[option]) {
    const cants = PROV[option].cant;
    cants.map((elem, i) => {
      let opt = document.createElement('option');
      opt.value = i;
      opt.innerHTML = elem.name;
      cantSelect.append(opt);
    });
    CURRENT_CANT = cants;
  }
}

function selectCant() {
  console.log(CURRENT_CANT);
  const select = document.getElementById('cant');
  const option = select.options[select.selectedIndex].value;
  addressPlaceholder.innerHTML = CURRENT_CANT[option].address;
}

function showOptions(evt, info) {
  let i, tabContent, tabLinks;

  tabContent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  tabLinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' active', '');
  }

  document.getElementById(info).style.display = 'block';
  evt.currentTarget.className += ' active';
}

function sendSurForm() {
  let name = document.getElementById('r1').value;

  let buyWithUs = '';
  document.getElementsByName('opinion').forEach((radio) => {
    if (radio.checked) {
      console.log(radio.value);
      buyWithUs = radio.value;
    }
  });

  if (name && buyWithUs) {
    console.log('Form enviado exitosamente');

    document.getElementById('surResult').innerHTML = '¡Gracias por sus respuestas!';
  }
}

function cleanSurForm() {
  document.getElementById('r1').value = '';

  document.getElementById('radio1').checked = false;
  document.getElementById('radio2').checked = false;
  document.getElementById('radio').checked = false;
  document.getElementById('youtube').checked = false;
  document.getElementById('facebook').checked = false;
  document.getElementById('television').checked = false;
  document.getElementById('otro').checked = false;
  document.getElementById('surResult').innerHTML = '';
}

//Initialize data
const provSelect = document.getElementById('prov');
const cantSelect = document.getElementById('cant');
const addressPlaceholder = document.getElementById('address');

PROV.map((elem, i) => {
  let opt = document.createElement('option');
  opt.value = i;
  opt.innerHTML = elem.name;
  provSelect.append(opt);
});
