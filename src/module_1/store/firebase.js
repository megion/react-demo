import firebase from "firebase"
import { firebaseConfig } from "../../../firebase.config"

// Initialize Firebase
export function initializeFirebase() {
  firebase.initializeApp(firebaseConfig)
  //firebase.analytics()
}
