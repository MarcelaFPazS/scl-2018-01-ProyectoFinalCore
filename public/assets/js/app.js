firebase.initializeApp({
  apiKey: "AIzaSyD9Mljc7zSuxCnR_6L15voA-5_0Olk0SBM",
  authDomain: "proyecto-final-6656c.firebaseapp.com",
  databaseURL: "https://proyecto-final-6656c.firebaseio.com",
  projectId: "proyecto-final-6656c",
  storageBucket: "proyecto-final-6656c.appspot.com",
  messagingSenderId: "701488365879"
});

var db = firebase.firestore();

function enviar(){
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
  const check = document.getElementById('iinvalidCheck').value;
  document.getElementById('invalidCheck').value = '';

  db.collection("publicacion").add({
    name: nombreVisita,
    lastName: apellidoVisita,
    email: emailVisita,
    rut: rutVisita,
    patente: patenteVisita,
    motivo: motivoVisita,
    espacio: espacioVisita,
  })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
};

//leer documentos
let table = document.getElementById('tablaRegistro');
db.collection("publicacion").onSnapshot((querySnapshot) => {
  table.innerHTML = '';
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().name}`);
    table.innerHTML += `
        <tr>
          <td>${doc.data().name}</td>
          <td>${doc.data().lastName}</td>
          <td>${doc.data().email}</td>
          <td>${doc.data().rut}</td>
          <td>${doc.data().patente}</td>
          <td>${doc.data().motivo}</td>
          <td>${doc.data().espacio}</td>
        </tr>
      `
  });
});



const preload = document.getElementById('preload');
setTimeout(() => {
  preload.style.animation = 'fadeout 1s ease';
  preload.style.display = 'none';
}, 3000);

