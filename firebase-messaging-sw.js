importScripts("/precache-manifest.60c31138ddc382ade3a3bdede12b1ba7.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/g,
  workbox.strategies.cacheFirst({
    cacheName: 'image-cache',
  })
);

// ck-app
// const firebaseConfig = {
//   apiKey: 'AIzaSyBiSa4HCAVAXV3eQHnpd3BZ1DiFgb1t_54',
//   authDomain: 'quantum-device-158914.firebaseapp.com',
//   databaseURL: 'https://quantum-device-158914.firebaseio.com',
//   projectId: 'quantum-device-158914',
//   storageBucket: 'quantum-device-158914.appspot.com',
//   messagingSenderId: '451117537380',
//   appId: '1:451117537380:web:efd51f383ab6128ea6e771',
//   measurementId: 'G-3LNE7PMVS0',
// };
// BJkQPCtaI_J4yTd9dZQkWmkTVsWObO3uPQ4dIvjnHDphTWaoJEqq67KVFoFCEabMeivM8o_1fgAAX84iCdiLig0

// my-test
// const firebaseConfig = {
//   apiKey: 'AIzaSyBs7j0t4E1kvdDdt33Htm3N0szAZCFKPKg',
//   authDomain: 'nimble-theme-211913.firebaseapp.com',
//   databaseURL: 'https://nimble-theme-211913.firebaseio.com',
//   projectId: 'nimble-theme-211913',
//   storageBucket: 'nimble-theme-211913.appspot.com',
//   messagingSenderId: '328011015626',
//   appId: '1:328011015626:web:6db35eb2463fe44d185b33',
// };
// BO8JmDy7MtyA2_AuZNiBRVlgMOYkQ7gGQJwn6IoFaSs9jAfX7HOx08LUmS8PBpTOcf_ujR6lYsRGggFvGu7KLTA

// test-again
// const firebaseConfig = {
//   apiKey: 'AIzaSyBRYJtD0d1yuOGDg1Ki_vlQvnn2jZmn0YM',
//   authDomain: 'ck-app-test-2021.firebaseapp.com',
//   projectId: 'ck-app-test-2021',
//   storageBucket: 'ck-app-test-2021.appspot.com',
//   messagingSenderId: '646854890172',
//   appId: '1:646854890172:web:7332d182471c6833aeb6b9',
// }
// BBfrcboJrsdfhanxzx911pUgadG30bKf392lxjilLJ49_1bndzIAO53EvHJLcRDC-xIg_Sv2ofViIDHNLgjkEP8

importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.2/firebase-messaging.js');

const firebaseConfig = {
  apiKey: 'AIzaSyBiSa4HCAVAXV3eQHnpd3BZ1DiFgb1t_54',
  authDomain: 'quantum-device-158914.firebaseapp.com',
  databaseURL: 'https://quantum-device-158914.firebaseio.com',
  projectId: 'quantum-device-158914',
  storageBucket: 'quantum-device-158914.appspot.com',
  messagingSenderId: '451117537380',
  appId: '1:451117537380:web:efd51f383ab6128ea6e771',
  measurementId: 'G-3LNE7PMVS0',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  this.registration.showNotification(payload.notification.NotifSubject, {
    body: payload.notification.NotifContent,
  });
});

