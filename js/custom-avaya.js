
window.onload = function() {
  myWindow.resizeTo(250, 250);
      myWindow.focus();
  };

$(document).ready(function() {
  var settings = {
    host: 'amv.collaboratory.avaya.com',
    puerto: 443,
    numero: "2681322102",
    nombre: "Nombre",
    pass: "0"
  }



  //MobileVideo

      $("#dcolgar").click(function() {
        console.log("Colgar");
        location.reload();
      });
      // var nombre = $('#nombre_txt').val();
      // var nombre = nombre.replace(/ /g, "_");
      var nombre = settings.nombre;
      var pass = settings.pass;
      var host = settings.host;
      var puerto = settings.puerto;
      var numero = settings.numero;
      var url = "https://" + host + ":" + puerto + "/avayatest/auth?displayName=" + nombre + "&userName=" + pass + "";
      $.get(url, function(data, status) {
        if (status == "success") {
          var response = data;
          console.log("Request Correcto");
          var sessionid = data.sessionid;
          var uuid = data.uuid;
          var dominiio = data.defaultdomain;
          var vCliente = new ClientPlatformFactory().getClientPlatform();
          var navegador = vCliente.getUserAgentBrowser();
          var versionsdk = vCliente.getVersionNumber();
          var cDispositivo = vCliente.getDevice();
          cDispositivo.setLocalVideoView("local-video-view");
          cDispositivo.setRemoteVideoView("remote-video-view");
          console.log("Navegador: " + navegador);
          console.log("Version del SDK: " + versionsdk);
          var cDispositivo = vCliente.getDevice();
          var DDisponible = cDispositivo.couldMediaBeAccessible();
          console.log(DDisponible);
          var cUsuario = vCliente.getUser();
          cUsuario.setSessionAuthorizationToken(response);
          var cSesion = cUsuario.createSession();
          cSesion.enableVideo(true);
          cSesion.setRemoteAddress(numero);
          cSesion.setContextId();

          $("#dcolgar").click(function() {
            console.log("Colgar");
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
        }
      });
  //Fin MobileVideo

});
