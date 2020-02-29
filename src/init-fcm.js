import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
    // Project Settings => Add Firebase to your web app
    apiKey: "AIzaSyAxVT8x2aJgbHT2oeSPPI_noLIiMQbszwk",
    authDomain: "time-controller-a7631.firebaseapp.com",
    databaseURL: "https://time-controller-a7631.firebaseio.com",
    projectId: "time-controller-a7631",
    storageBucket: "time-controller-a7631.appspot.com",
    messagingSenderId: "689974140243",
    appId: "1:689974140243:web:a29d1da610ce95ce42d5a6",
    measurementId: "G-M7TCB8MFHP",
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
    // Project Settings => Cloud Messaging => Web Push certificates
    "BBNh7AItKPSl1l4xkwkAi01FLHn-2QyxlPn4ZnSGrXMU1B45XCKHAkd1A4siur37gx-g4TRo32O09fpUUV3SuGs"
);


export { messaging };