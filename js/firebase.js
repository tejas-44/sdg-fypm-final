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
            window.location = "html/home.html";

            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}

function signup() {
    console.log("entered Signup");

    var userEmail = document.getElementById("usernameInputSignup").value;
    var userPass = document.getElementById("passwordInputSignup").value;

    console.log(userEmail);
    console.log(userPass);

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
        .then((userCredential) => {
            // Signed in 
            window.location = "index.html";
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            console.log(errorCode);

            // ..
        });


}