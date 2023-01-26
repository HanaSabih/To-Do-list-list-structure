/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody,\\r\\n.containerAll {\\r\\n  background-color: #f7f5f7;\\r\\n  margin-top: 4rem;\\r\\n}\\r\\n\\r\\n.checkedBtn,\\r\\n.optDel,\\r\\n.dNone {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.dBlock {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.checkedText {\\r\\n  -webkit-text-decoration-line: line-through; /* Safari */\\r\\n  text-decoration-line: line-through;\\r\\n  -moz-text-decoration-line: line-through;\\r\\n}\\r\\n\\r\\n.uncheckedText {\\r\\n  -webkit-text-decoration-line: none;\\r\\n\\r\\n  /* Safari */\\r\\n  text-decoration-line: none;\\r\\n  -moz-text-decoration-line: none;\\r\\n}\\r\\n\\r\\nspan {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.toDoItem {\\r\\n  background-color: white;\\r\\n  margin-bottom: 0.25rem;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding: 0.5rem 1rem;\\r\\n  margin-right: auto;\\r\\n  margin-left: auto;\\r\\n}\\r\\n\\r\\n.todoCont,\\r\\n.optBtns {\\r\\n  display: inline-flex;\\r\\n}\\r\\n\\r\\n.toDoItem button {\\r\\n  font-size: 1.6rem;\\r\\n  border: none;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.toDoItem h3 {\\r\\n  margin-left: 1rem;\\r\\n}\\r\\n\\r\\nul {\\r\\n  padding-left: 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list-list-structure/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list-list-structure/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list-list-structure/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list-list-structure/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list-list-structure/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list-list-structure/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list-list-structure/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list-list-structure/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list-list-structure/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list-list-structure/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_diplayAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/diplayAll.js */ \"./src/modules/diplayAll.js\");\n/* harmony import */ var _modules_actionBtn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/actionBtn.js */ \"./src/modules/actionBtn.js\");\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_diplayAll_js__WEBPACK_IMPORTED_MODULE_1__.displayToDo)();\n  (0,_modules_diplayAll_js__WEBPACK_IMPORTED_MODULE_1__.onEnterInput)();\n  (0,_modules_diplayAll_js__WEBPACK_IMPORTED_MODULE_1__.checkedTodoS)();\n  (0,_modules_actionBtn_js__WEBPACK_IMPORTED_MODULE_2__.optionsBtn)();\n  (0,_modules_diplayAll_js__WEBPACK_IMPORTED_MODULE_1__.deleteBtnTodoS)();\n  (0,_modules_actionBtn_js__WEBPACK_IMPORTED_MODULE_2__.closeBtn)();\n  (0,_modules_diplayAll_js__WEBPACK_IMPORTED_MODULE_1__.clearAllBtn)();\n  (0,_modules_diplayAll_js__WEBPACK_IMPORTED_MODULE_1__.editBtnTodoS)();\n});\n\n\n//# sourceURL=webpack://to-do-list-list-structure/./src/index.js?");

/***/ }),

/***/ "./src/modules/actionBtn.js":
/*!**********************************!*\
  !*** ./src/modules/actionBtn.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeBtn\": () => (/* binding */ closeBtn),\n/* harmony export */   \"optionsBtn\": () => (/* binding */ optionsBtn)\n/* harmony export */ });\nconst optionsBtn = () => {\n  const options = document.querySelectorAll('.optionsBtn');\n  options.forEach((myelem) => {\n    myelem.addEventListener('click', (e) => {\n      e.preventDefault();\n\n      myelem.style.display = 'none';\n      const binchild = myelem.nextElementSibling;\n      binchild.style.display = 'block';\n    });\n  });\n};\n\nconst closeBtn = () => {\n  const closeBtn = document.querySelectorAll('.closeBtn');\n  closeBtn.forEach((myelem) => {\n    myelem.addEventListener('click', (e) => {\n      e.preventDefault();\n      const menuchild = myelem.parentElement.parentElement.firstElementChild;\n      menuchild.style.display = ' block';\n      const binchild = myelem.parentElement;\n      binchild.style.display = 'none';\n    });\n  });\n};\n\n\n//# sourceURL=webpack://to-do-list-list-structure/./src/modules/actionBtn.js?");

/***/ }),

/***/ "./src/modules/diplayAll.js":
/*!**********************************!*\
  !*** ./src/modules/diplayAll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodStorage\": () => (/* binding */ addTodStorage),\n/* harmony export */   \"changeIndexArr\": () => (/* binding */ changeIndexArr),\n/* harmony export */   \"checkedItems\": () => (/* binding */ checkedItems),\n/* harmony export */   \"checkedTodoS\": () => (/* binding */ checkedTodoS),\n/* harmony export */   \"clearAllBtn\": () => (/* binding */ clearAllBtn),\n/* harmony export */   \"clearAllCompleted\": () => (/* binding */ clearAllCompleted),\n/* harmony export */   \"deleteBtnTodoS\": () => (/* binding */ deleteBtnTodoS),\n/* harmony export */   \"deleteOneItem\": () => (/* binding */ deleteOneItem),\n/* harmony export */   \"displayToDo\": () => (/* binding */ displayToDo),\n/* harmony export */   \"editBtnTodoS\": () => (/* binding */ editBtnTodoS),\n/* harmony export */   \"editOneItem\": () => (/* binding */ editOneItem),\n/* harmony export */   \"getStorage\": () => (/* binding */ getStorage),\n/* harmony export */   \"onEnterInput\": () => (/* binding */ onEnterInput),\n/* harmony export */   \"saveTodo\": () => (/* binding */ saveTodo),\n/* harmony export */   \"uncheckedItems\": () => (/* binding */ uncheckedItems)\n/* harmony export */ });\n/* harmony import */ var _varibles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./varibles.js */ \"./src/modules/varibles.js\");\n\n\nconst getStorage = () => {\n  const storage = localStorage.getItem('ToDo') === null\n    ? []\n    : JSON.parse(localStorage.getItem('ToDo'));\n  return storage;\n};\n\nconst addTodStorage = (arrToDos) => {\n  const storage = localStorage.setItem('ToDo', JSON.stringify(arrToDos));\n  return storage;\n};\n\nlet arrToDos = getStorage();\nlet EditId = -1;\nconst displayToDo = () => {\n  const toDoList = document.querySelector('.toDoList');\n  const displayToDo = arrToDos.map(\n    (item, index) => `\n  <li class=\"toDoItem\" id=\"${index}\" data-id=\"${item.index}\">\n  <div class=\"todoCont\">\n  <input type=\"checkbox\" class=\"doneCheck\" data-action=\"check\" ${\n  item.completed === true ? 'checked' : ''\n}>\n    <h3 class=\"hBtns  ${\n  item.completed === true ? 'checkedText' : 'uncheckedText'\n}\" >${item.description}</h3>\n    </div>\n    <div class=\"optBtns\">\n    <button class=\"optionsBtn\" >&#8942; </button>\n    <div class=\"optDel\">\n    <button class=\"editBtn \" data-action=\"edit\">🖋️</button>\n   <button class=\"deleteBtn \" data-action=\"delete\">🗑️</button>\n   <button class=\"closeBtn\"  >❌</button>\n   </div>\n   </div>\n</li>\n      `,\n  );\n  toDoList.innerHTML = displayToDo.join(' ');\n};\n\nconst editOneItem = (newDesc, id) => {\n  arrToDos = arrToDos.map((todo, index) => {\n    todo.description = index === id ? newDesc : todo.description;\n    addTodStorage(arrToDos);\n    return arrToDos;\n  });\n  id = -1;\n};\n\nconst saveTodo = (desc) => {\n  let idItem = arrToDos.length;\n  if (EditId >= 0) {\n    editOneItem(desc, EditId);\n  } else {\n    arrToDos.push({\n      index: idItem,\n      description: desc,\n      completed: false,\n    });\n    idItem += 1;\n    addTodStorage(arrToDos);\n  }\n};\n\nconst onEnterInput = () => {\n  _varibles_js__WEBPACK_IMPORTED_MODULE_0__.form.addEventListener('change', (e) => {\n    e.preventDefault();\n    saveTodo(_varibles_js__WEBPACK_IMPORTED_MODULE_0__.toDoInput.value);\n    displayToDo();\n  });\n};\n\nconst checkedItems = (idc) => {\n  arrToDos[idc].completed = true;\n  addTodStorage(arrToDos);\n};\n\nconst uncheckedItems = (iduc) => {\n  arrToDos[iduc].completed = false;\n  addTodStorage(arrToDos);\n};\n\nconst checkedTodoS = () => {\n  const checkBtn = document.querySelectorAll('.doneCheck');\n  checkBtn.forEach((thisBtn) => {\n    thisBtn.addEventListener('change', (e) => {\n      e.preventDefault();\n      const todoId = Number(thisBtn.closest('.toDoItem').dataset.id);\n      if (thisBtn.checked) {\n        checkedItems(todoId);\n      } else if (!thisBtn.checked) {\n        uncheckedItems(todoId);\n      }\n      displayToDo();\n      window.location.reload();\n    });\n  });\n};\n\nconst changeIndexArr = (arr) => {\n  arr.forEach((element, index) => {\n    element.index = index;\n    displayToDo();\n  });\n  addTodStorage(arr);\n  window.location.reload();\n};\n\nconst editBtnTodoS = () => {\n  const deleteBtn = document.querySelectorAll('.editBtn');\n  deleteBtn.forEach((thisBtn) => {\n    thisBtn.addEventListener('click', (e) => {\n      e.preventDefault();\n      const todoId = Number(thisBtn.closest('.toDoItem').dataset.id);\n      _varibles_js__WEBPACK_IMPORTED_MODULE_0__.toDoInput.value = arrToDos[todoId].description;\n      EditId = todoId;\n    });\n  });\n};\n\nconst deleteOneItem = (id) => {\n  arrToDos = arrToDos.filter((todo, index) => index !== id);\n  changeIndexArr(arrToDos);\n};\n\nconst deleteBtnTodoS = () => {\n  const deleteBtn = document.querySelectorAll('.deleteBtn');\n  deleteBtn.forEach((thisBtn) => {\n    thisBtn.addEventListener('click', (e) => {\n      e.preventDefault();\n      const todoId = Number(thisBtn.closest('.toDoItem').dataset.id);\n      thisBtn.closest('.toDoItem').remove();\n      deleteOneItem(todoId);\n    });\n  });\n};\n\nconst clearAllCompleted = () => {\n  arrToDos = arrToDos.filter((todo) => todo.completed !== true);\n  changeIndexArr(arrToDos);\n};\n\nconst clearAllBtn = () => {\n  document.querySelector('.clearAllBtn').addEventListener('click', (e) => {\n    e.preventDefault();\n    clearAllCompleted();\n  });\n};\n\n\n//# sourceURL=webpack://to-do-list-list-structure/./src/modules/diplayAll.js?");

/***/ }),

/***/ "./src/modules/varibles.js":
/*!*********************************!*\
  !*** ./src/modules/varibles.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"form\": () => (/* binding */ form),\n/* harmony export */   \"toDoInput\": () => (/* binding */ toDoInput)\n/* harmony export */ });\nconst form = document.querySelector('#form');\nconst toDoInput = document.querySelector('#toDoInput');\n\n\n//# sourceURL=webpack://to-do-list-list-structure/./src/modules/varibles.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;