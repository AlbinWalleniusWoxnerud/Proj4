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
const displayName = document.querySelector('#signedIn-display-name');
const auth = firebase.auth();

//Check if logged in, if not redirect
auth.onAuthStateChanged(user => {
    if (user) {
        displayName.innerText = `Welcome ${user.displayName}`;
    }
    else {
        window.location.replace('index.html');
    }
})

const logOutBtn = document.querySelector('#index-nav-btn-Logout');

logOutBtn.addEventListener('click', () => {
    auth.signOut();
})