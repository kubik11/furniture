
const methods = {
      init : function( options ) {  
        let self = methods.contextBind();    
        console.log(self);
         self.config = $.extend({},
            {
                speed : 2000,
                direction: 'left',
                quantity: 1 
            },
            options);
        let main = function(e){   
            self.container = $(e);
            self.container.css({
                'position': 'relative',
                'overflow': 'hidden'
            });
            self.containerWidth = self.container.css('width');
            
            self.containerHeight = self.container.css('height');
            self.children = self.container.children();
            self.childrenWidthDimention = self.children.length * Number(self.containerWidth.slice(0,-2));
            self.childrenWrapper = $("<div/>",{
                class: "children-wrapper",
                position: 'absolute',        
            }).css({
                // Define the width of container by parent width value
                'width': `${self.children.length * Number(self.containerWidth.slice(0,-2))}px`,
                'display': `flex`,
                'position': 'absolute',
                'left' : "0",
                'top' : "0" 
            });
            console.log( self);
            // self.childrenWrapperPosition = Number(self.childrenWrapper.css('left').slice(0, -2)); 

            // insertion all children element into wrapper

            self.children.each(function(i, e){
               let element =  $(e).css({
                    // 'position': 'absolute',
                    'width': `${self.containerWidth}`,
                    'heiht': `${self.containerHeight}`
                });
                self.childrenWrapper.append(element);
            });
            self.container.append( self.childrenWrapper );
            // Condition to execute moving slide
            if(self.config.direction === 'left' || self.config.direction === 'Left' || self.config.direction === 'LEFT'){
                self.timer = setInterval(function(){
                    self.moveLeft();
                },self.config.speed);
            }
        };
        this.each(function(){main(this)});
        return this;
      },
      moveLeft : function() {
          console.log('it\'s a moveLeft method');
          let self = this;
          
          self.childrenWrapperPosition = Number(self.childrenWrapper.css('left').slice(0, -2));
          console.log( self.childrenWrapperPosition);
          let prepareDimention = Number(self.containerWidth.slice(0,-2));
          let slide = function(){
            if(prepareDimention > 0){
                setTimeout(function(){
                    
                        self.childrenWrapper.css({
                        'left': `${ Number(self.childrenWrapper.css('left').slice(0, -2)) - 10}px`
                        });
                        prepareDimention -= 10;
                    if (self.childrenWidthDimention <= Math.abs(self.childrenWrapperPosition)){
                        self.childrenWrapper.css({
                            'left': `${0}px`
                        });
                    }
                    console.log(prepareDimention)
                    slide();  console.log(prepareDimention)
                },1); 
            }   
          }.bind(self);
          slide();
      },
      hide : function( ) {
        // ПРАВИЛЬНЫЙ
      },
      resize : function(){

      },
      update : function( content ) {
        // !!!
      },
      contextBind : function(){
          return this;
      }
};

$.fn.customSlide = function(method){
    // логика вызова метода
    if ( methods[method] ) {
        return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } 
      else if ( typeof method === 'object' || ! method ) {
        return methods.init.apply( this, arguments );
      } 
      else {
        $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
      } 
};

module.exports  = $.fn.customSlide;
