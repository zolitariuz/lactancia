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
	logo.attr('data-900', 'width: 120px; left:' + left_width + 'px;');
	logo.attr('data-6750', 'width: 120px; left:' + left_width + 'px;');
	logo.attr('data-6900', 'width: 0px; left:' + left_width + 'px;');

	//Skroller
	var s = skrollr.init();

	$(window).on('scroll', function(){
		scroll = $(window).scrollTop();
		//Nav
		nav.animate({
			'right': 100
		}, 500);

		console.log(scroll);
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

	 	left_width	 		= ($(window).width() - 900) / 2,
	// 	left_width_nav		= left_width + 30;
	 	half_width			= ($(window).width() / 2) - 135,
	 	half_width_logo_g 	= half_width;
	// 	half_width_logo_ch 	= left_width+70;

	 	logo.attr('data-300', 'width: 250px; left:' + half_width_logo_g + 'px;');
		logo.attr('data-900', 'width: 120px; left:' + left_width + 'px;');
		s.refresh();

	});

	//ScrollTo días
	var dia;
	$('.dia').on('click', function(e){
		e.preventDefault();
		dia = $(this).data('dia');
		console.log('#'+dia);
		$.scrollTo( '#'+dia, 2000, {offset: -100 } );
	});

	//ScrollTo Flechas
	var flecha;
	var donde_estoy;
	$('.flecha').on('click', function(){
		donde_estoy = $(window).scrollTop()
		console.log(donde_estoy);

		if ( $(this).hasClass('up') ){
			console.log('up');
			navegacion_up();


		} else if ( $(this).hasClass('down') ){
			console.log('down');
			navegacion_down();

		}
	});

	//Efecto share
	var compartir = $('.compartir'),
		fb = $('.facebook'),
		twitter = $('.twitter'),
		pinterest = $('.pinterest'),
		mail = $('.mail'),
		todos_compartir = $('.facebook, .twitter, .pinterest, .mail');

	todos_compartir.hide();

	compartir.on('click', function(){
		todos_compartir.slideToggle('fast');
	});

	$(window).on('keydown', function(e){
		if ( e.keyCode === 38 ){
			navegacion_up();
		} else if ( e.keyCode === 40 ){
			navegacion_down();
		}
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
		donde_estoy = $(window).scrollTop()

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


});