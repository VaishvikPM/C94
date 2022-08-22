const firebaseConfig = {
    apiKey: "AIzaSyDou6z8Y5toimTtmMRfRZ3QWIAF5eD7C5o",
    authDomain: "meeterthegodahah.firebaseapp.com",
    databaseURL: "https://meeterthegodahah-default-rtdb.firebaseio.com",
    projectId: "meeterthegodahah",
    storageBucket: "meeterthegodahah.appspot.com",
    messagingSenderId: "290230722796",
    appId: "1:290230722796:web:087fb9b117dd380a5a85c9"
  };
 
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}