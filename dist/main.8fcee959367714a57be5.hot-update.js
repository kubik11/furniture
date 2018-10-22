webpackHotUpdate("main",{

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
        console.log(e);
    };
    this.each(function () {
        main(this);
    });
    return this;
};

module.exports = $.fn.customSlide;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

})
//# sourceMappingURL=main.8fcee959367714a57be5.hot-update.js.map