importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAVKGyPWWQzEWfwkOwhwXabD3HbuLQz-qA",
  projectId: "chatcity-63c68",
  messagingSenderId: "1015529457316",
  appId: "1:1015529457316:web:638f1d8e25539177844831"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
  });
});
