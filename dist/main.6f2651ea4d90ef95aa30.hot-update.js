webpackHotUpdate("main",{

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
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_style_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.sass */ "./src/css/style.sass");
/* harmony import */ var _css_style_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_owl_carousel_dist_owl_carousel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/owl.carousel/dist/owl.carousel.js */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var _node_modules_owl_carousel_dist_owl_carousel_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_owl_carousel_dist_owl_carousel_js__WEBPACK_IMPORTED_MODULE_4__);
console.log('app has started');

// const $ = require('jquery');
const _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
const $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




const Custumer = __webpack_require__(/*! ./about.js */ "./src/js/about.js");
const custumers = __webpack_require__(/*! ./custumers.js */ "./src/js/custumers.js");

let user = new Custumer( custumers[0] );

$('#push').click(function(){
	let val = $('#in').val();
	// user.custumerShow(val);
	console.log(custumers);
	console.log($('#in').val());
	// console.log(user);
	console.log('it ckicked');
});



/***/ })

})
//# sourceMappingURL=main.6f2651ea4d90ef95aa30.hot-update.js.map