// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: 'boat-lang.firebaseapp.com',
	projectId: 'boat-lang',
	storageBucket: 'boat-lang.appspot.com',
	messagingSenderId: '385636095193',
	appId: '1:385636095193:web:5c5fc9740851192ef05ac8',
	measurementId: 'G-STYMY065PV'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
