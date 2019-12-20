# Camera 360

## Intro

### React Native

* [React Native](https://facebook.github.io/react-native/) is a framework developed by Facebook that lets you build mobile apps using JavaScript and React.
* React Native translates JavaScript to native code so the apps use the same UI building blocks as native iOS and Android apps.

### Expo framework

* [Expo framework](https://docs.expo.io/versions/latest/) is a set of tools, libraries and services that helps the development of React Native apps.
* Expo SDK provides a set of features missing from the React Native core such as access to the device system functionality (camera, contacts, etc.).
* Local development with Expo SDK is straightforward since there is no need for Xcode or Android Studio.
  * When you work on an Expo project, your local computer serves an instance of your project for the mobile device.
  * Expo Client App running in the mobile device contains the Expo SDK and it is able to download and run your project.
* Expo tools can also help you in creating the final application packages for app stores.

### Face detection API

* Expo provides [a face detection API](https://docs.expo.io/versions/latest/sdk/facedetector) that can be combined to a live camera view. The API notifies when it has detected face in the image and outputs the face coordinates. It has also features for detecting the smile probability and if the eyes are open or not.
* This tutorial aims to build a React Native app that utilizes the live camera view and the face detection API.