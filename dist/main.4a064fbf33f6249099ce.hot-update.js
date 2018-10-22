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
            var self = this;
            // console.log(e);
            self.container = e.css({
                'position': 'relative',
                'overflow': 'hidden'
            });
            self.containerWidth = self.container.css('width');
            self.containerHeight = self.container.css('height');
            self.children = self.container.children().css({
                'position': 'absolute',
                'width': self.containerWidth + 'px',
                'heiht': self.containerHeight + 'px'
            });
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
//# sourceMappingURL=main.4a064fbf33f6249099ce.hot-update.js.map