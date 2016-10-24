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
    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
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

    var watchId = navigator.geolocation.watchPosition(onSuccess, onError, { maximumAge: 3000, enableHighAccuracy: true });
    CameraPreview.startCamera({camera: "back", tapPhoto: false, previewDrag: false, toBack: true});
    var ref = cordova.InAppBrowser.open('https://kschima.github.io/project-campus/', '_self', 'location=yes');

  }
};

document.addEventListener('deviceready', function(){
  app.init();
}, false);
