webpackHotUpdate("main",{

/***/ "./src/js/humburgers.js":
/*!******************************!*\
  !*** ./src/js/humburgers.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");

var Humburger = function () {
	function Humburger(className, targetToggle) {
		_classCallCheck(this, Humburger);

		this.className = document.getElementByClassName('' + className);
		this.targetToggle = document.getElementByClassName('' + className);
	}

	_createClass(Humburger, [{
		key: 'open',
		value: function open() {
			var _this = this;

			this.className.addEventListener('click', function () {
				if (!_this.className.classList.contains('is-active')) {}
			});
		}
	}]);

	return Humburger;
}();

/***/ })

})
//# sourceMappingURL=main.a4863b72d147ba620e03.hot-update.js.map