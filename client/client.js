const jsonHandler = require('./stats.js');

const handleResponse = async (response, parseResponse) => {
    const content = document.querySelector('#content');

    switch(response.status) {
      case 200: 
        content.innerHTML = `<b>Received Data</b>`;
        break;
      case 201:
        content.innerHTML = `<b>Hero Data Entered</b>`;
        break;
      case 204:
        content.innerHTML = `<b>Updated Hero Info</b>`;
        break;
      case 400: 
        content.innerHTML = `<b>Bad Request</b>`;
        break;
      case 404:
        content.innerHTML = `<b>Resource Not Found</b>`;
        break;
      case 500:
        content.innerHTML = `<b>Server Error</b>`;
        break;
      default: 
        content.innerHTML = `Error code not implemented by client.`;
        break;
    }

    if(parseResponse) {
      nameForm.querySelector('#heroNameField').value = parseResponse.heroName;
    }
  };

  const requestUpdate = async (userForm) => {

    const name = userForm.querySelector('#heroNameField')

    let response = await fetch('/getHero', {
      method: 'GET',
    });

    handleResponse(response, method === 'get');
  };

  const sendPost = async (nameForm) => {
    const nameAction = nameForm.getAttribute('action');
    const nameMethod = nameForm.getAttribute('method');
    
    const heroNameField = nameForm.querySelector('#heroNameField');
    const realNameField = nameForm.querySelector('#realNameField');

    const abilities = [];
    for(i = 0; i < 6; i++)
    {
      const currentCB = nameForm.querySelector(`#abilityCB${i}`);
      if(currentCB.checked){
        abilities.push(currentCB.value);
      }
    }

    const labels = [nameForm.querySelector('#dangerField').value,nameForm.querySelector('#freakField').value,nameForm.querySelector('#saviorField').value,nameForm.querySelector('#superiorField').value,nameForm.querySelector('#mundaneField').value];

    const conditions = [];
    for(i = 0; i < 6; i++)
    {
      const currentCB = nameForm.querySelector(`#conditionsCB${i}`);
      if(currentCB.checked){
        conditions.push(currentCB.value);
      }
    }

    const moves = [];
    for(i = 0; i < 6; i++)
    {
      const currentCB = nameForm.querySelector(`#moveCB${i}`);
      if(currentCB.checked){
        moves.push(currentCB.value);
      }
    }

    const formData = `heroName=${heroNameField.value}&realName=${realNameField.value}&abilities=${abilities}&labels=${labels}&conditions=${conditions}&moves=${moves}`;

    let response = await fetch(nameAction, {
      method: nameMethod,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
      },
      body: formData,
    });

    handleResponse(response);
  };

  const init = () => {
    const userForm = document.getElementById('getForm');
    const nameForm = document.getElementById('nameForm');

    const getHero = (e) => {
      e.preventDefault();
      requestUpdate(userForm);
      return false;
    }

    const addHero = (e) => {
      e.preventDefault();
      sendPost(nameForm);
      return false;
    }

    userForm.addEventListener('submit', getHero);
    nameForm.addEventListener('submit', addHero);
  };

  window.onload = init;