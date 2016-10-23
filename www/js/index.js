var app = {
  startCamera: function(){
    CameraPreview.startCamera();
  },

  startCameraAnotherPos: function(){
    CameraPreview.startCamera({x: 50, y: 100, width: 300, height:300, camera: "back", tapPhoto: true, previewDrag: true, toBack: false});
  },

  stopCamera: function(){
    CameraPreview.stopCamera();
  },

  takePicture: function(){
    CameraPreview.takePicture({maxWidth: window.device.width, maxHeight: window.device.height});
  },

  switchCamera: function(){
    CameraPreview.switchCamera();
  },

  show: function(){
    CameraPreview.show();
  },

  hide: function(){
    CameraPreview.hide();
  },

  colorEffectChanged: function(){
    var effect = document.getElementById('colorEffectCombo').value;
    CameraPreview.setColorEffect(effect);
  },

  init: function(){
    CameraPreview.startCamera({camera: "back", tapPhoto: false, previewDrag: true, toBack: true});
    var ref = cordova.InAppBrowser.open('https://kschima.github.io/project-campus/', '_self', 'location=yes');

    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    // for GPS debug purposes, not used currently
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(); // it seems we don't get GPS if not invoked at least once

  }
};

document.addEventListener('deviceready', function(){
  app.init();
}, false);
