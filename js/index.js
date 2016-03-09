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
  alert ("Estoy aquí");
  $.mobile.loading("show", {
    textVisible: true,
    textonly: true,
    theme:"a",
    html: "<center>cargando datos</center>"
  });
  $.ajax({
    url: 'http://www.villarrobledo.com/app/listado_noticias.php',
    dataType: 'json',
    data: data,
    timeout: 25000,
    success: success
    success: function(data){
      $.each(data, function(item){
        $('#noticias').empty().append('<p><i>' + item.publicacion + '</i>...</p><p>' + item.titulo + ' </p>').trigger("create");
      });
    },
    error: function(XHR, textStatus, errorThrown){
      alert("ERREUR: " + textStatus);
      alert("ERREUR: " + errorThrown);
    }
  });
}


/*
function cargaNoticias() {
  $('#noticias').load("http://www.villarrobledo.com/app/listado_noticias.php",function(){
    $(this).trigger('create');
  });
}
*/
function onDeviceReady() {
  //navigator.notification.alert("El dispositivo está listo", alertDismissed(), 'Aviso', 'Cerrar');
  // checkConnection();
  $('#consola').empty().append('<p>El dispositivo está listo</p>').trigger("create");
}
function init() {
  document.addEventListener("deviceready", onDeviceReady(), false);
}
