module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_document.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var _jsxFileName = "/Users/trevorlitsey/Documents/code/2 projects/youtube-analyzer/pages/_document.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _document = __webpack_require__("next/document");

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ./pages/_document.js


var MyDocument = function (_Document) {
	_inherits(MyDocument, _Document);

	function MyDocument() {
		_classCallCheck(this, MyDocument);

		return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
	}

	_createClass(MyDocument, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"html",
				{ lang: "en", __source: {
						fileName: _jsxFileName,
						lineNumber: 7
					}
				},
				_react2.default.createElement(
					_document.Head,
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 8
						}
					},
					_react2.default.createElement("meta", { charSet: "UTF-8", __source: {
							fileName: _jsxFileName,
							lineNumber: 9
						}
					}),
					_react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0", __source: {
							fileName: _jsxFileName,
							lineNumber: 10
						}
					}),
					_react2.default.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "ie=edge", __source: {
							fileName: _jsxFileName,
							lineNumber: 11
						}
					}),
					_react2.default.createElement("link", { rel: "stylesheet", href: "/static/foundation.min.css", __source: {
							fileName: _jsxFileName,
							lineNumber: 12
						}
					}),
					_react2.default.createElement(
						"title",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 13
							}
						},
						"YouTube Analyzer"
					),
					_react2.default.createElement("link", { rel: "icon", type: "image/ico", href: "/static/favicon.ico", __source: {
							fileName: _jsxFileName,
							lineNumber: 14
						}
					})
				),
				_react2.default.createElement(
					"body",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 16
						}
					},
					_react2.default.createElement(_document.Main, {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 17
						}
					}),
					_react2.default.createElement(_document.NextScript, {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 18
						}
					})
				)
			);
		}
	}]);

	return MyDocument;
}(_document2.default);

exports.default = MyDocument;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_document.js");


/***/ }),

/***/ "next/document":
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map