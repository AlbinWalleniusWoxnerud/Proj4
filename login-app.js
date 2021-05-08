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

const googleloginBtn = document.querySelector('#login-with-google');
const loginWithEmail = document.querySelector('#login-with-email');
const singUpWithEmail = document.querySelector('#sign-up-with-email');
const emailInput = document.querySelector('#login-singup-input-email');
const passwordInput = document.querySelector('#login-singup-input-password');
const auth = firebase.auth();

googleloginBtn.addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .singInWithPopup(provider)
}
);

loginWithEmail.addEventListener('click', e => {
  const email = emailInput.value;
  const password = passwordInput.value;
  auth.singInW
})

auth.onAuthStateChanged(user => {
  if (user) window.location.replace('signedInSite.html');
});