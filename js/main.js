$(function() {
    // code..
})

$(document).on('click','.portfolio_block_open', function() {

       $('.portfolio_block_add').show("slow");
	   $('.portfolio_block_open').toggleClass('opened');
		

    });
	$(document).on('click','.opened', function() {

       $('.portfolio_block_add').hide("slow");

		

    });
	$(function(){
		$(window).scroll(function() {

		if($(this).scrollTop() >= 600) {
			$('.header_nav').addClass('stickytop');
			}
			else{
				$('.header_nav').removeClass('stickytop');
				}
			});
		});
		

	
	
