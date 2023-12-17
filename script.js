const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdTWxX-HeTGg49AWLuoB91hHlJZ5LSY7g",
    authDomain: "learning-firebase-d4144.firebaseapp.com",
    projectId: "learning-firebase-d4144",
    storageBucket: "learning-firebase-d4144.appspot.com",
    messagingSenderId: "819547180903",
    appId: "1:819547180903:web:f64dc7afb8a14c94cda9c2",
    measurementId: "G-HTC8BYKSFM"
  });
  
  // initialize app
  const auth = firebaseApp.auth();
  const db = firebaseApp.firestore();


  function signupCall(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    })

  };


  function signinCall(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
    .then((res) => {
        alert("SignIn success");
        console.log(res);
    })
    .catch((error) => {
        alert(error);
        console.log(error);
    })

  };


  function createData(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    db.collection("users")
    .add({
        name: name,
        email: email,
        password: password
    })
    .then((res) => {
        console.log(res.id)
    })
    .catch((error) => {
        console.log(error)
    })
  };


  function readData(){
    
    db.collection("users")
    .get()
    .then((res) => {
        console.log(res.docs);
        console.log(res.docs.map((item) => {
            return { ...item.data() , id: item.id}
        }))
    })
    .catch((error) => {
        console.log(error)
    })
  };

  function deleteData(){
    
    db.collection("users")
    .doc("DXPNLNqN2r7UssL0fG55")
    .delete()
    .then((res) => {
        alert("Data deleted")
        console.log(res);
    })
    .catch((error) => {
        console.log(error)
    })
  };

  function updateData(){
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    db.collection("users")
    .doc("fSizB0Fjd5RDwy6w52Mj")
    .update({
        name :  name,
        email: email,
        password: password
    })
    .then((res) => {
        alert("data updated");
        console.log(res);
    })
    .catch((error) => {
        console.log(error)
    })
  };