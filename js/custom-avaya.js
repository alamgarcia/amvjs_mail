//Cuando carga el documento,agregamos listeners para los botones principales
$(document).ready(function() {
	//Settings para la llamada, ajustalos como desees
var settings = {
  host: 'amv.collaboratory.avaya.com',
  puerto: 443,
  numero: "2681322102",
  nombre: "Nombre",
  pass: "0"
}
  //Ocultanmos el vídeo
  $('#dAudio').hide();
  $('#dcolgar').hide();
  $('#dVideo').hide();
  //Listener para colgar
  $("#dcolgar").click(function() {
    console.log("Colgar");
    location.reload();
  });
  //Listener par Iniciar la llamada
    //Inicio de MobileVideo
    console.log("Iniciando Llamada");
    
    //Obtenemos los valores de los Settings
	 var nombre = settings.nombre;
      var pass = settings.pass;
      var host = settings.host;
      var puerto = settings.puerto;
      var numero = settings.numero;

    //Construimos el URL
    var url = "https://" + host + ":" + puerto + "/avayatest/auth?displayName=" + nombre + "&userName=" + pass + "";

    $.get(url, function(data, status) {
      //Si tenemos exito al hacer el Request, seguimos
      if (status == "success") {
        // Le asignamos a la variable response, el response de nuestro GET para hacerla un objeto de JavaScript
        var response = data;
        //Imprimimos que el Request fue correcto
        console.log("Request Correcto");
        //  Asignamos los valores a variables para acceder a elllos
        var sessionid = data.sessionid;
        var uuid = data.uuid;
        var dominiio = data.defaultdomain;
        //Llamamos al ClientPlatformFactory
        var vCliente = new ClientPlatformFactory().getClientPlatform();
        //Obtenemos el Navegador
        var navegador = vCliente.getUserAgentBrowser();
        //Obtenemos la verisón del SDK
        var versionsdk = vCliente.getVersionNumber();
        //Obtenemos el Dispositivo
        var cDispositivo = vCliente.getDevice();
        //Asignamos las superficies por el nombre del Div
        cDispositivo.setLocalVideoView("local-video-view");
        cDispositivo.setRemoteVideoView("remote-video-view");
        //Imprimimos en la consola el Navegador y la versión del SDK por motivos de Debug
        console.log("Navegador: " + navegador);
        console.log("Version del SDK: " + versionsdk);
        var cDispositivo = vCliente.getDevice();
        //Revisamos que el Dispositivo sea accesible
        var DDisponible = cDispositivo.couldMediaBeAccessible();
        //Imprimimos si el dispositivo está dispoible
        console.log(DDisponible);
        //Obtenemos el Usuario
        var cUsuario = vCliente.getUser();
        //Asiganmos el Token(response) para iniciar la sesion
        cUsuario.setSessionAuthorizationToken(response);
        //Creamos la sesion
        var cSesion = cUsuario.createSession();
        //Asignamos los parametros de la sesión
        //Habilitamos el video
        cSesion.enableVideo(true);
        //Asignamos el número a llamar
        cSesion.setRemoteAddress(numero);
        //Asignamos el Contexto
        cSesion.setContextId(uuid);
        //Listener para Colgar
        $("#dcolgar").click(function() {
          console.log("Colgar");
          eliminartoken(sessionid);
          cSesion.end();

          location.reload();
        });


        $("#dAudio").click(function() {
          console.log("Audio" + cSesion.isAudioMuted());
          var estadioaudio = cSesion.isAudioMuted();
          if (estadioaudio == false) {
            cSesion.muteAudio(true);
          } else {
            cSesion.muteAudio(false);
            console.log("Nada que hacer");
          }
        });
        $("#dVideo").click(function() {
          console.log("Video" + cSesion.isVideoMuted());
          var estadovideo = cSesion.isVideoMuted();
          if (estadovideo == false) {
            cSesion.muteVideo(true);
          } else {
            cSesion.muteVideo(false);
            console.log("Nada que hacer");
          }
        });
        cUsuario.onServiceUnavailableCB = function() {
          console.log("Servicio dispoible");
        };
        cUsuario.onServiceAvailableCB = function() {
          console.log("Servicio dispoible");
          cSesion.start();
          $('#dAudio').show("slow");
          $('#dcolgar').show("slow");
          $('#dVideo').show("slow");
          $('video#remote-video-view').css({
            display: 'block'
          });
        };
        cUsuario.onConnectionInProgressCB = function() {
          console.log("Conexion en Progreso");
        };
        cUsuario.onConnLost = function() {
          console.log("Se ha perdido la Conexion");
        };
        cUsuario.onConnRetry = function() {
          console.log("Intentado Reconectar");
        };
        cUsuario.onConnReestablished = function() {
          console.log("conexion Restablecida ");
        };
        cUsuario.onNetworkError = function() {
          console.log("Error de Red");
        };
        cUsuario.onCriticalError = function() {
          console.log("Error Critico");
        };
        cSesion.onSessionRemoteAlerting(hasEarlyMedia) = function() {
          console.log("Timbrando");
        };
        cSesion.onSessionRedirected() = function() {
          console.log("Sesion Redirigida");
        };
        cSesion.onSessionQueued() = function() {
          console.log("La llamada ha sido puesta en espera");
        };
        cSesion.onSessionEstablished() = function() {
          console.log("Sesion Establecida");
        };
        cSesion.onSessionEnded() = function() {
          console.log("La Sesion se ha terminado");
        };
        cSesion.onSessionFailed(sessionError) = function() {
          console.log("La sesion ha fallado");
        };
        cSesion.onSessionAudioMuteStatusChanged(muted) = function() {
          console.log("cambio en el estado del Audio");
        };
        cSesion.onSessionAudioMuteFailed(requestedMuteStatus, sessionError) = function() {
          console.log("Ha fallado la sesion al intentar mutear el audio");
        };
        cSesion.onSessionVideoMuteStatusChanged(muted) = function() {
          console.log("Ha cambiado el estado del video");
        };
        cSesion.onSessionVideoMuteFailed(requestedMuteStatus, sessionError) = function() {
          console.log("Ha fallado la sesion al intentar mutear el video ");
        };
        cSesion.onSessionServiceAvailable() = function() {
          console.log("La sesion está dispoible");
        };
        cSesion.onSessionServiceUnavailable() = function() {
          console.log("La sesion no está disponible");
        };
        cSesion.onSessionRemoteDisplayNameChanged(newDisplayName) = function() {
          console.log("El Nombre remoto ha cambiado" + newDisplayName);
        };
        cSesion.onCallError() = function() {
          console.log("Ha ocurrido un error en la llamada");
        };
        cSesion.onCallError() = function() {
          console.log("Ha ocurrido un error en la llamada");
        };
        cSesion.onCallError() = function() {
          console.log("Ha ocurrido un error en la llamada");
        };
      } //Fin del IF
    }); //Fin del GET -
    // Aqui Termina el MobileVideo

}); //Fin del onReady


function eliminartoken(sessionid) {
  var host = settings.host;
  var puerto = settings.puerto;
  var durl = "https://" + host + ":" + puerto + "/avayatest/auth/id/" + sessionid + "";
  $.delete = function(url, data, callback, type) {
    if ($.isFunction(data)) {
      type = type || callback,
        callback = data,
        data = {}
    }

    return $.ajax({
      url: durl,
      type: 'DELETE',
      success: callback,
      data: data,
      contentType: type
    });
  }
  console.log(sessionid);
  console.log("Se ha eliminado el Token");

  // code here CAN use carName
}
