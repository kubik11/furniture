webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/media.sass":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/css/media.sass ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/lib/loader.js):\n\r\n@media (max-width: 575.98px)\r\n                          ^\r\n      Invalid CSS after \"...idth: 575.98px)\": expected \"{\", was \";\"\r\n      in D:\\Projects\\webpack_trainy\\src\\css\\media.sass (line 2, column 28)");

/***/ }),

/***/ "./src/css/media.sass":
/*!****************************!*\
  !*** ./src/css/media.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./media.sass */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/media.sass");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./media.sass */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/media.sass", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./media.sass */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./src/css/media.sass");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('app has started');

// const $ = require('jquery');
var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
// import $ from "jquery";

var Custumer = __webpack_require__(/*! ./about.js */ "./src/js/about.js");

var custumers = __webpack_require__(/*! ./custumers.js */ "./src/js/custumers.js");

// let user = new Custumer( custumers[0] );

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

var button = new _humburgers2.default('hamburger', 'header-inner', 'breakpoint');
button.go();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

})
//# sourceMappingURL=main.34a0ca468e36d8ca8aaa.hot-update.js.map