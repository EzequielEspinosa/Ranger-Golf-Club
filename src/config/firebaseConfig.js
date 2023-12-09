
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyARYx5v--8ioa0_OSyS_6jVzFJ1WIJnAe8",
authDomain: "ranger-golf-club.firebaseapp.com",
projectId: "ranger-golf-club",
storageBucket: "ranger-golf-club.appspot.com",
messagingSenderId: "994340030413",
appId: "1:994340030413:web:e4149174cab7c8a0532684"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);    