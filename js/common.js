$(document).ready(function() {

	$(".portfolio-item").on('click' , function(){

		var active = $(this).parent().find('.active').removeClass('active');
		$(this).addClass('active');

		var item_num = $(this).attr('data-portfolio-item');
		var str = ('.portfolio-item-' + item_num);

		for (var i = 1; i <= 5; i++) {
			var check = '.portfolio-item-' + i;
			if(check == str) {
				$(str).show();	
			}
			else if(str == '.portfolio-item-1') {
				continue;
			}
			else $(check).hide();

	}

	})

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".hidden_menu").slideToggle();
		$('#carousel-example-generic').slideToggle();
		return false;
	});

	var checkState = true;

	$('.readMore').on('click' , function(){



	var text = $(this).find('.hidden_text');
	
	if(checkState) {
		checkState = false;
		text.slideToggle();
	}	
	else  {
		checkState = true;
		text.slideToggle();
	}

	$(this).on('mouseleave' , function(){
		text.fadeOut();
		checkState = true;
	})

	})

	var numberDiv = $('.grad_wrap');
	var Pos = numberDiv.offset();
	var scrollCheck = true;



	$(window).scroll(function(){    
		if ($(window).scrollTop() > Pos.top*2.3 && scrollCheck) {
			$('.count').each(function () {
				$(this).prop('Counter',0).animate({
					Counter: $(this).text()
				}, {
					duration: 2200,
					easing: 'swing',
					step: function (now) {
						$(this).text(Math.ceil(now));
					}
				});
			});
			scrollCheck = false;
		}
	});

	ScreenWidth = screen.width;     
	ScreenHeight = screen.height;    

	$('.img_toggle').on('click' , function(){
		var imgWidth = $(this).css('width');
		var imgHeight = $(this).css('height');


		imgWidth = +imgWidth.substr(0,imgWidth.length - 2);
		imgHeight = +imgHeight.substr(0,imgHeight.length - 2);

		$(this).css('position','absolute');
		$(this).css('top',ScreenHeight/2 - imgHeight);
		$(this).css('left',ScreenWidth/2 - imgWidth);
		$(this).css('z-index','10');

	})

});