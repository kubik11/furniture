webpackHotUpdate("main",{

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var methods = {
  init: function init(options) {
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
  },
  show: function show() {
    console.log('its a show method');
  },
  hide: function hide() {
    // ПРАВИЛЬНЫЙ
  },
  update: function update(content) {
    // !!!
  }
};

$.fn.customSlide = function (method) {
  // логика вызова метода
  if (methods[method]) {
    return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
  } else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) {
    return methods.init.apply(this, arguments);
  } else {
    $.error('Метод с именем ' + method + ' не существует для jQuery.tooltip');
  }
};

module.exports = $.fn.customSlide;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

})
//# sourceMappingURL=main.5351e56fb49969f09823.hot-update.js.map