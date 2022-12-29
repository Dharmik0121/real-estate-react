import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyA-VssgJBxc5fPT34Ys3nOHqNlWhfsG79I",
    authDomain: "realestateproject-aafc1.firebaseapp.com",
    projectId: "realestateproject-aafc1",
    storageBucket: "realestateproject-aafc1.appspot.com",
    messagingSenderId: "152524820412",
    appId: "1:152524820412:web:66e9be3a48415ce688a5b9",
    measurementId: "G-CN5ZGJ4H3W"
};

initializeApp(firebaseConfig);
export const db = getFirestore()