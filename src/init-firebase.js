import * as firebase from "firebase";
import 'firebase/messaging';
// import {messaging} from "../public/firebase-messaging-sw";
// import "https://www.gstatic.com/firebasejs/7.1.0/firebase-app.js";
// import "https://www.gstatic.com/firebasejs/7.1.0/firebase-messaging.js";

//     const firebaseConfig = {
//         apiKey: "AIzaSyAxVT8x2aJgbHT2oeSPPI_noLIiMQbszwk",
//         authDomain: "time-controller-a7631.firebaseapp.com",
//         databaseURL: "https://time-controller-a7631.firebaseio.com",
//         projectId: "time-controller-a7631",
//         storageBucket: "time-controller-a7631.appspot.com",
//         messagingSenderId: "689974140243",
//         appId: "1:689974140243:web:a29d1da610ce95ce42d5a6",
//         measurementId: "G-M7TCB8MFHP"
//     };
console.log("SW");

//     console.log("There");
const firebaseConfig = {
    apiKey: "AIzaSyAxVT8x2aJgbHT2oeSPPI_noLIiMQbszwk",
    authDomain: "time-controller-a7631.firebaseapp.com",
    databaseURL: "https://time-controller-a7631.firebaseio.com",
    projectId: "time-controller-a7631",
    storageBucket: "time-controller-a7631.appspot.com",
    messagingSenderId: "689974140243",
    appId: "1:689974140243:web:a29d1da610ce95ce42d5a6",
    measurementId: "G-M7TCB8MFHP"
};
// // Initialize Firebase
firebase.initializeApp(firebaseConfig);



const messaging = firebase.messaging();

messaging.usePublicVapidKey(
    'BBNh7AItKPSl1l4xkwkAi01FLHn-2QyxlPn4ZnSGrXMU1B45XCKHAkd1A4siur37gx-g4TRo32O09fpUUV3SuGs'
);

// messaging.setBackgroundMessageHandler(payload =>{
//     console.log(payload);
//     self.registration.showNotification(payload);
// });


messaging.onMessage((payload) => {
    console.log('Message received. ', payload);
    // [START_EXCLUDE]
    // Update the UI to include the received message.
    // [END_EXCLUDE]
});

export {messaging};





























// import * as firebase from 'firebase';
// import 'firebase/messaging'
//
//
//     //     console.log("There");
//     const firebaseConfig = {
//         apiKey: "AIzaSyAxVT8x2aJgbHT2oeSPPI_noLIiMQbszwk",
//         authDomain: "time-controller-a7631.firebaseapp.com",
//         databaseURL: "https://time-controller-a7631.firebaseio.com",
//         projectId: "time-controller-a7631",
//         storageBucket: "time-controller-a7631.appspot.com",
//         messagingSenderId: "689974140243",
//         appId: "1:689974140243:web:a29d1da610ce95ce42d5a6",
//         measurementId: "G-M7TCB8MFHP"
//     };
// // // Initialize Firebase
//     firebase.initializeApp(firebaseConfig);
// console.log("JS");
//
// // [START get_messaging_object]
// // Retrieve Firebase Messaging object.
//     const messaging = firebase.messaging();
// // [END get_messaging_object]
// // [START set_public_vapid_key]
// // Add the public key generated from the console here.
//     messaging.usePublicVapidKey(
//         'BBNh7AItKPSl1l4xkwkAi01FLHn-2QyxlPn4ZnSGrXMU1B45XCKHAkd1A4siur37gx-g4TRo32O09fpUUV3SuGs'
//     );
// // [END set_public_vapid_key]
// // [START refresh_token]
// // // Callback fired if Instance ID token is updated.
// //     messaging.onTokenRefresh(() => {
// //         messaging.getToken().then((refreshedToken) => {
// //             console.log('Token refreshed.');
// //             // Indicate that the new Instance ID token has not yet been sent to the
// //             // app server.
// //             // Send Instance ID token to app server.
// //             // [START_EXCLUDE]
// //             // Display new Instance ID token and clear UI of all previous messages.
// //             // [END_EXCLUDE]
// //         }).catch((err) => {
// //             console.log('Unable to retrieve refreshed token ', err);
// //         });
// //     });
// // // // [END refresh_token]
// // //
// // // // [START receive_message]
// // // // Handle incoming messages. Called when:
// // // // - a message is received while the app has focus
// // // // - the user clicks on an app notification created by a service worker
// // // //   `messaging.setBackgroundMessageHandler` handler.
//     messaging.onMessage((payload) => {
//         console.log('Message received. ', payload);
//         // [START_EXCLUDE]
//         // Update the UI to include the received message.
//         // [END_EXCLUDE]
//     });
//     // console.log(firebase.messaging());
// // // // [END receive_message]
// // //
//
// export {messaging};