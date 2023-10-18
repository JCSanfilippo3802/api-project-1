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

    let obj = await response.json()

    nameForm.querySelector('#heroNameField').value = obj.heroName;
    nameForm.querySelector('#realNameField').value = obj.realName;

    for(i = 0; i < 6; i++)
    {
      if(obj.abilities.includes(i))
      {
        nameForm.querySelector(`#abilityCB${i}`).checked = true;
      }
      else{
        nameForm.querySelector(`#abilityCB${i}`),checked = false;
      }
    }

    const labels = obj.labels.split(',');

    nameForm.querySelector('#dangerField').value = labels[0];
    nameForm.querySelector('#freakField').value = labels[1];
    nameForm.querySelector('#saviorField').value = labels[2];
    nameForm.querySelector('#superiorField').value = labels[3];
    nameForm.querySelector('#mundaneField').value = labels[4];

    for(i = 0; i < 4; i++)
    {
      if(obj.conditions.includes(i)){
        nameForm.querySelector(`#conditionCB${i}`).checked = true;
      }
      else{
        nameForm.querySelector(`#conditionCB${i}`).checked = false;
      }
    }
    
    for(i = 0; i < 6; i++)
    {
      if(obj.moves.includes(i)){
        nameForm.querySelector(`#moveCB${i}`).checked = true;
      }
      else{
        nameForm.querySelector(`#moveCB${i}`).checked = false;
      }
    }

  }
};

const requestUpdate = async (userForm) => {

  let response = await fetch(`/getHero?name=${userForm.querySelector('#heroNameField').value}`, {
    method: 'GET',
  });

  handleResponse(response, response.status == 200);
};

const sendPost = async (nameForm) => {
  const nameAction = nameForm.getAttribute('action');
  const nameMethod = nameForm.getAttribute('method');
  
  const heroNameField = nameForm.querySelector('#heroNameField');
  const realNameField = nameForm.querySelector('#realNameField');

  const abilities = [];
  for(i = 0; i < 6; i++)
  {
    if(nameForm.querySelector(`#abilityCB${i}`).checked){
      abilities.push(nameForm.querySelector(`#abilityCB${i}`).value);
    }
  }

  const labels = [nameForm.querySelector('#dangerField').value,nameForm.querySelector('#freakField').value,nameForm.querySelector('#saviorField').value,nameForm.querySelector('#superiorField').value,nameForm.querySelector('#mundaneField').value];

  const conditions = [];
  for(i = 0; i < 4; i++)
  {
    if(nameForm.querySelector(`#conditionCB${i}`).checked){
      conditions.push(nameForm.querySelector(`#conditionCB${i}`).value);
    }
  }

  const moves = [];
  for(i = 0; i < 6; i++)
  {
    if(nameForm.querySelector(`#moveCB${i}`).checked){
      moves.push(nameForm.querySelector(`#moveCB${i}`).value);
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