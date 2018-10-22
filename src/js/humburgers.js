const $ = require('jquery');
const _ = require('underscore');
import MobileMenu from './mobile_menu.js'
import {mobile} from './app.js'


class Humburger{
	constructor(className, targetToggle, addedClass, additional){
		this.className = document.getElementsByClassName(`${className}`);
		this.targetToggle = document.getElementsByClassName(`${targetToggle}`);
		this.addedClass =  addedClass;
		this.additional = additional;
	}
	init(){
		if(this.additional){
			let list = this.additional.indexOf(',') == -1;
			let arr = [];
			if(!list){
				this.additional = this.additional.split(',');
				[].forEach.call(this.additional, (e,i,arr)=>{
					let it = document.getElementsByClassName(e);
					arr.push(it);
				});
			}else{
				let it = document.getElementsByClassName(this.additional);
				arr = it;
			}
			this.additional = arr;
		}
		console.log(typeof this.additional);
	}
	go(){
		[].forEach.call(this.className, (elem)=>{
			if(!elem.classList.contains('is-active')){
				this.open();
				mobile.show();
			}else{
				this.close();
				mobile.hide();
			}
		});
	}
	open(){
		[].forEach.call(this.className, (i)=>{
			i.classList.add('is-active');
			console.log('add is-actie button');
		});
	}
	close(){
		[].forEach.call(this.className, (elem)=>{
			elem.classList.remove('is-active');
			console.log('remove is-actie button');
		});	
	}
	hide(){
		[].forEach.call(this.targetToggle, (e)=>{
			e.classList.remove(this.addedClass);
		});
		[].forEach.call(this.additional, (i)=>{
			i.classList.remove('none');
		});		
	}
	show(){
		[].forEach.call(this.targetToggle, (e)=>{
			e.classList.add(this.addedClass);
		});	
		[].forEach.call(this.additional, (i)=>{
			i.classList.add('none');
		});	
	}
}

module.exports = Humburger;