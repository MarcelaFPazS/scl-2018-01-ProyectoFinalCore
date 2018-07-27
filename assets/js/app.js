const preload = document.getElementById('preload');
setTimeout(() => {
  preload.style.animation = 'fadeout 1s ease';
  preload.style.display = 'none';
}, 3000);

firebase.initializeApp({
  apiKey: "AIzaSyD9Mljc7zSuxCnR_6L15voA-5_0Olk0SBM",
  authDomain: "proyecto-final-6656c.firebaseapp.com",
  databaseURL: "https://proyecto-final-6656c.firebaseio.com",
  projectId: "proyecto-final-6656c",
  storageBucket: "proyecto-final-6656c.appspot.com",
  messagingSenderId: "701488365879"
});


var db = firebase.firestore();

function guardar()
{
  const titulopublicacion = document.getElementById('titulopublicacion').value;
  document.getElementById('titulopublicacion').value = '';
  const publicacion = document.getElementById('publicacion').value;
  document.getElementById('publicacion').value = '';

  db.collection("registro").add({  
    title: titulopublicacion,
    text: publicacion,
    img: url,
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
};
