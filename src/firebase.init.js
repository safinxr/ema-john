import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAkulAdOhYt60ybWF-CVxmjKWNFwlQLJqE",
  authDomain: "ema-john-4c53c.firebaseapp.com",
  projectId: "ema-john-4c53c",
  storageBucket: "ema-john-4c53c.appspot.com",
  messagingSenderId: "382407957235",
  appId: "1:382407957235:web:cef66e67df13f1e1237586"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;