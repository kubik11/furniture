console.log('app has started');
import '../css/fonts.css';
// const $ = require('jquery');
const _ = require('underscore');
// import $ from "jquery";
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import '../css/style.sass';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel';
import '../css/media.sass';
const Custumer = require('./about.js');
import {Search} from './about.js'
const custumers = require('./custumers.js');
import Humburgers from './humburgers.js'
import MobileMenu from './mobile_menu.js'
import Resize from './resize.js'
import customSlide from './slider.js'
 // let user = new Custumer( custumers[0] );
//  initialization of mobile menu
const mobile = new MobileMenu('.mobile-menu', '.navigation');
	mobile.init();
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
// initialization the button wind-down
const button = new Humburgers('hamburger', 'header-inner', 'breakpoint', 'main-nav');
	button.init();
// initialization the resizing window
const resize = new Resize(button);
document.addEventListener("DOMContentLoaded", resize.go());
window.onresize = ()=>{
	resize.go();
}

[].forEach.call(button.className, (b)=>{
	b.addEventListener('click', ()=>{
		button.go();
		// mobile.show();		
	});
});

$('.slider').customSlide();

export {mobile}