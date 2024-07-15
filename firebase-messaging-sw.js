importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: 'AIzaSyC21rgwvkzQYI7_I5cNJydcQrae7Irv5Qs',
    appId: '1:689381174035:web:9953218dc0cbf3157488e6',
    messagingSenderId: '689381174035',
    projectId: 'motarspace',
    authDomain: 'motarspace.firebaseapp.com',
    databaseURL: 'https://motarspace-default-rtdb.asia-southeast1.firebasedatabase.app',
    storageBucket: 'motarspace.appspot.com',
    measurementId: 'G-P6Y44N0YS9',
});
// Necessary to receive background messages:
const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((m) => {
  console.log("onBackgroundMessage", m);
});