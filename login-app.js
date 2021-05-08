// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCupQ2IcqgGlctn-_SBpe9iWnbNV-qWqQ",
  authDomain: "school-prooject4-tennis-match.firebaseapp.com",
  projectId: "school-prooject4-tennis-match",
  storageBucket: "school-prooject4-tennis-match.appspot.com",
  messagingSenderId: "673642074890",
  appId: "1:673642074890:web:9fa9badca1a5fb44b5a0f3",
  measurementId: "G-V4B76GT5RV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const googleSignInBtn = document.querySelector('#signInWithGoogle');
const signInWithEmail = document.querySelector('#signInWithEmail');
const signOutBtn = document.querySelector('#signOut');
const auth = firebase.auth();

googleSignInBtn.addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result)
    })
}
);

signOutBtn.addEventListener('click', () => {
  auth.signOut();
})

auth.onAuthStateChanged(user => {
  if (user) {
    // window.location.replace('/signedInSite.html');
  }
})