function alertDismissed() {}
function cargaNoticias() {
  $("#noticias").load("http://www.villarrobledo.com/app/listado_noticias.php");
}
function onDeviceReady() {
  //navigator.notification.alert("El dispositivo está listo", alertDismissed(), 'Aviso', 'Cerrar');
  $('#principal').append('<a href="inicio.html" data-role="button">A la página de inicio...</a>');
}
function init() {
  document.addEventListener("deviceready", onDeviceReady(), false);
}
