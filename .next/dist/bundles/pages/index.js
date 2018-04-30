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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = __webpack_require__(1);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(2);

var _link2 = _interopRequireDefault(_link);

var _reactFoundation = __webpack_require__(7);

var _styledComponents = __webpack_require__(8);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(_ref) {
	var children = _ref.children;

	return _react2.default.createElement(
		'div',
		{
			className: 'jsx-629301156'
		},
		_react2.default.createElement(
			_reactFoundation.Menu,
			{ className: 'top-bar' },
			_react2.default.createElement(
				_reactFoundation.MenuItem,
				{ className: 'menu-text' },
				_react2.default.createElement(
					_link2.default,
					{ href: '/' },
					_react2.default.createElement(
						'a',
						{ style: { padding: 0 }, className: 'jsx-629301156'
						},
						'YouTube Analyzer'
					)
				)
			)
		),
		_react2.default.createElement(
			'div',
			{
				className: 'jsx-629301156' + ' ' + 'wrapper'
			},
			children
		),
		_react2.default.createElement(_style2.default, {
			styleId: '629301156',
			css: ['.wrapper.jsx-629301156{max-width:1000px;margin:auto;padding:50px 10px;}']
		})
	);
};

exports.default = Layout;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-foundation");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.secondsToHms = secondsToHms;
exports.getPlaceHolderTest = getPlaceHolderTest;
// https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript/37096512
function secondsToHms(d) {
	d = Number(d);
	var h = Math.floor(d / 3600);
	var m = Math.floor(d % 3600 / 60);
	var s = Math.floor(d % 3600 % 60);

	var hDisplay = h > 0 ? h + (h == 1 ? "h" : "h") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? "m" : "m") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? "s" : "s") : "";
	return hDisplay + mDisplay + sDisplay;
}

function getPlaceHolderTest() {
	var optionValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


	var isUrl = optionValue.includes('Url');
	var isChannel = optionValue.includes('channel');

	if (isChannel) {
		if (isUrl) {
			return 'https://www.youtube.com/channel/UCPzFLpOblZEaIx2lpym1l1A';
		} else {
			return 'UCPzFLpOblZEaIx2lpym1l1A';
		}
	}
	// is ID
	else {
			if (isUrl) {
				return 'https://www.youtube.com/watch?v=E3maq9Bqe8Q&list=PLURsDaOr8hWVH4zq-BPRH8bC-o-MTYywk';
			} else {
				return 'PLURsDaOr8hWVH4zq-BPRH8bC-o-MTYywk';
			}
		}

	return '';
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(4);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var axios = __webpack_require__(5);

var getPlaylistIdFromUrl = function getPlaylistIdFromUrl(url) {
	var parsed = getJsonFromUrl(url);
	return parsed.list;
};

var getChannelIdFromUrl = function getChannelIdFromUrl() {
	var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	var arr = url.split('/');
	return arr[arr.length - 1];
};

var getApiUrl = function getApiUrl(section, userParams) {
	var apiKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'AIzaSyAlAtI54mpJ7iDblL-pisPlQr8F6vmTy0A';


	var params = _extends({
		part: 'snippet',
		maxResults: 50
	}, userParams);

	var baseUrl = 'https://www.googleapis.com/youtube/v3/' + section + '?key=' + apiKey;

	var paramsUrl = Object.entries(params).map(function (_ref) {
		var _ref2 = _slicedToArray(_ref, 2),
		    key = _ref2[0],
		    value = _ref2[1];

		return '&' + key + '=' + value;
	}).join('');

	return baseUrl + paramsUrl;
};

var getResultPages = function () {
	var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(url, params) {
		var resultPages, _url, newPage;

		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						resultPages = [];

						// get first one

						_context.next = 3;
						return axios.get(url).then(function (res) {
							return resultPages.push(res.data);
						}).catch(function (err) {
							return console.error(err);
						});

					case 3:
						if (!resultPages.length) {
							_context.next = 13;
							break;
						}

					case 4:
						if (!resultPages[resultPages.length - 1].nextPageToken) {
							_context.next = 13;
							break;
						}

						params.pageToken = resultPages[resultPages.length - 1].nextPageToken;

						_url = getApiUrl('search', params);
						_context.next = 9;
						return axios.get(_url).then(function (res) {
							return res.data;
						}).catch(function (err) {
							return console.error(err);
						});

					case 9:
						newPage = _context.sent;

						resultPages.push(newPage);

						_context.next = 4;
						break;

					case 13:
						return _context.abrupt('return', resultPages);

					case 14:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function getResultPages(_x3, _x4) {
		return _ref3.apply(this, arguments);
	};
}();

var getVideosFromPlaylistId = function () {
	var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(playlistId) {
		var params, url, resultPages, videoIds;
		return _regenerator2.default.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						params = {
							playlistId: playlistId,
							part: 'contentDetails,snippet'
						};
						url = getApiUrl('playlistItems', params);
						_context2.next = 4;
						return getResultPages(url, params);

					case 4:
						resultPages = _context2.sent;


						// video ids in [50, 50, remaining]
						videoIds = resultPages.map(function (obj) {
							return obj.items.map(function (item) {
								return item.contentDetails.videoId;
							});
						});
						return _context2.abrupt('return', videoIds);

					case 7:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, undefined);
	}));

	return function getVideosFromPlaylistId(_x5) {
		return _ref4.apply(this, arguments);
	};
}();

var getVideosFromChannelId = function () {
	var _ref5 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee3(channelId) {
		var videoIds, params, url, resultPages;
		return _regenerator2.default.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						videoIds = [];
						params = {
							channelId: channelId
						};
						url = getApiUrl('search', params);
						_context3.next = 5;
						return getResultPages(url, params);

					case 5:
						resultPages = _context3.sent;


						if (resultPages.length) {
							// video ids in [50, 50, remaining]
							videoIds = resultPages.map(function (obj) {
								return obj.items.map(function (item) {
									return item.id.videoId;
								});
							});
						}

						return _context3.abrupt('return', videoIds);

					case 8:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, undefined);
	}));

	return function getVideosFromChannelId(_x6) {
		return _ref5.apply(this, arguments);
	};
}();

var processVideoIds = function () {
	var _ref6 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee4(videoIds) {
		var videoPromises, res, videoDetails;
		return _regenerator2.default.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						videoPromises = videoIds.map(function (page) {
							var id = page.join(',');
							var url = getApiUrl('videos', { part: 'statistics,snippet,contentDetails', id: id });
							return axios.get(url);
						});
						_context4.next = 3;
						return Promise.all(videoPromises);

					case 3:
						res = _context4.sent;
						videoDetails = [];

						res.map(function (res) {
							return res.data;
						}).map(function (res) {
							return res.items;
						}).forEach(function (page) {
							return videoDetails.push.apply(videoDetails, _toConsumableArray(page));
						});

						return _context4.abrupt('return', videoDetails);

					case 7:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, undefined);
	}));

	return function processVideoIds(_x7) {
		return _ref6.apply(this, arguments);
	};
}();

var helpers = {
	getPlaylistIdFromUrl: getPlaylistIdFromUrl,
	getChannelIdFromUrl: getChannelIdFromUrl,
	getApiUrl: getApiUrl,
	getVideosFromChannelId: getVideosFromChannelId,
	getVideosFromPlaylistId: getVideosFromPlaylistId,
	processVideoIds: processVideoIds
};

module.exports = helpers;

// ********
function getJsonFromUrl(url) {
	var query = url.split('?')[1];
	var result = {};
	query.split("&").forEach(function (part) {
		var item = part.split("=");
		result[item[0]] = decodeURIComponent(item[1]);
	});
	return result;
}

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _router = __webpack_require__(6);

var _router2 = _interopRequireDefault(_router);

var _Layout = __webpack_require__(3);

var _Layout2 = _interopRequireDefault(_Layout);

var _Form = __webpack_require__(17);

var _Form2 = _interopRequireDefault(_Form);

var _Footer = __webpack_require__(21);

var _Footer2 = _interopRequireDefault(_Footer);

var _helpers = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_React$PureComponent) {
	_inherits(Index, _React$PureComponent);

	function Index() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Index);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.handleSubmit = function (_ref2) {
			var option = _ref2.option,
			    text = _ref2.text;


			var query = void 0;

			switch (option) {
				case 'playlistUrl':
					var playlistId = (0, _helpers.getPlaylistIdFromUrl)(text);
					query = { playlistId: playlistId };
					break;

				case 'playlistId':
					query = { playlistId: text };
					break;

				case 'channelUrl':
					var channelId = (0, _helpers.getChannelIdFromUrl)(text);
					query = { channelId: channelId };
					break;

				case 'channelId':
					query = { channelId: text };
					break;
			}

			console.log(query);

			// all good
			_router2.default.push({
				pathname: '/search',
				query: query
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Index, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_Layout2.default,
				null,
				_react2.default.createElement(_Form2.default, { handleSubmit: this.handleSubmit }),
				_react2.default.createElement(_Footer2.default, null)
			);
		}
	}]);

	return Index;
}(_react2.default.PureComponent);

exports.default = Index;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(1);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = __webpack_require__(9);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _faSync = __webpack_require__(19);

var _faSync2 = _interopRequireDefault(_faSync);

var _validator = __webpack_require__(20);

var _helpers = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$PureComponent) {
	_inherits(Form, _React$PureComponent);

	function Form() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Form);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			loading: false,
			placeholder: (0, _helpers.getPlaceHolderTest)('playlistUrl'),
			errorMessage: ''
		}, _this.updatePlaceholder = function () {
			var placeholder = (0, _helpers.getPlaceHolderTest)(_this.refs.option && _this.refs.option.value);
			_this.setState({ placeholder: placeholder });
		}, _this.handleSubmit = function (e) {
			e.preventDefault();

			var option = _this.refs.option.value;
			var text = _this.refs.text.value;

			// is empty
			if ((0, _validator.isEmpty)(text)) {
				var thing = option.includes('Url') ? 'a url' : 'an id';
				return _this.setState({ errorMessage: 'Please enter ' + thing });
			}

			// is url
			if (option.includes('Url') && !(0, _validator.isURL)(text)) {
				return _this.setState({ errorMessage: 'Please enter a valid url!' });
			}

			// is id
			else if (option.includes('Id') && /[^A-Za-z\d\-]/.test(text)) {
					return _this.setState({ errorMessage: 'Ids should only contain letters, numbers and dashes' });
				}

			// all good
			_this.props.handleSubmit({ option: option, text: text });
			_this.setState({ loading: true });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Form, [{
		key: 'render',
		value: function render() {
			var _state = this.state,
			    loading = _state.loading,
			    errorMessage = _state.errorMessage,
			    placeholder = _state.placeholder;


			var loaderIcon = _react2.default.createElement(_reactFontawesome2.default, { icon: _faSync2.default, spin: true, style: { marginLeft: 10 } });

			return _react2.default.createElement(
				'div',
				{
					className: 'jsx-801170688' + ' ' + 'wrapper'
				},
				_react2.default.createElement(
					'form',
					{ onSubmit: this.handleSubmit, className: 'jsx-801170688'
					},
					_react2.default.createElement(
						'h3',
						{
							className: 'jsx-801170688' + ' ' + 'title'
						},
						'YouTube Analyzer'
					),
					_react2.default.createElement(
						'select',
						{ onChange: this.updatePlaceholder, ref: 'option', name: 'options', className: 'jsx-801170688'
						},
						_react2.default.createElement(
							'option',
							{ value: 'playlistUrl', className: 'jsx-801170688'
							},
							'Playlist URL'
						),
						_react2.default.createElement(
							'option',
							{ value: 'playlistId', className: 'jsx-801170688'
							},
							'Playlist ID'
						),
						_react2.default.createElement(
							'option',
							{ value: 'channelUrl', className: 'jsx-801170688'
							},
							'Channel URL'
						),
						_react2.default.createElement(
							'option',
							{ value: 'channelId', className: 'jsx-801170688'
							},
							'Channel ID'
						)
					),
					_react2.default.createElement(
						'div',
						{
							className: 'jsx-801170688'
						},
						_react2.default.createElement('input', { type: 'text', ref: 'text', placeholder: placeholder, className: 'jsx-801170688'
						}),
						_react2.default.createElement(
							'span',
							{ id: 'uuid', className: 'jsx-801170688' + ' ' + 'form-error is-visible'
							},
							errorMessage
						)
					),
					_react2.default.createElement(
						'button',
						{ type: 'submit', className: 'jsx-801170688' + ' ' + 'primary button'
						},
						'Submit ',
						loading && loaderIcon
					)
				),
				_react2.default.createElement(_style2.default, {
					styleId: '801170688',
					css: ['.wrapper.jsx-801170688{padding:30px 20px;max-width:700px;border:1px solid rgba(0,0,0,.2);margin:50px auto 0;}', 'form.jsx-801170688{display:grid;grid-template-columns:2fr 3fr;grid-gap:10px;}', 'form.jsx-801170688>button.primary.jsx-801170688{grid-column:1 / -1;}', '.title.jsx-801170688{grid-column:1 / -1;text-align:center;}']
				})
			);
		}
	}]);

	return Form;
}(_react2.default.PureComponent);

exports.default = Form;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faSync");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = __webpack_require__(1);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
	return _react2.default.createElement(
		"div",
		{
			className: "jsx-1355937228"
		},
		_react2.default.createElement(
			"p",
			{
				className: "jsx-1355937228"
			},
			"Analyze any YouTube playlist or channel. Get total views, duration, likes, dislikes and more."
		),
		_react2.default.createElement(
			"a",
			{ href: "https://github.com/trevorlitsey/youtube-analyzer", target: "blank", className: "jsx-1355937228"
			},
			"GitHub"
		),
		_react2.default.createElement(_style2.default, {
			styleId: "1355937228",
			css: [".jsx-1355937228{text-align:center;padding:30px;}"]
		})
	);
};

exports.default = Footer;

/***/ })
/******/ ]);