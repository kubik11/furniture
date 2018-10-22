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
            var _this = this;

            console.log('mobile menu initialization');
            var container = $('' + this.container);
            var ul = $("<ul/>", {
                class: "mobile-menu-list"
            });
            container.css({ "position": "absolute",
                "top": 0 + "px",
                "right": 9999 + "px"
            });
            // extract children from the parent container of desktop menu 
            var children = $('' + this.parent_menu).children();
            console.log(children);
            children.each(function () {
                ul.append($(_this));
            });
            container.append(ul);
        }
    }]);

    return MobileMenu;
}();

module.exports = MobileMenu;

/***/ })

})
//# sourceMappingURL=main.2a161ca6d8bb36b9ac44.hot-update.js.map