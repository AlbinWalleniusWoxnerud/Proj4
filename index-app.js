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

const signOut = document.querySelector('#index-nav-btn-Logout');
const auth = firebase.auth();

signOut.addEventListener('click', () => {
    auth.signOut();
})