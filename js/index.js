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
function cargaNoticias() {
  $('#noticias').load("http://www.villarrobledo.com/app/listado_noticias.php",function(){
    $(this).trigger('create');
  });
}
function onDeviceReady() {
  //navigator.notification.alert("El dispositivo está listo", alertDismissed(), 'Aviso', 'Cerrar');
  checkConnection();
  $('#principal').append('<a href="inicio.html" data-role="button">A la página de inicio...</a>');
}
function init() {
  document.addEventListener("deviceready", onDeviceReady(), false);
}
