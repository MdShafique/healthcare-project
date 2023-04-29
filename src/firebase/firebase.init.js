import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initailaizeAuthentication = () => {
     initializeApp(firebaseConfig);
} 

export default initailaizeAuthentication;