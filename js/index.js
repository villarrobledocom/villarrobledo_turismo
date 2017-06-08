var pushNotification;
var registroURL = 'http://www.villarrobledo.com/app/registro.php';
var imagenesURL = 'http://www.villarrobledo.com/admin/data/images/mini_'; 
var noticiasURL = 'http://www.villarrobledo.com/app/listado_noticias.php';
var noticiaURL = 'http://www.villarrobledo.com/noticia.php?id=';
var agendaURL = 'http://www.villarrobledo.com/app/listado_actividades.php';
var actividadURL = 'http://www.villarrobledo.com/actividad.php?id=';
var lugaresURL = 'http://www.villarrobledo.com/app/listado_lugares.php';
var municipalURL = 'http://www.villarrobledo.com/app/listado_municipal.php';
var asociacionesyclubesURL = 'http://www.villarrobledo.com/app/listado_asociacionesyclubes.php';
var parquesyjardinesURL = 'http://www.villarrobledo.com/app/listado_parquesyjardines.php';
var alojamientoURL = 'http://www.villarrobledo.com/app/listado_alojamiento.php';
var baresyrestaurantesURL = 'http://www.villarrobledo.com/app/listado_baresyrestaurantes.php';
var bodegasURL = 'http://www.villarrobledo.com/app/listado_bodegas.php';
var artesanosURL = 'http://www.villarrobledo.com/app/listado_artesanos.php';
var enteURL = 'http://www.villarrobledo.com/ente.php?id=';
var enlacesURL = 'http://www.villarrobledo.com/app/listado_enlaces.php';
var imagenesGuiaEmpresarial = "http://agenciadecolocacion.villarrobledo.com/gesac/data/pictures/";
//var notificacionesURL = "";

// Al cargar la página de notificaciones
$(document).on('pagebeforeshow', '#notificaciones', function() {
  /*$.ajax({
    type: 'GET',
    url: notificacionesURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
	  $('#listadonotificaciones').text("");
      $('#listadonotificaciones').append('<ul data-role="listview" data-inset="true" data-filter="true" data-filter-placeholder="Buscar..."></ul>').trigger('create');
      $.each(data, function(i,item) {
        $('#listadonotificaciones ul').append('<li><a href="#"><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span></p></a></li>').trigger('create');
      });
      $('#listadonotificaciones ul').listview('refresh');
    },
    error: function(xhr, status, error) {
      alert("ERROR - xhr.status: " + xhr.status + '\nxhr.responseText: ' + xhr.responseText + '\nxhr.statusText: ' + xhr.statusText + '\nError: ' + error + '\nStatus: ' + status);
    }
  });*/
});

// Al cargar la página de noticias
$(document).on('pagebeforeshow', '#noticias', function() {
  $.ajax({
    type: 'GET',
    url: noticiasURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
	  $('#listadonoticias').text("");
      $('#listadonoticias').append('<ul data-role="listview" data-inset="true"></ul>').trigger('create');
      $.each(data, function(i,item) {
        $('#listadonoticias ul').append('<li><a href="' + noticiaURL + item.id + '"><img src="' + imagenesURL + item.foto + '" /><h3><span class="fecha">' + item.publicacion + '</span>' + item.titulo + '</h3><p>' + item.entradilla + '</p></a></li>').trigger('create');
      });
      $('#listadonoticias ul').listview('refresh');
    },
    error: function(xhr, status, error) {
      alert("ERROR - xhr.status: " + xhr.status + '\nxhr.responseText: ' + xhr.responseText + '\nxhr.statusText: ' + xhr.statusText + '\nError: ' + error + '\nStatus: ' + status);
    }
  });
});
// Al cargar la página de la agenda
$(document).on('pagebeforeshow', '#agenda', function() {
  $.ajax({
    type: 'GET',
    url: agendaURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
	  $('#listadoactividades').text("");
      $('#listadoactividades').append('<ul data-role="listview" data-inset="true"></ul>').trigger('create');
      $.each(data, function(i,item) {
        $('#listadoactividades ul').append('<li><a href="' + actividadURL + item.id + '"><img src="' + imagenesURL + item.foto + '" /><h3><span class="fecha">' + item.inicio + '</span>' + item.nombre + '</h3><p>' + item.descripcion + '</p></a></li>').trigger('create');
      });
      $('#listadoactividades ul').listview('refresh');
    },
    error: function(xhr, status, error) {
      alert("ERROR - xhr.status: " + xhr.status + '\nxhr.responseText: ' + xhr.responseText + '\nxhr.statusText: ' + xhr.statusText + '\nError: ' + error + '\nStatus: ' + status);
    }
  });
});

// Al cargar la página de patrimonio
$(document).on('pagebeforeshow', '#patrimonio', function() {
  $.ajax({
    type: 'GET',
    url: lugaresURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
	  $('#listadolugares').text("");
      $('#listadolugares').append('<ul data-role="listview" data-inset="true"></ul>').trigger('create');
      $.each(data, function(i,item) {
        $('#listadolugares ul').append('<li><a href="' + enteURL + item.id + '"><img src="' + imagenesURL + item.foto + '" /><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span><span class="telefono">' + item.movil + '</span></p></a></li>').trigger('create');
      });
      $('#listadolugares ul').listview('refresh');
    },
    error: function(xhr, status, error) {
      alert("ERROR - xhr.status: " + xhr.status + '\nxhr.responseText: ' + xhr.responseText + '\nxhr.statusText: ' + xhr.statusText + '\nError: ' + error + '\nStatus: ' + status);
    }
  });
});

// Al cargar la página de entesmunicipales
$(document).on('pagebeforeshow', '#entesmunicipales', function() {
  $.ajax({
    type: 'GET',
    url: municipalURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
	  $('#listadomunicipal').text("");
      $('#listadomunicipal').append('<ul data-role="listview" data-inset="true" data-filter="true" data-filter-placeholder="Buscar..."></ul>').trigger('create');
      $.each(data, function(i,item) {
        $('#listadomunicipal ul').append('<li><a href="#"><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span></p></a></li>').trigger('create');
      });
      $('#listadomunicipal ul').listview('refresh');
    },
    error: function(xhr, status, error) {
      alert("ERROR - xhr.status: " + xhr.status + '\nxhr.responseText: ' + xhr.responseText + '\nxhr.statusText: ' + xhr.statusText + '\nError: ' + error + '\nStatus: ' + status);
    }
  });
});

// Al cargar la página de las asociaciones y clubes
$(document).on('pagebeforeshow', '#asociacionesyclubes', function() {
  $.ajax({
    type: 'GET',
    url: asociacionesyclubesURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
      $('#listadoasociacionesyclubes').text("");
      $('#listadoasociacionesyclubes').append('<ul data-role="listview" data-inset="true"></ul>').trigger('create');
      $.each(data, function(i,item) {
        $('#listadoasociacionesyclubes ul').append('<li><a href="' + enteURL + item.id + '"><img src="' + imagenesURL + item.foto + '" /><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span><span class="telefono">' + item.movil + '</span></p></a></li>').trigger('create');
      });
      $('#listadoasociacionesyclubes ul').listview('refresh');
    },
    error: function(xhr, status, error) {
      alert("ERROR - xhr.status: " + xhr.status + '\nxhr.responseText: ' + xhr.responseText + '\nxhr.statusText: ' + xhr.statusText + '\nError: ' + error + '\nStatus: ' + status);
    }
  });
});

// Al cargar la página de parques y jardines
$(document).on('pagebeforeshow', '#parquesyjardines', function() {
  $.ajax({
    type: 'GET',
    url: parquesyjardinesURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
      $('#listadoparquesyjardines').text("");	  
      $('#listadoparquesyjardines').append('<ul data-role="listview" data-inset="true"></ul>').trigger('create');
      $.each(data, function(i,item) {
        $('#listadoparquesyjardines ul').append('<li><a href="' + enteURL + item.id + '"><img src="' + imagenesURL + item.foto + '" /><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span><span class="telefono">' + item.movil + '</span></p></a></li>').trigger('create');
      });
      $('#listadoparquesyjardines ul').listview('refresh');
    },
    error: function(xhr, status, error) {
      alert("ERROR - xhr.status: " + xhr.status + '\nxhr.responseText: ' + xhr.responseText + '\nxhr.statusText: ' + xhr.statusText + '\nError: ' + error + '\nStatus: ' + status);
    }
  });
});

// Al cargar la página del alojamiento
$(document).on('pagebeforeshow', '#alojamiento', function() {
clearInterval(varSlideshow);
  $.ajax({
    type: 'GET',
    url: alojamientoURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
	  $('#listadoalojamiento').text("");
      $('#listadoalojamiento').append('<ul data-role="listview" data-inset="true"></ul>').trigger('create');
      $.each(data, function(i,item) {
		if(item.foto != null){
        $('#listadoalojamiento ul').append('<li><a href="#ficha?parametro='+item.denominacion+'&categoria=listado_alojamiento.php"><img src="' + imagenesGuiaEmpresarial + item.foto + '" /><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span><span class="telefono">' + item.movil + '</span></p></a></li>').trigger('create');
		}
		else{
		$('#listadoalojamiento ul').append('<li><a href="#ficha?parametro='+item.denominacion+'&categoria=listado_alojamiento.php"><img src="" /><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span><span class="telefono">' + item.movil + '</span></p></a></li>').trigger('create');	
		}
	  });
      $('#listadoalojamiento ul').listview('refresh');
    },
    error: function(xhr, status, error) {
      alert("ERROR - xhr.status: " + xhr.status + '\nxhr.responseText: ' + xhr.responseText + '\nxhr.statusText: ' + xhr.statusText + '\nError: ' + error + '\nStatus: ' + status);
    }
  });
});

// Al cargar la página de bares y restaurantes
$(document).on('pagebeforeshow', '#baresyrestaurantes', function() {
clearInterval(varSlideshow);
  $.ajax({
    type: 'GET',
    url: baresyrestaurantesURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
	  $('#listadobaresyrestaurantes').text("");
      $('#listadobaresyrestaurantes').append('<ul data-role="listview" data-inset="true" data-filter="true" data-filter-placeholder="Buscar..."></ul></ul>').trigger('create');
      $.each(data, function(i,item) {
		  if(item.foto != null){
			$('#listadobaresyrestaurantes ul').append('<li><a href="#ficha?parametro='+item.denominacion+'&categoria=listado_baresyrestaurantes.php"><img src="' + imagenesGuiaEmpresarial + item.foto + '" /><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span><span class="telefono">' + item.movil + '</span></p></a></li>').trigger('create');
		  }
		  else{
        $('#listadobaresyrestaurantes ul').append('<li><a href="#ficha?parametro='+item.denominacion+'&categoria=listado_baresyrestaurantes.php"><img src="" /><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span><span class="telefono">' + item.movil + '</span></p></a></li>').trigger('create');
		  }
		});
      $('#listadobaresyrestaurantes ul').listview('refresh');
    },
    error: function(xhr, status, error) {
      alert("ERROR - xhr.status: " + xhr.status + '\nxhr.responseText: ' + xhr.responseText + '\nxhr.statusText: ' + xhr.statusText + '\nError: ' + error + '\nStatus: ' + status);
    }
  });
});

// Al cargar la página de bodegas
$(document).on('pagebeforeshow', '#bodegas', function() {
clearInterval(varSlideshow);
  $.ajax({
    type: 'GET',
    url: bodegasURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
	  $('#listadobodegas').text("");
      $('#listadobodegas').append('<ul data-role="listview" data-inset="true"></ul>').trigger('create');
      $.each(data, function(i,item) {
		if(item.foto != null){
        $('#listadobodegas ul').append('<li><a href="#ficha?parametro='+item.denominacion+'&categoria=listado_bodegas.php"><img src="' + imagenesGuiaEmpresarial + item.foto + '" /><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span><span class="telefono">' + item.movil + '</span></p></a></li>').trigger('create');
		}
		else{
		$('#listadobodegas ul').append('<li><a href="#ficha?parametro='+item.denominacion+'&categoria=listado_bodegas.php"><img src="" /><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span><span class="telefono">' + item.movil + '</span></p></a></li>').trigger('create');	
		}
	 });
      $('#listadobodegas ul').listview('refresh');
    },
    error: function(xhr, status, error) {
      alert("ERROR - xhr.status: " + xhr.status + '\nxhr.responseText: ' + xhr.responseText + '\nxhr.statusText: ' + xhr.statusText + '\nError: ' + error + '\nStatus: ' + status);
    }
  });
});

// Al cargar la página de FICHA
$(document).on('pagebeforeshow', '#ficha', function(e) {
var categoria = getParameterByName('categoria', e.delegateTarget.baseURI);
var parametro = getParameterByName('parametro', e.delegateTarget.baseURI);
  $.ajax({
    type: 'GET',
    url: 'http://www.villarrobledo.com/app/' + categoria +'?parametro='+parametro,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
	  $('#contenido').text("");
      $('#contenido').append('<h1>'+data[0].denominacion+'</h1>').trigger('create');
	  $('#contenido').append('<ul data-role="listview" data-inset="true"></ul>').trigger('create');
	  $('#contenido ul').append('<li class="ui-icon-location ui-btn-icon-left" ><p>' + data[0].direccion +'</p></li>\
	  <li class="ui-icon-phone ui-btn-icon-left" ><p>' + data[0].telefono + '</p></li>\
	  <li class="ui-icon-navigation ui-btn-icon-left"><p>' + data[0].web + '</p></li>\
	  <li class="ui-icon-mail ui-btn-icon-left"><p>' + data[0].email + '</p></li>\
	  <li class="ui-icon-clock ui-btn-icon-left"><p>' + data[0].horario + '</p></li>').trigger('create');
      $('#contenido ul').listview('refresh');
	  $('#contenido').append('<p>'+ data[0].descripcion + '</p>').trigger('create');
	    $.ajax({
			type: 'GET',//ui-icon-arrow-l ui-btn-icon-left
			url: 'http://www.villarrobledo.com/app/' + categoria +'?parametro='+parametro+'&foto=fotos',
			dataType: 'json',
			timeout: 25000,
			success: function(data, status) {
			$('#contenido').prepend('<ul id="fotosul" data-role="listview" data-inset="true"></ul>').trigger('create'); 
			$.each(data, function(i,item) {
				if(item.foto != null){
					$('#fotosul').append('<li class="noselected" ><img src="' + imagenesGuiaEmpresarial + item.foto + '" /><span></span></li>').trigger('create');
				}
				else{
					$('#fotosul').append('<li class="noselected" ><img src="" /><span>Sin imágenes</span></li>').trigger('create');
				}
				});
			$('#fotosul').listview('refresh');
			//Para que se reinicie el slideshow
			clearInterval(varSlideshow);
			inicioSlideshow ();
			},
			error: function(xhr, status, error) {
			alert("ERROR - xhr.status: " + xhr.status + '\nxhr.responseText: ' + xhr.responseText + '\nxhr.statusText: ' + xhr.statusText + '\nError: ' + error + '\nStatus: ' + status);
			}
		});
    },
    error: function(xhr, status, error) {
      alert("ERROR - xhr.status: " + xhr.status + '\nxhr.responseText: ' + xhr.responseText + '\nxhr.statusText: ' + xhr.statusText + '\nError: ' + error + '\nStatus: ' + status);
    }
  });
});


// Al cargar la página de artesanos
$(document).on('pagebeforeshow', '#artesaniaytipicos', function() {
  $.ajax({
    type: 'GET',
    url: artesanosURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
	  $('#listadoartesanos').text("");
      $('#listadoartesanos').append('<ul data-role="listview" data-inset="true"></ul>').trigger('create');
      $.each(data, function(i,item) {
		if(item.foto != null){
        $('#listadoartesanos ul').append('<li><a href="#ficha?parametro='+item.denominacion+'&categoria=listado_artesanos.php"><img src="' + imagenesGuiaEmpresarial + item.foto + '" /><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span><span class="telefono">' + item.movil + '</span></p></a></li>').trigger('create');
		}
		else{	        
		$('#listadoartesanos ul').append('<li><a href="#ficha?parametro='+item.denominacion+'&categoria=listado_artesanos.php"><img src="" /><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span><span class="telefono">' + item.movil + '</span></p></a></li>').trigger('create');
		}
	  
	  });
      $('#listadoartesanos ul').listview('refresh');
    },
    error: function(xhr, status, error) {
      alert("ERROR - xhr.status: " + xhr.status + '\nxhr.responseText: ' + xhr.responseText + '\nxhr.statusText: ' + xhr.statusText + '\nError: ' + error + '\nStatus: ' + status);
    }
  });
});

// Al cargar la página de carnaval
$(document).on('pagebeforeshow', '#carnaval', function() {
$("#fotosul").remove();
$("#carnavalcontent").text("");
$("#carnavalcontent").append('\
<h1>Carnaval</h1>\
<h3>Entre febrero y marzo.</h3>\
<p>DECLARADOS DE INTERÉS TURÍSTICO NACIONAL los Carnavales de Villarrobledo son una exaltación del ingenio,\
la creatividad, el humor, la sátira y el esperpento. Atrevidos, irreverentes, abiertos, participativos, para\
todos los públicos... Durante diez días y sus respectivas noches se desarrolla un amplio programa de actividades,\
entre las que destacan sus grandes y originales desfiles, su carnaval infantil y mucha fiesta nocturna.</p>\
<ul id="fotosul" data-role="listview" data-inset="true">\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_carnaval1.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_carnaval2.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_carnaval3.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_carnaval4.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_carnaval5.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_carnaval6.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_carnaval7.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_carnaval8.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_carnaval9.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_carnaval10.jpg" /><span></span></li>\
</ul>\
');
clearInterval(varSlideshow);
inicioSlideshow ();
});

// Al cargar la página de semanasanta
$(document).on('pagebeforeshow', '#semanasanta', function() {
$("#fotosul").remove();
$("#semanasantacontent").text("");
$("#semanasantacontent").append('\
<h1>Semana Santa</h1>\
<h3>Entre marzo y abril.</h3>\
<p>DECLARADA DE INTERÉS TURÍSTICO REGIONAL. Caracterizada por la sobriedad y la belleza de sus\
pasos, algunos con una larga tradición que se remontaría al siglo XVI. De indudable belleza \
las procesiones de Jueves Santo y Viernes Santo por la noche, así como las del “Encuentro” y\
la del “Resucitado”.</p>\
<ul id="fotosul" data-role="listview" data-inset="true">\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_semanasanta1.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_semanasanta2.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_semanasanta3.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_semanasanta4.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_semanasanta5.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_semanasanta6.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_semanasanta7.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_semanasanta8.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_semanasanta9.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_semanasanta10.jpg" /><span></span></li>\
</ul>\
');
clearInterval(varSlideshow);
inicioSlideshow ();
});

// Al cargar la página de ferias
$(document).on('pagebeforeshow', '#ferias', function() {
$("#fotosul").remove();
$("#feriascontent").text("");
$("#feriascontent").append('\
<h1>Feria y Fiestas</h1>\
<h3>En torno al 15 de agosto.</h3>\
<p>Se celebran desde 1845 y han mantenido su sabor popular. Durante unos\
 días Villarrobledo ofrece un ambiente excepcional, es el momento \
 elegido para el reencuentro familiar, para la vuelta de los que un \
 día se marcharon pero no han perdido sus raíces. Gran número de actividades\
 programadas para todos los públicos: deportivas de las modalidades más \
 variadas y de las que se celebran numerosos campeonatos, juegos populares\
 con las disciplinas más típicas de Villarrobledo, teatro de calle para el \
 público infantil, verbenas populares, actuaciones musicales con artistas \
 destacados, celebración de corridas de toros...</p>\
<ul id="fotosul" data-role="listview" data-inset="true">\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_feria1.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_feria2.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_feria3.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_feria4.jpg" /><span></span></li>\
</ul>\
');
clearInterval(varSlideshow);
inicioSlideshow ();
});

// Al cargar la página de vinarock
$(document).on('pagebeforeshow', '#vinarock', function() {
$("#fotosul").remove();
$("#vinarockcontent").text("");
$("#vinarockcontent").append('\
<h1>Viña Rock</h1>\
<h3>En torno al 1 de mayo.</h3>\
<p>El festival de música alternativa más veterano de nuestro país y el que mejor ha\
 sabido mantener su espíritu y su esencia y que ha ido creciendo año tras año en \
 participación tanto de público como en artistas y bandas participantes. Más de \
 cien grupos y bandas y artistas en solitario participan en cada edición, eligiendo\
 este festival para dar a conocer en muchos casos sus novedades discográficas. Aquí\
 se dan cita bandas míticas del rock español en sus diferentes vertientes, grupos\
 y bandas de éxito y aquellos otros que están empezando. Es también trampolín \
 para las nuevas corrientes musicales que eligen este festival para darse a conocer.</p>\
<ul id="fotosul" data-role="listview" data-inset="true">\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_vinarock1.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_vinarock2.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_vinarock3.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_vinarock4.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_vinarock5.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_vinarock6.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_vinarock7.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_vinarock8.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_vinarock9.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_vinarock10.jpg" /><span></span></li>\
</ul>\
');
clearInterval(varSlideshow);
inicioSlideshow ();
});

// Al cargar la página de sananton
$(document).on('pagebeforeshow', '#sananton', function() {
$("#fotosul").remove();
$("#sanantoncontent").text("");
$("#sanantoncontent").append('\
<h1>San Antón</h1>\
<h3>En torno al 17 de enero.</h3>\
<p>La víspera de su celebración se realiza una gran hoguera en las\
 proximidades de la ermita, se reparten "tostones" (semillas de cereal\
 tostadas) y "zurra" (bebida a base de vino). Al día siguiente se \
 realiza una procesión con la imagen del santo y se bendice a los animales.</p>\
<ul id="fotosul" data-role="listview" data-inset="true">\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_sananton1.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_sananton2.jpg" /><span></span></li>\
</ul>\
');
clearInterval(varSlideshow);
inicioSlideshow ();
});

// Al cargar la página de sansebastian
$(document).on('pagebeforeshow', '#sansebastian', function() {
$("#fotosul").remove();
$("#sansebastiancontent").text("");
$("#sansebastiancontent").append('\
<h1>San Sebastián</h1>\
<h3>En torno al 20 de enero.</h3>\
<p>Destaca la gran luminaria en la placeta de la iglesia, alrededor \
de la cual los asistentes pueden disfrutar de la degustación de pan\
 mojado en chocolate caliente.</p>\
<ul id="fotosul" data-role="listview" data-inset="true">\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_sansebastian1.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_sansebastian2.jpg" /><span></span></li>\
</ul>\
');
clearInterval(varSlideshow);
inicioSlideshow ();
});

// Al cargar la página de sanblas
$(document).on('pagebeforeshow', '#sanblas', function() {
$("#fotosul").remove();
$("#sanblascontent").text("");
$("#sanblascontent").append('\
<h1>San Blas</h1>\
<h3>En torno al 3 de febrero.</h3>\
<p>Patrón de Villarrobledo desde el siglo XV. La celebración de su \
festividad está centrada en un oficio religioso y en el reparto de \
panecillos bendecidos. San Blas merece una visita por esto y por \
conocer su iglesia, monumento histórico artístico.</p>\
<ul id="fotosul" data-role="listview" data-inset="true">\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_sanblas1.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_sanblas2.jpg" /><span></span></li>\
</ul>\
');
clearInterval(varSlideshow);
inicioSlideshow ();
});

// Al cargar la página de sanisidro
$(document).on('pagebeforeshow', '#sanisidro', function() {
$("#fotosul").remove();
$("#sanisidrocontent").text("");
$("#sanisidrocontent").append('\
<h1>San Isidro</h1>\
<h3>En torno al 15 de mayo.</h3>\
<p>La población se vuelca en esta celebración, recientemente\
 recuperada, que se desarrolla a lo largo de todo el fin de \
 semana. La imagen de San Isidro es llevada en romeria, acompañada\
 de un amplio cortejo de romeros a pie y numerosas carretas y \
 carros engalanados, desde la ermita de La Soledad hasta la \
 ermita de San Cristóbal. Los participantes organizados en peñas\
 aprovechan la acampada para disfrutar de un gran ambiente \
 festivo y de la rica gastronomía local.</p>\
<ul id="fotosul" data-role="listview" data-inset="true">\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_sanisidro1.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_sanisidro2.jpg" /><span></span></li>\
</ul>\
');
clearInterval(varSlideshow);
inicioSlideshow ();
});

// Al cargar la página de sancristobal
$(document).on('pagebeforeshow', '#sancristobal', function() {
$("#fotosul").remove();
$("#sancristobalcontent").text("");
$("#sancristobalcontent").append('\
<h1>San Cristóbal</h1>\
<h3>En torno al 10 de julio.</h3>\
<p>Un numeroso séquito de coches y camiones a ritmo de cláxon \
acompañan en procesión al Santo en su recorrido desde San Blas \
hasta la ermita de San Cristóbal, en cuya explanada se bendicen\
 vehículos y conductores.</p>\
<ul id="fotosul" data-role="listview" data-inset="true">\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_sancristobal1.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_sancristobal2.jpg" /><span></span></li>\
</ul>\
');
clearInterval(varSlideshow);
inicioSlideshow ();
});

// Al cargar la página de santiago
$(document).on('pagebeforeshow', '#santiago', function() {
$("#fotosul").remove();
$("#santiagocontent").text("");
$("#santiagocontent").append('\
<h1>Santiago</h1>\
<h3>En torno al 25 de julio.</h3>\
<p>La singular "corrida de la bandera", la procesión con la\
 imagen de Santiago Apóstol en su condición de caballero, \
 danzas típicas y verbenas populares son pieza fundamental \
 de esta celebración.</p>\
<ul id="fotosul" data-role="listview" data-inset="true">\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_santiago1.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_santiago2.jpg" /><span></span></li>\
</ul>\
');
clearInterval(varSlideshow);
inicioSlideshow ();
});

// Al cargar la página de dulcenombre
$(document).on('pagebeforeshow', '#dulcenombre', function() {
$("#fotosul").remove();
$("#dulcenombrecontent").text("");
$("#dulcenombrecontent").append('\
<h1>Dulce nombre</h1>\
<h3>En torno al 12 de septiembre.</h3>\
<p>Dedicada en exclusiva a Nuestra Señora de la Caridad, \
Patrona de la ciudad desde el siglo XVIII. El programa de \
esta celebración gira entorno a una gran Tómbola, en la que\
 se puede encontrar desde un valioso coche al más simpático\
 e insospechado regalo, la Pólvora (espectáculo de fuegos \
 artificiales) y la multitudinaria ofrenda floral y procesión \
 de la imagen de la Virgen de la Caridad que luce sus mejores galas.</p>\
<ul id="fotosul" data-role="listview" data-inset="true">\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_dulcenombre1.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_dulcenombre2.jpg" /><span></span></li>\
</ul>\
');
clearInterval(varSlideshow);
inicioSlideshow ();
});

// Al cargar la página de enoturismo
$(document).on('pagebeforeshow', '#enoturismo', function() {
$("#fotosul").remove();
$("#enoturismocontent").text("");
$("#enoturismocontent").append('\
<h1>Día europeo del Enoturismo</h1>\
<h3>En torno al 8 de noviembre.</h3>\
<p>En los últimos años Villarrobledo, desde su condición de \
ciudad que vive por y para la vid y el vino, se ha sumado a \
esta celebración impulsada por la Red Europea de Ciudades del\
 Vino. El olor a mosto y a vino todavía impregna las calles \
 de la ciudad. Es el momento de disfrutar de uan buena cata,\
 descubrir nuestras excepcionales bodegas y aprovechar para\
 degustar los mejores platos de la gastronomía local.</p>\
<ul id="fotosul" data-role="listview" data-inset="true">\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_enoturismo1.jpg" /><span></span></li>\
	<li class="noselected" ><img src="http://venavillarrobledo.com/assets/images/gal_enoturismo2.jpg" /><span></span></li>\
</ul>\
');
clearInterval(varSlideshow);
inicioSlideshow ();
});

// Al cargar la página de Zonas verdes y naturaleza
$(document).on('pagebeforeshow', '#zonasverdesynaturaleza', function() {
$("#zonasverdesynaturalezacontent").append("");
  $.ajax({
    type: 'GET',
    url: parquesyjardinesURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
      $('#zonasverdesynaturalezacontent').text("");	  
      $('#zonasverdesynaturalezacontent').append('<ul data-role="listview" data-inset="true"></ul>').trigger('create');
      $.each(data, function(i,item) {
        $('#zonasverdesynaturalezacontent ul').append('<li><a href="' + enteURL + item.id + '"><img src="' + imagenesURL + item.foto + '" /><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span><span class="telefono">' + item.movil + '</span></p></a></li>').trigger('create');
      });
      $('#zonasverdesynaturalezacontent ul').listview('refresh');
    },
    error: function(xhr, status, error) {
      alert("ERROR - xhr.status: " + xhr.status + '\nxhr.responseText: ' + xhr.responseText + '\nxhr.statusText: ' + xhr.statusText + '\nError: ' + error + '\nStatus: ' + status);
    }
  });
});




// Al cargar la página de enlaces
$(document).on('pagebeforeshow', '#enlaces', function() {
  $.ajax({
    type: 'GET',
    url: enlacesURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
	  $("#listadoenlaces").text("");
      $('#listadoenlaces').append('<ul data-role="listview" data-inset="true"></ul>').trigger('create');
      $.each(data, function(i,item) {
        $('#listadoenlaces ul').append('<li><a href="' + item.url + '"><img src="' + imagenesURL + item.foto + '" /><h3>' + item.nombre + '</h3><p>' + item.descripcion + '</p></a></li>').trigger('create');
      });
      $('#listadoenlaces ul').listview('refresh');
    },
    error: function(xhr, status, error) {
      alert("ERROR - xhr.status: " + xhr.status + '\nxhr.responseText: ' + xhr.responseText + '\nxhr.statusText: ' + xhr.statusText + '\nError: ' + error + '\nStatus: ' + status);
    }
  });
});

$(function(){
    // Deslizar para ir atras
  $(document).on( "swiperight", swiperightHandler );
  function swiperightHandler( event ){
	  clearInterval(varSlideshow);
	  if(jQuery.mobile.path.get()!=""){
		window.history.back();
	  }
  }
});

function alertDismissed() {}
function checkConnection() {
  var networkState = navigator.connection.type;
  var states = {};
  states[Connection.UNKNOWN] = 'Desconocida';
  states[Connection.ETHERNET] = 'Ethernet';
  states[Connection.WIFI] = 'WiFi';
  states[Connection.CELL_2G] = 'Teléfono 2G';
  states[Connection.CELL_3G] = 'Teléfono 3G';
  states[Connection.CELL_4G] = 'Teléfono 4G';
  states[Connection.NONE] = 'Sin conexión';
  navigator.notification.alert("Conexión de red: " + states[networkState], alertDismissed(), 'Aviso', 'Cerrar');
}

// Registrar el dispositivo para notificaciones Push
function registrar(){
  var name = $("#name").val();
  var email = $("#email").val();
  var regId = $("#regId").val();
  if(regId != "") {
    jQuery.ajax({
      type: 'POST',
      url: registroURL,
      data: 'name=' + name + '&email=' + email + '&regId=' + regId,
      dataType: 'html',
      cache: false,
      success: function(response) {
        alert("Informacíon enviada");
      }
    });
  } else {
    alert('Esperando el regId del registro en GCM!');
  }
}

// Al cargar Cordova PhoneGap
function onDeviceReady() {
clearInterval(varSlideshow);
var push = PushNotification.init({ "android": {"senderID": "896955415622"}});
 push.on('registration', function(data) {
$("#name").val(device.uuid);
$("#email").val(device.uuid);
$("#regId").val(data.registrationId);
 });
// Al Recivir Notificaciones
 push.on('notification', function(data) {
 navigator.notification.alert(data.title+" Notificación: " +data.message);
 //data.title+" Notificación: " +
 });
// En caso de error
 push.on('error', function(e) {
 navigator.notification.alert(e);
 });
}

// Al cargar la aplicación
function init() {
 document.addEventListener("deviceready", onDeviceReady(), false);
}

// Slideshow-Imagenes-iniciar
 function inicioSlideshow (){
    var elemento = document.getElementById('fotosul').getElementsByTagName('li');
    varSlideshow = setInterval(function(){ slideshow(elemento) }, 2000);
  }
// Slideshow-Imagenes
 var varSlideshow = setInterval(function(){ slideshow(elemento) }, 2000);
 var indice = 0;
 function slideshow(elemento) {
    if(indice >= elemento.length) {
      indice = 0;
      elemento[(elemento.length) - 1].className = 'noselected';
    }
    elemento[indice].className = 'selected';
    if(indice >= 1) elemento[indice - 1].className = 'noselected';
    indice ++;
  }

//Funcion que lee los parametros de la URL
function getParameterByName( name, url ) {
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( url/*window.location.href*/ );
  if( results == null )
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}