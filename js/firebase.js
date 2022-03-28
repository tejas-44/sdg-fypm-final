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
var db = firebase.firestore();

db.collection("mentor").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const mentorname = document.querySelector("#mentorname");
        mentorname.innerHTML += doc.data().name;

        console.log(doc.id, " => ", doc.data());
    });
});



db.collection("student").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const student = document.querySelector("#studentdiv");
        student.innerHTML += "<h3 class='member'>" + doc.data().name + "</h3>";

        console.log(doc.id, " => ", doc.data());
    });
});

db.collection("sub").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const viewMentorName = document.querySelector("#viewsubmentorname");
        viewMentorName.innerHTML += doc.data().guidename;

        console.log(doc.id, " => ", doc.data());
    });
});
db.collection("sub").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const abstractData = document.querySelector("#viewabstract");
        abstractData.innerHTML += doc.data().abstractData;
        console.log(doc.id, " => ", doc.data());
    });
});
db.collection("sub").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const viewprojname = document.querySelector("#viewprojname");
        viewprojname.innerHTML += doc.data().projectname;

        console.log(doc.id, " => ", doc.data());
    });
});

function submit() {
    var projName = document.getElementById("subprojname").value;
    var guideName = document.getElementById("subguidename").value;
    var abstract = document.getElementById("subabstract").value;

    db.collection("sub").doc(projName).set({
        projectname: projName,
        guidename: guideName,
        abstractData: abstract
    })
        .then(() => {
            console.log("Document successfully written!");
            window.location.href = "viewsub.html"
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}