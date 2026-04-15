// Give the service worker access to Firebase Messaging.
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker.
firebase.initializeApp({
  apiKey: "AIzaSyAVKGyPWWQzEWfwkOwhwXabD3HbuLQz-qA",
  authDomain: "chatcity-63c68.firebaseapp.com",
  projectId: "chatcity-63c68",
  storageBucket: "chatcity-63c68.firebasestorage.app",
  messagingSenderId: "1015529457316",
  appId: "1:1015529457316:web:638f1d8e25539177844831"
});

// Retrieve an instance of Firebase Messaging.
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-192x192.png' // Optional: add an icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
