const $ = require('jquery');
const _ = require('underscore');
import Humburgers from './humburgers.js'
import MobileMenu from './mobile_menu.js'
const mobile = new MobileMenu('.mobile-menu', '.navigation');
console.log(mobile);
class Resize{
	constructor(button){
		 this.button = button;
	}
	// window.screen.width
	go(){
		if(window.outerWidth  < 767){
			this.button.close();
			this.button.show();
			console.log('view is less than 767px');
		}else{
			this.button.close();
			this.button.hide();
		}
		mobile.hide();
	}
}
module.exports = Resize;