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

eval("const handleResponse = async (response, parseResponse) => {\r\n    const content = document.querySelector('#content');\r\n\r\n    switch(response.status) {\r\n      case 200: \r\n        content.innerHTML = `<b>Success</b>`;\r\n        break;\r\n      case 201:\r\n        content.innerHTML = `<b>Created</b>`;\r\n        break;\r\n      case 204:\r\n        content.innerHTML = `<b>Updated</b>`;\r\n        break;\r\n      case 400: \r\n        content.innerHTML = `<b>Bad Request</b>`;\r\n        break;\r\n      case 404:\r\n        content.innerHTML = `<b>Resource Not Found</b>`;\r\n        break;\r\n      case 500:\r\n        content.innerHTML = `<b>Server Error</b>`;\r\n        break;\r\n      default: \r\n        content.innerHTML = `Error code not implemented by client.`;\r\n        break;\r\n    }\r\n\r\n    if(parseResponse) {\r\n      let obj = await response.json();\r\n\r\n      let jsonString = JSON.stringify(obj);\r\n      content.innerHTML += `<p>${jsonString}</p>`;\r\n    }\r\n  };\r\n\r\n  const requestUpdate = async (userForm) => {\r\n    \r\n    const url = userForm.querySelector('#urlField').value;\r\n    const method = userForm.querySelector('#methodSelect').value;\r\n\r\n    let response = await fetch(url, {\r\n      method\r\n    });\r\n\r\n    handleResponse(response, method === 'get');\r\n  };\r\n\r\n  const sendPost = async (nameForm) => {\r\n    const nameAction = nameForm.getAttribute('action');\r\n    const nameMethod = nameForm.getAttribute('method');\r\n    \r\n    const heroNameField = nameForm.querySelector('#heroNameField');\r\n    const realNameField = nameForm.querySelector('#realNameField');\r\n    const playbookField = nameForm.querySelector('#playbookSelector');\r\n\r\n    const abilities = [];\r\n    for(i = 0; i < 6; i++)\r\n    {\r\n      const currentCB = nameForm.querySelector(`#abilityCB${i}`);\r\n      if(currentCB.checked){\r\n        abilities.push(currentCB.value);\r\n      }\r\n    }\r\n\r\n    const labels = [nameForm.querySelector('#dangerField').value,nameForm.querySelector('#freakField').value,nameForm.querySelector('#saviorField').value,nameForm.querySelector('#superiorField').value,nameForm.querySelector('#mundaneField').value];\r\n\r\n    const conditions = [];\r\n    for(i = 0; i < 6; i++)\r\n    {\r\n      const currentCB = nameForm.querySelector(`#conditionsCB${i}`);\r\n      if(currentCB.checked){\r\n        conditions.push(currentCB.value);\r\n      }\r\n    }\r\n\r\n    const moves = [];\r\n    for(i = 0; i < 6; i++)\r\n    {\r\n      const currentCB = nameForm.querySelector(`#moveCB${i}`);\r\n      if(currentCB.checked){\r\n        moves.push(currentCB.value);\r\n      }\r\n    }\r\n\r\n    const formData = `name=${nameField.value}&age=${ageField.value}&playbook=${playbookField.value}&abilities=${abilities}&labels=${labels}&conditions=${conditions}&moves=${moves}`;\r\n\r\n    let response = await fetch(nameAction, {\r\n      method: nameMethod,\r\n      headers: {\r\n        'Content-Type': 'application/x-www-form-urlencoded',\r\n        'Accept': 'application/json',\r\n      },\r\n      body: formData,\r\n    });\r\n\r\n    handleResponse(response);\r\n  };\r\n\r\n  const init = () => {\r\n    const userForm = document.querySelector('#userForm');\r\n    const nameForm = document.querySelector('#nameForm');\r\n\r\n    const getCharacters = (e) => {\r\n      e.preventDefault();\r\n      requestUpdate(userForm);\r\n      return false;\r\n    }\r\n\r\n    const addCharacter = (e) => {\r\n      e.preventDefault();\r\n      sendPost(nameForm);\r\n      return false;\r\n    }\r\n\r\n    userForm.addEventListener('submit', getCharacters);\r\n    nameForm.addEventListener('submit', addCharacter);\r\n  };\r\n\r\n  window.onload = init;\n\n//# sourceURL=webpack://api-project-1/./client/client.js?");

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