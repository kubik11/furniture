webpackHotUpdate("main",{

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mobile = undefined;

__webpack_require__(/*! ../css/fonts.css */ "./src/css/fonts.css");

var _popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

var _popper2 = _interopRequireDefault(_popper);

var _bootstrap = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

var _bootstrap2 = _interopRequireDefault(_bootstrap);

__webpack_require__(/*! ../css/style.sass */ "./src/css/style.sass");

__webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.min.css */ "./node_modules/owl.carousel/dist/assets/owl.carousel.min.css");

__webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");

__webpack_require__(/*! ../css/media.sass */ "./src/css/media.sass");

var _about = __webpack_require__(/*! ./about.js */ "./src/js/about.js");

var _humburgers = __webpack_require__(/*! ./humburgers.js */ "./src/js/humburgers.js");

var _humburgers2 = _interopRequireDefault(_humburgers);

var _mobile_menu = __webpack_require__(/*! ./mobile_menu.js */ "./src/js/mobile_menu.js");

var _mobile_menu2 = _interopRequireDefault(_mobile_menu);

var _resize = __webpack_require__(/*! ./resize.js */ "./src/js/resize.js");

var _resize2 = _interopRequireDefault(_resize);

var _slider = __webpack_require__(/*! ./slider.js */ "./src/js/slider.js");

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('app has started');

// const $ = require('jquery');
var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
// import $ from "jquery";

var Custumer = __webpack_require__(/*! ./about.js */ "./src/js/about.js");

var custumers = __webpack_require__(/*! ./custumers.js */ "./src/js/custumers.js");

// let user = new Custumer( custumers[0] );
//  initialization of mobile menu
var mobile = new _mobile_menu2.default('.mobile-menu', '.navigation');
mobile.init();
$('#push').click(function () {
	var val = $('#in').val();
	var counter = false;
	custumers.forEach(function (elem, i, arr) {
		if (elem.name == val) {
			counter = !counter;
			console.log(elem);
		} else {
			if (!counter) {
				console.log('nothing has found');
			}
		}
	});
	// console.log('it ckicked');
});
// initialization the button wind-down
var button = new _humburgers2.default('hamburger', 'header-inner', 'breakpoint', 'main-nav');
button.init();
// initialization the resizing window
var resize = new _resize2.default(button);
document.addEventListener("DOMContentLoaded", resize.go());
window.onresize = function () {
	resize.go();
};

[].forEach.call(button.className, function (b) {
	b.addEventListener('click', function () {
		button.go();
		// mobile.show();		
	});
});

$('.capture').customSlide();

exports.mobile = mobile;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

$.fn.customSlide = function (options) {

    var config = $.extend({}, {
        speed: 1000,
        direction: 'left',
        quantity: 1
    }, options);
    var main = function main(e) {
        console.log(undefined);
    };
    undefined.each(function () {
        main();
    });
    return undefined;
};

module.exports = $.fn.customSlide;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

})
//# sourceMappingURL=main.ea887633f444ac648023.hot-update.js.map