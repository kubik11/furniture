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
            container.css({ "position": "absolute",
                "top": "0",
                "right": "10000px"
            });
            // extract children from the parent container of desktop menu 
            var children = $('' + this.parent_menu).children().clone();

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
            // console.log( Number(container.css("right").slice(0,-2)));

            if (Number(container.css("right").slice(0, -2)) > 0) {
                container.css({ "position": "absolute",
                    "top": "0",
                    "right": Number(container.css("right").slice(0, -2)) - 100 + 'px'
                });
                console.log(container.css("right"));
                setTimeout(this.show(), 20);
            }
        }
    }, {
        key: 'hide',
        value: function hide() {
            var container = $('' + this.container);
            // console.log( Number(container.css("right").slice(0,-2)));

            if (Number(container.css("right").slice(0, -2)) < 10000) {
                container.css({ "position": "absolute",
                    "top": "0",
                    "right": Number(container.css("right").slice(0, -2)) + 100 + 'px'
                });
                console.log(container.css("right"));
                setTimeout(this.hide(), 20);
            }
        }
    }]);

    return MobileMenu;
}();

module.exports = MobileMenu;

/***/ })

})
//# sourceMappingURL=main.6586ed7ba4b274f495ab.hot-update.js.map