// import * as firebase from "../firebase";
// import 'firebase/messaging';
importScripts("https://www.gstatic.com/firebasejs/7.1.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.1.0/firebase-messaging.js");
//
// //     const firebaseConfig = {
// //         apiKey: "AIzaSyAxVT8x2aJgbHT2oeSPPI_noLIiMQbszwk",
// //         authDomain: "time-controller-a7631.firebaseapp.com",
// //         databaseURL: "https://time-controller-a7631.firebaseio.com",
// //         projectId: "time-controller-a7631",
// //         storageBucket: "time-controller-a7631.appspot.com",
// //         messagingSenderId: "689974140243",
// //         appId: "1:689974140243:web:a29d1da610ce95ce42d5a6",
// //         measurementId: "G-M7TCB8MFHP"
// //     };
// console.log("SW");
// debugger;
//
// //     console.log("There");
// const firebaseConfig = {
//     apiKey: "AIzaSyAxVT8x2aJgbHT2oeSPPI_noLIiMQbszwk",
//     authDomain: "time-controller-a7631.firebaseapp.com",
//     databaseURL: "https://time-controller-a7631.firebaseio.com",
//     projectId: "time-controller-a7631",
//     storageBucket: "time-controller-a7631.appspot.com",
//     messagingSenderId: "689974140243",
//     appId: "1:689974140243:web:a29d1da610ce95ce42d5a6",
//     measurementId: "G-M7TCB8MFHP"
// };
// // // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp({
    messagingSenderId: "689974140243"
});
//
//
//
const messaging = firebase.messaging();
//
// messaging.usePublicVapidKey(
//     'BBNh7AItKPSl1l4xkwkAi01FLHn-2QyxlPn4ZnSGrXMU1B45XCKHAkd1A4siur37gx-g4TRo32O09fpUUV3SuGs'
// );
//
// messaging.setBackgroundMessageHandler(payload =>{
//     console.log(payload);
//     self.registration.showNotification(payload);
// });
//
// messaging.onMessage((payload) => {
//     console.log('Message received. ', payload);
//     // [START_EXCLUDE]
//     // Update the UI to include the received message.
//     // [END_EXCLUDE]
// });
//
messaging.setBackgroundMessageHandler((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
    };

    return this.registration.showNotification(notificationTitle,
        notificationOptions);
});
// export {messaging};