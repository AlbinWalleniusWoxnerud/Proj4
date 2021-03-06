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
const auth = firebase.auth();

//hamburger menu by bulma
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

auth.onAuthStateChanged(user => {
    if (user) {
        window.location.replace('signedInSite.html');
    }
})