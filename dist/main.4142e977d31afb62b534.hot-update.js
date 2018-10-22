webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js!./src/css/fonts.css":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader!./src/css/fonts.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face{\r\n\tfont-family: 'dinpro';\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n\tsrc: url(" + escape(__webpack_require__(/*! ../fonts/DinPro/dinpro-regular.eot */ "./src/fonts/DinPro/dinpro-regular.eot")) + "?#iefix) format('embedded-opentype'), url(" + escape(__webpack_require__(/*! ../fonts/DinPro/dinpro-regular.woff */ "./src/fonts/DinPro/dinpro-regular.woff")) + ") format('woff'), url(" + escape(__webpack_require__(/*! ../fonts/DinPro/dinpro-regular.ttf */ "./src/fonts/DinPro/dinpro-regular.ttf")) + ") format('truetype');\r\n}\r\n@font-face{\r\n\tfont-family: 'gloria';\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n\tsrc: url(" + escape(__webpack_require__(/*! ../fonts/gloria/gloriahallelujah.eot */ "./src/fonts/gloria/gloriahallelujah.eot")) + "?#iefix) format('embedded-opentype'), url(" + escape(__webpack_require__(/*! ../fonts/gloria/GloriaHallelujah.woff */ "./src/fonts/gloria/GloriaHallelujah.woff")) + ") format('woff'), url(" + escape(__webpack_require__(/*! ../fonts/gloria/GloriaHallelujah.ttf */ "./src/fonts/gloria/GloriaHallelujah.ttf")) + ") format('truetype');\r\n}\t\t", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./src/css/fonts.css":
/*!***************************!*\
  !*** ./src/css/fonts.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!./fonts.css */ "./node_modules/css-loader/index.js!./src/css/fonts.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader!./fonts.css */ "./node_modules/css-loader/index.js!./src/css/fonts.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader!./fonts.css */ "./node_modules/css-loader/index.js!./src/css/fonts.css");

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

/***/ "./src/fonts/DinPro/dinpro-regular.eot":
/*!*********************************************!*\
  !*** ./src/fonts/DinPro/dinpro-regular.eot ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/dinpro-regular.eot";

/***/ }),

/***/ "./src/fonts/DinPro/dinpro-regular.ttf":
/*!*********************************************!*\
  !*** ./src/fonts/DinPro/dinpro-regular.ttf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/dinpro-regular.ttf";

/***/ }),

/***/ "./src/fonts/DinPro/dinpro-regular.woff":
/*!**********************************************!*\
  !*** ./src/fonts/DinPro/dinpro-regular.woff ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/dinpro-regular.woff";

/***/ }),

/***/ "./src/fonts/gloria/GloriaHallelujah.ttf":
/*!***********************************************!*\
  !*** ./src/fonts/gloria/GloriaHallelujah.ttf ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/GloriaHallelujah.ttf";

/***/ }),

/***/ "./src/fonts/gloria/GloriaHallelujah.woff":
/*!************************************************!*\
  !*** ./src/fonts/gloria/GloriaHallelujah.woff ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/GloriaHallelujah.woff";

/***/ }),

/***/ "./src/fonts/gloria/gloriahallelujah.eot":
/*!***********************************************!*\
  !*** ./src/fonts/gloria/gloriahallelujah.eot ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/gloriahallelujah.eot";

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/fonts.css */ "./src/css/fonts.css");
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_fonts_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_style_sass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.sass */ "./src/css/style.sass");
/* harmony import */ var _css_style_sass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_style_sass__WEBPACK_IMPORTED_MODULE_4__);
console.log('app has started');

// const $ = require('jquery');
const _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");




const Custumer = __webpack_require__(/*! ./about.js */ "./src/js/about.js");
const custumers = __webpack_require__(/*! ./custumers.js */ "./src/js/custumers.js");

let user = new Custumer( custumers[0] );

jquery__WEBPACK_IMPORTED_MODULE_1___default()('#push').click(function(){
	let val = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#in').val();
	// user.custumerShow(val);
	console.log(custumers);
	console.log(jquery__WEBPACK_IMPORTED_MODULE_1___default()('#in').val());
	// console.log(user);
	console.log('it ckicked');
});



/***/ })

})
//# sourceMappingURL=main.4142e977d31afb62b534.hot-update.js.map