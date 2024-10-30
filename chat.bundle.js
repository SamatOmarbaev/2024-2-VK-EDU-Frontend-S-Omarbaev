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
/******/ 	return __webpack_require__(__webpack_require__.s = "./chat/chat.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./components/chatWindow/chatWindow.css":
/*!*************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./components/chatWindow/chatWindow.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".chat-container {\n    display: flex;\n    flex-direction: column;\n    height: calc(100vh - 120px);\n    justify-content: flex-end;\n}\n\n.messages-container {\n    flex-grow: 1;\n    padding: 20px;\n    overflow-y: auto;\n    background: #eaeaea;\n    position: relative;\n}\n\n/* message list */\n.messages-list {\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n}\n\n/* message */\n.message-item {\n    background-color: #f1f1d6;\n    max-width: 60%;\n    margin-bottom: 10px;\n    padding: 10px 40px 10px 15px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n    position: relative;\n    word-wrap: break-word;\n    align-self: flex-start;\n    border-radius: 10px;\n    min-width: 60px;\n    transition: opacity 0.3s ease-in-out;\n}\n\n.message-item.sent {\n    align-self: flex-end;\n    background-color: #dcf8c6;\n}\n\n.message-item.received {\n    align-self: flex-end;\n    background-color: #fff;\n}\n\n.message-item .time {\n    font-size: 10px;\n    color: #999;\n    position: absolute;\n    bottom: 5px;\n    right: 10px;\n}\n\n.message-item .material-symbols-outlined {\n    font-size: 16px;\n    vertical-align: middle;\n    margin-left: 5px;\n}\n\n/* header */\n.header-avatar {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n}\n\n.header-avatar_photo {\n    border-radius: 50%;\n    height: 40px;\n    width: 40px;\n    min-width: 40px;\n    display: flex;\n}\n\n.header-avatar_title {\n    font-size: 22px;\n    font-weight: 500;\n}\n\n.header-search_more {\n    display: flex;\n    align-items: center;\n    gap: 2rem;\n}\n\n.header-search_more span:hover {\n    transform: scale(1.1);\n    transition: transform 0.2s;\n}\n\n/* footer */\n.footer {\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n    height: 60px;\n}\n\n.message-form {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    padding: 10px;\n    background-color: #fff;\n    border-top: 1px solid #d8d8d8;\n}\n\n#message-input {\n    width: 100%;\n    border: none;\n    padding: 10px;\n    font-size: 18px;\n\n    &:focus {\n        outline: none;\n    }\n}\n\n#send-button:hover {\n    transform: scale(1.1);\n    transition: transform 0.2s;\n}\n\n#back-btn {\n    height: 40px;\n    width: 40px;\n    padding-left: 8px;\n    border-radius: 50%;\n    transition: all .3s ease-in-out;\n}\n#back-btn:hover {\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\n    height: 40px;\n    width: 40px;\n    padding-left: 8px;\n    border-radius: 50%;\n}\n\n@media (max-width: 768px) {\n    .message-item.sent {\n        align-self: flex-end;\n    }\n    \n    .message-item.received {\n        align-self: flex-start;\n    }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./chat/chat.js":
/*!**********************!*\
  !*** ./chat/chat.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_chatWindow_chatWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/chatWindow/chatWindow.js */ "./components/chatWindow/chatWindow.js");


Object(_components_chatWindow_chatWindow_js__WEBPACK_IMPORTED_MODULE_1__["initializeChatWindow"])();

/***/ }),

/***/ "./components/chatWindow/chatWindow.css":
/*!**********************************************!*\
  !*** ./components/chatWindow/chatWindow.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./chatWindow.css */ "../node_modules/css-loader/dist/cjs.js!./components/chatWindow/chatWindow.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./components/chatWindow/chatWindow.js":
/*!*********************************************!*\
  !*** ./components/chatWindow/chatWindow.js ***!
  \*********************************************/
/*! exports provided: initializeChatWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeChatWindow", function() { return initializeChatWindow; });
/* harmony import */ var _chatWindow_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatWindow.css */ "./components/chatWindow/chatWindow.css");
/* harmony import */ var _chatWindow_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chatWindow_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/storage.js */ "./utils/storage.js");


var messageInput = document.getElementById('message-input');
var sendMessage = function sendMessage(chatId, messagesList) {
  var messageText = messageInput.value.trim();
  if (messageText) {
    var message = Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_1__["createMessageObject"])(messageText, 'sent');
    Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_1__["saveMessage"])(chatId, message);
    addMessageToUI(message, messagesList);
    messageInput.value = '';
  }
};
var initializeChatWindow = function initializeChatWindow() {
  var urlParams = new URLSearchParams(window.location.search);
  var chatId = urlParams.get('id');
  var form = document.querySelector('.message-form');
  var sendButton = document.getElementById('send-button');
  var messagesList = document.querySelector('.messages-list');
  messageInput.focus();
  fillHeader(chatId);
  document.addEventListener('DOMContentLoaded', function () {
    return loadMessages(chatId, messagesList);
  });
  sendButton.addEventListener('click', function (event) {
    event.preventDefault();
    sendMessage(chatId, messagesList);
  });
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var messageText = input.value.trim();
    if (messageText) {
      var message = Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_1__["createMessageObject"])(messageText, 'sent');
      Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_1__["saveMessage"])(chatId, message);
      addMessageToUI(message, messagesList);
      input.value = '';
    }
  });
  messageInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage(chatId, messagesList);
    }
  });
  var simulatedReceivedMessageSent = false;
  setTimeout(function () {
    if (!simulatedReceivedMessageSent) {
      simulateReceivedMessage(chatId, 'Привет) как дела?', messagesList);
      simulatedReceivedMessageSent = true;
    }
  }, 5000);
};
var fillHeader = function fillHeader(chatId) {
  var header = document.querySelector('.header');
  var people = Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_1__["loadPeople"])();
  var person = people.find(function (p) {
    return p.id === chatId;
  });
  if (!person) {
    console.error('Пользователь не найден:', chatId);
    return;
  }
  header.innerHTML = "\n            <button id=\"back-btn\" class=\"material-symbols-outlined\">arrow_back_ios</button>\n            <div class=\"header-avatar\">\n                <div class=\"header-avatar_photo\">\n                    <img src=\"../../assets/avatar.svg\" alt=\"avatar photo\" />\n                </div>\n                <span class=\"header-avatar_title\">".concat(person.name, "</span>\n            </div>\n            <div class=\"header-search_more\">\n                <span class=\"material-symbols-outlined\">search</span>\n                <span class=\"material-symbols-outlined\">more_vert</span>\n            </div>\n        ");
  var backButton = document.getElementById('back-btn');
  backButton.onclick = function () {
    return window.history.back();
  };
};
var loadMessages = function loadMessages(chatId, messagesList) {
  var chats = Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_1__["getChatData"])();
  var chat = chats[chatId];
  if (chat && chat.messages) {
    chat.messages.forEach(function (message) {
      addMessageToUI(message, messagesList);
    });
  }
  Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_1__["markReceivedMessagesAsRead"])(chatId);
};
var addMessageToUI = function addMessageToUI(message, messagesList) {
  var messageItem = document.createElement('li');
  messageItem.classList.add('message-item', message.direction);
  messageItem.style.opacity = '0';
  setTimeout(function () {
    messageItem.style.opacity = '1';
  }, 10);
  var timeSpan = document.createElement('span');
  timeSpan.classList.add('time');
  timeSpan.textContent = new Date(message.timestamp).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
  var statusIcon = null;
  if (message.direction === 'sent') {
    statusIcon = document.createElement('span');
    statusIcon.classList.add('material-symbols-outlined');
    if (message.readStatus === 'unread') {
      statusIcon.textContent = 'check';
    } else if (message.readStatus === 'read') {
      statusIcon.textContent = 'done_all';
    }
  }
  messageItem.textContent = message.text;
  if (statusIcon) messageItem.appendChild(statusIcon);
  messageItem.appendChild(timeSpan);
  messagesList.appendChild(messageItem);
};
var simulateReceivedMessage = function simulateReceivedMessage(chatId, text, messagesList) {
  var message = Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_1__["createMessageObject"])(text, 'received');
  Object(_utils_storage_js__WEBPACK_IMPORTED_MODULE_1__["saveMessage"])(chatId, message);
  addMessageToUI(message, messagesList);
};

/***/ }),

/***/ "./data/people.js":
/*!************************!*\
  !*** ./data/people.js ***!
  \************************/
/*! exports provided: initialPeople */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialPeople", function() { return initialPeople; });
var initialPeople = [{
  id: '1',
  name: 'Leanne Graham',
  photo: 'https://via.placeholder.com/50'
}, {
  id: '2',
  name: 'Ervin Howell',
  photo: 'https://picsum.photos/50/50?random=23534534'
}, {
  id: '3',
  name: 'Clementine Bauch',
  photo: 'https://picsum.photos/50/50?random=475674'
}, {
  id: '4',
  name: 'Patricia Lebsack',
  photo: 'https://picsum.photos/50/50?random=64755'
}, {
  id: '5',
  name: 'Chelsey Dietrich',
  photo: 'https://picsum.photos/50/50?random=235783'
}, {
  id: '6',
  name: 'Mrs. Dennis Schulist',
  photo: 'https://picsum.photos/50/50?random=324235'
}, {
  id: '7',
  name: 'Kurtis Weissnat',
  photo: 'https://picsum.photos/50/50?random=136436'
}, {
  id: '8',
  name: 'Nicholas Runolfsdottir V',
  photo: 'https://picsum.photos/50/50?random=143156'
}, {
  id: '9',
  name: 'Glenna Reichert',
  photo: 'https://picsum.photos/50/50?random=123123'
}, {
  id: '10',
  name: 'Clementina DuBuque',
  photo: 'https://picsum.photos/50/50?random=5465'
}];

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./utils/storage.js":
/*!**************************!*\
  !*** ./utils/storage.js ***!
  \**************************/
/*! exports provided: loadPeople, getChatData, getLastMessage, markReceivedMessagesAsRead, createMessageObject, saveMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPeople", function() { return loadPeople; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChatData", function() { return getChatData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLastMessage", function() { return getLastMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markReceivedMessagesAsRead", function() { return markReceivedMessagesAsRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMessageObject", function() { return createMessageObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveMessage", function() { return saveMessage; });
/* harmony import */ var _data_people_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/people.js */ "./data/people.js");

var LOCAL_STORAGE_KEY = 'chatAppData';
var loadPeople = function loadPeople() {
  var data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
  if (!data.people) {
    data.people = _data_people_js__WEBPACK_IMPORTED_MODULE_0__["initialPeople"];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  }
  return data.people;
};
var getChatData = function getChatData() {
  var data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
  return data.chats || {};
};
var getLastMessage = function getLastMessage(chatId) {
  var chats = getChatData();
  var chat = chats[chatId];
  if (chat && chat.messages.length > 0) {
    return chat.messages[chat.messages.length - 1];
  }
  return null;
};
var markReceivedMessagesAsRead = function markReceivedMessagesAsRead(chatId) {
  var chats = getChatData();
  var chat = chats[chatId];
  if (chat) {
    chat.messages.forEach(function (message) {
      if (message.direction === 'received' && message.readStatus === 'unread') {
        message.readStatus = 'read';
      }
    });
    saveChatData(chats);
  }
};
var createMessageObject = function createMessageObject(text, direction) {
  var timeStamp = new Date();
  return {
    id: Date.now().toString(),
    text: text,
    timestamp: timeStamp.getTime(),
    direction: direction,
    readStatus: 'unread'
  };
};
var saveMessage = function saveMessage(chatId, message) {
  var chats = getChatData();
  if (!chats[chatId]) {
    chats[chatId] = {
      messages: [],
      participants: []
    };
  }
  chats[chatId].messages.push(message);
  saveChatData(chats);
};
var saveChatData = function saveChatData(chats) {
  var data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
  data.chats = chats;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

/***/ })

/******/ });
//# sourceMappingURL=chat.bundle.js.map