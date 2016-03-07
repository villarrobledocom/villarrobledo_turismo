function alertDismissed() {}
function onDeviceReady() {
  alert("Mierda pa tí");
  navigator.notification.alert("El dispositivo está listo", alertDismissed(), 'Aviso', 'Cerrar');
  $('#principal').append('<a href="inicio.html" data-role="button">A la página de inicio...</a>');
}
function init() {
  document.addEventListener("deviceready", onDeviceReady(), false);
}
