const DATABASE = [
  {
    name: 'Ibuprofeno',
    category: 'adult',
    sideEffects: ['estreñimiento', 'mareos', 'nerviosismo'],
    duringPregnancy: false,
    duringLactancy: true,
    imgSource: 'Imagenes/app/ibu1.jpg',
  },
  {
    name: 'Ibuprofeno',
    category: 'kid',
    sideEffects: ['estreñimiento', 'mareos', 'nerviosismo'],
    duringPregnancy: false,
    duringLactancy: false,
    imgSource: 'Imagenes/app/ibu2.jpg',
  },
  {
    name: 'Ibuprofeno',
    category: 'adult',
    sideEffects: ['estreñimiento', 'mareos', 'nerviosismo'],
    duringPregnancy: true,
    duringLactancy: false,
    imgSource: 'Imagenes/app/ibu3.jpg',
  },
  {
    name: 'Gravol',
    category: 'adult',
    sideEffects: ['Somnolencia', 'Dolor de Cabeza', 'Vision borrosa'],
    duringPregnancy: true,
    duringLactancy: true,
    imgSource: 'Imagenes/app/gravol-img.jpg',
  },
  {
    name: 'Panadol',
    category: 'kid',
    sideEffects: ['Dolor de Cabeza', '', ''],
    duringPregnancy: false,
    duringLactancy: false,
    imgSource: 'Imagenes/app/panadol1.jpg',
  },
  {
    name: 'Panadol',
    category: 'adult',
    sideEffects: ['Nauseas', '', ''],
    duringPregnancy: true,
    duringLactancy: false,
    imgSource: 'Imagenes/app/panadol2.jpg',
  },
  {
    name: 'Panadol',
    category: 'adult',
    sideEffects: ['Nauseas', '', ''],
    duringPregnancy: false,
    duringLactancy: true,
    imgSource: 'Imagenes/app/panadol3.jpg',
  },
];

const ALLOW_PREG_MSG = 'Puede ser utilizado durante el embarazo';
const NO_ALLOW_PREG_MSG = 'No puede ser utilizado durante el embarazo';
const ALLOW_LAC_MSG = 'Puede ser utilizado durante la lactancia';
const NO_ALLOW_LAC_MSG = 'No Puede ser utilizado durante la lactancia';

function redirect(redirectPage) {
  window.location.href = redirectPage;
}

function search() {
  const searchTerm = document.getElementById('search-bar').value;
  let option = document.getElementById('dropMenu').value;
  const resultSection = document.getElementById('resultSection');
  let errorMsg = document.getElementById('errorMsg');
  document.getElementById('errorMsg').innerHTML = '';
  let cont = 0;

  let results = document.createElement('div');
  results.id = 'search-response';

  if (searchTerm === '' || searchTerm === undefined || option === '' || option === undefined) {
    // Empty error handler
    errorMsg.innerHTML = 'Porfavor ingrese un termino de busqueda';
  } else {
    // Perform the search - simple loop since is mock data
    DATABASE.forEach((data) => {
      //console.log(`data: ${JSON.stringify(data)}`);
      if (
        (data.name.toLowerCase() === searchTerm.toLowerCase() && data.category === option) ||
        (data.name.toLowerCase() === searchTerm.toLowerCase() && 'all' === option)
      ) {
        // Build the html card dynamic
        let responseCard = document.createElement('div');
        responseCard.id = 'response-card';
        responseCard.className = 'center-hor card';
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        let cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';
        let responseName = document.createElement('h5');
        responseName.id = 'response-name';
        let responseImg = document.createElement('img');
        responseImg.id = 'response-img';
        responseImg.className = 'rounded mx-auto d-block';
        let responseSideEffect = document.createElement('p');
        responseSideEffect.id = 'response-side-effects';
        let responsePregnancy = document.createElement('p');
        responsePregnancy.id = 'response-pregnancy';
        let responseLactancy = document.createElement('p');
        responseLactancy.id = 'response-lactancy';

        // Create the elements tree
        cardHeader.appendChild(responseName);
        cardBody.appendChild(cardHeader);
        cardBody.appendChild(responseImg);
        cardBody.appendChild(responseSideEffect);
        cardBody.appendChild(responsePregnancy);
        cardBody.appendChild(responseLactancy);
        responseCard.appendChild(cardBody);

        // Put the corresponding data
        responseName.innerHTML = data.name;
        responseSideEffect.innerHTML = '<b>Efectos Secundarios: </b>' + data.sideEffects;
        responsePregnancy.innerHTML = data.duringPregnancy ? ALLOW_PREG_MSG : NO_ALLOW_PREG_MSG;
        responseLactancy.innerHTML = data.duringLactancy ? ALLOW_LAC_MSG : NO_ALLOW_LAC_MSG;
        responseImg.setAttribute('src', data.imgSource);

        // Include the card to the placeholder
        results.append(responseCard);
        cont++;
      }
    });

    //Include the results to the section
    resultSection.append(results);

    if (cont === 0) {
      //Error not found
      errorMsg.innerHTML = 'En este momento no contamos con este medicamento';
    }
  }
}

// Clear the search fields and data
function clearSearch() {
  searchTerm = document.getElementById('search-bar').value = '';
  document.getElementById('search-response').remove();
  document.getElementById('errorMsg').innerHTML = '';
}
