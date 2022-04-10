import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAPOaJZ9QRioypFdkCy-DRrcY1iMNZQyyo",
  authDomain: "ema-john-84e4a.firebaseapp.com",
  projectId: "ema-john-84e4a",
  storageBucket: "ema-john-84e4a.appspot.com",
  messagingSenderId: "1064352160901",
  appId: "1:1064352160901:web:e7fdac289c447dc7041dec"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;