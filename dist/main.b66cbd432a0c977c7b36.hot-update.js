webpackHotUpdate("main",{

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/fonts.css */ "./src/css/fonts.css");
/* harmony import */ var _css_fonts_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_fonts_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_style_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.sass */ "./src/css/style.sass");
/* harmony import */ var _css_style_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_sass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.min.css */ "./node_modules/owl.carousel/dist/assets/owl.carousel.min.css");
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(owl_carousel_dist_assets_owl_carousel_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_5__);
console.log('app has started');

// const $ = require('jquery');
const _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
// import $ from "jquery";





const Custumer = __webpack_require__(/*! ./about.js */ "./src/js/about.js");
const custumers = __webpack_require__(/*! ./custumers.js */ "./src/js/custumers.js");

// let user = new Custumer.Custumer( custumers[0] );

$('#push').click(function(){
	let val = $('#in').val();
	let counter = false;
	custumers.forEach(( elem, i, arr)=>{
		if(elem.name == val){
			counter = !counter;
			console.log(elem);
		}else{
			if (!counter) {
				console.log('nothing has found');
			}
		}
	});
	// console.log('it ckicked');
});


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

})
//# sourceMappingURL=main.b66cbd432a0c977c7b36.hot-update.js.map