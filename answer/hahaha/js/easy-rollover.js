/*

 * jQuery Easy Rollover

 * ver: 0.3.2

 * Author: Yoshito Kogawa

 */

(function($){

	$.fn.easyRollover = function(config){

		var defaults = {

			suffix: '_out.',

			suffix_replace: '_over.',

			transition: 'moment',	// moment | fade

			opacity: 0.7,

			duration: 250,

			easing: 'linear',

			parent_style_overlap: true

		},

		opt = $.extend(defaults, config);



		for(var i=0;i<this.length;i++){

			(function(elm){

				var src, src_replace, _self, image;

				src = elm[i].getAttribute('src');

				if(src.indexOf(opt.suffix) > -1){

					src_replace = src.replace(opt.suffix, opt.suffix_replace);

					image = new Image();

					image.src = src_replace;



					switch(opt.transition){

						case 'moment':

							$(elm[i]).hover(function(){

								this.setAttribute('src', src_replace);



							}, function(){

								this.setAttribute('src', src);



							});

							break;

						case 'fade':

							var _self = $(elm[i]);

							var _parent = _self.parent();



							_self.css({

								position: 'relative',

								zIndex: 1

							}).hover(function(){

								$(this).stop().fadeTo(opt.duration, 0, opt.easing);



							}, function(){

								$(this).stop().fadeTo(opt.duration, 1, opt.easing);



							});



							if(opt.parent_style_overlap){

								_parent.css({

									position: 'relative',

									display: 'inline-block'

								});

							}



							$(image).addClass('over').css({

								position: 'absolute',

								top: 0,

								left: 0

							});

							_parent.append(image);

							break;

					}



				}else{

					switch(opt.transition){

						case 'fade':

							var _self = $(elm[i]);

							_self.hover(function(){

								_self.stop().fadeTo(opt.duration, opt.opacity, opt.easing);



							}, function(){

								_self.stop().fadeTo(opt.duration, 1, opt.easing);



							});

							break;

					}

				}

			})(this);

		}



		return(this);

	}

})(jQuery);