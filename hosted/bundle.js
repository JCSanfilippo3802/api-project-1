/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/client.js":
/*!**************************!*\
  !*** ./client/client.js ***!
  \**************************/
/***/ (() => {

eval("const handleResponse = async (response, parseResponse) => {\r\n  const content = document.querySelector('#content');\r\n\r\n  switch(response.status) {\r\n    case 200: \r\n      content.innerHTML = `<b>Received Data</b>`;\r\n      break;\r\n    case 201:\r\n      content.innerHTML = `<b>Hero Data Entered</b>`;\r\n      break;\r\n    case 204:\r\n      content.innerHTML = `<b>Updated Hero Info</b>`;\r\n      break;\r\n    case 400: \r\n      content.innerHTML = `<b>Bad Request</b>`;\r\n      break;\r\n    case 404:\r\n      content.innerHTML = `<b>Resource Not Found</b>`;\r\n      break;\r\n    case 500:\r\n      content.innerHTML = `<b>Server Error</b>`;\r\n      break;\r\n    default: \r\n      content.innerHTML = `Error code not implemented by client.`;\r\n      break;\r\n  }\r\n\r\n  if(parseResponse) {\r\n\r\n    let obj = await response.json()\r\n\r\n    nameForm.querySelector('#heroNameField').value = obj.heroName;\r\n    nameForm.querySelector('#realNameField').value = obj.realName;\r\n\r\n    for(i = 0; i < 6; i++)\r\n    {\r\n      if(obj.abilities.includes(i))\r\n      {\r\n        nameForm.querySelector(`#abilityCB${i}`).checked = true;\r\n      }\r\n      else{\r\n        nameForm.querySelector(`#abilityCB${i}`),checked = false;\r\n      }\r\n    }\r\n\r\n    const labels = obj.labels.split(',');\r\n\r\n    nameForm.querySelector('#dangerField').value = labels[0];\r\n    nameForm.querySelector('#freakField').value = labels[1];\r\n    nameForm.querySelector('#saviorField').value = labels[2];\r\n    nameForm.querySelector('#superiorField').value = labels[3];\r\n    nameForm.querySelector('#mundaneField').value = labels[4];\r\n\r\n    for(i = 0; i < 4; i++)\r\n    {\r\n      if(obj.conditions.includes(i)){\r\n        nameForm.querySelector(`#conditionCB${i}`).checked = true;\r\n      }\r\n      else{\r\n        nameForm.querySelector(`#conditionCB${i}`).checked = false;\r\n      }\r\n    }\r\n    \r\n    for(i = 0; i < 6; i++)\r\n    {\r\n      if(obj.moves.includes(i)){\r\n        nameForm.querySelector(`#moveCB${i}`).checked = true;\r\n      }\r\n      else{\r\n        nameForm.querySelector(`#moveCB${i}`).checked = false;\r\n      }\r\n    }\r\n\r\n  }\r\n};\r\n\r\nconst requestUpdate = async (userForm) => {\r\n\r\n  let response = await fetch(`/getHero?name=${userForm.querySelector('#heroNameField').value}`, {\r\n    method: 'GET',\r\n  });\r\n\r\n  handleResponse(response, response.status == 200);\r\n};\r\n\r\nconst sendPost = async (nameForm) => {\r\n  const nameAction = nameForm.getAttribute('action');\r\n  const nameMethod = nameForm.getAttribute('method');\r\n  \r\n  const heroNameField = nameForm.querySelector('#heroNameField');\r\n  const realNameField = nameForm.querySelector('#realNameField');\r\n\r\n  const abilities = [];\r\n  for(i = 0; i < 6; i++)\r\n  {\r\n    if(nameForm.querySelector(`#abilityCB${i}`).checked){\r\n      abilities.push(nameForm.querySelector(`#abilityCB${i}`).value);\r\n    }\r\n  }\r\n\r\n  const labels = [nameForm.querySelector('#dangerField').value,nameForm.querySelector('#freakField').value,nameForm.querySelector('#saviorField').value,nameForm.querySelector('#superiorField').value,nameForm.querySelector('#mundaneField').value];\r\n\r\n  const conditions = [];\r\n  for(i = 0; i < 4; i++)\r\n  {\r\n    if(nameForm.querySelector(`#conditionCB${i}`).checked){\r\n      conditions.push(nameForm.querySelector(`#conditionCB${i}`).value);\r\n    }\r\n  }\r\n\r\n  const moves = [];\r\n  for(i = 0; i < 6; i++)\r\n  {\r\n    if(nameForm.querySelector(`#moveCB${i}`).checked){\r\n      moves.push(nameForm.querySelector(`#moveCB${i}`).value);\r\n    }\r\n  }\r\n\r\n  const formData = `heroName=${heroNameField.value}&realName=${realNameField.value}&abilities=${abilities}&labels=${labels}&conditions=${conditions}&moves=${moves}`;\r\n\r\n  let response = await fetch(nameAction, {\r\n    method: nameMethod,\r\n    headers: {\r\n      'Content-Type': 'application/x-www-form-urlencoded',\r\n      'Accept': 'application/json',\r\n    },\r\n    body: formData,\r\n  });\r\n\r\n  handleResponse(response);\r\n};\r\n\r\nconst init = () => {\r\n  const userForm = document.getElementById('getForm');\r\n  const nameForm = document.getElementById('nameForm');\r\n\r\n  const getHero = (e) => {\r\n    e.preventDefault();\r\n    requestUpdate(userForm);\r\n    return false;\r\n  }\r\n\r\n  const addHero = (e) => {\r\n    e.preventDefault();\r\n    sendPost(nameForm);\r\n    return false;\r\n  }\r\n\r\n  userForm.addEventListener('submit', getHero);\r\n  nameForm.addEventListener('submit', addHero);\r\n};\r\n\r\nwindow.onload = init;\n\n//# sourceURL=webpack://api-project-1/./client/client.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/client.js"]();
/******/ 	
/******/ })()
;