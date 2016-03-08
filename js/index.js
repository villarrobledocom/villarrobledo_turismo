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
    url: 'http://www.eurovision-spain.com/app/ultimos_comentarios_app.php?jsoncallback=noticia',
    dataType: 'jsonp',
    jsonp: 'jsoncallback',
    timeout: 25000,
    success: function(data){
      $.each(data, function(item){
        $('#noticias').empty().append('<p><i>' + item.comentario + '</i>...</p><p>' + item.nick + ' </p>').trigger("create");
      });
    },
    error: function(){
      var texto = '<p>No se ha podido conectar con eurovision-spain.com</p>';
      $("#noticias").empty().append(texto);
      $.mobile.loading("hide");
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
  $('#principal').append('<a href="inicio.html" data-role="button">A la página de inicio...</a>');
}
function init() {
  document.addEventListener("deviceready", onDeviceReady(), false);
}
