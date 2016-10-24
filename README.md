# project-campus-viewer
=======================

basic AR Viewer app based on the Cordova framework, to render an AR Webapp on top of a native device camera feed

## Prerequisites
```
npm install -g cordova
cordova prepare
```

## Android
Make sure the following SDK prerequisites are installed

* Android Platform SDK 23
* Android SDK build-tools (latest)
* Android Support Repository (latest)

### Building
```
cordova build android
cordova run android
```

## iOS (untested)

### Building

```
cordova build ios

cordova emulate ios
//OR
cordova run ios --device
```

## Plugins
uses the following plugins:

* <a href="https://github.com/westonganger/cordova-plugin-camera-preview">**cordova-plugin-camera-preview** (fork by westonganger)</a>
* **cordova-plugin-inappbrowser** *Attention: android specific InAppBrowser.java is slightly modified to allow geolocation access in Android WebView*
* **cordova-plugin-whitelist**
* **cordova-plugin-geolocation**

## FAQs

#### Webcontent needs the following CSS
so that the camera feed is visible underneath
```
html, body {
  background-color: transparent;
}
```


#### IOS Quirks:
 It is not possible to use your computers webcam during testing in the simulator, you must device test


#### based on:

<a href="https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview-sample-app">cordova-plugin-camera-preview-sample-app</a>
