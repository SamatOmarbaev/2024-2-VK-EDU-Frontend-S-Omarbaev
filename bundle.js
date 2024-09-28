/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var messagesDiv = document.getElementById('messages');\n  var messageInput = document.getElementById('message-input');\n  var sendButton = document.getElementById('send-button');\n  var username = \"Вы\";\n  var doneCheck = \"<span class=\\\"material-symbols-outlined\\\">done_all</span>\";\n  function displayMessages() {\n    messagesDiv.innerHTML = '';\n    var messages = JSON.parse(localStorage.getItem('messages')) || [];\n    messages.forEach(function (msg) {\n      var messageElement = document.createElement('div');\n      var messageElementText = document.createElement('p');\n      var messageElementTime = document.createElement('span');\n      messageElement.classList.add('message');\n      messageElementTime.classList.add('time');\n      messageElement.classList.add(msg.name === username ? 'user' : 'other');\n      messageElementText.textContent = \"\".concat(msg.text);\n      messageElementTime.textContent = \"\".concat(msg.time);\n      if (msg.name === username) {\n        messageElementTime.innerHTML += \" \".concat(doneCheck);\n      }\n      messageElement.appendChild(messageElementText);\n      messageElement.appendChild(messageElementTime);\n      messagesDiv.appendChild(messageElement);\n    });\n    messagesDiv.scrollTop = messagesDiv.scrollHeight;\n  }\n  function saveMessage(text) {\n    var messages = JSON.parse(localStorage.getItem('messages')) || [];\n    var newMessage = {\n      name: username,\n      text: text,\n      time: new Date().toLocaleTimeString([\"ru-RU\"], {\n        hour: '2-digit',\n        minute: '2-digit'\n      })\n    };\n    messages.push(newMessage);\n    localStorage.setItem('messages', JSON.stringify(messages));\n  }\n  sendButton.addEventListener('click', function () {\n    if (messageInput.value) {\n      saveMessage(messageInput.value);\n      displayMessages();\n      messageInput.value = '';\n      sendButton.style.display = 'none';\n    }\n  });\n  messageInput.addEventListener('input', function () {\n    if (messageInput.value) {\n      sendButton.style.display = 'block';\n    } else {\n      sendButton.style.display = 'none';\n    }\n  });\n  messageInput.addEventListener('keypress', function (e) {\n    if (e.key === 'Enter' && messageInput.value) {\n      saveMessage(messageInput.value);\n      displayMessages();\n      messageInput.value = '';\n      e.preventDefault();\n    }\n  });\n  displayMessages();\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });