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

// const button = new Humburgers('hamburger', 'header-inner', 'breakpoint');
var Resize = function () {
	function Resize() {
		// this.width = window.outerWidth;

		_classCallCheck(this, Resize);
	}

	_createClass(Resize, [{
		key: 'go',
		value: function go(button) {
			if (window.outerWidth < 767) {
				button.show();
				console.log('view is less than 767px');
			} else {
				button.close();
				button.hide();
				console.log('sds');
			}
		}
	}]);

	return Resize;
}();

module.exports = Resize;

/***/ })

})
//# sourceMappingURL=main.9156a78fa7ca54632053.hot-update.js.map