const $ = require('jquery');
const _ = require('underscore');


class MobileMenu{
    constructor(container, parent_menu){
        this.container = container;
        this.parent_menu = parent_menu;
    }
    init(){
        console.log('mobile menu initialization');
        let container = $(`${this.container}`);
        let ul = $("<ul/>",{
            class: "mobile-menu-list"          
        });
        container.css({"position":"absolute", 
                        "top": "0",
                        "right": "10000px"
        });
        // extract children from the parent container of desktop menu 
        let children = $(`${this.parent_menu}`).children().clone();
        
        children.each( function(){
            ul.append($(this));
            // console.log(ul);
        });
        container.append(ul);
    }
    show(){
        let container = $(`${this.container}`);  
        // console.log( Number(container.css("right").slice(0,-2)));
        
        if( Number(container.css("right").slice(0,-2)) > 0){
            container.css({"position":"absolute", 
                "top": "0",
                "right": `${ Number(container.css("right").slice(0,-2)) - 100 }px`
            }); 
            console.log( container.css("right"));
            setTimeout(this.show(), 20);
        }
    }
    hide(){
        let container = $(`${this.container}`);  
        // console.log( Number(container.css("right").slice(0,-2)));
        
        if( Number(container.css("right").slice(0,-2)) < 10000){
            container.css({"position":"absolute", 
                "top": "0",
                "right": `${ Number(container.css("right").slice(0,-2)) + 100 }px`
            }); 
            console.log( container.css("right"));
            setTimeout(this.hide(), 20);
        }
    }
}
module.exports = MobileMenu;