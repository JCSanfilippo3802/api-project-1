const heroes = {};

const respondJSON = (request, response, status, object) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  response.writeHead(status, headers);
  response.write(JSON.stringify(object));
  response.end();
};

const respondJSONMeta = (request, response, status) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  response.writeHead(status, headers);
  response.end();
};

const getHero = (request, response, params) => {
  
  if (!heroes[params.name]) {
    const responseJSON = {
      message: 'This hero is not in the database.',
      id: 'noHeror',
    };

    return respondJSON(request, response, 404, responseJSON);
  }

  const responseJSON = {
    "heroName": heroes[params.name].heroName,
    "realName": heroes[params.name].realName,
    "abilities": heroes[params.name].abilities,
    "labels": heroes[params.name].labels,
    "conditions": heroes[params.name].conditions,
    "moves": heroes[params.name].moves,
  };

  return respondJSON(request, response, 200, responseJSON);
};

const getHeroesMeta = (request, response) => respondJSONMeta(request, response, 200);

const addHero = (request, response, data) => {
  if (!data.heroName || !data.realName) {
    const responseJSON = {
      message: 'Please fill out all data fields.',
      id: 'missingData',
    };

    return respondJSON(request, response, 400, responseJSON);
  }

  const newHero = {
    "heroName": data.heroName,
    "realName": data.realName,
    "abilities": data.abilities,
    "labels": data.labels,
    "conditions": data.conditions,
    "moves": data.moves,

    // Good practice
    createdAt: Date.now(),
    updatedOn: Date.now()
  };

  if (heroes[newHero.heroName]) {
    heroes[newHero.heroName].realName = data.realName;
    heroes[newHero.heroName].playbook = data.playbook;
    heroes[newHero.heroName].abilities = data.abilities;
    heroes[newHero.heroName].labels = data.labels;
    heroes[newHero.heroName].conditions = data.conditions;
    heroes[newHero.heroName].moves = data.moves;
    // Good practice
    heroes[newHero.heroName].updatedOn = Date.now();
    return respondJSON(request, response, 204, newHero);
  }
  heroes[newHero.heroName] = newHero;
  return respondJSON(request, response, 201, newHero);
};

const notFound = (request, response) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  respondJSON(request, response, 404, responseJSON);
};

const notFoundMeta = (request, response) => {
  respondJSONMeta(request, response, 404);
};

module.exports = {
  getHero,
  getHeroesMeta,
  addHero,
  notFound,
  notFoundMeta,
};
