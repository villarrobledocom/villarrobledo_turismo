var pushNotification;
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
  var nombre = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var regId = document.getElementById('regId').value;
  if(regId != "") {
    if(nombre != "" && email != "") document.formulario.submit(); else alert('Ingrese un nombre y un correo para el registro en la base de datos.');
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

  navigator.notification.alert("El dispositivo está preparado", alertDismissed(), 'Aviso', 'Cerrar');

  // Push Notifications
  pushNotification = window.plugins.pushNotification;
  devicePlatform = device.platform;
  alert("registering " + devicePlatform );
  if (devicePlatform == 'android' || devicePlatform == 'Android') {
    pushNotification.register(successHandler, errorHandler, {"senderID":"896955415622","ecb":"onNotification"});
  }

}

// Al cargar la aplicación
function init() {
  document.addEventListener("deviceready", onDeviceReady(), false);
}
