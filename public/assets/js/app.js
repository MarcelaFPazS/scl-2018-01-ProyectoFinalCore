const preload = document.getElementById('preload');
setTimeout(() => {
  preload.style.animation = 'fadeout 1s ease';
  preload.style.display = 'none';
}, 3000);

// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
  apiKey: "AIzaSyD9Mljc7zSuxCnR_6L15voA-5_0Olk0SBM",
  authDomain: "proyecto-final-6656c.firebaseapp.com",
  databaseURL: "https://proyecto-final-6656c.firebaseio.com",
  projectId: "proyecto-final-6656c",
  storageBucket: "proyecto-final-6656c.appspot.com",
  messagingSenderId: "701488365879"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

function writeUserData(userId, name, email, imageUrl) {
  const nombreVisita = document.getElementById('validationCustom01').value;
  firebase.database().ref('users/' + userId).set({
    username: nombreVisita,
    email: email,
    profile_picture : imageUrl
  });
}

/*
firebase.initializeApp({
  apiKey: "AIzaSyD9Mljc7zSuxCnR_6L15voA-5_0Olk0SBM",
  authDomain: "proyecto-final-6656c.firebaseapp.com",
  databaseURL: "https://proyecto-final-6656c.firebaseio.com",
  projectId: "proyecto-final-6656c",
  storageBucket: "proyecto-final-6656c.appspot.com",
  messagingSenderId: "701488365879"
});

var db = firebase.firestore();

function guardar(){
  const nombreVisita = document.getElementById('validationCustom01').value;
  document.getElementById('validationCustom01').value = '';
  const apellidoVisita = document.getElementById('validationCustom02').value;
  document.getElementById('validationCustom02').value = '';
  const emailVisita = document.getElementById('validationCustomUsername').value;
  document.getElementById('validationCustomUsername').value = '';
  const rutVisita = document.getElementById('validationCustom03').value;
  document.getElementById('validationCustom03').value = '';
  const patenteVisita = document.getElementById('validationCustom04').value;
  document.getElementById('validationCustom04').value = '';
  const motivoVisita = document.getElementById('inlineFormCustomSelectPref').value;
  document.getElementById('inlineFormCustomSelectPref').value = '';
  const espacioVisita = document.getElementById('inlineFormCustomSelectPref2').value;
  document.getElementById('inlineFormCustomSelectPref2').value = '';

  db.collection("registro").add({  
    name: nombreVisita,
    lastName: apellidoVisita,
    email: emailVisita,
    rut: rutVisita,
    patente: patenteVisita,
    motivo: motivoVisita,
    espacio: espacioVisita,
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
};
*/
