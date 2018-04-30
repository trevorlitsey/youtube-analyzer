webpackHotUpdate(3,{

/***/ "./components/Form.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
var _jsxFileName = '/Users/trevorlitsey/Documents/code/2 projects/youtube-analyzer/components/Form.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__("./node_modules/styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = __webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _faSync = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-solid/faSync.js");

var _faSync2 = _interopRequireDefault(_faSync);

var _validator = __webpack_require__("./node_modules/validator/index.js");

var _helpers = __webpack_require__("./components/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

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


			var loaderIcon = _react2.default.createElement(_reactFontawesome2.default, { icon: _faSync2.default, spin: true, style: { marginLeft: 10 }, __source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			});

			return _react2.default.createElement(
				'div',
				{
					className: 'jsx-801170688' + ' ' + 'wrapper',
					__source: {
						fileName: _jsxFileName,
						lineNumber: 57
					}
				},
				_react2.default.createElement(
					'form',
					{ onSubmit: this.handleSubmit, className: 'jsx-801170688',
						__source: {
							fileName: _jsxFileName,
							lineNumber: 58
						}
					},
					_react2.default.createElement(
						'h3',
						{
							className: 'jsx-801170688' + ' ' + 'title',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 59
							}
						},
						'YouTube Analyzer'
					),
					_react2.default.createElement(
						'select',
						{ onChange: this.updatePlaceholder, ref: 'option', name: 'options', className: 'jsx-801170688',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 60
							}
						},
						_react2.default.createElement(
							'option',
							{ value: 'playlistUrl', className: 'jsx-801170688',
								__source: {
									fileName: _jsxFileName,
									lineNumber: 61
								}
							},
							'Playlist URL'
						),
						_react2.default.createElement(
							'option',
							{ value: 'playlistId', className: 'jsx-801170688',
								__source: {
									fileName: _jsxFileName,
									lineNumber: 62
								}
							},
							'Playlist ID'
						),
						_react2.default.createElement(
							'option',
							{ value: 'channelUrl', className: 'jsx-801170688',
								__source: {
									fileName: _jsxFileName,
									lineNumber: 63
								}
							},
							'Channel URL'
						),
						_react2.default.createElement(
							'option',
							{ value: 'channelId', className: 'jsx-801170688',
								__source: {
									fileName: _jsxFileName,
									lineNumber: 64
								}
							},
							'Channel ID'
						)
					),
					_react2.default.createElement(
						'div',
						{
							className: 'jsx-801170688',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 66
							}
						},
						_react2.default.createElement('input', { type: 'text', ref: 'text', placeholder: placeholder, className: 'jsx-801170688',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 67
							}
						}),
						_react2.default.createElement(
							'span',
							{ id: 'uuid', className: 'jsx-801170688' + ' ' + 'form-error is-visible',
								__source: {
									fileName: _jsxFileName,
									lineNumber: 68
								}
							},
							errorMessage
						)
					),
					_react2.default.createElement(
						'button',
						{ type: 'submit', className: 'jsx-801170688' + ' ' + 'primary button',
							__source: {
								fileName: _jsxFileName,
								lineNumber: 70
							}
						},
						'Submit ',
						loading && loaderIcon
					)
				),
				_react2.default.createElement(_style2.default, {
					styleId: '801170688',
					css: '.wrapper.jsx-801170688{padding:30px 20px;max-width:700px;border:1px solid rgba(0,0,0,.2);margin:50px auto 0;}form.jsx-801170688{display:grid;grid-template-columns:2fr 3fr;grid-gap:10px;}form.jsx-801170688>button.primary.jsx-801170688{grid-column:1 / -1;}.title.jsx-801170688{grid-column:1 / -1;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RWdCLEFBSXlCLEFBT0wsQUFNTSxBQUlBLGFBVFcsS0FQZCxDQWFqQixBQUltQixlQWhCYyxHQWlCakMsTUFWZSxjQUNmLFNBUG9CLG1CQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL0Zvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3RyZXZvcmxpdHNleS9Eb2N1bWVudHMvY29kZS8yIHByb2plY3RzL3lvdXR1YmUtYW5hbHl6ZXIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBGb250QXdlc29tZUljb24gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IGZhU3luYyBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS1zb2xpZC9mYVN5bmMnXG5pbXBvcnQgeyBpc1VSTCwgaXNFbXB0eSB9IGZyb20gJ3ZhbGlkYXRvcic7XG5cbmltcG9ydCB7IGdldFBsYWNlSG9sZGVyVGVzdCB9IGZyb20gJy4vaGVscGVycyc7XG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblxuXHRzdGF0ZSA9IHtcblx0XHRsb2FkaW5nOiBmYWxzZSxcblx0XHRwbGFjZWhvbGRlcjogZ2V0UGxhY2VIb2xkZXJUZXN0KCdwbGF5bGlzdFVybCcpLFxuXHRcdGVycm9yTWVzc2FnZTogJycsXG5cdH1cblxuXHR1cGRhdGVQbGFjZWhvbGRlciA9ICgpID0+IHtcblx0XHRjb25zdCBwbGFjZWhvbGRlciA9IGdldFBsYWNlSG9sZGVyVGVzdCh0aGlzLnJlZnMub3B0aW9uICYmIHRoaXMucmVmcy5vcHRpb24udmFsdWUpXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHBsYWNlaG9sZGVyIH0pO1xuXHR9XG5cblx0aGFuZGxlU3VibWl0ID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRjb25zdCBvcHRpb24gPSB0aGlzLnJlZnMub3B0aW9uLnZhbHVlXG5cdFx0Y29uc3QgdGV4dCA9IHRoaXMucmVmcy50ZXh0LnZhbHVlXG5cblx0XHQvLyBpcyBlbXB0eVxuXHRcdGlmIChpc0VtcHR5KHRleHQpKSB7XG5cdFx0XHRjb25zdCB0aGluZyA9IG9wdGlvbi5pbmNsdWRlcygnVXJsJykgPyAnYSB1cmwnIDogJ2FuIGlkJ1xuXHRcdFx0cmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGBQbGVhc2UgZW50ZXIgJHt0aGluZ31gIH0pXG5cdFx0fVxuXG5cdFx0Ly8gaXMgdXJsXG5cdFx0aWYgKG9wdGlvbi5pbmNsdWRlcygnVXJsJykgJiYgIWlzVVJMKHRleHQpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIHVybCEnIH0pXG5cdFx0fVxuXG5cdFx0Ly8gaXMgaWRcblx0XHRlbHNlIGlmIChvcHRpb24uaW5jbHVkZXMoJ0lkJykgJiYgL1teQS1aYS16XFxkXFwtXS8udGVzdCh0ZXh0KSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6ICdJZHMgc2hvdWxkIG9ubHkgY29udGFpbiBsZXR0ZXJzLCBudW1iZXJzIGFuZCBkYXNoZXMnIH0pXG5cdFx0fVxuXG5cdFx0Ly8gYWxsIGdvb2Rcblx0XHR0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdCh7IG9wdGlvbiwgdGV4dCB9KVxuXHRcdHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRjb25zdCB7IGxvYWRpbmcsIGVycm9yTWVzc2FnZSwgcGxhY2Vob2xkZXIgfSA9IHRoaXMuc3RhdGU7XG5cblx0XHRjb25zdCBsb2FkZXJJY29uID0gPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVN5bmN9IHNwaW4gc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAgfX0gLz5cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cblx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cblx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5Zb3VUdWJlIEFuYWx5emVyPC9oMz5cblx0XHRcdFx0XHQ8c2VsZWN0IG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVBsYWNlaG9sZGVyfSByZWY9XCJvcHRpb25cIiBuYW1lPVwib3B0aW9uc1wiPlxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cInBsYXlsaXN0VXJsXCI+UGxheWxpc3QgVVJMPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwicGxheWxpc3RJZFwiPlBsYXlsaXN0IElEPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiY2hhbm5lbFVybFwiPkNoYW5uZWwgVVJMPC9vcHRpb24+XG5cdFx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiY2hhbm5lbElkXCI+Q2hhbm5lbCBJRDwvb3B0aW9uPlxuXHRcdFx0XHRcdDwvc2VsZWN0PlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiByZWY9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZm9ybS1lcnJvciBpcy12aXNpYmxlXCIgaWQ9XCJ1dWlkXCI+e2Vycm9yTWVzc2FnZX08L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJwcmltYXJ5IGJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQge2xvYWRpbmcgJiYgbG9hZGVySWNvbn08L2J1dHRvbj5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cblx0XHRcdFx0XHQud3JhcHBlciB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAzMHB4IDIwcHg7XG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDcwMHB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMik7XG5cdFx0XHRcdFx0XHRtYXJnaW46IDUwcHggYXV0byAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGZvcm0ge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZ3JpZDtcblx0XHRcdFx0XHRcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcblx0XHRcdFx0XHRcdGdyaWQtZ2FwOiAxMHB4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGZvcm0gPiBidXR0b24ucHJpbWFyeSB7XG5cdFx0XHRcdFx0XHRncmlkLWNvbHVtbjogMSAvIC0xO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC50aXRsZSB7XG5cdFx0XHRcdFx0XHRncmlkLWNvbHVtbjogMSAvIC0xO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyJdfQ== */\n/*@ sourceURL=components/Form.js */'
				})
			);
		}
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}]);

	return Form;
}(_react2.default.PureComponent);

var _default = Form;
exports.default = _default;
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(Form, 'Form', '/Users/trevorlitsey/Documents/code/2 projects/youtube-analyzer/components/Form.js');
	reactHotLoader.register(_default, 'default', '/Users/trevorlitsey/Documents/code/2 projects/youtube-analyzer/components/Form.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.4bc3158d4efc8d607151.hot-update.js.map