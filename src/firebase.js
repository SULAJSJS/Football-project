// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDJztSf0EkB7JadYnSxQvAChVFLhKoB9-M',
  authDomain: 'auth-769fd.firebaseapp.com',
  projectId: 'auth-769fd',
  storageBucket: 'auth-769fd.appspot.com',
  messagingSenderId: '502988367282',
  appId: '1:502988367282:web:fbaa78c1f001b383e830ab',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
