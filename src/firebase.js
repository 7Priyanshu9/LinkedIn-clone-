import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyButfdns-upEn-85bQlhR2sdxQ1IJQqT5g",
    authDomain: "linkedin-clone-de41d.firebaseapp.com",
    projectId: "linkedin-clone-de41d",
    storageBucket: "linkedin-clone-de41d.appspot.com",
    messagingSenderId: "53936832205",
    appId: "1:53936832205:web:6c8f46be3fd3f7a8313384",
    measurementId: "G-B4S00Z90FB"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage  = firebase.storage();
  export{auth,provider,storage};
  export default db;