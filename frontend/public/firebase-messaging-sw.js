importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyBHi9uEtJKpCCjftftbps4RP6Vh7qhDPdE",
  authDomain: "office-assistant-4a12d.firebaseapp.com",
  databaseURL: "https://office-assistant-4a12d.firebaseio.com",
  projectId: "office-assistant-4a12d",
  storageBucket: "office-assistant-4a12d.appspot.com",
  messagingSenderId: "305030297700"
});

const messaging = firebase.messaging();
