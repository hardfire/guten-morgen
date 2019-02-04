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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _static_simple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static-simple */ \"./src/static-simple.js\");\n/* harmony import */ var _static_simple__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_static_simple__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _static_with_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static-with-attributes */ \"./src/static-with-attributes.js\");\n/* harmony import */ var _static_with_attributes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_with_attributes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meta */ \"./src/meta.js\");\n/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_meta__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/meta.js":
/*!*********************!*\
  !*** ./src/meta.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerBlockType = wp.blocks.registerBlockType;\nvar createElement = wp.element.createElement;\nvar __ = wp.i18n.__;\nvar TextControl = wp.components.TextControl;\nregisterBlockType(\"wordcamp-blocks/movie-release\", {\n  title: __(\"Movie Release Date\"),\n  icon: \"smiley\",\n  category: \"common\",\n  attributes: {\n    release_date: {\n      type: \"string\",\n      source: \"meta\",\n      meta: \"release_date\"\n    }\n  },\n  edit: function edit(_ref) {\n    var release_date = _ref.attributes.release_date,\n        setAttributes = _ref.setAttributes;\n    return createElement(\"div\", null, createElement(TextControl, {\n      label: \"Release Date\",\n      value: release_date,\n      onChange: function onChange(release_date) {\n        setAttributes({\n          release_date: release_date\n        });\n      }\n    }));\n  },\n  // No information saved to the block\n  // Data is saved to post meta via attributes\n  save: function save() {\n    return null;\n  }\n});\n\n//# sourceURL=webpack:///./src/meta.js?");

/***/ }),

/***/ "./src/static-simple.js":
/*!******************************!*\
  !*** ./src/static-simple.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerBlockType = wp.blocks.registerBlockType;\nvar createElement = wp.element.createElement;\nvar __ = wp.i18n.__;\nregisterBlockType(\"wordcamp-blocks/static-simple\", {\n  title: __(\"WCKTM : Static Simple\"),\n  icon: \"smiley\",\n  category: \"common\",\n  // reacty\n  edit: function edit() {\n    return createElement(\"p\", null, \" Hello WordCamp Kathmandu \");\n  },\n  // not reacty\n  save: function save() {\n    return createElement(\"h2\", null, \" Hello WordCamp Kathmandu \");\n  },\n  deprecated: [{\n    save: function save() {\n      return createElement(\"p\", null, \" Hello WordCamp Kathmandu \");\n    }\n  }]\n});\n\n//# sourceURL=webpack:///./src/static-simple.js?");

/***/ }),

/***/ "./src/static-with-attributes.js":
/*!***************************************!*\
  !*** ./src/static-with-attributes.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    InspectorControls = _wp$editor.InspectorControls,\n    BlockControls = _wp$editor.BlockControls;\nvar _wp$element = wp.element,\n    createElement = _wp$element.createElement,\n    Fragment = _wp$element.Fragment;\nvar __ = wp.i18n.__;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    PanelRow = _wp$components.PanelRow;\nregisterBlockType(\"wordcamp-blocks/static-with-attributes\", {\n  title: __(\"WCKTM : Static With Attributes\"),\n  icon: \"smiley\",\n  category: \"common\",\n  attributes: {\n    text: {\n      type: \"string\",\n      default: \"Welcome to WordCamp Kathmandu\"\n    }\n  },\n  edit: function edit(_ref) {\n    var attributes = _ref.attributes;\n    return createElement(Fragment, null, createElement(InspectorControls, null, createElement(PanelBody, {\n      title: __(\"Image Settings\")\n    }, createElement(PanelRow, null, createElement(\"label\", null, \"Set Filter\")))), createElement(\"p\", null, attributes.text));\n  },\n  save: function save() {\n    return createElement(\"p\", null, attributes.text);\n  }\n});\n\n//# sourceURL=webpack:///./src/static-with-attributes.js?");

/***/ })

/******/ });