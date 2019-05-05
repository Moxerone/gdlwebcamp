$(function(){
	'use strict';//para que js se ejecute de modo estricto

	$('.nuestros-servicios div:first').show();
	$('.servicios nav a:first').addClass('activo');

	$('.servicios nav a').on('click', mostrarTabs);

	function mostrarTabs(){
		$('.servicios nav a').removeClass('activo');
		$(this).addClass('activo');
		var enlace = $(this).attr('href');
		$('.nuestros-servicios div').fadeOut();
		$(enlace).fadeIn();
		return false;
	}

	/*
	var proximosViajes = ['Londres', 'Valencia', 'Madrid', 'Paris', 'Milan'];
		console.log(proximosViajes);
	$.each(proximosViajes, function(i, v){
		if (i == 0) {
			$('aside').append('<h2>Próximos Viajes</h2>');
		}
		$('aside').append('<li>' + v +'</li>');
	});

	var ViajesPorFecha = {
		primero: 'Londres',
		segundo: 'Valencia',
		tercero: 'Madrid',
		cuarto: 'Paris',
		quinto: 'Milan'
	};
	console.log(ViajesPorFecha);

	$.each(ViajesPorFecha, function(i, v){
		$('aside').append('<li>' + i + '-' + v + '</li>');
	});

	/*
	$('aside').load('promociones.html');

	/*
	//ajax and jQuery
	$('div.logo img').on('click', cargarAjax);

	function cargarAjax(){
		$.ajax('promociones.txt',{
			success: agregarContenido,
			type:'GET',
			datatype:'text'
		});
	}

	function agregarContenido(data, status, jqxhr){
		$('aside').text(data);
		console.log(status);
	}



	/*
	$('.logo img').click(function(){
		$('main article:first').slideUp(1000);
	});

	$('aside').click(function(){
		$('main article:first').slideDown(1000);
	});

	/*
	//Eventos jQuery
	$('.logo img').on('click', function(){
		$(this).animate({'width': '200px'}, 1000);
	});

	$('main article img').on('mouseenter', aumentarImagen);
	$('main article img').on('mouseleave', disminuirImagen);

	function aumentarImagen(){
		$(this).animate({'width':'100%'});
	}
	function disminuirImagen(){
		$(this).animate({'width':'350px'});
	}




		/*
	}
	}
	$('.navegacion').show();


	//Cambiando atributos con CSS
	$('.logo img').css({'width': '300px'});

	//cambiando de color 
	$('main article h2').css({'color': '#000000'});

	//cambiando varios atributos
	$('aside').css({'background-color': '#e1e1e1',
					'text-transform': 'uppercase',
					'padding': '20px'
	});

	//Cambiando atributos con funciones
	$('.navegacion ul li a').on('mouseenter', cambiarColor);

	function cambiarColor(){
		$('.navegacion').css('background-color', 'red');
	}
	*/


	/*
	//funcion para cambiar la imagen
	$('main article:first img').on('click', function(){
		$(this).attr('src', 'img/imagen_2.jpg');
	});
	*/

	/*
	//Eventos
	$('main').on({
		click:function(){
			$(this).addClass('fonodrojo activo');
		},mouseenter: function(){
			$(this).addClass('fondorojo');
		},mouseleave: function(){
			$(this).addClass('activo');
		}
	})
	*/

	/*
	//Borrando y Mostrando Contenido jQuery
	$('div.logo img').addClass('activo');

	$('.navegacion').show();
	$('main article:first').addClass('activo');

	 $('.navegacion ul li a').on('click', function(event){
	 	$('.navegacion ul li a').removeClass('activo');
	 	event.preventDefault();
	 	$(this).addClass('activo');
	 });
	*/


	/*
	$('#menu').on('click', function(){
		$('#navegacion').show();
	});
	*/

	/*
	//Borrando y Mostrando Contenido jQuery
	$('div.logo img').on('mouseenter', function(){
		console.log("sobre el logo");
	});

	$('div.logo img').on('mouseleave', function(){
		console.log("Fuera del logo");
	});
	*/


	/*
	//Borrando y Mostrando Contenido jQuery
	$('div.logo img').on('click', function(){
		$(this).remove();
	});
	*/
	
	/*
	//Borrando y Mostrando Contenido jQuery selector
	$('main article:first').hide();

	$('div.logo img').on('click', function(){
		console.log("Has hecho click en el logo");
	});
	*/

	/*
	//append agrega el clon al final y al inicio prepend
	var copia = $('main article:last').clone();
	$('main').prepend(copia);
	*/

	/*
	//Estos selectores hacen lo mismo
	var copia = $('main article:last').clone();
	$(copia).prependTo('main');
	*/

	

});
