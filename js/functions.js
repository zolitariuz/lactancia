$(function(){
'use strict';

	//Variables
	var logo          		= $('.logo'),
		nav 		  		= $('.nav'),
		logo_control  		= true,
		scroll        		= 0,
		left_width	  		= ($(window).width() - 900) / 2,
		left_width_logo		= left_width + 90,
		left_width_nav		= left_width + 30,
		half_width			= ($(window).width() / 2) - 135,
		half_width_logo_g 	= half_width,
		half_width_logo_ch 	= left_width+30;

	logo.attr('data-300', 'width: 250px; left:' + half_width_logo_g + 'px;');
	logo.attr('data-800', 'width: 120px; left:' + left_width + 'px;');
	logo.attr('data-6750', 'width: 120px; left:' + left_width + 'px;');
	logo.attr('data-6900', 'width: 0px; left:' + left_width + 'px;');

	//Skroller
	var s = skrollr.init();

	//iPhone,iPad, etc…
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		nav.hide();
		$('.scroll_down').hide();

		$(window).on('scroll', function(){
			var scroll_movil = $(window).scrollTop();

			if (scroll_movil >= 600){
				$('.logo_movil').fadeIn();
			} else {
				$('.logo_movil').fadeOut();
			}
		});

	}

	$(window).on('scroll', function(){
		scroll = $(window).scrollTop();
		//Nav
		nav.animate({
			'right': 30
		}, 500);

		var donde_estoy_auto = $(window).scrollTop();
		var dias = $('.dia');

		if ( donde_estoy_auto < 600 ){
			dias.removeClass('hovered');

		} else if ( donde_estoy_auto >= 600 && donde_estoy_auto < 1500  ){
			dias.removeClass('hovered');
			$('.uno').addClass('hovered');
		} else if ( donde_estoy_auto >= 1500 && donde_estoy_auto < 2400  ){
			dias.removeClass('hovered');
			$('.dos').addClass('hovered');
		} else if ( donde_estoy_auto >= 2400 && donde_estoy_auto < 3300  ){
			dias.removeClass('hovered');
			$('.tres').addClass('hovered');
		} else if ( donde_estoy_auto >= 3300 && donde_estoy_auto < 4200  ){
			dias.removeClass('hovered');
			$('.cuatro').addClass('hovered');
		} else if ( donde_estoy_auto >= 4200 && donde_estoy_auto < 5100  ){
			dias.removeClass('hovered');
			$('.cinco').addClass('hovered');
		} else if ( donde_estoy_auto >= 5100 && donde_estoy_auto < 6000  ){
			dias.removeClass('hovered');
			$('.seis').addClass('hovered');
		} else if ( donde_estoy_auto >= 6000 && donde_estoy_auto < 6900  ){
			dias.removeClass('hovered');
			$('.siete').addClass('hovered');
		} else if ( donde_estoy_auto >= 6900 && donde_estoy_auto < 7800  ){
			dias.removeClass('hovered');
			$('.ocho').addClass('hovered');
		}

	});

	//Nav
	// function set_nav_position(){

	// 	var width     = ( $(window).width() - 900 ) / 2,
	// 		width_nav = width + 30;
	// 	nav.animate({
	// 		'right': width_nav
	// 	}, 200);
	// }


	// var doit;
	$(window).on('resize', function (){
	// 	window.clearTimeout(doit)
	// 	doit = setTimeout(set_nav_position, 400);
	// 	left_width_nav		= left_width + 30;
	// 	half_width_logo_ch 	= left_width+70;

	 	left_width	 		= ($(window).width() - 900) / 2,
	 	half_width			= ($(window).width() / 2) - 135,
	 	half_width_logo_g 	= half_width;

	 	logo.attr('data-300', 'width: 250px; left:' + half_width_logo_g + 'px;');
		logo.attr('data-900', 'width: 120px; left:' + left_width + 'px;');
		s.refresh();

	});

	//ScrollTo días
	var dia;
	$('.dia').on('click', function(e){
		e.preventDefault();
		dia = $(this).data('dia');
		$.scrollTo( '#'+dia, 2500, {offset: -100 } );
	});

	//ScrollTo Flechas
	var flecha;
	var donde_estoy;
	$('.flecha').on('click', function(){
		donde_estoy = $(window).scrollTop()

		if ( $(this).hasClass('up') ){
			navegacion_up();
		} else if ( $(this).hasClass('down') ){
			navegacion_down();
		}
	});

	$(window).on('keydown', function(e){
		if ( e.keyCode === 38 ){
			navegacion_up();
		} else if ( e.keyCode === 40 ){
			navegacion_down();
		}
	});

	//Mail
	var content,
		subject,
		imagen,
		share_url,
		mail_str;

	$('.open_mail').click(function(e){
		e.preventDefault();

		content = 'Amamantar es un esfuerzo que vale la pena. Éste es uno de los prácticos consejos que te ayudarán a disfrutar de una lactancia exitosa junto a tu bebé. Amamanta, hazlo por los dos. http://publicislead.com/lactancia/'

		mail_str = "mailto:?subject=";
		mail_str += "&body=" + content ;
		location.href = mail_str;
	});

	function navegacion_up(){
		donde_estoy = $(window).scrollTop();

		if ( donde_estoy < 600 ){
		} else if ( donde_estoy >= 600 && donde_estoy < 1500  ){
			$.scrollTo( '#home', 2000, {offset: -100 } );
		} else if ( donde_estoy >= 1500 && donde_estoy < 2400  ){
			$.scrollTo( '#uno', 2000, {offset: -100 } );
		} else if ( donde_estoy >= 2400 && donde_estoy < 3300  ){
			$.scrollTo( '#dos', 2000, {offset: -100 } );
		} else if ( donde_estoy >= 3300 && donde_estoy < 4200  ){
			$.scrollTo( '#tres', 2000, {offset: -100 } );
		} else if ( donde_estoy >= 4200 && donde_estoy < 5100  ){
			$.scrollTo( '#cuatro', 2000, {offset: -100 } );
		} else if ( donde_estoy >= 5100 && donde_estoy < 6000  ){
			$.scrollTo( '#cinco', 2000, {offset: -100 } );
		} else if ( donde_estoy >= 6000 && donde_estoy < 6900  ){
			$.scrollTo( '#seis', 2000, {offset: -100 } );
		} else if ( donde_estoy >= 6900 && donde_estoy < 7800  ){
			$.scrollTo( '#siete', 2000, {offset: -100 } );
		}
	}

	function navegacion_down(){
		donde_estoy = $(window).scrollTop();

		if ( donde_estoy < 600 ){
			$.scrollTo( '#uno', 2000, {offset: -100 } );
		} else if ( donde_estoy >= 600 && donde_estoy < 1500  ){
			$.scrollTo( '#dos', 2000, {offset: -100 } );
		} else if ( donde_estoy >= 1500 && donde_estoy < 2400  ){
			$.scrollTo( '#tres', 2000, {offset: -100 } );
		} else if ( donde_estoy >= 2400 && donde_estoy < 3300  ){
			$.scrollTo( '#cuatro', 2000, {offset: -100 } );
		} else if ( donde_estoy >= 3300 && donde_estoy < 4200  ){
			$.scrollTo( '#cinco', 2000, {offset: -100 } );
		} else if ( donde_estoy >= 4200 && donde_estoy < 5100  ){
			$.scrollTo( '#seis', 2000, {offset: -100 } );
		} else if ( donde_estoy >= 5100 && donde_estoy < 6000  ){
			$.scrollTo( '#siete', 2000, {offset: -100 } );
		} else if ( donde_estoy >= 6000 && donde_estoy < 6900  ){
			$.scrollTo( '#info', 2000, {offset: -100 } );
		} else if ( donde_estoy >= 6900 && donde_estoy < 7800  ){
		}
	}

	function contenido_share(){

		donde_estoy = $(window).scrollTop();

		if ( donde_estoy < 600 ){

			return 'http://publicislead.com/lactancia/images/nuevo_logo.png';

		} else if ( donde_estoy >= 600 && donde_estoy < 1500  ){

			return 'http://publicislead.com/lactancia/share_img/tip1.jpg';

		} else if ( donde_estoy >= 1500 && donde_estoy < 2400  ){

			return 'http://publicislead.com/lactancia/share_img/tip2.jpg';

		} else if ( donde_estoy >= 2400 && donde_estoy < 3300  ){

			return 'http://publicislead.com/lactancia/share_img/tip3.jpg';

		} else if ( donde_estoy >= 3300 && donde_estoy < 4200  ){

			return 'http://publicislead.com/lactancia/share_img/tip4.jpg';

		} else if ( donde_estoy >= 4200 && donde_estoy < 5100  ){

			return 'http://publicislead.com/lactancia/share_img/tip5.jpg';

		} else if ( donde_estoy >= 5100 && donde_estoy < 6000  ){

			return 'http://publicislead.com/lactancia/share_img/tip6.jpg';

		} else if ( donde_estoy >= 6000 && donde_estoy < 6900  ){

			return 'http://publicislead.com/lactancia/share_img/tip7.jpg';

		} else if ( donde_estoy >= 6900 && donde_estoy < 7800  ){

			return 'http://publicislead.com/lactancia/share_img/yo.jpg';

		}
	}

});