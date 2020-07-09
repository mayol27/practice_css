jQuery(function($){
  $(".slider_top").each(function() {
    $(this).slick({
			autoplay:true,
			autoplaySpeed:5000,
			dots:true,
			arrows:true,
			infinite:true,
			slidesToScroll:1,
    });
  });

    $('.slider_cont_357').each(function(){
		$(this).slick({
			autoplay:true,
			autoplaySpeed:5000,
			dots:false,
			arrows: true,
			infinite: true,
			slidesToScroll:1,
			centerMode:true,
			slidesToShow:7,
			responsive: [
				{
					breakpoint: 1051,
					settings: {
						slidesToShow: 5,
					}
				},
				{
					breakpoint: 771,
					settings: {
						slidesToShow: 3,
					}
				}
			]
		});
	});
	
    $('.slider_cont_135').each(function(){
		$(this).slick({
			autoplay:true,
			autoplaySpeed:5000,
			dots:false,
			arrows: true,
			infinite: true,
			slidesToScroll:1,
			centerMode:true,
			slidesToShow:5,
			responsive: [
				{
					breakpoint: 1051,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 771,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	});

    $('.slider_cont_113').each(function(){
		$(this).slick({
			autoplay:true,
			autoplaySpeed:5000,
			dots:false,
			arrows:true,
			infinite: true,
			slidesToScroll:1,
			centerMode:true,
			slidesToShow:3,
			responsive: [
				{
					breakpoint: 1051,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 771,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	});
});