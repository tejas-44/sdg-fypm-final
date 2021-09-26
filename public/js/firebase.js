function login() {
    console.log("yo");
    var userEmail = document.getElementById("usernameInput").value;
    var userPass = document.getElementById("passwordInput").value;

    console.log(userEmail);
    console.log(userPass);

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            window.location = "https://firebase.google.com/docs/auth/web/start#web-version-8_1";

            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}