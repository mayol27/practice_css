document.addEventListener('DOMContentLoaded', function(){ 
	var html_val = document.getElementsByTagName("main")[0].innerHTML;
	if( String(html_val).indexOf('modal_main') != -1 ){
		$('main').append('<div class="modal_bg"></div>');
		var w = $(window).width();
		var h = $(window).height();
		var cw = $('.modal_main').outerWidth();
		var ch = $('.modal_main').outerHeight();
		$('.modal_main').css({
			'left': ((w - cw)/2) + 'px',
			'top': ((h - ch)/2) + 'px'
		});
   		$('.modal_main,.modal_bg').fadeIn('fast');
   		$('.modal_bg,.close_btn').click(function(){
			$('.modal_main,.modal_bg,.close_btn').fadeOut('fast');
			$('.modal_bg').remove();
		});
   	}
});

document.addEventListener('DOMContentLoaded', function(){ 
	click_modal(1);
	click_modal(2);
	click_modal(3);
	click_modal(4);
	click_modal(5);
	click_modal(6);
	click_modal(7);
	click_modal(8);
	click_modal(9);
	click_modal(10);
	function click_modal(click_num){
		var click_val1 = '.modal_open' + click_num;
		var click_val2 = '.modal_click' + click_num;
		var click_val3 = '.modal_click' + click_num + ',.modal_bg,.close_btn';
		$(click_val1).click(function(){
			$('main').append('<div class="modal_bg"></div>');
			var w = $(window).width();
			var h = $(window).height();
			var cw = $(click_val2).outerWidth();
			var ch = $(click_val2).outerHeight();
			$(click_val2).css({
				'left': ((w - cw)/2) + 'px',
				'top': ((h - ch)/2) + 'px'
			});
			$(click_val3).fadeIn('fast');
			$('.close_btn').click(function(){
				$(click_val3).fadeOut('fast');					$('.modal_bg').remove();
			});
			$('.modal_bg').click(function(){
				$(click_val3).fadeOut('fast');					$('.modal_bg').remove();
			});
		});
	}
});
	
	
		