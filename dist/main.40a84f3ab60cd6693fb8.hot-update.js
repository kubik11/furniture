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
        var self = methods.contextBind();
        console.log(self);
        self.config = $.extend({}, {
            speed: 1000,
            direction: 'left',
            quantity: 1
        }, options);
        var main = function main(e) {
            self.container = $(e);
            self.container.css({
                'position': 'relative',
                'overflow': 'hidden'
            });
            self.containerWidth = self.container.css('width');

            self.containerHeight = self.container.css('height');
            self.children = self.container.children();

            self.childrenWrapper = $("<div/>", {
                class: "children-wrapper",
                position: 'absolute'
            }).css({
                // Define the width of container by parent width value
                'width': self.children.length * Number(self.containerWidth.slice(0, -2)) + 'px',
                'display': 'flex',
                'position': 'absolute',
                'left': "0",
                'top': "0"
            });
            console.log(self);
            // self.childrenWrapperPosition = Number(self.childrenWrapper.css('left').slice(0, -2)); 

            // insertion all children element into wrapper

            self.children.each(function (i, e) {
                var element = $(e).css({
                    // 'position': 'absolute',
                    'width': '' + self.containerWidth,
                    'heiht': '' + self.containerHeight
                });
                self.childrenWrapper.append(element);
            });
            self.container.append(self.childrenWrapper);
            // Condition to execute moving slide
            if (self.config.direction === 'left' || self.config.direction === 'Left' || self.config.direction === 'LEFT') {
                self.timer = setTimeout(function () {
                    self.moveLeft();
                }, self.config.speed);
            }
        };
        this.each(function () {
            main(this);
        });
        return this;
    },
    moveLeft: function moveLeft() {
        console.log('it\'s a moveLeft method');
        var self = this;

        self.childrenWrapperPosition = Number(self.childrenWrapper.css('left').slice(0, -2));
        console.log(self.childrenWrapperPosition);
        var prepareDimention = Number(self.containerWidth.slice(0, -2));
        var slide = function (s_de) {
            if (prepareDimention > 0) {
                setTimeout(function () {
                    self.childrenWrapper.css({
                        'left': self.childrenWrapperPosition - 10 + 'px'
                    });
                    prepareDimention -= 10;
                    console.log(self.childrenWrapper);
                    s_de();
                }, 10);
            }
        }(slide);
    },
    hide: function hide() {
        // ПРАВИЛЬНЫЙ
    },
    resize: function resize() {},
    update: function update(content) {
        // !!!
    },
    contextBind: function contextBind() {
        return this;
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
//# sourceMappingURL=main.40a84f3ab60cd6693fb8.hot-update.js.map