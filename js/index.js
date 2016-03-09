// Generales
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
  alert('Conexión de red: ' + states[networkState]);
}


// Al cargar la página de noticias
$(document).on('pagebeforeshow', '#noticias', function() {
  $.ajax({
    url: 'http://www.villarrobledo.com/app/listado_noticias.php',
    type: 'GET',
    dataType: 'json',
    timeout: 25000,
    success: function(data, status) {
      $.each(data, function(i,item) {
        $('#listadonoticias').append('<p>' + item.publicacion + '<br />' + item.titulo + '</p>').trigger("create");
      });
    },
    error: function(xhr, status, error) {
      alert("ERROR - xhr.status: " + xhr.status + '\nxhr.responseText: ' + xhr.responseText + '\nxhr.statusText: ' + xhr.statusText + '\nError: ' + error + '\nStatus: ' + status);
    }
  });
});


// Al cargar Cordova PhoneGap
function onDeviceReady() {
  //navigator.notification.alert("El dispositivo está listo", alertDismissed(), 'Aviso', 'Cerrar');
  // checkConnection();
  $('#consola').empty().append('<p>El dispositivo está listo</p>').trigger("create");
}


// Al cargar la aplicación
function init() {
  document.addEventListener("deviceready", onDeviceReady(), false);
}
