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
	function Humburger(className, targetToggle, addedClass) {
		_classCallCheck(this, Humburger);

		this.className = document.getElementsByClassName('' + className);
		this.targetToggle = document.getElementsByClassName('' + targetToggle);
		this.addedClass = addedClass;
	}

	_createClass(Humburger, [{
		key: 'go',
		value: function go() {
			var _this = this;

			[].forEach.call(this.className, function (elem) {
				if (!elem.classList.contains('is-active')) {
					_this.open();
				} else {
					_this.close();
				}
			});
		}
	}, {
		key: 'open',
		value: function open() {
			[].forEach.call(this.className, function (i) {
				i.classList.add('is-active');
				console.log('add is-actie button');
			});
		}
	}, {
		key: 'close',
		value: function close() {
			[].forEach.call(this.className, function (elem) {
				elem.classList.remove('is-active');
				console.log('remove is-actie button');
			});
		}
	}, {
		key: 'hide',
		value: function hide() {
			var _this2 = this;

			[].forEach.call(this.targetToggle, function (e) {
				e.classList.remove(_this2.addedClass);
			});
		}
	}, {
		key: 'show',
		value: function show() {
			var _this3 = this;

			[].forEach.call(this.targetToggle, function (e) {
				e.classList.add(_this3.addedClass);
			});
		}
	}]);

	return Humburger;
}();

module.exports = Humburger;

/***/ })

})
//# sourceMappingURL=main.ac9d1c8733f11dcea984.hot-update.js.map