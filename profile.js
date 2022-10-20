import { db, storage, auth } from "./lib.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";
import { collection, query, where } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";


//                                 //    storgae

var url;
let fileUpload = document.querySelector("#file-uploader");
let profileImg = document.querySelector("#profile-img");
let uploadImg = document.querySelector("#upload-img");
uploadImg.addEventListener("click", uploadpic)




async function uploadpic() {

  let file = fileUpload.files[0];
  let imageRef = ref(storage, `images/${auth.currentUser.uid}/${file.name}`);
  let uploaded = await uploadBytes(imageRef, file);
  url = await getDownloadURL(imageRef);
  profileImg.src = url
}

// let ulEl = document.querySelector("#ulEl");

console.log(fetchTodos());

async function fetchTodos() {

    let collectionRef = collection(db, "users");
    let condition = where("uid", "==", auth.currentUser.uid);
    const q = query(collectionRef, condition);

    let allTodosSnapshot = await getDocs(q);

    allTodosSnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        // ulEl.innerHTML = ulEl.innerHTML + `<li id=${doc.id}>${doc.data().todo}</li>`

    });


}
fetchTodos()
// fetchingRealTime()


// async function fetchingRealTime() {
//     let collectionRef = collection(db, "todos")
//     const q = query(collectionRef, where("todos", "==", "omer"));

//     const unfold = onSnapshot(q, (snapshot) => { 
//         snapshot.docChanges().forEach((change) => {
//             if (change.type === "added") {
//                 console.log("New todo: ", change.doc.data());
//                 ulEl.innerHTML = ulEl.innerHTML + `<li id=${change.doc.id}>${doc.data().todo}</li>`

//             }
//             if (change.type === "modified") {
//                 console.log("Modified todo: ", change.doc.data());
//             }
//             if (change.type === "removed") {
//                 console.log("Removed todo: ", change.doc.data());
//             }
//         });
//     });

//     // unfold()
// }