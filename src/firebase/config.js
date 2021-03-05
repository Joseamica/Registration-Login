import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy8sNhegyJzjznHJx0IjCxsOf4Jx_1Rsw",
  authDomain: "qoomitapp.firebaseapp.com",
  projectId: "qoomitapp",
  storageBucket: "qoomitapp.appspot.com",
  messagingSenderId: "931746515238",
  appId: "1:931746515238:web:959f97a4c22768441a99e7",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
