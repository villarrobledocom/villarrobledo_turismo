var pushNotification;
var registroURL = 'http://www.villarrobledo.com/app/registro.php';
var imagenesURL = 'http://www.villarrobledo.com/admin/data/images/mini_'; 
var noticiasURL = 'http://www.villarrobledo.com/app/listado_noticias.php';
var noticiaURL = 'http://www.villarrobledo.com/noticia.php?id=';
var agendaURL = 'http://www.villarrobledo.com/app/listado_actividades.php';
var actividadURL = 'http://www.villarrobledo.com/actividad.php?id=';
var lugaresURL = 'http://www.villarrobledo.com/app/listado_lugares.php';
var asociacionesyclubesURL = 'http://www.villarrobledo.com/app/listado_asociacionesyclubes.php';
var parquesyjardinesURL = 'http://www.villarrobledo.com/app/listado_parquesyjardines.php';
var alojamientoURL = 'http://www.villarrobledo.com/app/listado_alojamiento.php';
var baresyrestaurantesURL = 'http://www.villarrobledo.com/app/listado_baresyrestaurantes.php';
var bodegasURL = 'http://www.villarrobledo.com/app/listado_bodegas.php';
var artesanosURL = 'http://www.villarrobledo.com/app/listado_artesanos.php';
var enteURL = 'http://www.villarrobledo.com/ente.php?id=';
var enlacesURL = 'http://www.villarrobledo.com/app/listado_enlaces.php';

function onNotificationGCM(e) {
  alert("EVENT -> RECEIVED:" + e.event);
  switch(e.event) {
    case 'registered':
      if(e.regid.length > 0) {
        alert('registration id = ' + e.regid);
        document.getElementById('regId').value = e.regid;
      }
      break;
    case 'message':
      alert('message = ' + e.payload.message + ' msgcnt = ' + e.payload.msgcnt);
      break;
    case 'error':
      alert('GCM error = ' + e.msg);
      break;
    default:
      alert('An unknown GCM event has occurred');
      break;
  }
}

function successHandler (result) {
  alert("success: " + result);
}

function errorHandler (error) {
  alert("error:" + error);
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

// Al cargar la página de noticias
$(document).on('pagebeforeshow', '#noticias', function() {
  $.ajax({
    type: 'GET',
    url: noticiasURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
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

// Al cargar la página deL patrimonio
$(document).on('pagebeforeshow', '#patrimonio', function() {
  $.ajax({
    type: 'GET',
    url: lugaresURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
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

// Al cargar la página de las asociaciones y clubes
$(document).on('pagebeforeshow', '#asociacionesyclubes', function() {
  $.ajax({
    type: 'GET',
    url: asociacionesyclubesURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
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
  $.ajax({
    type: 'GET',
    url: alojamientoURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
      $('#listadoalojamiento').append('<ul data-role="listview" data-inset="true"></ul>').trigger('create');
      $.each(data, function(i,item) {
        $('#listadoalojamiento ul').append('<li><a href="' + enteURL + item.id + '"><img src="' + imagenesURL + item.foto + '" /><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span><span class="telefono">' + item.movil + '</span></p></a></li>').trigger('create');
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
  $.ajax({
    type: 'GET',
    url: baresyrestaurantesURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
      $('#listadobaresyrestaurantes').append('<ul data-role="listview" data-inset="true"></ul>').trigger('create');
      $.each(data, function(i,item) {
        $('#listadobaresyrestaurantes ul').append('<li><a href="' + enteURL + item.id + '"><img src="' + imagenesURL + item.foto + '" /><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span><span class="telefono">' + item.movil + '</span></p></a></li>').trigger('create');
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
  $.ajax({
    type: 'GET',
    url: bodegasURL,
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
      $('#listadobodegas').append('<ul data-role="listview" data-inset="true"></ul>').trigger('create');
      $.each(data, function(i,item) {
        $('#listadobodegas ul').append('<li><a href="' + enteURL + item.id + '"><img src="' + imagenesURL + item.foto + '" /><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span><span class="telefono">' + item.movil + '</span></p></a></li>').trigger('create');
      });
      $('#listadobodegas ul').listview('refresh');
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
      $('#listadoartesanos').append('<ul data-role="listview" data-inset="true"></ul>').trigger('create');
      $.each(data, function(i,item) {
        $('#listadoartesanos ul').append('<li><a href="' + enteURL + item.id + '"><h3>' + item.denominacion + '</h3><p>' + item.direccion + '<span class="telefono">' + item.telefono + '</span><span class="telefono">' + item.movil + '</span></p></a></li>').trigger('create');
      });
      $('#listadoartesanos ul').listview('refresh');
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

// Al cargar Cordova PhoneGap
function onDeviceReady() {

  navigator.notification.alert("El dispositivo está preparado", alertDismissed(), 'Aviso', 'Cerrar');

  // Push Notifications
  pushNotification = window.plugins.pushNotification;
  devicePlatform = device.platform;
  alert("registering " + devicePlatform );
  if (devicePlatform == 'android' || devicePlatform == 'Android') {
    pushNotification.register(successHandler, errorHandler, {"senderID":"896955415622","ecb":"onNotificationGCM"});
  }

}

// Al cargar la aplicación
function init() {
  document.addEventListener("deviceready", onDeviceReady(), false);
}
