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

// Al cargar Cordova PhoneGap
function onDeviceReady() {

  navigator.notification.alert("El dispositivo está preparado", alertDismissed(), 'Aviso', 'Cerrar');
  checkConnection();

  // Push Notifications
  var pushNotification = window.plugins.pushNotification;
  if(device.platform == 'android' || device.platform == 'Android') {
    alert("Register called");
    pushNotification.register(this.successHandler, this.errorHandler, {"senderID":"896955415622", "ecb":"app.onNotificationGCM"});
  } else {
    alert("Register called");
    pushNotification.register(this.successHandler, this.errorHandler, {"badge":"true", "sound":"true", "alert":"true", "ecb":"app.onNotificationAPN"});
  }
  function successHandler(result) {
    alert('Callback Success! Result = ' + result);
  }
  function errorHandler(error) {
    alert(error);
  }
  function onNotificationGCM(e) {
    switch(e.event) {
      case 'registered':
        if(e.regid.length > 0) {
          console.log("Regid " + e.regid);
          alert('registration id = ' + e.regid);
          document.getElementById('regId').value = e.regid;
        }
        break;
      case 'message':
        alert('message = ' + e.message + ' msgcnt = ' + e.msgcnt);
        break;
      case 'error':
        alert('GCM error = ' + e.msg);
        break;
      default:
        alert('An unknown GCM event has occurred');
        break;
    }
  }
  function onNotificationAPN(event) {
    var pushNotification = window.plugins.pushNotification;
    alert("Running in JS - onNotificationAPN - Received a notification! " + event.alert);
    if(event.alert) navigator.notification.alert(event.alert);
    if(event.badge) pushNotification.setApplicationIconBadgeNumber(this.successHandler, this.errorHandler, event.badge);
    if(event.sound) {
      var snd = new Media(event.sound);
      snd.play();
    }
  }

}

// Al cargar la aplicación
function init() {
  document.addEventListener("deviceready", onDeviceReady(), false);
}
