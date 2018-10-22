webpackHotUpdate("main",{

/***/ "./src/js/mobile_menu.js":
/*!*******************************!*\
  !*** ./src/js/mobile_menu.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var _ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");

var MobileMenu = function () {
    function MobileMenu(container, parent_menu) {
        _classCallCheck(this, MobileMenu);

        this.container = container;
        this.parent_menu = parent_menu;
    }

    _createClass(MobileMenu, [{
        key: 'init',
        value: function init() {
            console.log('mobile menu initialization');
            var container = $('' + this.container);
            var ul = $("<ul/>", {
                class: "mobile-menu-list"
            });
            container.attr({ "position": "absolute",
                "top": "0",
                "right": "9999"
            });
            // extract children from the parent container of desktop menu 
            var children = $('' + this.parent_menu).children();

            children.each(function () {
                ul.append($(this));
                // console.log(ul);
            });
            container.append(ul);
        }
    }, {
        key: 'show',
        value: function show() {

            var container = $('' + this.container);
            console.log(container.attr("top"));
            // while(container.attr("right") != 0){
            container.attr({ "position": "absolute",
                "top": "0",
                "right": '' + (container.attr("right") - 2)
            });
            //     setTimeout(this.show(),10);
            // }
        }
    }]);

    return MobileMenu;
}();

module.exports = MobileMenu;

/***/ })

})
//# sourceMappingURL=main.24ec9a44b44a5806ae2d.hot-update.js.map