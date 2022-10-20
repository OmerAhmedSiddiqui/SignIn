// Import the functions you need from the SDKs you need
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { doc, setDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";
import { db, storage, auth } from "./lib.js";

//                                                        SignUp



let signup = document.querySelector("#signup");
signup.addEventListener("click", createUSer);

async function createUSer() {

  let email = document.querySelector("#email");
  let password = document.querySelector("#pass");
  let repeatPasssword = document.querySelector("#re_pass");

  let name = document.querySelector("#name");



  //                          creating user 

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      if (password.value === repeatPasssword.value) {
        swal("Great!", "Your Account Is Created! verify Your Email To Continue", "success")
        sendEmailVerification(auth.currentUser)
          .then(() => {
            // Email verification sent!
            console.log("Email Verification Sent")
            location = "profile.html"
            // ...
          });
      }
      else {
        swal("Error!", "Repeat Password Does Not Match Password", "error")

      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      swal("Error!", errorMessage, "error")

      // ..
    });



  //                               database

  var userDocRef = doc(db, "users", auth.currentUser.uid);
  await setDoc(userDocRef, {
    name: name.value,
    Email: email.value
    Password: password.value,
    UserCreatedDate: Timestamp.fromDate(new Date()),
    uid: auth.currentUser.uid
  })
}
// var url;

//                                 //    storgae

// let fileUpload = document.querySelector("#profile-pic");
// fileUpload.addEventListener("change", uploadpic)
// let profileImg = document.querySelector("#profile-img");

// async function uploadpic() {

//   let file = fileUpload.files[0];
//   let imageRef = ref(storage, `images/${file.name}`);
//   let uploaded = await uploadBytes(imageRef, file);
//   url = await getDownloadURL(imageRef);
//   profileImg.src = url
// }



//                                         signIn

let signin = document.querySelector("#signin");
signin.addEventListener("click", signinFunc);

async function signinFunc() {

  let email = document.querySelector("#your_email");
  let password = document.querySelector("#your_pass");
  let name = document.querySelector("#name");


  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      location = "profile.html"

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      swal("Error!", errorMessage, "error")

    });

}