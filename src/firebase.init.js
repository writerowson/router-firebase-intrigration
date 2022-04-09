// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6gtsOF1WfHuA2_XbnEGKDBiRAmefnM_4",
    authDomain: "router-firebase-intrigration.firebaseapp.com",
    projectId: "router-firebase-intrigration",
    storageBucket: "router-firebase-intrigration.appspot.com",
    messagingSenderId: "575413527153",
    appId: "1:575413527153:web:10fcd76ac40bd50bd331d0",
    measurementId: "G-V0Q7HJV9NK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app