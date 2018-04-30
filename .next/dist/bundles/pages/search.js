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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
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
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(4);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(5);

var _axios2 = _interopRequireDefault(_axios);

var _router = __webpack_require__(6);

var _router2 = _interopRequireDefault(_router);

var _helpers = __webpack_require__(11);

var _Layout = __webpack_require__(3);

var _Layout2 = _interopRequireDefault(_Layout);

var _BadRequest = __webpack_require__(24);

var _BadRequest2 = _interopRequireDefault(_BadRequest);

var _Breadcrumbs = __webpack_require__(25);

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _Progress = __webpack_require__(26);

var _Progress2 = _interopRequireDefault(_Progress);

var _Results = __webpack_require__(27);

var _Results2 = _interopRequireDefault(_Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$PureComponent) {
	_inherits(Search, _React$PureComponent);

	function Search() {
		_classCallCheck(this, Search);

		return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
	}

	_createClass(Search, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    videoDetails = _props.videoDetails,
			    url = _props.url;


			if (!videoDetails.length) {
				// bad request!
				return _react2.default.createElement(
					_Layout2.default,
					null,
					_react2.default.createElement(_BadRequest2.default, { query: url.query.channelId || url.query.playlistId })
				);
			}

			return _react2.default.createElement(
				_Layout2.default,
				null,
				_react2.default.createElement(_Breadcrumbs2.default, null),
				_react2.default.createElement(
					'h2',
					{ style: { textDecoration: 'underline' } },
					videoDetails[0].snippet.channelTitle
				),
				_react2.default.createElement(_Results2.default, { videoDetails: videoDetails })
			);
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
				var req = _ref.req,
				    query = _ref.query;
				var videoIds, videoDetails, channelId, playlistId;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								videoIds = void 0;
								videoDetails = void 0;
								channelId = query.channelId, playlistId = query.playlistId;

								if (!channelId) {
									_context.next = 9;
									break;
								}

								_context.next = 6;
								return (0, _helpers.getVideosFromChannelId)(channelId);

							case 6:
								videoIds = _context.sent;
								_context.next = 13;
								break;

							case 9:
								if (!playlistId) {
									_context.next = 13;
									break;
								}

								_context.next = 12;
								return (0, _helpers.getVideosFromPlaylistId)(playlistId);

							case 12:
								videoIds = _context.sent;

							case 13:
								if (videoIds) {
									_context.next = 15;
									break;
								}

								return _context.abrupt('return', {});

							case 15:
								_context.next = 17;
								return (0, _helpers.processVideoIds)(videoIds);

							case 17:
								videoDetails = _context.sent;
								return _context.abrupt('return', { videoDetails: videoDetails });

							case 19:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref2.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return Search;
}(_react2.default.PureComponent);

exports.default = Search;

/***/ }),
/* 24 */
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

var _Layout = __webpack_require__(3);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BadRequest = function BadRequest(_ref) {
	var query = _ref.query;

	return _react2.default.createElement(
		'div',
		{
			className: 'jsx-1005553347'
		},
		_react2.default.createElement(
			'h4',
			{
				className: 'jsx-1005553347'
			},
			'Sorry, your search for ',
			_react2.default.createElement(
				'code',
				{
					className: 'jsx-1005553347'
				},
				query
			),
			' didn\'t match any results.'
		),
		_react2.default.createElement(
			'h4',
			{
				className: 'jsx-1005553347'
			},
			'Click ',
			_react2.default.createElement(
				_link2.default,
				{ href: '/' },
				_react2.default.createElement(
					'a',
					{
						className: 'jsx-1005553347'
					},
					'here'
				)
			),
			' to go back'
		),
		_react2.default.createElement(_style2.default, {
			styleId: '1005553347',
			css: ['.jsx-1005553347{text-align:center;}']
		})
	);
};

exports.default = BadRequest;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(2);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumbs = function Breadcrumbs() {
	return _react2.default.createElement(
		'nav',
		{ 'aria-label': 'You are here:', role: 'navigation' },
		_react2.default.createElement(
			'ul',
			{ className: 'breadcrumbs' },
			_react2.default.createElement(
				'li',
				null,
				_react2.default.createElement(
					_link2.default,
					{ href: '/' },
					_react2.default.createElement(
						'a',
						{ href: '#' },
						'Home'
					)
				)
			),
			_react2.default.createElement(
				'li',
				null,
				_react2.default.createElement(
					'span',
					{ className: 'show-for-sr' },
					'Current: '
				),
				' Search'
			)
		)
	);
};

exports.default = Breadcrumbs;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Progress = function Progress(_ref) {
	var progress = _ref.progress;

	return _react2.default.createElement(
		"div",
		{ className: "progress", role: "progressbar", tabIndex: "0", "aria-valuenow": "50", "aria-valuemin": "0", "aria-valuetext": "50 percent", "aria-valuemax": "100" },
		_react2.default.createElement("div", {
			className: "progress-meter",
			style: { width: progress + "%", transition: 'width 1s' }
		})
	);
};

exports.default = Progress;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _iso8601Duration = __webpack_require__(28);

var _reactFontawesome = __webpack_require__(9);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _faSortUp = __webpack_require__(29);

var _faSortUp2 = _interopRequireDefault(_faSortUp);

var _faSortDown = __webpack_require__(30);

var _faSortDown2 = _interopRequireDefault(_faSortDown);

var _helpers = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Results = function Results(props) {
	var videoDetails = props.videoDetails;


	if (!videoDetails) {
		return _react2.default.createElement(
			'p',
			null,
			'no data yet'
		);
	}

	var statistics = {
		viewCount: 0,
		commentCount: 0,
		likeCount: 0,
		dislikeCount: 0
	};

	videoDetails.forEach(function (video) {
		Object.entries(video.statistics).forEach(function (_ref) {
			var _ref2 = _slicedToArray(_ref, 2),
			    key = _ref2[0],
			    value = _ref2[1];

			statistics[key] = statistics[key] + Number(value);
		});
	});

	var duration = videoDetails.reduce(function (acc, video) {
		return acc += (0, _iso8601Duration.toSeconds)((0, _iso8601Duration.parse)(video.contentDetails.duration));
	}, 0);

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h4',
			null,
			'Totals'
		),
		_react2.default.createElement(
			'table',
			null,
			_react2.default.createElement(
				'thead',
				null,
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'th',
						null,
						'Total videos'
					),
					_react2.default.createElement(
						'th',
						null,
						'Total views'
					),
					_react2.default.createElement(
						'th',
						null,
						'Total duration'
					),
					_react2.default.createElement(
						'th',
						null,
						'Total comments'
					),
					_react2.default.createElement(
						'th',
						null,
						'Total likes'
					),
					_react2.default.createElement(
						'th',
						null,
						'Total dislikes'
					)
				)
			),
			_react2.default.createElement(
				'tbody',
				null,
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'td',
						null,
						videoDetails.length.toLocaleString()
					),
					_react2.default.createElement(
						'td',
						null,
						statistics.viewCount.toLocaleString()
					),
					_react2.default.createElement(
						'td',
						null,
						(0, _helpers.secondsToHms)(Math.round(duration))
					),
					_react2.default.createElement(
						'td',
						null,
						statistics.commentCount.toLocaleString()
					),
					_react2.default.createElement(
						'td',
						null,
						statistics.likeCount.toLocaleString()
					),
					_react2.default.createElement(
						'td',
						null,
						statistics.dislikeCount.toLocaleString()
					)
				)
			)
		),
		_react2.default.createElement(
			'h4',
			null,
			'Details'
		),
		_react2.default.createElement(
			'table',
			null,
			_react2.default.createElement(
				'thead',
				null,
				_react2.default.createElement(
					'tr',
					null,
					_react2.default.createElement(
						'th',
						null,
						'#'
					),
					_react2.default.createElement(
						'th',
						null,
						'Title'
					),
					_react2.default.createElement(
						'th',
						null,
						'Views'
					),
					_react2.default.createElement(
						'th',
						null,
						'Duration'
					),
					_react2.default.createElement(
						'th',
						null,
						'Comments'
					),
					_react2.default.createElement(
						'th',
						null,
						'Likes'
					),
					_react2.default.createElement(
						'th',
						null,
						'Dislikes'
					)
				)
			),
			_react2.default.createElement(
				'tbody',
				null,
				videoDetails.map(function (video, index) {
					return _react2.default.createElement(
						'tr',
						{ key: video.id },
						_react2.default.createElement(
							'td',
							null,
							index + 1
						),
						_react2.default.createElement(
							'td',
							null,
							_react2.default.createElement(
								'a',
								{ href: 'https://www.youtube.com/watch?v=' + video.id, target: 'blank' },
								video.snippet.title
							)
						),
						_react2.default.createElement(
							'td',
							null,
							Number(video.statistics.viewCount).toLocaleString()
						),
						_react2.default.createElement(
							'td',
							null,
							(0, _helpers.secondsToHms)(Math.round((0, _iso8601Duration.toSeconds)((0, _iso8601Duration.parse)(video.contentDetails.duration))))
						),
						_react2.default.createElement(
							'td',
							null,
							Number(video.statistics.commentCount).toLocaleString()
						),
						_react2.default.createElement(
							'td',
							null,
							Number(video.statistics.likeCount).toLocaleString()
						),
						_react2.default.createElement(
							'td',
							null,
							Number(video.statistics.dislikeCount).toLocaleString()
						)
					);
				})
			)
		)
	);
};

exports.default = Results;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("iso8601-duration");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faSortUp");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-free-solid/faSortDown");

/***/ })
/******/ ]);