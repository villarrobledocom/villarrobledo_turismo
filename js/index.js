/*
function init() {
  document.addEventListener("deviceready", onDeviceReady(), false);
}
function onDeviceReady() {
  alert("Mierda pa tí");
  navigator.notification.alert("El dispositivo está listo", alertDismissed(), 'Aviso', 'Cerrar');
  $('#principal').append('<a href="inicio.html" data-role="button">A la página de inicio...</a>');
}
function alertDismissed() {}
*/

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
      navigator.notification.alert("El dispositivo está listo", alertDismissed, 'Aviso', 'Cerrar');
      $('#principal').append('<a href="inicio.html" data-role="button">A la página de inicio...</a>');
    },
    alertDismissed: function() {
      // Algo aquí
    }
};
