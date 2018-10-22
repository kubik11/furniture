webpackHotUpdate("main",{

/***/ "./src/js/resize.js":
/*!**************************!*\
  !*** ./src/js/resize.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _humburgers = __webpack_require__(/*! ./humburgers.js */ "./src/js/humburgers.js");

var _humburgers2 = _interopRequireDefault(_humburgers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");

var button = new _humburgers2.default('hamburger', 'header-inner', 'breakpoint');

var Resize = function () {
	function Resize() {
		_classCallCheck(this, Resize);

		this.width = window.outerWidth;
	}

	_createClass(Resize, [{
		key: 'go',
		value: function go() {
			if (this.width < 767) {
				button.go();
				console.log('view is less than 767px');
			} else {
				button.close();
				console.log('sds');
			}
		}
	}]);

	return Resize;
}();

module.exports = Resize;

/***/ })

})
//# sourceMappingURL=main.7ffd930b5cbf9951fe42.hot-update.js.map